"""The review copy of the newest homepage, with the client's 2026-10-30 comments applied.

Input: the homepage HTML (artifact version 34 of the "Silal.io New Homepage" session; not in the repo yet).
Changes, on top of that file only:
  - header/footer links open the About, Team and News pages built by build.py
  - "Our Journey" moved to the About page (below Principles), so it is hidden here
  - the helix becomes "The Innovation Oasis Method": the same five steps, scroll and rungs, with the client's copy
    (one panel per step: what happens, the line it ends on, and a link to that category)
Run: python3 homepage.py <homepage.html> <out.html>
"""
import html, sys

src, dst = sys.argv[1], sys.argv[2]
h = open(src, encoding="utf8").read()


def sub(old, new, count=1):
    global h
    if old not in h:
        raise SystemExit("not found: " + old[:80])
    h = h.replace(old, new, count)


# ---- the site's front page
sub('<title>IO Homepage</title>', '<title>Innovation Oasis · Advancing Agri-food Systems</title>')

# ---- links to the new pages
sub('<a href="#" class="s_logo"', '<a href="index.html" class="s_logo"')
sub('<a href="#" data-active="true">About IO</a>', '<a href="about.html" data-active="true">About IO</a>')
sub('<a href="#" class="s_textLink">About IO', '<a href="about.html" class="s_textLink">About IO')
sub('<li><a href="#">Our Story</a></li>', '<li><a href="about.html">Our Story</a></li>', 2)
sub('<li><a href="#">Team &amp; CEO Message</a></li>', '<li><a href="team.html">Team &amp; CEO Message</a></li>', 2)
sub('<a href="#">Resources</a>', '<a href="news.html">Resources</a>')
sub('<a href="#"><span data-reveal>About IO</span></a>', '<a href="about.html"><span data-reveal>About IO</span></a>')
sub('<a href="#"><span data-reveal>Content Library</span></a>', '<a href="news.html"><span data-reveal>Content Library</span></a>')

# ---- The Innovation Oasis Method (client copy, comment 2026-10-30)
METHOD = [
    ("Research &amp; Science", "It starts with a challenge.",
     ["We identify the most important questions facing agriculture, food production, and environmental sustainability. Through scientific research, experimentation, and discovery, we generate the evidence and knowledge needed to understand the problem and uncover new possibilities."],
     None, "Research creates knowledge.", "Explore Research &amp; Science", "#"),
    ("Innovation &amp; Venture Platforms", "Knowledge becomes innovation.",
     ["Promising insights are translated into technologies, products, and services through our innovation platforms. Solutions are tested in real-world conditions, validated at increasing scale, and matured according to their readiness.",
      "From concept to pilot to deployment, each innovation is measured against one question:"],
     "Can it solve a real problem for real users?", "Innovation creates possibilities.", "Explore Innovation &amp; Venture Platforms", "ivp-hub.html"),
    ("Technology &amp; Services", "Innovation creates impact.",
     ["Proven innovations become practical products, services, and capabilities that are deployed with customers and partners. Whether through analytical services, trials, technology platforms, or specialised facilities, solutions are delivered where they can create measurable value."],
     None, "Ideas become outcomes.", "Explore Technology &amp; Services", "#"),
    ("Centres of Excellence", "Success becomes capability.",
     ["When a strategic challenge area is repeatedly mastered, Innovation Oasis establishes a Centre of Excellence. These centres bring together expertise, infrastructure, technologies, partnerships, and best practices to accelerate future innovation.",
      "They become engines for ecosystem growth and focal points for national capability development in critical areas."],
     None, "Capability creates momentum.", "Explore Centres of Excellence", "#"),
    ("Talent &amp; Future Capability", "The journey continues through people.",
     ["Innovation only lasts if knowledge is passed on. Through training, collaboration, education, and hands-on experience, we help develop the next generation of scientists, innovators, technologists, and agricultural leaders.",
      "Because the ultimate outcome of innovation is not just better technology."],
     "It&rsquo;s better capability.", "People create the future.", "Explore Talent &amp; Capability Development", "io-academy.html"),
]
OLD = [("Research &amp; Science", "Driving agricultural progress through research and discovery."),
       ("Innovation &amp; Venture Platforms", "Supporting innovation from idea to impact."),
       ("Technology &amp; Services", "Solutions designed for real-world challenges."),
       ("Centres of Excellence", "Advancing agriculture through specialised expertise."),
       ("Talent &amp; Training", "Empowering the next generation of innovators.")]
i0 = h.index('<section class="hx c_curtainStick"')
for i, ((ob, os_), (name, head, body, q, out, cta, href)) in enumerate(zip(OLD, METHOD)):
    sub(f'<b data-reveal data-rvg="hxc">{ob}</b><span data-reveal data-rvg="hxc">{os_}</span>',
        f'<b data-reveal data-rvg="hxc">{name}</b>')  # no step number (comment 2026-10-30); the card names the step; the panel carries the rest (no line twice)
    # one box per step (comment 2026-10-30, reference: white box with the photo on top): it takes the card's place on the
    # card's side of the helix and carries the photo, the step name, the copy, the line it ends on and a button
    card = h.index(f'<figure class="hx_card" data-i="{i}"', i0)
    left = int(h[h.index("left:", card) + 5:h.index("px", h.index("left:", card))])
    side = "left" if left < 720 else "right"
    img = h[h.index('<img src="', card) + 10:h.index('"', h.index('<img src="', card) + 10)]
    # every line enters with the homepage's line reveal (group "hxc", the card's own) each time the step changes
    rv = 'data-reveal data-rvg="hxc"'
    paras = "".join(f"<p {rv}>{p}</p>" for p in body) + (f'<p class="x_mQ" {rv}>{q}</p>' if q else "")
    panel = (f'<div class="x_mPanel" data-side="{side}"><span class="x_mImg"><img src="{img}" alt="" loading="lazy"></span>'
             f'<div class="x_mBody"><h3 {rv}>{name}</h3>{paras}'
             f'<p class="x_mOut" {rv}>{out}</p><p class="x_mCta"><a class="s_btn s_btnPrimary s_btnSm x_mBtn" href="{href}">{cta}</a></p></div></div>')
    end = h.index("</div></div>", card) + len("</div>")  # closes .hx_stage of this layer
    h = h[:end] + panel + h[end:]
