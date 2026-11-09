"""Revision 9 November (client, Figma): the brand name is always written lower-case i, upper-case O: "iO", never "IO".
Run last on the bundle, after site.py and every page script: python3 brand_io.py <bundle dir>
Every standalone "IO" becomes "iO" in all pages: visible text, alt/aria text, and the strings page scripts use for menus
and filters (site.py's link map keys and the menus built in script change together, so links keep working).
"IO" inside words (e.g. silal-io, IO-blue in comments) is left alone except where it stands as a word.
"""
import pathlib, re, sys
B = pathlib.Path(sys.argv[1])
# Labels set in capitals (text-transform: uppercase) would still show "IO": in the page's visible text every "iO" sits in a
# span that keeps its case (not inside scripts, styles, <title>, <option>, <textarea> or attribute values).
CSS = "<style>.x_iO{text-transform:none}</style>"
SKIP = re.compile(r"(<(script|style|title|option|textarea)\b.*?</\2\s*>|<[^>]*>)", re.S | re.I)
WORD = re.compile(r"(?<![\w-])iO(?![\w-])")
n = w = 0
for f in sorted(B.glob("*.html")):
    s = f.read_text(encoding="utf8")
    t, k = re.subn(r"(?<![\w-])IO(?![\w-])", "iO", s)
    parts, last = [], 0
    for m in SKIP.finditer(t):
        parts.append(WORD.sub('<span class="x_iO">iO</span>', t[last:m.start()]) if 'class="x_iO"' not in t[max(0, last - 20):last] else t[last:m.start()])
        parts.append(m.group(0)); last = m.end()
    parts.append(WORD.sub('<span class="x_iO">iO</span>', t[last:]))
    t2 = "".join(parts)
    w += t2.count('class="x_iO"') - t.count('class="x_iO"')
    if CSS not in t2 and 'class="x_iO"' in t2:
        i = t2.lower().find("</head>")
        t2 = t2[:i] + CSS + t2[i:] if i > 0 else CSS + t2
    if t2 != s:
        f.write_text(t2, encoding="utf8"); n += k
print(n, "IO -> iO,", w, "wrapped")
