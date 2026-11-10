"""Revision 9 November (client comment on the iO Academy library: "align the body text to the bottom", with a picture): the end of the
library block has "End of the library" and the sample note on the left, stacked, and the link "Request a private cohort" on the right,
aligned to the bottom line of that text (the link and the note share one baseline). Idempotent.  python3 academy_end_align.py <bundle dir>
"""
import pathlib, sys
B = pathlib.Path(sys.argv[1])
f = B / "io-academy.html"
s = f.read_text(encoding="utf8"); o = s
NOTE = '<p class="note">Sample courses shown for layout. Final catalogue to be supplied by the iO Academy.</p>'
if 'class="endL"' not in s:
    s = s.replace("""<div class="end"><span>End of the library</span><a href="#top" class="textLink">Request a private cohort '+AR+'</a></div>""",
                  """<div class="end"><div class="endL"><span>End of the library</span>""" + NOTE + """</div><a href="#top" class="textLink">Request a private cohort '+AR+'</a></div>""", 1)
    # the note only stays on its own for the empty state
    s = s.replace("""<button type="button" data-clear>Clear filters</button></div>')+'<p class="note">Sample courses shown for layout. Final catalogue to be supplied by the iO Academy.</p>';""",
                  """<button type="button" data-clear>Clear filters</button></div>'+NOTE_HTML);""", 1)
    s = s.replace("function feedBody(){", "var NOTE_HTML='" + NOTE + "';\nfunction feedBody(){", 1)
    s = s.replace("<head>", "<head><style>/* rev. 9 Nov: end of the library, text left, link bottom-aligned with it */.end{align-items:flex-end}.endL{display:grid;gap:14px}.endL .note{margin:0}.end .textLink{align-self:flex-end;line-height:1}</style>", 1)
if s != o:
    f.write_text(s, encoding="utf8"); print("end of the library aligned")
