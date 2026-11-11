"""Hub (ivp-hub.html): match the 'Innovation & Venture Platforms Overview Page Layout' document. Idempotent.
usage: hub_doc_match.py <bundle dir>
 - headings without the trailing full stop the document does not have
 - platforms intro in the document's two paragraphs
 - 'Acceleration' / 'Agri-food Challenges' naming in the hub's own dock and pathway result (no 'Unbreakable Harvest': final name pending)
 - Latest: content-type labels from the document + link to the Content Library
 - Guided Enquiry CTA: heading, copy, one CTA (TBD in the document); the leftover 'Start with' teaser after it is removed"""
import sys, os

P = os.path.join(sys.argv[1], "ivp-hub.html")
s = open(P, encoding="utf8").read()
n0 = s
R = []

def rep(old, new, count=1):
    global s
    if old in s:
        s = s.replace(old, new, count)
        R.append("ok   " + old[:60].replace("\n", " "))
    else:
        R.append("skip " + old[:60].replace("\n", " "))

# 1 headings: no trailing full stop (document)
for h in ("From problem to scale", "Technology readiness is only part of the picture",
          "Technologies shaping the future of agrifood", "Innovation in action", "Latest from Innovation &amp; Ventures"):
    rep(">%s.</h2>" % h, ">%s</h2>" % h)

# 2 platforms intro in two paragraphs
rep("partner-led innovation challenges. Each route is designed for a different starting point,",
    "partner-led innovation challenges.</p>\n    <p class=\"x_lead\" style=\"margin-top:18px\" data-reveal>Each route is designed for a different starting point,")

# 3 naming (hub's own dock + pathway result)
rep('<a href="ivp-accelerator.html" data-route="accelerator"><span>Accelerator</span></a>',
    '<a href="ivp-accelerator.html" data-route="accelerator"><span>Acceleration</span></a>')
rep('<a href="ivp-agricultural-challenges.html" data-route="agricultural-challenges"><span>Challenges</span></a>',
    '<a href="ivp-agricultural-challenges.html" data-route="agricultural-challenges"><span>Agri-food Challenges</span></a>')
rep("name: 'Acceleration · Unbreakable Harvest'", "name: 'Acceleration'")

# 4 Latest: content types from the document, Unbreakable Harvest out, link to the Content Library
rep('<span class="h_cardMeta">26 Jul 2026 · Farm Innovation Fund</span>',
    '<span class="h_cardMeta">Workshops and events · Farm Innovation Fund · 26 Jul 2026</span>')
rep('<span class="h_cardMeta">Testing now · Agri-food Challenges</span>',
    '<span class="h_cardMeta">Validation updates · Agri-food Challenges · Testing now</span>')
rep('<span class="h_cardMeta">Nov 2026 · Acceleration</span><h3><span>Unbreakable Harvest welcomes its first cohort</span></h3>',
    '<span class="h_cardMeta">Cohort announcements · Acceleration · Nov 2026</span><h3><span>Acceleration welcomes its first cohort</span></h3>')
MORE = ('\n    <p class="h_nowMore" style="margin-top:48px" data-reveal><a class="s_btn s_btnGhost s_btnSm" href="news.html">View all in the Content Library '
        '<svg class="x_arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" '
        'stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></p>')
if "h_nowMore" not in s:
    i = s.find('<div class="h_now">')
    j = s.find("</div>\n  </div></section>", i)
    assert i > 0 and j > i, "latest anchors"
    s = s[:j + 6] + MORE + s[j + 6:]
    R.append("ok   latest link")
    s = s.replace("</style>", ".h_nowMore{margin-top:40px}\n</style>", 1)

# 5 Guided Enquiry CTA
rep('<span class="x_label">Enquire</span>', "")
a = s.find('<ul class="x_cboxList">')
if a > 0:
    b = s.find("</ul>", a) + 5
    s = s[:a] + s[b:]
    R.append("ok   cbox list removed")
rep('<a href="#pathway" class="s_btn s_btnPrimary s_btnSm hp_toPath">Find your pathway ',
    '<a href="ivp-enquire.html" class="s_btn s_btnPrimary s_btnSm">Start an enquiry ')
# leftover "Start with" teaser after the CTA (the document ends with the CTA)
a = s.find('<a class="x_next" href="ivp-farm-innovation-fund.html">')
if a > 0:
    b = s.find("</a>\n</div>", a)
    s = s[:a] + s[b + 5:]
    R.append("ok   x_next removed")

# spacing fixes for the blocks above (applied to an already-patched page too)
rep('<p class="x_lead" data-reveal>Each route is designed', '<p class="x_lead" style="margin-top:18px" data-reveal>Each route is designed')
rep('<p class="h_nowMore" data-reveal>', '<p class="h_nowMore" style="margin-top:48px" data-reveal>')
rep('<section class="x_sec x_secTop0"><div class="s_wrap">\n    <div class="x_cbox">', '<section class="x_sec x_secTop0" style="padding-bottom:clamp(32px,4vw,64px)"><div class="s_wrap">\n    <div class="x_cbox">')

if s != n0:
    open(P, "w", encoding="utf8").write(s)
print("\n".join(R))
