"""Hub (ivp-hub.html): owner comments of 11 Nov, second batch. Idempotent. usage: hub_comments_11nov_b.py <bundle dir>
 - platform cards back to the earlier Figma proportion (572 tall; the open card as wide as it is tall: the original square hover animation)
 - partner-service list: same width as the pathway image below it (columns 7-12), hairline rows like the other lists
 - Localize / Build: one font size for both paragraphs
 - 'What we evaluate' and 'Our focus areas' headings on two lines
 - featured case: image and text in two equal halves (columns 1-6 / 7-12); journey as wide as every other block at any screen width
 - journey: image column wider (fills the empty space), steps clipped at the content edge"""
import sys, os, re

P = os.path.join(sys.argv[1], "ivp-hub.html")
MARK = "/* hub comments 11 Nov b4 */"
CSS = MARK + """
body .h_panels { --h: min(clamp(440px, 63.5vh, 572px), 40vw); --hw: var(--h); }
body .h_panel:hover, body .h_panel:focus-visible { flex: 0 0 var(--hw); }
body .hp_svc { border-top: 0; margin-top: 36px; padding-top: 0; }
body .hp_svcHead { grid-column: 1 / span 5; }
body .hp_svc ul { grid-column: 7 / -1; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--line); }
body .hp_svc li { border-top: 1px solid var(--line); padding: 11px 0; font-size: var(--t-small); line-height: 1.45; }
@media (max-width: 1100px) { body .hp_svcHead, body .hp_svc ul { grid-column: 1 / -1; } }
@media (max-width: 640px) { body .hp_svc ul { grid-template-columns: 1fr; } }
body .hp_route .x_lead, body .hp_route .x_body { font-size: var(--fs-lead); line-height: 1.5; }
body .hp_ready .x_h2, body #areasWrap .x_head .x_h2 { max-width: 13em; text-wrap: balance; }
#xJour .j_jour { max-width: none; }
@media (min-width: 901px) {
  body .hp_caseImg { grid-column: 1 / span 6; }
  body .hp_caseText { grid-column: 7 / span 6; }
  #xJour .j_jourGrid { grid-template-columns: minmax(0, .95fr) minmax(0, 1fr); column-gap: clamp(32px, 3.5vw, 64px); }
  #xJour .j_jourSteps { overflow-clip-margin: 0; }
  #xJour .j_jourFrames { height: max(300px, calc(100svh - 440px)); }
}
"""
s = open(P, encoding="utf8").read()
s = re.sub(r"<style>/\* hub comments 11 Nov b[^<]*</style>", "", s)
if MARK in s:
    print("already patched")
else:
    s = s.replace("</head>", "<style>" + CSS + "</style></head>", 1)
    open(P, "w", encoding="utf8").write(s)
    print("patched")
