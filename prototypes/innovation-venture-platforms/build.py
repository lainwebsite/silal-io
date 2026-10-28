"""Build the Innovation & Venture Platforms page.

Shell (CSS, header, footer) is taken from the latest homepage, public/new-homepage-v2/index.html,
so the navbar and footer stay identical to it. Writes:
  out/index.html                                   artifact fragment (relative img/ and brand/ paths)
  ../../public/innovation-venture-platforms/index.html   full page for the site (/Innovation-Venture-Platforms)
Run: python3 build.py
"""
import re, pathlib

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
HOME = (ROOT / "public/new-homepage-v2/index.html").read_text(encoding="utf8")

css = re.search(r"<style>(.*?)</style>", HOME, re.S).group(1)
header = HOME[HOME.index('<header class="s_header"'):HOME.index("</header>") + len("</header>")]
footer = HOME[HOME.index('<footer class="s_footer">'):HOME.index("</footer>") + len("</footer>")]

# this page is the active main-menu item
header = header.replace('data-active="true"', 'data-active="false"')
header = header.replace('<a href="#" data-active="false">Innovation &amp; Venture Platforms</a>',
                        '<a href="#ladder" data-active="true" aria-current="page">Innovation &amp; Venture Platforms</a>')
# the platform links in the dropdown + mobile menu jump to their chapter on this page
for name, anchor in [("Farm Innovation Fund", "fif"), ("Incubation", "incubation"), ("Accelerator", "accelerator"), ("Agricultural Challenges", "challenges")]:
    header = header.replace(f'<a href="#">{name}</a>', f'<a href="#{anchor}">{name}</a>')
header = header.replace('<a href="#" class="s_btn s_btnPrimary s_btnSm">Enquire', '<a href="#enquire" class="s_btn s_btnPrimary s_btnSm">Enquire')
header = header.replace('<a href="#" class="s_btn s_btnPrimary">Enquire', '<a href="#enquire" class="s_btn s_btnPrimary">Enquire')
header = re.sub(r'(<summary><span class="s_mobileNum">03</span>Innovation &amp; Venture Platforms</summary><ul><li>)<a href="#">Overview</a>', r'\1<a href="#ladder">Overview</a>', header)
footer = footer.replace('<a href="#"><span data-reveal>Enquire</span></a>', '<a href="#enquire"><span data-reveal>Enquire</span></a>')

src = (HERE / "page.html").read_text(encoding="utf8")

def render(img, brand):
    out = src.replace("{{SHELL_CSS}}", css.replace("/new-homepage-v2/brand/", brand))
    out = out.replace("{{HEADER}}", header.replace("/new-homepage-v2/brand/", brand))
    out = out.replace("{{FOOTER}}", footer.replace("/new-homepage-v2/brand/", brand))
    return out.replace("{{IMG}}", img)

(HERE / "out").mkdir(exist_ok=True)
(HERE / "out/index.html").write_text(render("img/", "brand/"), encoding="utf8")

site = render("/innovation-venture-platforms/img/", "/innovation-venture-platforms/brand/")
title = re.search(r"<title>.*?</title>", site).group(0)
site = site.replace(title, "", 1).replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "", 1)
page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
{title}
<link rel="icon" href="/brand/io-mark.svg" type="image/svg+xml">
</head>
<body>
{site}
</body>
</html>
"""
(ROOT / "public/innovation-venture-platforms/index.html").write_text(page, encoding="utf8")
print("ok", len(page))
