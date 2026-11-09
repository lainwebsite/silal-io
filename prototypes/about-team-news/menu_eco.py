"""Revision 9 November (client: "on the homepage this option does not work"): "Our Ecosystem" must be in the About iO menu of
EVERY page (static desktop dropdown, mobile menu, and the menus built in script on the IO Academy pages), not only on the
pages site.py last ran on. Idempotent. Run after site.py / the page scripts: python3 menu_eco.py <bundle dir>
"""
import pathlib, re, sys
B = pathlib.Path(sys.argv[1]); n = 0
STATIC = '<li><a href="team.html">Team &amp; CEO Message</a></li>'
for f in sorted(B.glob("*.html")):
    s = f.read_text(encoding="utf8"); t = s
    t = re.sub(re.escape(STATIC) + r'(?!<li><a href="ecosystem\.html">)', STATIC + '<li><a href="ecosystem.html">Our Ecosystem</a></li>', t)
    t = t.replace('["Team & CEO Message","Virtual Tour ↗"]', '["Team & CEO Message","Our Ecosystem","Virtual Tour ↗"]')
    if '"Our Ecosystem": "ecosystem.html"' not in t:
        t = t.replace('"Team & CEO Message": "team.html",', '"Team & CEO Message": "team.html", "Our Ecosystem": "ecosystem.html",')
    if t != s:
        f.write_text(t, encoding="utf8"); n += 1
print(n, "pages patched")
