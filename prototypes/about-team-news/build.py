"""Build the About, Team, News and News Detail pages (client PDFs, 2026-10-30).

Shell (CSS, header, footer) comes from the latest homepage, public/new-homepage-v2/index.html, exactly as the
Innovation & Venture pages do; the sections come from parts/ (capture.py: V1 About-D, V2 archive, V3 media band
and press releases). Writes out/: about.html, team.html, news.html, news-<slug>.html and the images they use.
Run: python3 build.py
"""
import html, json, pathlib, re, shutil, urllib.parse

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
PARTS = HERE / "parts"
OUT = HERE / "out"
HOME = (ROOT / "public/new-homepage-v2/index.html").read_text(encoding="utf8")
DATA = json.loads((PARTS / "data.json").read_text(encoding="utf8"))
part = lambda name: (PARTS / name).read_text(encoding="utf8")

# page -> file (artifact: every page is a file next to the others)
URL = {"home": "new-homepage.html", "about": "about.html", "team": "team.html", "news": "news.html"}
detail_url = lambda slug: f"news-{slug}.html"

# ---------------------------------------------------------------- shell
i = HOME.index("<style>\n:root")
css = HOME[i + 7:HOME.index("</style>", i)]
header = HOME[HOME.index('<header class="s_header"'):HOME.index("</header>") + len("</header>")]
footer = HOME[HOME.index('<footer class="s_footer">'):HOME.index("</footer>") + len("</footer>")]
header = header.replace('data-overlay="true"', 'data-overlay="false"')
header = header.replace('<a href="#" class="s_logo"', f'<a href="{URL["home"]}" class="s_logo"')
header = header.replace('<a href="#" data-active="true">About IO</a>', f'<a href="{URL["about"]}" data-active="true">About IO</a>')
header = header.replace('<a href="#" class="s_textLink">About IO', f'<a href="{URL["about"]}" class="s_textLink">About IO')
header = header.replace('<li><a href="#">Our Story</a></li>', f'<li><a href="{URL["about"]}">Our Story</a></li>')
header = header.replace('<li><a href="#">Team &amp; CEO Message</a></li>', f'<li><a href="{URL["team"]}">Team &amp; CEO Message</a></li>')
header = header.replace('<li><a href="#">Overview</a></li><li><a href="{0}">Our Story</a></li>'.format(URL["about"]),
                        '<li><a href="{0}">Overview</a></li><li><a href="{0}">Our Story</a></li>'.format(URL["about"]), 1)
header = header.replace('<a href="#">Resources</a>', f'<a href="{URL["news"]}">Resources</a>')
footer = footer.replace('<a href="#"><span data-reveal>About IO</span></a>', f'<a href="{URL["about"]}"><span data-reveal>About IO</span></a>')
footer = footer.replace('<a href="#"><span data-reveal>Content Library</span></a>', f'<a href="{URL["news"]}"><span data-reveal>Content Library</span></a>')

TEMPLATE = (HERE / "page.html").read_text(encoding="utf8")
used = set()


def page(fname, title, body, page_css=""):
    out = TEMPLATE.replace("{{TITLE}}", title).replace("{{SHELL_CSS}}", css).replace("{{PAGE_CSS}}", page_css)
    out = out.replace("{{HEADER}}", header).replace("{{FOOTER}}", footer).replace("{{BODY}}", body)
    out = out.replace("/new-homepage-v2/brand/", "brand/")
    # every root-relative asset becomes relative to the page; remember it to copy
    for m in re.findall(r'(?:src|href)="/((?:photos|V1|V3|brand)/[^"]+)"', out):
        used.add(html.unescape(m))
    out = re.sub(r'((?:src|href)=")/((?:photos|V1|V3|brand)/)', r"\1\2", out)
    (OUT / fname).write_text(out, encoding="utf8")
    print(fname, len(out))


def no_num(s):
    """About: section labels without numbers (PDF)."""
    return re.sub(r'<span class="c_eyebrowNum">\d+</span>', "", s)


def v3_links(s):
    s = re.sub(r'href="/V3/resources/news/([a-z0-9-]+)"', lambda m: f'href="{detail_url(m.group(1))}"', s)
    s = re.sub(r'href="/V3/resources/news(room)?"', f'href="{URL["news"]}"', s)
    s = re.sub(r'href="/V3"', f'href="{URL["home"]}"', s)
    return re.sub(r'href="/V3/[^"]*"', 'href="#"', s)


