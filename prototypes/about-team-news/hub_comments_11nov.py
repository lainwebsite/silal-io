"""Hub (ivp-hub.html): owner comments of 11 Nov. Idempotent.
 - section heads: left block aligned to the top of the right text (was bottom-aligned)
 - 'Localize / Build': two equal columns, same text width
 - journey: no big empty bands above/below the pinned block, content fills the screen
 - partner-service strip under the cards: label + sentence on the left, the eight capabilities in a tidy hairline list
usage: hub_comments_11nov.py <bundle dir>"""
import sys, os

P = os.path.join(sys.argv[1], "ivp-hub.html")
MARK = "/* hub comments 11 Nov v5 */"
CSS = MARK + """
body .x_head { align-items: start; }
body .x_head > * { align-self: start; }
body .hp_jourHead { padding-bottom: 0; }
body .hp_routeCols { row-gap: var(--blk); }
body .hp_routeCols > .hp_route:first-child { grid-column: 1 / span 6; }
body .hp_routeCols > .hp_route:last-child { grid-column: 7 / span 6; }
body .hp_route .x_lead, body .hp_route .x_body { max-width: none; }
@media (max-width: 900px) { body .hp_routeCols > .hp_route:first-child, body .hp_routeCols > .hp_route:last-child { grid-column: 1 / -1; } }
@media (min-width: 901px) {
  #xJour[data-on="true"] > .j_journey { justify-content: flex-start; padding: 88px 0 0; }
  #xJour .j_jourFrames { height: max(280px, calc(100svh - 500px)); }
}
body .hp_svc { margin-top: 28px; padding-top: 28px; row-gap: 0; align-items: start; }
body .hp_svcHead { grid-column: 1 / span 4; flex-direction: column; flex-wrap: nowrap; gap: 12px; }
body .hp_svcHead .x_cap { max-width: 22em; font-size: var(--fs-body); line-height: 1.5; color: var(--charcoal); }
body .hp_svc ul { grid-column: 5 / -1; grid-template-columns: 1fr 1fr; column-gap: var(--col-gap); row-gap: 0; border-bottom: 1px solid var(--line); }
body .hp_svc li { padding: 13px 0; border-top: 1px solid var(--line); font-size: var(--fs-body); line-height: 1.4; color: var(--charcoal); }
@media (max-width: 1100px) {
  body .hp_svcHead { grid-column: 1 / -1; margin-bottom: 14px; }
  body .hp_svc ul { grid-column: 1 / -1; }
}
@media (max-width: 640px) { body .hp_svc ul { grid-template-columns: 1fr; } }
"""
s = open(P, encoding="utf8").read()
import re
s = re.sub(r"<style>/\* hub comments 11 Nov[^<]*</style>", "", s)  # replace an earlier version of this block
if MARK in s:
    print("already patched")
else:
    assert "</head>" in s
    s = s.replace("</head>", "<style>" + CSS + "</style></head>", 1)
    open(P, "w", encoding="utf8").write(s)
    print("patched")
