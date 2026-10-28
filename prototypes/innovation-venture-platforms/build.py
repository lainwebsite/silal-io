"""Build the Innovation & Venture Platforms pages (sitemap v2, category 3).

Primary category page + 4 sub pages + the enquiry form, from one source (page.html).
Shell (CSS, header, footer) is taken from the latest homepage, public/new-homepage-v2/index.html,
so the navbar and footer stay identical to it. Writes:
  out/index.html                                  artifact: one file, pages switched by hash (#incubation …)
  ../../public/innovation-venture-platforms/*.html site: one real HTML file per page (rewrites in next.config.ts)
Run: python3 build.py
"""
import re, pathlib

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
HOME = (ROOT / "public/new-homepage-v2/index.html").read_text(encoding="utf8")
SITE_DIR = ROOT / "public/innovation-venture-platforms"

# route -> (site URL, site file)
PAGES = {
    "overview": ("/Innovation-Venture-Platforms", "index.html"),
    "farm-innovation-fund": ("/Innovation-Venture-Platforms/Farm-Innovation-Fund", "farm-innovation-fund.html"),
    "incubation": ("/Innovation-Venture-Platforms/Incubation", "incubation.html"),
    "accelerator": ("/Innovation-Venture-Platforms/Accelerator", "accelerator.html"),
    "agricultural-challenges": ("/Innovation-Venture-Platforms/Agricultural-Challenges", "agricultural-challenges.html"),
    "enquire": ("/Innovation-Venture-Platforms/Enquire", "enquire.html"),
}

css = re.search(r"<style>(.*?)</style>", HOME, re.S).group(1)
header = HOME[HOME.index('<header class="s_header"'):HOME.index("</header>") + len("</header>")]
footer = HOME[HOME.index('<footer class="s_footer">'):HOME.index("</footer>") + len("</footer>")]

# this category is the active main-menu item; its menu entries open its pages
header = header.replace('data-active="true"', 'data-active="false"').replace('data-overlay="true"', 'data-overlay="false"')
header = header.replace('<a href="#" data-active="false">Innovation &amp; Venture Platforms</a>',
                        '<a href="#overview" data-active="true" aria-current="page">Innovation &amp; Venture Platforms</a>')
header = header.replace('<a href="#" class="s_textLink">Innovation &amp; Venture Platforms', '<a href="#overview" class="s_textLink">Innovation &amp; Venture Platforms')
for name, route in [("Farm Innovation Fund", "farm-innovation-fund"), ("Incubation", "incubation"), ("Accelerator", "accelerator"), ("Agricultural Challenges", "agricultural-challenges")]:
    header = header.replace(f'<a href="#">{name}</a>', f'<a href="#{route}">{name}</a>')
header = re.sub(r'(<summary><span class="s_mobileNum">03</span>Innovation &amp; Venture Platforms</summary><ul><li>)<a href="#">Overview</a>', r'\1<a href="#overview">Overview</a>', header)
header = header.replace('<a href="#" class="s_btn s_btnPrimary s_btnSm">Enquire', '<a href="#enquire" class="s_btn s_btnPrimary s_btnSm">Enquire')
header = header.replace('<a href="#" class="s_btn s_btnPrimary">Enquire', '<a href="#enquire" class="s_btn s_btnPrimary">Enquire')
footer = footer.replace('<a href="#"><span data-reveal>Enquire</span></a>', '<a href="#enquire"><span data-reveal>Enquire</span></a>')
footer = footer.replace('<a href="#"><span data-reveal>Innovation &amp; Venture Platforms</span></a>', '<a href="#overview"><span data-reveal>Innovation &amp; Venture Platforms</span></a>')

src = (HERE / "page.html").read_text(encoding="utf8")

def render(img, brand):
    out = src.replace("{{SHELL_CSS}}", css.replace("/new-homepage-v2/brand/", brand))
    out = out.replace("{{HEADER}}", header.replace("/new-homepage-v2/brand/", brand))
    out = out.replace("{{FOOTER}}", footer.replace("/new-homepage-v2/brand/", brand))
    return out.replace("{{IMG}}", img).replace("{{BRAND}}", brand)

# ---- artifact: everything in one file
(HERE / "out").mkdir(exist_ok=True)
(HERE / "out/index.html").write_text(render("img/", "brand/"), encoding="utf8")

# ---- site: one file per page
base = render("/innovation-venture-platforms/img/", "/innovation-venture-platforms/brand/")
title_tag = re.search(r"<title>.*?</title>", base).group(0)
base = base.replace(title_tag, "", 1).replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "", 1)
m0 = base.index("<main><div class=\"c_page\">") + len("<main><div class=\"c_page\">")
m1 = base.index("</div></main>")
chunks = [c for c in re.split(r"(?=<!-- =+ )", base[m0:m1]) if "data-view=" in c]
TITLES = {"overview": "Innovation &amp; Venture Platforms", "farm-innovation-fund": "Farm Innovation Fund", "incubation": "Incubation",
          "accelerator": "Accelerator · Unbreakable Harvest", "agricultural-challenges": "Agricultural Challenges", "enquire": "Enquire · Innovation &amp; Venture Platforms"}

def site_links(html):
    # buttons that preselect a platform: /…/Enquire?platform=fif
    html = re.sub(r'href="#enquire"([^>]*?)data-platform="(\w+)"', lambda m: f'href="{PAGES["enquire"][0]}?platform={m.group(2)}"{m.group(1)}data-platform="{m.group(2)}"', html)
    for route, (url, _) in PAGES.items():
        html = html.replace(f'href="#{route}"', f'href="{url}"')
    return html

SITE_DIR.mkdir(parents=True, exist_ok=True)
for route, (url, fname) in PAGES.items():
    chunk = next(c for c in chunks if f'data-view="{route}"' in c).replace(f'data-view="{route}" hidden', f'data-view="{route}"')
    page = base[:m0] + "\n" + chunk + base[m1:]
    page = site_links(page)
    doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>{TITLES[route]} · Innovation Oasis</title>
<link rel="icon" href="/brand/io-mark.svg" type="image/svg+xml">
</head>
<body>
{page}
</body>
</html>
"""
    (SITE_DIR / fname).write_text(doc, encoding="utf8")
    print("site", fname, len(doc))
print("artifact", len((HERE / "out/index.html").read_text()))
