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
# The Arid Advantage (between the map and the site) is a native Webflow section now, so the markup is split in two:
# fragment-map.html (world map) and fragment-site.html (The Site, the hidden journey and the photo gallery).
# .s_root and .c_page carry the artifact's variables (fonts, colours, --max, --hdr, --wrap) and its section stacking
why0 = S.index('<section class="c_why c_chapter"')
site0 = S.index('<div class="c_curtain" id="siteCurtain"')


def wrap(t):
    t = '<div class="s_root"><div class="c_page">' + t + '</div></div>'
    t = re.sub(r'href="/full-site/[^"]*"', 'href="#"', t)
    t = absolute(t)
    assert '="/full-site' not in t and "url(/full-site" not in t, 'relative path left'
    return t


frag_map = wrap(S[a:why0])
frag_site = wrap(S[site0:b] + S[c:d] + S[g0:g1])


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
scoped = (P + '{position:relative;z-index:1;display:block;background:#fff}\n' + P + '.io-home-site{z-index:0}\n' + '.io-data{display:none!important}\n' + P + ' .s_root{min-height:0!important}\n'
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

# The Site reads its places from the Webflow "Site Place" components when the page has them (window.__ioTour / __ioG, set by the loader)
s8 = rep(s8, 'var TOUR = window.__siteTour = [', 'var TOUR = window.__siteTour = window.__ioTour || [')
s9 = absolute(find("the site model's places open a slideshow"))
s9 = rep(s9, 'var G = [[', 'var G = window.__ioG || [[')
s12 = absolute(find('the site card is enlarged to about half the screen'))

js = """/* Webflow homepage: world map and The Site (option B); The Arid Advantage between them is native Webflow.
   Built by prototypes/about-team-news/build_webflow_home.py from public/full-site/index.html. Do not edit by hand.
   Content: The Site's places come from the "Site Place" components on the page ([data-site-place], one per place, in order);
   without them the artifact's own data is used. */
(function () {
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  function field(el, f) { var n = el.querySelector('[data-f="' + f + '"]'); return n ? n.textContent.trim() : ''; }
  function lines(t) { return t ? t.split(/\\s*[|\\n]+\\s*/).map(function (x) { return x.trim(); }).filter(Boolean) : null; }
  function readPlaces() {
    var els = [].slice.call(document.querySelectorAll('[data-site-place]'));
    if (!els.length) return;
    var tour = [], g = [];
    els.forEach(function (el) {
      var facts = lines(field(el, 'facts')), rel = lines(field(el, 'related'));
      tour.push({ key: field(el, 'key'), title: field(el, 'title'), text: field(el, 'text'), facts: facts && facts.length ? facts : null,
        related: rel && rel.length ? rel : null, cta: field(el, 'cta') || null, pill: field(el, 'pill') || null });
      g.push(lines(field(el, 'photos')) || []);
    });
    window.__ioTour = tour; window.__ioG = g;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function buildIndex() {
    var T = window.__ioTour, nav = document.getElementById('siteIndex');
    if (!T || !nav) return;
    nav.innerHTML = T.map(function (t, i) { return '<button type="button" data-i="' + i + '" data-on="' + (i === 0) + '"><span>' + String(i + 1).padStart(2, '0') + '</span><b>' + esc(t.pill || t.title) + '</b></button>'; }).join('');
    var cnt = document.getElementById('siteCount'); if (cnt) cnt.innerHTML = '01 <i>/ ' + String(T.length).padStart(2, '0') + '</i>';
  }
  function load(id, file) {
    var host = document.getElementById(id);
    if (!host || host.dataset.ready) return Promise.resolve();
    return fetch(BASE + file).then(function (r) { return r.text(); }).then(function (html) { host.innerHTML = html; host.dataset.ready = '1'; });
  }
  function run() {
    readPlaces();
    Promise.all([load('ioMap', 'fragment-map.html'), load('ioSite', 'fragment-site.html')]).then(function () {
      buildIndex();
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
(OUT / 'fragment-map.html').write_text(frag_map, encoding='utf-8')
(OUT / 'fragment-site.html').write_text(frag_site, encoding='utf-8')
old = OUT / 'fragment.html'
if old.exists(): old.unlink()
(OUT / 'io-home.css').write_text(scoped, encoding='utf-8')
(OUT / 'io-home.js').write_text(js, encoding='utf-8')
print('map', len(frag_map), 'site', len(frag_site), 'css', len(scoped), 'js', len(js))
