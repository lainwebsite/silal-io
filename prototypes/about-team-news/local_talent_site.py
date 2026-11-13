#!/usr/bin/env python3
"""Put the Developing Local Talent page into the live review site (public/full-site/), additively.

Usage:  python3 local_talent_site.py <bundle_dir>
<bundle_dir> = the artifact bundle local_talent.py ran on (it holds ivp-local-talent.html and the lt_*.webp images).

Only three things change in public/full-site/: the new page, the menu/dock/enquiry entries added to the existing
pages, and the lt_*.webp images (public/innovation-venture-platforms/img/). Every other part of the existing pages is
left exactly as it is, so work other chats have not published yet is not pulled in. Links follow publish.py (clean
/full-site/<page> addresses). Idempotent.
"""
import pathlib, re, shutil, sys

B = pathlib.Path(sys.argv[1])
ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / 'public' / 'full-site'
IMGDST = ROOT / 'public' / 'innovation-venture-platforms' / 'img'
NAME = 'Developing Local Talent'
URL = '/full-site/ivp-local-talent'

# 1. images (shared folder, as publish.py expects)
for f in sorted((B / 'innovation-venture-platforms' / 'img').glob('lt_*.webp')):
    shutil.copy(f, IMGDST / f.name)

# 2. the page, with the same link rules as publish.py
pages = sorted(f.stem for f in OUT.glob('*.html')) + ['ivp-local-talent']
shared = ('photos', 'V1', 'new-homepage-v2', 'innovation-venture-platforms')
page_ref = re.compile(r"""(?<=["'])(%s)\.html""" % '|'.join(map(re.escape, pages)))
own_ref = re.compile(r"""(?<=["'(\s,])(img|brand|logos)/""")
ref = re.compile(r"""(?<=["'(\s,])(%s)/""" % '|'.join(shared))
s = (B / 'ivp-local-talent.html').read_text(encoding='utf8')
s = ref.sub(r'/\1/', s)
s = own_ref.sub(r'/full-site/\1/', s)
s = page_ref.sub(lambda m: '/full-site' if m.group(1) == 'index' else '/full-site/' + m.group(1), s)
if 'name="robots"' not in s:
    s = re.sub(r'(<meta charset=[^>]*>)', r'\1<meta name="robots" content="noindex">', s, count=1, flags=re.I)
for m in re.finditer(r'(?:src|href)="(/(?:innovation-venture-platforms|photos)/[^"?#]+)"', s):
    p = ROOT / 'public' / m.group(1).lstrip('/').replace('%20', ' ').replace('%28', '(').replace('%29', ')')
    if not p.exists():
        raise SystemExit('missing in public/: ' + m.group(1))
(OUT / 'ivp-local-talent.html').write_text(s, encoding='utf8')

# 3. menu, dock, link map, dock css, enquiry option on the existing pages
NAV_LI = '<li><a href="/full-site/ivp-agricultural-challenges">Agricultural Challenges</a></li>'
NAV_NEW = '<li><a href="%s">%s</a></li>' % (URL, NAME)
DOCK_BLOCK = re.compile(r'<nav class="x_dock".*?</nav>', re.S)
DOCK_A = re.compile(r'(<a href="/full-site/ivp-agricultural-challenges" data-route="[^"]*">.*?</a>)', re.S)
DOCK_NEW = '\n  <a href="%s" data-route="local-talent"><span><i class="x_long">Developing Local </i>Talent</span></a>' % URL
DOCK_CSS = ('<style id="lt-dock">/* five pages in the dock: it scrolls sideways on narrow screens instead of clipping */'
            '@media (max-width: 600px) { .x_dockIn { overflow-x: auto; scrollbar-width: none; max-width: calc(100vw - 32px); } '
            '.x_dockIn::-webkit-scrollbar { display: none; } .x_dock a { padding: 0 9px; } .x_dockHome { padding: 0 8px 0 6px !important; } }</style>')
changed = []
for f in sorted(OUT.glob('*.html')):
    if f.name == 'ivp-local-talent.html':
        continue
    t = o = f.read_text(encoding='utf8')
    if NAV_NEW not in t:
        t = t.replace(NAV_LI, NAV_LI + NAV_NEW)
    if 'x_dock' in t and 'data-route="local-talent"' not in t:
        t = DOCK_BLOCK.sub(lambda m: DOCK_A.sub(lambda a: a.group(1) + DOCK_NEW, m.group(0), count=1), t, count=1)
    if 'x_dock' in t and 'id="lt-dock"' not in t:
        t = t.replace('</head>', DOCK_CSS + '</head>', 1)
    if '"%s"' % NAME not in t:
        t = t.replace('"Agricultural Challenges": "/full-site/ivp-agricultural-challenges",',
                      '"Agricultural Challenges": "/full-site/ivp-agricultural-challenges", "%s": "%s",' % (NAME, URL))
    if f.name == 'ivp-enquire.html' and 'id="p-talent"' not in t:
        t = t.replace('<label><input type="radio" name="platform" value="chal" id="p-chal"><span>Agricultural Challenges</span></label>',
                      '<label><input type="radio" name="platform" value="chal" id="p-chal"><span>Agricultural Challenges</span></label>\n        '
                      '<label><input type="radio" name="platform" value="talent" id="p-talent"><span>%s</span></label>' % NAME)
        t = t.replace("chal: 'Agricultural Challenges',", "chal: 'Agricultural Challenges', talent: '%s'," % NAME)
    if t != o:
        f.write_text(t, encoding='utf8')
        changed.append(f.name)
print('page written; %d existing pages patched' % len(changed))
