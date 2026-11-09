"""Revision 9 November (client, Figma): the brand name is always written lower-case i, upper-case O: "iO", never "IO".
Run last on the bundle, after site.py and every page script: python3 brand_io.py <bundle dir>
Every standalone "IO" becomes "iO" in all pages: visible text, alt/aria text, and the strings page scripts use for menus
and filters (site.py's link map keys and the menus built in script change together, so links keep working).
"IO" inside words (e.g. silal-io, IO-blue in comments) is left alone except where it stands as a word.
"""
import pathlib, re, sys
B = pathlib.Path(sys.argv[1])
n = 0
for f in sorted(B.glob("*.html")):
    s = f.read_text(encoding="utf8")
    t, k = re.subn(r"(?<![\w-])IO(?![\w-])", "iO", s)
    if k:
        f.write_text(t, encoding="utf8"); n += k
print(n, "replacements")
