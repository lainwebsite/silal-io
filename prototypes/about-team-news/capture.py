"""Capture the existing sections the About, Team and News pages are made of (client PDFs, 2026-10-30).

Nothing here is designed from scratch: every section is the markup and CSS of a page that already exists,
taken from the Next.js build (run `npm run build` with `images: { unoptimized: true }` in next.config.ts so
images keep their /photos/ paths, then `npx next start -p 3100`):
  /V1                         About-D (Designer 1): Our Story, Our People, Our Mission, Principles
  /V2/resources/news          the archive (category chips, year, search, "Load more")
  /V3/resources/news          the light "Media enquiries" band
  /V3/resources/news/<slug>   the press-release detail (article + related releases), all 19 releases
CSS-module class names are renamed to short prefixes so they read like the homepage's: About-D -> c_ and
V1 shell -> s_ (the homepage CSS already carries every one of these), V2 news -> n2_, V2 chrome -> c2_,
V3 news -> n3_, V3 shell -> s3_. Writes parts/ for build.py.
Run: python3 capture.py [http://localhost:3100]
"""
import json, pathlib, re, sys, urllib.request

from bs4 import BeautifulSoup

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3100"
PARTS = HERE / "parts"
(PARTS / "detail").mkdir(parents=True, exist_ok=True)


def get(path):
    return urllib.request.urlopen(BASE + path).read().decode("utf8")


def renamer(html, mapping):
    """mapping: {module name: prefix}; renames module__HASH__name -> prefix + name."""
    for mod, pre in mapping.items():
        html = re.sub(mod + r"-module__[A-Za-z0-9_-]{6}__", pre, html)
    return html


def css_of(page_html, mapping):
    """The page's CSS chunks, keeping only rules for the mapped modules (renamed); no @font-face."""
    out = []
    for href in re.findall(r'<link rel="stylesheet" href="([^"]+)"', page_html):
        out.append(get(href))
    css = renamer("\n".join(out), mapping)
    keep = tuple(mapping.values())
    return filter_css(css, lambda sel: any("." + p in sel for p in keep))


def filter_css(css, ok):
    res, i, n = [], 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j < 0:
            break
        head = css[i:j].strip()
        depth, k = 1, j + 1
        while depth and k < n:
            depth += {"{": 1, "}": -1}.get(css[k], 0)
            k += 1
        body = css[j + 1:k - 1]
        if head.startswith("@font-face"):
            pass
        elif head.startswith(("@media", "@supports", "@container")):
            inner = filter_css(body, ok)
            if inner.strip():
                res.append(head + "{" + inner + "}")
        elif head.startswith("@keyframes"):
            res.append(head + "{" + body + "}")
        elif ok(head):
            res.append(head + "{" + body + "}")
        i = k
    return "\n".join(dict.fromkeys(res))


def section(soup, marker):
    """The top-level <section> of <main> whose text starts with marker (case-insensitive)."""
    for s in soup.find("main").find_all("section"):
        if s.find_parent("section") is None and marker.lower() in s.get_text(" ", strip=True)[:160].lower():
            return s
    raise SystemExit("section not found: " + marker)


def motion(html):
    """V1/V2/V3 motion attributes -> the homepage's: line reveals, photo masks, staggers, drift."""
    html = re.sub(r"\sdata-(split|lines|words)(=\"[^\"]*\")?", " data-reveal", html)
    html = html.replace(" data-reveal-img", " data-img")
    html = re.sub(r"\sdata-(fade|up|lit|wipe|px|rule|news-title|clip|morph-slug)(=\"[^\"]*\")?", "", html)
    return html


# ---------------------------------------------------------------- V1 About-D
V1MAP = {"about-d": "c_", "v1": "s_"}
v1 = BeautifulSoup(renamer(get("/V1"), V1MAP), "lxml")
for name, marker in [("story", "Our Story"), ("people", "Our People"), ("mission", "Our Mission"), ("principles", "The Principles That Guide Us"), ("journey", "Our Journey")]:
    (PARTS / f"v1-{name}.html").write_text(motion(str(section(v1, marker))), encoding="utf8")

# ---------------------------------------------------------------- V2 archive
V2MAP = {"news": "n2_", "chrome": "c2_"}
n2raw = get("/V2/resources/news")
n2 = BeautifulSoup(renamer(n2raw, V2MAP), "lxml")
(PARTS / "v2-archive.html").write_text(motion(str(section(n2, "All releases"))), encoding="utf8")
(PARTS / "v2.css").write_text(css_of(n2raw, V2MAP), encoding="utf8")
root2 = n2.find("main").parent.get("class")
page2 = n2.find("main").find(True).get("class")
src = (ROOT / "app/V2/(news)/_lib/news.ts").read_text(encoding="utf8")
v2 = []
for m in re.finditer(r'slug: "([^"]+)",\s*date: "([^"]+)",\s*category: "([^"]+)",\s*title: "((?:[^"\\]|\\.)*)",\s*excerpt:\s*"((?:[^"\\]|\\.)*)"', src):
    v2.append(dict(zip(["slug", "date", "category", "title", "excerpt"], m.groups())))

# ---------------------------------------------------------------- V3 media band + detail pages
V3MAP = {"news": "n3_", "shell": "s3_"}
n3raw = get("/V3/resources/news")
n3 = BeautifulSoup(renamer(n3raw, V3MAP), "lxml")
(PARTS / "v3-media.html").write_text(motion(str(n3.find("section", class_="n3_media"))), encoding="utf8")
root3 = n3.find("main").parent.get("class")
page3 = n3.find("main").find(True).get("class")
slugs = re.findall(r'slug: "([^"]+)"', (ROOT / "app/V3/(news)/_lib/news.ts").read_text(encoding="utf8"))
css3 = ""
images = {}
for slug in slugs:
    raw = get("/V3/resources/news/" + slug)
    if not css3:
        css3 = css_of(raw + n3raw, V3MAP)
    d = BeautifulSoup(renamer(raw, V3MAP), "lxml")
    body = d.find("main").find(True)
    img = body.find("article").find("img")
    images[slug] = {"src": img["src"], "alt": img.get("alt", "")}
    title = d.find("h1").get_text(" ", strip=True)
    (PARTS / "detail" / f"{slug}.html").write_text(json.dumps({"title": title, "page": body.get("class"), "html": motion(body.decode_contents())}), encoding="utf8")
(PARTS / "v3.css").write_text(css3, encoding="utf8")

for r in v2:
    r.update(images.get(r["slug"], {}))
(PARTS / "data.json").write_text(json.dumps({"v2": v2, "slugs": slugs, "root2": root2, "page2": page2, "root3": root3, "page3": page3}, indent=1, ensure_ascii=False), encoding="utf8")
print("v2 releases", len(v2), "v3 details", len(slugs), "css", len((PARTS / "v2.css").read_text()), len(css3))
