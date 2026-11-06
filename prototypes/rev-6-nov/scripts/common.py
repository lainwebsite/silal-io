import pathlib, re
S = pathlib.Path(__file__).resolve().parent.parent
ORIG, SITE = S / 'site_orig', S / 'site'

def load(name, orig=True):
    return ((ORIG if orig else SITE) / name).read_text(encoding='utf8')

def save(name, s):
    (SITE / name).write_text(s, encoding='utf8'); print('wrote', name, len(s))

def rep(s, old, new, count=1):
    n = s.count(old)
    if n < 1 or (count and n != count):
        raise SystemExit(f'expected {count or ">=1"} x {old[:90]!r}, found {n}')
    return s.replace(old, new)

def cut(s, start, end, new='', include_end=True):
    """replace s[start .. end] (markers) with new"""
    a = s.index(start); b = s.index(end, a) + (len(end) if include_end else 0)
    return s[:a] + new + s[b:]

def between(s, start, end, include=True):
    a = s.index(start); b = s.index(end, a) + len(end)
    return s[a:b] if include else s[a + len(start):b - len(end)]

ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'

# ---- applied to every page (menus, nav state) ----
GLOBAL_CSS = """<style id="rev6-global">
/* rev 6 Nov (01): a menu item only shows its underline when it is the page's section or hovered, not because focus landed in it */
.s_navItem:focus-within > a:not([data-active="true"])::after { transform: scaleX(0); }
.s_navItem:hover > a::after, .s_navItem > a:focus-visible::after { transform: scaleX(1); }
</style>"""

def global_patch(s):
    s = s.replace('<li><a href="team.html">Team &amp; CEO Message</a></li>',
                  '<li><a href="team.html">Team &amp; CEO Message</a></li><li><a href="our-ecosystem.html">Our Ecosystem</a></li>')
    s = s.replace('["Team & CEO Message","Virtual Tour ↗"]', '["Team & CEO Message","Our Ecosystem","Virtual Tour ↗"]')
    s = s.replace('"Team & CEO Message": "team.html",', '"Team & CEO Message": "team.html", "Our Ecosystem": "our-ecosystem.html",')
    s = s.replace('<span>For researchers</span>', '<span>For researchers &amp; early-stage ventures</span>')
    if 'rev6-global' not in s:
        s = s.replace('</body>', GLOBAL_CSS + '</body>') if '</body>' in s else s + GLOBAL_CSS
    return s
