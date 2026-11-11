"""Hub (ivp-hub.html): owner comments of 11 Nov, second batch. Idempotent. usage: hub_comments_11nov_b.py <bundle dir>
 - platform cards back to the earlier Figma proportion (572 tall; the open card 0.69 of that, 396 wide)
 - partner-service list without rules
 - Localize / Build: one font size for both paragraphs
 - 'What we evaluate' and 'Our focus areas' headings on two lines
 - journey: image column wider (fills the empty space), steps clipped at the content edge"""
import sys, os, re

P = os.path.join(sys.argv[1], "ivp-hub.html")
MARK = "/* hub comments 11 Nov b */"
CSS = MARK + """
body .h_panels { --h: min(clamp(440px, 63.5vh, 572px), 40vw); --hw: calc(var(--h) * .69); }
body .h_panel:hover, body .h_panel:focus-visible { flex: 0 0 var(--hw); }
body .hp_svc { border-top: 0; margin-top: 36px; padding-top: 0; }
body .hp_svc ul { border-bottom: 0; }
body .hp_svc li { border-top: 0; padding: 8px 0; }
body .hp_route .x_lead, body .hp_route .x_body { font-size: var(--fs-lead); line-height: 1.5; }
body .hp_ready .x_h2, body #areasWrap .x_head .x_h2 { max-width: 13em; text-wrap: balance; }
@media (min-width: 901px) {
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
