"""Client comment 10 Nov: remove the Arabic text from the navbar utility bar on every page
(tagline 'نحو أنظمة…' with its separator, and the 'عربي' language label). Footer is untouched. Idempotent.
usage: nav_no_arabic.py <bundle dir>"""
import sys, glob, os, re

D = sys.argv[1]
SEP_AR = re.compile(r'\s*<span class="(?:s_)?utilitySep">·</span>\s*<span lang="ar">[^<]*</span>')
AR_LINK = re.compile(r'<span lang="ar">عربي</span>')
n = 0
for f in glob.glob(os.path.join(D, "*.html")):
    s = open(f, encoding="utf8").read()
    t = AR_LINK.sub("", SEP_AR.sub("", s))
    if t != s:
        open(f, "w", encoding="utf8").write(t)
        n += 1
print("patched", n)