OUT.mkdir(exist_ok=True)
v2wrap = lambda inner: f'<div class="{" ".join(c for c in DATA["root2"] if c.startswith("c2_"))} {" ".join(DATA["page2"])}">{inner}</div>'
v3wrap = lambda inner: f'<div class="{" ".join(c for c in DATA["root3"] if c.startswith("s3_"))} {" ".join(DATA["page3"])}">{inner}</div>'
media = v3_links(part("v3-media.html"))
v2css, v3css = part("v2.css"), part("v3.css")

# ---------------------------------------------------------------- About: Our Story, Our Mission, Principles (V1 About-D)
about = "".join(no_num(part(f"v1-{n}.html")) for n in ("story", "mission", "principles"))
page(URL["about"], "About IO · Innovation Oasis", f'<div class="c_page x_about">{about}</div>')

# ---------------------------------------------------------------- Team: Our People (V1 About-D) + media band (V3)
people = part("v1-people.html")
m = re.search(r'<div class="c_teamHead">(.*?)</div>\s*<ul class="c_team"', people, re.S)
head = m.group(1)
title = re.search(r"<h3[^>]*>.*?</h3>", head, re.S).group(0)
intro = re.search(r'<p class="c_lead"[^>]*>(.*?)</p>', head, re.S).group(1)
label = re.search(r'<span class="c_mini">.*?</span>', head, re.S).group(0)
text = re.search(r'<p class="c_body">(.*?)</p>', head, re.S).group(1)
new_head = f'{title}<div class="x_teamCols" data-stagger>{label}<p class="c_body">{text}</p><p class="c_body">{intro}</p></div>'
people = people[:m.start(1)] + new_head + people[m.end(1):]
page(URL["team"], "Team &amp; CEO Message · Innovation Oasis", f'<div class="c_page x_team">{people}</div>{v3wrap(media)}', v3css)

# ---------------------------------------------------------------- News: the archive (V2) with all its releases + media band
MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split()
fmt = lambda iso: f"{iso[8:10]} {MONTHS[int(iso[5:7]) - 1]} {iso[:4]}"
items = sorted(DATA["v2"], key=lambda r: r["date"], reverse=True)
cards = []
for n, r in enumerate(items, 1):
    words = html.escape(f'{r["title"]} {r["excerpt"]}'.lower())
    cards.append(
        f'<li class="n2_card" data-cat="{r["category"]}" data-year="{r["date"][:4]}" data-text="{words}">'
        f'<a class="n2_cardLink" href="{detail_url(r["slug"])}"><div class="n2_cardImg"><img alt="{html.escape(r.get("alt", ""))}" decoding="async" loading="lazy" src="{r["src"]}" '
        'style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:cover"/><span aria-hidden="true" class="n2_corners"></span></div>'
        f'<p class="n2_meta"><span>{n:02d}</span><time datetime="{r["date"]}">{fmt(r["date"])}</time><span class="n2_metaCat">{r["category"]}</span></p>'
        f'<h3 class="n2_cardTitle">{r["title"]}</h3><p class="n2_cardExcerpt">{r["excerpt"]}</p><span class="n2_more">Read more</span></a></li>')
arc = part("v2-archive.html")
arc = re.sub(r'<ul class="n2_grid">.*?</ul>', '<ul class="n2_grid">' + "".join(cards) + "</ul>"
             '<div class="n2_empty" hidden><p>No releases match these filters.</p><button type="button" class="n2_reset">Clear filters</button></div>', arc, flags=re.S)
arc = re.sub(r'<button aria-pressed="(\w+)" class="n2_chip" type="button">([^<]+)<sup>', r'<button aria-pressed="\1" class="n2_chip" type="button" data-cat="\2">\2<sup>', arc)
arc = arc.replace('<div><div class="n2_filters">', '<div data-archive><div class="n2_filters">', 1)
page(URL["news"], "Press Releases · News &amp; Media · Innovation Oasis", f'<div class="x_news">{v2wrap(arc)}</div>{v3wrap(media)}', v2css + v3css)

# ---------------------------------------------------------------- News detail: the V3 press release, every release
for slug in DATA["slugs"]:
    d = json.loads((PARTS / "detail" / f"{slug}.html").read_text(encoding="utf8"))
    page(detail_url(slug), f'{html.escape(d["title"])} · Innovation Oasis', v3wrap(v3_links(d["html"]) + media), v3css)

# ---------------------------------------------------------------- images
n = 0
for rel in sorted(used):
    src = ROOT / "public" / urllib.parse.unquote(rel)
    if src.is_file():
        dst = OUT / urllib.parse.unquote(rel)
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dst)
        n += 1
    else:
        print("missing", rel)
print("assets", n)
