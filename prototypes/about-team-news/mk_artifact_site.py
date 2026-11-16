"""Builds a self-contained copy of public/full-site (relative links, collected assets) for publishing as an artifact.
Usage: python3 prototypes/about-team-news/mk_artifact_site.py <output dir>   (run on a branch that has public/full-site, e.g. main)"""
import re, os, shutil, urllib.parse, pathlib, json, sys
REPO = pathlib.Path(__file__).resolve().parents[2]
R = REPO / 'public'
OUT = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '/tmp/artifact-site')  # output folder for the artifact copy
if OUT.exists(): shutil.rmtree(OUT)
OUT.mkdir(parents=True)
FS = R / 'full-site'
htmls = sorted(FS.glob('*.html'))
pages = {p.stem for p in htmls}
roots = {'full-site': '', 'photos': 'photos/', 'innovation-venture-platforms': 'ivp/', 'new-homepage-v2': 'nh2/', 'V1': 'v1/', 'brand': 'brand/', 'new-homepage': 'nh/'}
# every asset file on disk under the roots -> (url path, publish path)
assets = {}
def safe(s): return re.sub(r'[^A-Za-z0-9._/-]', '_', s)
for root, pre in roots.items():
    base = R / root
    if not base.exists(): continue
    for f in base.rglob('*'):
        if not f.is_file() or f.suffix == '.html' and root == 'full-site': continue
        rel = f.relative_to(base).as_posix()
        assets['/' + root + '/' + rel] = (f, safe(pre + rel))
urls = sorted(assets, key=len, reverse=True)
used = {}
def conv(text):
    toks = {}
    for i, u in enumerate(urls):
        variants = {u, urllib.parse.quote(u, safe="/()'!*~"), urllib.parse.quote(u, safe="/")}
        for v in variants:
            if v in text:
                tk = '\x00%d\x00' % i
                text = text.replace(v, tk); toks[tk] = assets[u][1]; used[u] = assets[u]
    for tk, pub in toks.items(): text = text.replace(tk, pub)
    return text
missing = set()
for u in list(assets):
    if u.startswith('/innovation-venture-platforms/img/'): used[u] = assets[u]
def pagelinks(text):
    text = text.replace("'/innovation-venture-platforms/img/'", "'ivp/img/'").replace('href="/About/V1"', 'href="about.html"')
    def sub(m):
        slug = m.group(1)
        if slug in pages: return slug + '.html'
        missing.add(slug); return '#'
    text = re.sub(r'/full-site/([a-z0-9-]+)(?![A-Za-z0-9._/-])', sub, text)
    text = re.sub(r'/full-site/?(?=["\'#?])', 'index.html', text)
    return text
for p in htmls:
    t = p.read_text()
    t = conv(t); t = pagelinks(t)
    if p.stem == 'index':
        m = re.search(r'<body[^>]*>(.*)</body>', t, re.S)
        t = m.group(1).strip()
    else:
        t = t  # full document served as-is
    (OUT / p.name).write_text(t)
for u, (f, pub) in used.items():
    d = OUT / pub; d.parent.mkdir(parents=True, exist_ok=True); shutil.copy(f, d)
left = set()
for p in OUT.glob('*.html'):
    for m in re.finditer(r'["\'(](/(?:full-site|photos|innovation-venture-platforms|new-homepage-v2|V1|brand|About|new-homepage)/[^"\')\s<]*)', p.read_text()):
        left.add(m.group(1)[:90])
print('pages', len(htmls), 'assets used', len(used), 'missing page slugs', sorted(missing), 'unresolved', len(left))
for x in sorted(left)[:15]: print('  ', x)
tot = sum(f.stat().st_size for f in OUT.rglob('*') if f.is_file()); print('total MB', tot // 1048576, 'files', sum(1 for f in OUT.rglob('*') if f.is_file()))
