"""Client comment 10 Nov: remove ONLY the Arabic tagline 'نحو أنظمة…' (+ its separator) from the navbar utility bar.
The 'عربي' language label, the logo and the footer address stay. Idempotent.
usage: nav_no_arabic.py <bundle dir>"""
import sys, glob, os, re

D = sys.argv[1]
SEP_AR = re.compile(r'\s*<span class="(?:s_)?utilitySep">·</span>\s*<span lang="ar">[^<]*</span>')
n = 0
for f in glob.glob(os.path.join(D, "*.html")):
    s = open(f, encoding="utf8").read()
    t = SEP_AR.sub("", s)
    if t != s:
        open(f, "w", encoding="utf8").write(t)
        n += 1
print("patched", n)
