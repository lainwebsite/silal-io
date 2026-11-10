"""Put the 'عربي' language label back in the navbar utility links (it was removed by mistake). Idempotent.
usage: restore_ar_label.py <dir with html>"""
import sys, glob, os, re
R = re.compile(r'(<a href="[^"]*">Contact</a>)(</span>)')
n = 0
for f in glob.glob(os.path.join(sys.argv[1], "*.html")):
    s = open(f, encoding="utf8").read()
    t = R.sub(r'\1<span lang="ar">عربي</span>\2', s)
    if t != s:
        open(f, "w", encoding="utf8").write(t); n += 1
print("restored", n)
