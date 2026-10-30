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
        f'<b data-reveal data-rvg="hxc">{i + 1:02d} · {name}</b><span data-reveal data-rvg="hxc">{head}</span>')
    # the panel sits on the side away from the card (cards left of the helix -> panel right)
    card = h.index(f'<figure class="hx_card" data-i="{i}"', i0)
    left = int(h[h.index("left:", card) + 5:h.index("px", h.index("left:", card))])
    side = "right" if left < 720 else "left"
    paras = "".join(f"<p>{p}</p>" for p in body) + (f'<p class="x_mQ">{q}</p>' if q else "")
    panel = (f'<div class="x_mPanel" data-side="{side}"><p class="x_mNum">{i + 1:02d} / 05 · {name}</p><h3>{head}</h3>{paras}'
             f'<p class="x_mOut">{out}</p><a class="x_mLink" href="{href}">{cta} <span aria-hidden="true">&rarr;</span></a></div>')
    end = h.index("</div></div>", card) + len("</div>")  # closes .hx_stage of this layer
    h = h[:end] + panel + h[end:]
sub('aria-label="Where do you want to look first?"', 'aria-label="The Innovation Oasis Method"')
sub('<p class="hx_title" data-reveal data-rvg="helix">This is Innovation Oasis. Where do you want to look first?</p>',
    '<p class="hx_title" data-reveal data-rvg="helix">The Innovation Oasis Method: from a question to the next generation.</p>')

CSS = """
/* ---- review copy, comments 2026-10-30 ---- */
/* Our Journey now lives on the About page (below Principles) */
#jCurtain { display: none !important; }
/* The Innovation Oasis Method: one panel per helix step, on the side away from the card */
.hx_gl { pointer-events: none; }
.x_mPanel { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; width: min(360px, 26vw); color: #fff; pointer-events: auto;
  text-shadow: 0 1px 10px rgba(0, 0, 0, .35); }
.x_mPanel[data-side="right"] { right: max(64px, 7vw); }
.x_mPanel[data-side="left"] { left: max(64px, 7vw); }
/* no box (comment 2026-10-30): plain text on the photo like the card captions; the photo darkens a little on the panel's side */
.hx_bgimg:has(.x_mPanel[data-side="right"]) .hx_tint { background: linear-gradient(270deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .18) 45%, rgba(0, 0, 0, .12) 100%); }
.hx_bgimg:has(.x_mPanel[data-side="left"]) .hx_tint { background: linear-gradient(90deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .18) 45%, rgba(0, 0, 0, .12) 100%); }
.x_mNum { margin: 0 0 12px; font-size: .6875rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: rgba(255, 255, 255, .8); }
.x_mPanel h3 { margin: 0 0 14px; font-size: clamp(1.5rem, 2vw, 2rem); font-weight: 300; line-height: 1.15; letter-spacing: -.01em; }
.x_mPanel p { margin: 0 0 10px; font-size: .875rem; line-height: 1.6; color: rgba(255, 255, 255, .9); }
.x_mPanel .x_mQ { font-size: 1rem; line-height: 1.45; color: #fff; }
.x_mPanel .x_mOut { margin: 16px 0 14px; font-size: .9375rem; font-weight: 500; color: #fff; }
.x_mLink { display: inline-flex; gap: 10px; align-items: center; font-size: .8125rem; font-weight: 500; color: #fff; padding-bottom: 3px; border-bottom: 1px solid rgba(255, 255, 255, .6); }
.x_mLink:hover { border-bottom-color: #fff; }
@media (max-width: 760px) {
  .hx_card { display: none; }
  .x_mPanel { top: auto; bottom: 20px; left: 20px !important; right: 20px !important; width: auto; transform: none; }
  .hx_bgimg .hx_tint { background: linear-gradient(0deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .15) 60%) !important; }
  .x_mPanel h3 { font-size: 1.375rem; margin-bottom: 10px; }
  .x_mPanel p { font-size: .8125rem; margin-bottom: 8px; }
  .x_mPanel .x_mOut { margin: 10px 0 8px; }
}
"""
last = h.rindex("</style>", 0, h.index('<header class="s_header"'))
h = h[:last] + CSS + h[last:]
open(dst, "w", encoding="utf8").write(h)
print("homepage", len(h))
