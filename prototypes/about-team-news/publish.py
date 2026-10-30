"""Copy the review site (the artifact bundle: homepage, About, Team + profiles, News + releases, IVP, IO Academy,
Training Detail) into public/full-site/ so Vercel serves it at /full-site (redirect in next.config.ts).

  - pages keep their relative links to each other (about.html, team-ali.html, ...), so they all live in one folder
  - photos, V1, new-homepage-v2 and innovation-venture-platforms assets already sit in public/: pages point there
    instead of shipping a second copy; img/ and brand/ (homepage v34 files not in public/ yet) are copied
  - index.html is the artifact body of the homepage: it gets its doctype back; every page gets noindex
Run: python3 publish.py <bundle dir>   (the folder site.py ran on)
"""
import pathlib, re, shutil, sys

B = pathlib.Path(sys.argv[1])
ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "full-site"
SHARED = ("photos", "V1", "new-homepage-v2", "innovation-venture-platforms")

if OUT.exists():
    shutil.rmtree(OUT)
OUT.mkdir(parents=True)
for d in ("img", "brand"):
    shutil.copytree(B / d, OUT / d)
for d in SHARED:  # every file the pages use must already be in public/
    for f in (B / d).rglob("*"):
        if f.is_file() and not (ROOT / "public" / f.relative_to(B)).exists():
            raise SystemExit(f"missing in public/: {f.relative_to(B)}")

ref = re.compile(r"""(?<=["'(\s,])(%s)/""" % "|".join(SHARED))
NOINDEX = '<meta name="robots" content="noindex">'
for f in sorted(B.glob("*.html")):
    s = f.read_text(encoding="utf8")
    if f.name == "index.html" and not s.lstrip().lower().startswith("<!doctype"):
        s = '<!doctype html>\n<html lang="en">\n' + s + "\n</html>\n"
    s = ref.sub(r"/\1/", s)
    if 'name="robots"' not in s:
        s = re.sub(r"(<meta charset=[^>]*>)", r"\1" + NOINDEX, s, count=1, flags=re.I)
    (OUT / f.name).write_text(s, encoding="utf8")
print(len(list(OUT.glob("*.html"))), "pages ->", OUT.relative_to(ROOT))
