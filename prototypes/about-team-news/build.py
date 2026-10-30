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
URL = {"home": "index.html", "about": "about.html", "team": "team.html", "news": "news.html"}
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
    # client comment 2026-10-30: no numbers in section labels on any page (02 Our People, 03 Media enquiries, PR, +)
    out = re.sub(r'<span class="(c_eyebrowNum|s3_labelN|n2_rowNum)">[^<]*</span>', "", out)
    # every root-relative asset becomes relative to the page; remember it to copy
    for m in re.findall(r'(?:src|href)="/((?:photos|V1|V3|brand|new-homepage-v2)/[^"]+)"', out):
        used.add(html.unescape(m))
    out = re.sub(r'((?:src|href)=")/((?:photos|V1|V3|brand|new-homepage-v2/img)/)', r"\1\2", out)
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

# ---------------------------------------------------------------- About: Our Story, Our Mission, Principles, Our Journey (V1 About-D)
# Journey (moved here from the homepage, comments 2026-10-30): the homepage's own journey (milestone tag + counter,
# odometer year, one photo per milestone, step list) laid out left to right as in the client's frame; each milestone
# and its dot is clickable so a reader can jump along the timeline.
i0 = HOME.index('<section class="j_journey'); journey = HOME[i0:HOME.index("</section>", i0) + len("</section>")]
journey = re.sub(r'<span id="jHead">.*?</span></span></p>', "</p>", journey, count=1, flags=re.S)
journey = journey.replace('<span id="jTag">Milestone</span></p>', '<span id="jTag">Milestone</span><span id="jCount">01 / 08</span></p>', 1)
journey = journey.replace('<li class="j_jourStep" data-step', '<li class="j_jourStep" tabindex="0" role="button" data-step')
journey = journey.replace(' c_curtainStick" id="journey"', '" id="journey"', 1)
# visible controls to jump along the timeline (comment 2026-10-30): one button per milestone + previous / next
years = re.findall(r'<p class="j_jourWhen">(.*?)</p>', journey)
arrow = lambda d, path: (f'<button type="button" class="x_jArrow" data-dir="{d}" aria-label="{"Previous" if d < 0 else "Next"} milestone">'
                         f'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="{path}" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>')
jnav = ('<span class="x_jNav" role="group" aria-label="Jump to a milestone"><span class="x_jYears">'
        + "".join(f'<button type="button" class="x_jYear">{y}</button>' for y in years) + "</span>"
        + arrow(-1, "M12 8H4M7.5 4.5L4 8l3.5 3.5") + arrow(1, "M4 8h8M8.5 4.5L12 8l-3.5 3.5") + "</span>")
journey = re.sub(r'(<p class="j_head">.*?</span>)(</p>)', lambda m: m.group(1) + jnav + m.group(2), journey, count=1, flags=re.S)
about = "".join(no_num(part(f"v1-{n}.html")) for n in ("story", "mission"))
# Principles: no underline below its label (comment 2026-10-30) = the homepage's own Principles variant, c_noRule
about += no_num(part("v1-principles.html")).replace('<div class="c_headRow">', '<div class="c_headRow c_noRule">', 1)
about += f'<div class="x_jour" id="xJour" data-on="false">{journey}</div>'
page(URL["about"], "About IO · Innovation Oasis", f'<div class="c_page x_about">{about}</div>')

# ---------------------------------------------------------------- Team: Our People (V1 About-D) + media band (V3)
people = part("v1-people.html").replace("Dr. Mohammed joined Silal", "Dr. Shamal joined Silal")  # PDF + comment 2026-10-30
m =re.search(r'<div class="c_teamHead">(.*?)</div>\s*<ul class="c_team"', people, re.S)
head = m.group(1)
title = re.search(r"<h3[^>]*>.*?</h3>", head, re.S).group(0)
intro = re.search(r'<p class="c_lead"[^>]*>(.*?)</p>', head, re.S).group(1)
label = re.search(r'<span class="c_mini">.*?</span>', head, re.S).group(0)
text = re.search(r'<p class="c_body">(.*?)</p>', head, re.S).group(1)
# client comment: the "Team members" text was odd as a label + two columns; keep one brief subtitle under "Our Team"
new_head = f'{title}<p class="c_lead x_teamSub" data-reveal>{intro.rstrip(".")}.</p>'
people = people[:m.start(1)] + new_head + people[m.end(1):]

# ---- every person gets a profile page (client comment), cross-linked from the team grid, the leadership block and each other
slugify = lambda name: re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
CEO = "Dr. Shamal Mohammed"
leader_text = re.search(r'<div class="c_leaderText">.*?<p class="c_body"[^>]*>(.*?)</p>', people, re.S).group(1)
leader_src = re.search(r'<div class="c_leaderImg">.*?src="([^"]+)"', people, re.S).group(1)
members = [{"name": CEO, "src": leader_src, "role": "Chief Executive Officer"}]
members += [{"name": n, "src": s, "role": None} for s, n in re.findall(r'<li><span class="c_teamImg"><img[^>]*src="([^"]+)"[^>]*/></span><span class="c_teamName">([^<]+)</span></li>', people)]
for p in members:
    p["slug"] = slugify(p["name"])
people = re.sub(r'<li><span class="c_teamImg">(.*?)</span><span class="c_teamName">([^<]+)</span></li>',
                lambda m: f'<li><a class="x_teamLink" href="team-{slugify(m.group(2))}.html"><span class="c_teamImg">{m.group(1)}</span><span class="c_teamName">{m.group(2)}</span></a></li>', people)
