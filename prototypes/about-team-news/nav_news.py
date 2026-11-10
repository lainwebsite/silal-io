"""Navbar utility bar: the 'Resources' link pointed to the News page, and 'News' was nowhere in the navbar.
There is no Resources hub page, so the utility link becomes 'News' (same target). Footer links are untouched. Idempotent.
usage: nav_news.py <dir with html> <news href>     e.g.  bundle4 news.html     |   public/full-site /full-site/news"""
import sys, glob, os, re

D, HREF = sys.argv[1], sys.argv[2]
R = re.compile(r'(<span class="(?:s_)?utilityLinks">)<a href="[^"]*">Resources</a>')
n = 0
for f in glob.glob(os.path.join(D, "*.html")):
    s = open(f, encoding="utf8").read()
    t = R.sub(lambda m: m.group(1) + '<a href="%s">News</a>' % HREF, s)
    if t != s:
        open(f, "w", encoding="utf8").write(t)
        n += 1
print("patched", n)
