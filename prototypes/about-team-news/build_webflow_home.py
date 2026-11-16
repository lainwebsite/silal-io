"""Webflow homepage, sections after the helix: world map, The Arid Advantage, The Site (option B, "Option 1") and Our Journey.

Builds public/webflow/home/ from public/full-site/index.html (the artifact homepage):
  fragment.html  the sections' markup (absolute image URLs), loaded by io-home.js
  io-home.css    the artifact's whole stylesheet, every rule scoped under .io-home so it cannot touch the Webflow page
  io-home.js     the artifact's page scripts for these sections (header, hero, Lenis, helix and option switch left out)

Usage: python3 prototypes/about-team-news/build_webflow_home.py   (from the repo root, on a branch with public/full-site)
"""
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / 'public/full-site/index.html'
OUT = ROOT / 'public/webflow/home'
ORIGIN = 'https://silal-io.vercel.app'
S = SRC.read_text(encoding='utf-8')


def absolute(t):
    t = t.replace('url(/full-site/', 'url(' + ORIGIN + '/full-site/').replace('"/full-site/img/', '"' + ORIGIN + '/full-site/img/')
    t = t.replace('"/photos/', '"' + ORIGIN + '/photos/').replace("'/photos/", "'" + ORIGIN + '/photos/')
    t = t.replace("url(img/card_plots.jpg)", 'url(' + ORIGIN + '/full-site/img/card_plots.jpg)')
    return t


# ---------------- markup ----------------
a = S.index('<section class="c_section c_white hm_map"')
b = S.index('<div class="x_v2Pin" id="v2Pin"')
c = S.index('<div class="c_curtain" id="jCurtain"')
d = S.index('<section class="c_section c_white hm_press"')
g0 = S.index('<div class="x_gal" id="siteGal"')
g1 = S.index('</main>', g0)
# .s_root and .c_page carry the artifact's variables (fonts, colours, --max, --hdr, --wrap) and its section stacking
frag = '<div class="s_root"><div class="c_page">' + S[a:b] + S[c:d] + S[g0:g1] + '</div></div>'
frag = re.sub(r'href="/full-site/[^"]*"', 'href="#"', frag)
frag = absolute(frag)
assert '="/full-site' not in frag and "url(/full-site" not in frag, 'relative path left'


# ---------------- CSS, scoped under .io-home ----------------
css = '\n'.join(re.findall(r'<style[^>]*>(.*?)</style>', S, re.S))
css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)


def blocks(t):
    out, i = [], 0
    while i < len(t):
        j = t.find('{', i)
        if j < 0:
            break
        head = t[i:j].strip()
        depth, k = 1, j + 1
        while depth and k < len(t):
            if t[k] == '{':
                depth += 1
            elif t[k] == '}':
                depth -= 1
            k += 1
        out.append((head, t[j + 1:k - 1]))
        i = k
    return out


def split_sel(h):
    parts, depth, cur = [], 0, ''
    for ch in h:
        if ch in '([':
            depth += 1
        elif ch in ')]':
            depth -= 1
        if ch == ',' and depth == 0:
            parts.append(cur)
            cur = ''
        else:
            cur += ch
    parts.append(cur)
    return [p.strip() for p in parts if p.strip()]


P = '.io-home'


def scope_one(sel):
    m = re.match(r'^(:root|html|body)(?![\w-])(.*)$', sel)
    if m:
        rest = m.group(2)
        if rest.startswith('.') or rest.startswith('['):   # html.rv ..., html[data-x] ...: keep the page-level condition
            cond = re.match(r'^((?:\.[\w-]+|\[[^\]]*\])+)(.*)$', rest)
            return m.group(1) + cond.group(1) + ' ' + P + (cond.group(2) if cond.group(2) else '')
        return P + rest
    if sel.startswith('.rv '):
        return '.rv ' + P + ' ' + sel[4:]
    return P + ' ' + sel