# the step's card and panel text replay their line reveal on every step change (also when scrolling back up)
sub("function hxCardText(c) { if (!RV.ok || !hxArmed) return; playAll($$('[data-rvg=\"hxc\"]', c), 0.05); }",
    "function hxCardText(c) { if (!RV.ok || !hxArmed) return; var L = c.closest('.hx_bgimg') || c;"
    " $$('[data-rvg=\"hxc\"]', L).forEach(function (el, k) { var rv = makeRv(el); if (rv.tw) rv.tw.kill(); rv.played = false;"
    " if (rv.lines.length) gsap.set(rv.lines, { yPercent: 100 }); rv.play(0.05 + k * 0.07); }); }")
sub('aria-label="Where do you want to look first?"', 'aria-label="The Innovation Oasis Method"')
sub('<p class="hx_title" data-reveal data-rvg="helix">This is Innovation Oasis. Where do you want to look first?</p>',
    '<p class="hx_title" data-reveal data-rvg="helix">The Innovation Oasis Method</p>')

CSS = """
/* ---- review copy, comments 2026-10-30 ---- */
/* Our Journey now lives on the About page (below Principles) */
#jCurtain { display: none !important; }
/* The Innovation Oasis Method: one white box per helix step (comment 2026-10-30, reference: photo on top, step name,
   copy, the line it ends on in blue, a button). The box replaces the floating card; the helix stays in the middle */
.hx_gl { pointer-events: none; }
.hx_card { display: none !important; }
.hx_card figcaption, .hx_title { text-shadow: none !important; }
/* placed in the middle of the space between the helix's edge and the page gutter, centred on the helix's middle.
   --hxk = half the helix's width in stage px; the photo layer is drawn at scale(1.06), so the offset is divided by that */
#helixSec { --hxk: 115px; --hxm: calc((25vw + var(--hxk) * var(--hs, 1) / 2 - var(--gutter, 4vw) / 2) / 1.06); }
.x_mPanel { position: absolute; z-index: 3; top: calc(50% + var(--hy, 0px)); transform: translate(-50%, -50%) scale(calc(1 / 1.06));
  width: min(400px, 28vw); max-height: calc(100% - 180px); display: flex; flex-direction: column; overflow: hidden;
  background: #fff; color: var(--charcoal, #4a4a4a); pointer-events: auto; }
.x_mPanel[data-side="right"] { left: calc(50% + var(--hxm)); }
.x_mPanel[data-side="left"] { left: calc(50% - var(--hxm)); }
.x_mImg { display: block; flex: 0 1 auto; height: clamp(120px, 26vh, 236px); min-height: 0; border-bottom: 3px solid var(--io, #3aa8db); }
.x_mImg img { display: block; width: 100%; height: 100%; object-fit: cover; }
.x_mBody { padding: clamp(18px, 2.6vh, 26px) clamp(20px, 1.8vw, 26px) clamp(20px, 2.8vh, 26px); }
.x_mPanel h3 { margin: 0 0 12px; font-size: clamp(1.375rem, 1.9vw, 1.75rem); font-weight: 300; line-height: 1.15; letter-spacing: -.01em; color: var(--charcoal, #4a4a4a); }
.x_mPanel p { margin: 0 0 8px; font-size: .875rem; line-height: 1.65; color: var(--grey-ink, #5f5f5f); }
.x_mPanel .x_mQ { font-weight: 500; color: var(--charcoal, #4a4a4a); }
.x_mPanel .x_mOut { margin: 12px 0 16px; font-size: .9375rem; font-weight: 500; color: var(--io-ink, #1b6f96); }
.x_mCta { margin: 0 !important; }
.x_mBtn { width: auto; height: auto !important; min-height: 0 !important; font-size: .8125rem; padding: 8px 14px !important; }
@media (max-height: 760px) and (min-width: 761px) {
  .x_mPanel p { font-size: .8125rem; line-height: 1.55; margin-bottom: 6px; }
  .x_mPanel .x_mOut { margin: 8px 0 12px; }
}
@media (max-width: 760px) {
  /* the photo layer is scaled 1.06 around its centre: these numbers land the box 20px from the screen's sides and bottom */
  .x_mPanel { top: auto; bottom: calc(19px + 2.83%); left: 50% !important; width: calc(100vw - 40px); transform: translateX(-50%) scale(calc(1 / 1.06)); transform-origin: 50% 100%; max-height: calc(100% - 180px); }
  .x_mImg { display: none; }
  .x_mBody { padding: 18px 18px 20px; overflow: auto; }
  .x_mPanel h3 { font-size: 1.25rem; margin-bottom: 8px; }
  .x_mPanel p { font-size: .8125rem; margin-bottom: 6px; }
  .x_mPanel .x_mOut { margin: 8px 0 12px; }
}
"""
last = h.rindex("</style>", 0, h.index('<header class="s_header"'))
h = h[:last] + CSS + h[last:]
open(dst, "w", encoding="utf8").write(h)
print("homepage", len(h))
