"""Review copy of the IO Academy page with the client's 2026-10-30 comment applied.

"Training for teams" sat in the library's sidebar under the track list, where its placement felt random; it becomes a
block at the end of the library, before the footer, using the page's own in-house copy (data "inhouse") and classes.
Run: python3 academy.py <public/io-academy/index.html> <out.html>
"""
import sys

src, dst = sys.argv[1], sys.argv[2]
h = open(src, encoding="utf8").read()

side = ('<div class="sideInfo"><span class="sideLabel">Training for teams</span><p>Private cohorts on campus, at your site or online, '
        'in English or Arabic.</p><a href="#top" class="textLink">Talk to the Academy \'+AR+\'</a></div></aside>')
end = "feedBody()+'</div></div></div></div></section>';"
for s in (side, end):
    if h.count(s) != 1:
        raise SystemExit("expected once: " + s[:60])
band = ('<section class="teamBand" aria-label="Training for teams"><div class="wrap"><div class="teamBandIn"><div>'
        '<span class="sideLabel">Training for teams</span><h2>Need training for your whole team?</h2>'
        '<p>We tailor courses for companies, farms and government entities: on campus, at your site or online, in English or Arabic.</p></div>'
        '<a href="#top" class="btn btnPrimary">Talk to the Academy \'+AR+\'</a></div></div></section>')
h = h.replace(side, "</aside>").replace(end, end[:-1] + "+'" + band + "';")
css = ("\n/* review copy 2026-10-30: Training for teams as a block at the end of the library */\n"
       ".teamBand{position:relative;z-index:2;background:var(--light,#f1f1f1);padding-block:clamp(64px,7vw,112px)}"
       ".teamBandIn{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:32px}"
       ".teamBand h2{margin:14px 0 12px;font-weight:300;font-size:clamp(28px,2.8vw,44px);line-height:1.15;letter-spacing:-.01em}"
       ".teamBand p{margin:0;max-width:56ch;color:var(--grey-ink)}\n")
i = h.index("</style>")
h = h[:i] + css + h[i:]
open(dst, "w", encoding="utf8").write(h)
print("academy", len(h))