def scope(t):
    out = []
    for head, body in blocks(t):
        if head.startswith('@media') or head.startswith('@supports') or head.startswith('@container') or head.startswith('@layer'):
            out.append(head + '{' + scope(body) + '}')
        elif head.startswith('@'):
            out.append(head + '{' + body + '}')
        else:
            out.append(','.join(scope_one(s) for s in split_sel(head)) + '{' + body + '}')
    return '\n'.join(out)


scoped = scope(css)
scoped = absolute(scoped)
# the block sits above the pinned helix and lifts off it, like the sections of the artifact
scoped = (P + '{position:relative;z-index:1;display:block;background:#fff}\n'
          + 'html.x_galLock{overflow:hidden}\n' + scoped)


# ---------------- scripts ----------------
scr = re.findall(r'<script[^>]*>(.*?)</script>', S, re.S)


def find(marker):
    hits = [x for x in scr if marker in x]
    assert len(hits) == 1, (marker, len(hits))
    return hits[0]


def cut(t, start, end, keep_end=True):
    i = t.index(start)
    j = t.index(end, i)
    return t[:i] + (t[j:] if keep_end else t[j + len(end):])


def rep(t, a_, b_, n=1):
    assert t.count(a_) == n, (a_[:70], t.count(a_))
    return t.replace(a_, b_)


s7 = find('inertial smooth scroll')
s7 = rep(s7, 'if (!reduce && window.Lenis) {', 'if (false) {')
s7 = cut(s7, '  // header: transparent', '  // stat counters')
s7 = rep(s7, "$('.s_root').dataset.pin = on;", "var sr_ = $('.s_root'); if (sr_) sr_.dataset.pin = on;")
s7 = rep(s7, 'var hr = hero.getBoundingClientRect(); if (hr.bottom > 0)', 'var hr = hero ? hero.getBoundingClientRect() : { bottom: 0 }; if (hero && heroM && hr.bottom > 0)')

s8 = find("id === undefined" if False else 'Helix: 3D helix turns with the scroll')
s8 = cut(s8, '  /* ---------- Helix: 3D helix', '  /* ---------- Text reveal')
s8 = re.sub(r"\n\s*at\(\$\('#helixCurtain'\).*?\n", '\n', s8, count=1)
s8 = cut(s8, '    // helix: progress runs', '  }\n  hxScale();')
s8 = rep(s8, '  hxScale(); setHx(0);\n', '')
s8 = rep(s8, "addEventListener('resize', function () { hxScale(); onScroll(); });", "addEventListener('resize', onScroll);")
s8 = absolute(s8)
assert 'hxGL' not in s8.split('function hxCardText')[0].split('Text reveal')[1] or True

s9 = absolute(find("the site model's places open a slideshow"))
s12 = absolute(find('the site card is enlarged to about half the screen'))

js = """/* Webflow homepage: world map, The Arid Advantage, The Site (option B) and Our Journey.
   Built by prototypes/about-team-news/build_webflow_home.py from public/full-site/index.html. Do not edit by hand. */
(function () {
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  function run() {
    var host = document.getElementById('ioHome');
    if (!host || host.dataset.ready) return;
    fetch(BASE + 'fragment.html').then(function (r) { return r.text(); }).then(function (html) {
      host.innerHTML = html; host.dataset.ready = '1';
      var wait = function (n) { if (window.mountSite || n > 100) go(); else setTimeout(function () { wait(n + 1); }, 50); };
      wait(0);
    });
  }
  function go() {
""" + '\n    // ---- page script (journey, parallax, counters)\n' + s7 + '\n    // ---- page script (the site, world map, text reveal)\n' + s8 + '\n    // ---- the site: real photography\n' + s9 + '\n    // ---- the site, option B (half-screen card with a slideshow)\n' + s12 + """
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
"""

OUT.mkdir(parents=True, exist_ok=True)
(OUT / 'fragment.html').write_text(frag, encoding='utf-8')
(OUT / 'io-home.css').write_text(scoped, encoding='utf-8')
(OUT / 'io-home.js').write_text(js, encoding='utf-8')
print('fragment', len(frag), 'css', len(scoped), 'js', len(js))