people = people.replace("</blockquote>", f'</blockquote><a class="x_bioLink" href="team-{slugify(CEO)}.html">Read Dr. Shamal&rsquo;s profile <span aria-hidden="true">&rarr;</span></a>', 1)
page(URL["team"], "Team &amp; CEO Message · Innovation Oasis", f'<div class="c_page x_team">{people}</div>{v3wrap(media)}', v3css)

# the profile uses the press-release template (V3 detail): label, breadcrumb, title + lead, facts card in the aside,
# text column with the About box, previous / next, then three more people as related cards
d0 = json.loads((PARTS / "detail" / f"{DATA['slugs'][0]}.html").read_text(encoding="utf8"))["html"]
boiler = re.search(r'<div class="n3_boiler">.*?</div>', d0, re.S).group(0)
share = re.search(r'<p class="n3_shareLabel">.*?</ul>', d0, re.S).group(0)
go_svg = re.search(r'<span aria-hidden="true" class="s3_goO">.*?</span>', d0, re.S).group(0)
for i, p in enumerate(members):
    first = p["name"].replace("Dr. ", "Dr ").split(" ")[0] if p["name"] != CEO else "Dr. Shamal"
    url = f'https://silal-io.vercel.app/team/{p["slug"]}'
    sh = re.sub(r'https%3A%2F%2Fsilal-io\.vercel\.app%2F[^"&]*', urllib.parse.quote(url, safe=""), share)
    sh = re.sub(r'(subject=|text=)[^"&]*', lambda m: m.group(1) + urllib.parse.quote(p["name"] + " · Innovation Oasis"), sh)
    if p["name"] == CEO:
        text = (f'<p>{leader_text.replace(" — described above — ", " ")}</p><p class="n3_bioQuote">&ldquo;If it works here, it can work anywhere.&rdquo;</p>')
        note = "Profile text from the About page. Full bio to be supplied by Innovation Oasis."
    else:
        text = f'<p>{first} is part of the small, hands-on team behind every laboratory, trial and partnership at Innovation Oasis.</p>'
        note = "Sample profile shown for layout. Role and bio to be supplied by Innovation Oasis."
    role = p["role"] or "Role to be confirmed"
    prev_, next_ = members[i - 1], members[(i + 1) % len(members)]
    others = [members[(i + k) % len(members)] for k in (1, 2, 3)]
    cards = "".join(f'<li><a class="n3_card" href="team-{o["slug"]}.html"><div class="n3_cardImg"><img alt="{html.escape(o["name"])}" decoding="async" loading="lazy" src="{o["src"]}" '
                    'style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:cover;object-position:50% 50%"/>'
                    f'<span class="n3_cardTag">Our People</span></div><p class="n3_cardDate">{o["role"] or "Innovation Oasis"}</p><h3 class="n3_cardTitle">{o["name"]}</h3></a></li>' for o in others)
    body = (f'<article class="x_bio"><header class="n3_head"><div class="n3_wrap"><p class="s3_label"><span class="s3_labelN">02</span><span>Our People</span><i aria-hidden="true" class="s3_labelRule"></i></p>'
            f'<nav aria-label="Breadcrumb" class="n3_crumbs"><a href="{URL["about"]}">About IO</a><span aria-hidden="true">/</span><a href="{URL["team"]}">Team</a><span aria-hidden="true">/</span><span aria-current="page">{p["name"]}</span></nav>'
            f'<h1 class="n3_articleTitle" data-reveal>{p["name"]}</h1><p class="n3_articleLead">{role}, Innovation Oasis</p></div></header>'
            f'<div class="n3_wrap"><div class="n3_articleGrid"><aside class="n3_aside"><div class="x_bioImg"><img alt="{html.escape(p["name"])}" src="{p["src"]}"/></div>'
            f'<dl class="n3_metaCard"><div><dt>Role</dt><dd>{role}</dd></div><div><dt>Team</dt><dd>Innovation Oasis</dd></div><div><dt>Location</dt><dd>Al Ain, UAE</dd></div></dl>{sh}</aside>'
            f'<div class="n3_article">{text}{boiler}<p class="n3_note">{note}</p></div></div>'
            f'<nav aria-label="More people" class="n3_pager"><a class="n3_pagerLink" href="team-{prev_["slug"]}.html"><small>Previous</small>{prev_["name"]}</a>'
            f'<a class="n3_pagerLink n3_pagerNext" href="team-{next_["slug"]}.html"><small>Next</small>{next_["name"]}</a></nav></div></article>'
            f'<section aria-labelledby="rel-h" class="n3_sec"><div class="n3_wrap"><p class="s3_label"><span class="s3_labelN">+</span><span>Our People</span><i aria-hidden="true" class="s3_labelRule"></i></p>'
            f'<div class="n3_relHead"><h2 class="n3_h2" data-reveal id="rel-h">More of the team</h2><a class="s3_go" href="{URL["team"]}"><span class="s3_goText">The whole team</span>{go_svg}</a></div>'
            f'<ul class="n3_grid">{cards}</ul></div></section>')
    page(f'team-{p["slug"]}.html', f'{html.escape(p["name"])} · Our People · Innovation Oasis', v3wrap(body + media), v3css)

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
    # client comment: the "Media enquiries" strip inside the article repeated the band at the end of the page
    art = re.sub(r'<div class="n3_enquiry">.*?</a></div>', "", d["html"], count=1, flags=re.S)
    page(detail_url(slug), f'{html.escape(d["title"])} · Innovation Oasis', v3wrap(v3_links(art) + media), v3css)

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
