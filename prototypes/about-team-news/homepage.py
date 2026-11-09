"""The review copy of the newest homepage, with the client's 2026-10-30 comments applied.

Input: the homepage HTML (artifact version 34 of the "Silal.io New Homepage" session; not in the repo yet).
Changes, on top of that file only:
  - header/footer links open the About, Team and News pages built by build.py
  - "Our Journey" moved to the About page (below Principles), so it is hidden here
  - the helix becomes "The Innovation Oasis Method": the same five steps, scroll and rungs, with the client's copy
    (one panel per step: what happens, the line it ends on, and a link to that category)
Run: python3 homepage.py <homepage.html> <out.html>
"""
import html, re as _re, sys

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
    "function hxCardText(c) { var L = c.closest('.hx_bgimg') || c;"
    # only the current step's box shows (the next layer's circle no longer uncovers its box early); it enters each time
    # (comment 2026-10-30, kept quick so it can be read at once): the box rises in, the photo opens from the top and settles from a slight zoom, then the lines
    " $$('.x_mPanel').forEach(function (b) { b.classList.toggle('x_on', L.contains(b)); });"
    " if (!RV.ok || !hxArmed) return;"
    " var B = L.querySelector('.x_mPanel'), E = 'cubic-bezier(.16,1,.3,1)';"
    " if (B && B.animate) { B.animate([{ opacity: 0, translate: '0 40px' }, { opacity: 1, translate: '0 0' }], { duration: 550, easing: 'cubic-bezier(.33,1,.68,1)', fill: 'backwards' });"
    " var I = B.querySelector('.x_mImg'), G = B.querySelector('.x_mImg img');"
    " if (I) I.animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: 600, delay: 50, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'backwards' });"
    " if (G) G.animate([{ transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 900, delay: 50, easing: E, fill: 'backwards' }); }"
    " $$('[data-rvg=\"hxc\"]', L).forEach(function (el, k) { var rv = makeRv(el); if (rv.tw) rv.tw.kill(); rv.played = false;"
    " rv.played = true; if (rv.lines.length) { gsap.set(rv.lines, { yPercent: 100 }); rv.tw = gsap.to(rv.lines, { yPercent: 0, duration: 0.5, stagger: 0.03, delay: 0.08 + k * 0.025, ease: 'power3.out' }); } }); }")
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
.x_mPanel:not(.x_on) { visibility: hidden; }
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

# ===================== client revisions, 6 November 2026 ("Revision 6 November", Rushikesh) =====================
import json as _json

# intro figures: inauguration second, then the 34 hectares; "37+ strategic partners" in place of "2030 Vision"
sub('<ul class="c_stats"><li><span class="c_statNum" data-count="2020">2020</span><span class="c_statLabel" data-reveal>Silal was established</span></li><li><span class="c_statNum" data-count="34">34</span><span class="c_statLabel" data-reveal>hectare parcel of land<br>adjacent to Al Foah Farm</span></li><li><span class="c_statNum" data-count="2024">2024</span><span class="c_statLabel" data-reveal>iO Official Inauguration</span></li><li><span class="c_statNum" data-count="2030">2030</span><span class="c_statLabel" data-reveal>Vision</span></li></ul>',
    '<ul class="c_stats"><li><span class="c_statNum" data-count="2020">2020</span><span class="c_statLabel" data-reveal>Silal was established</span></li><li><span class="c_statNum" data-count="2024">2024</span><span class="c_statLabel" data-reveal>iO Official Inauguration</span></li><li><span class="c_statNum" data-count="34">34</span><span class="c_statLabel" data-reveal>hectare parcel of land<br>adjacent to Al Foah Farm</span></li><li><span class="c_statNum"><span data-count="37">37</span>+</span><span class="c_statLabel" data-reveal>strategic partners</span></li></ul>')

# section order: the Method helix right under the intro brief; the 3D site after the Arid Advantage (it sets the site up)
_marks = {"site": '<div class="c_curtain" id="siteCurtain"', "map": '<section class="c_section c_white hm_map"',
          "why": '<section class="c_why', "helix": '<div class="c_curtain" id="helixCurtain"',
          "journey": '<div class="c_curtain" id="jCurtain"', "press": '<section class="c_section c_white hm_press"'}
_pos = {k: h.index(v) for k, v in _marks.items()}
_pos["principles"] = h.index('<section class="c_section c_white">', _pos["why"])
_order = sorted(_pos, key=_pos.get)
_end = h.index("</main>", _pos["press"]) if "</main>" in h[_pos["press"]:] else None
_blocks = {}
for _k, _n in zip(_order, _order[1:] + [None]):
    _blocks[_k] = h[_pos[_k]:(_pos[_n] if _n else h.index("</section>", _pos["press"]) + len("</section>"))]
_first, _last = _pos[_order[0]], _pos["press"] + len(_blocks["press"])
h = h[:_first] + "".join(_blocks[k] for k in ["helix", "map", "why", "site", "principles", "journey", "press"]) + h[_last:]

# map: pressures become filters that layer a heat map onto the world (Operational complexity removed; illustrative)
def _lonlat(x, y):
    return x * 360 / 696 - 177.5, 85 - y * 145 / 285
def _box(lon, lat, b):
    return b[0] <= lon <= b[1] and b[2] <= lat <= b[3]
_L = {  # level 1..3 per region box (lon0, lon1, lat0, lat1); highest box wins
 "heat": [(3, (-17, 35, 14, 32)), (3, (35, 60, 12, 33)), (3, (50, 72, 24, 32)), (3, (68, 78, 21, 30)), (3, (115, 145, -32, -18)),
          (3, (-118, -102, 22, 35)), (2, (12, 26, -29, -17)), (2, (-80, -35, -15, 12)), (2, (8, 30, -5, 8)), (2, (90, 125, -10, 22)),
          (2, (70, 90, 8, 28)), (2, (-110, -80, 8, 22)), (1, (-125, -75, 30, 40)), (1, (-10, 45, 33, 42)), (1, (60, 120, 30, 42)), (1, (-70, -50, -35, -15))],
 "water": [(3, (-17, 62, 14, 38)), (3, (60, 78, 20, 35)), (2, (50, 72, 36, 47)), (2, (95, 120, 34, 43)), (2, (-122, -100, 22, 38)),
           (2, (115, 145, -33, -20)), (2, (14, 30, -34, -20)), (2, (-75, -68, -32, -5)), (2, (-17, 40, 10, 14)), (1, (70, 88, 10, 20)), (1, (-10, 30, 36, 44))],
 "salt": [(3, (44, 60, 20, 32)), (3, (40, 50, 29, 37)), (3, (66, 75, 23, 32)), (3, (55, 70, 38, 46)), (2, (25, 35, 27, 32)),
          (2, (113, 150, -37, -25)), (2, (-122, -110, 32, 40)), (2, (-66, -58, -38, -28)), (1, (115, 125, 35, 42)), (1, (-10, 12, 28, 36))],
 "soil": [(3, (-17, 40, 10, 18)), (2, (-17, 35, 18, 32)), (2, (35, 60, 14, 32)), (2, (68, 88, 10, 30)), (2, (100, 115, 33, 40)),
          (2, (115, 145, -33, -18)), (2, (-45, -35, -12, -3)), (2, (55, 72, 36, 46)), (2, (30, 45, -5, 12)), (1, (43, 51, -26, -12)), (1, (-110, -95, 20, 32))],
}
def _lvl(layer, lon, lat):
    return max([v for v, b in _L[layer] if _box(lon, lat, b)] or [0])
def _dot(m):
    cls, attrs = m.group(1), m.group(2)
    if cls == "hm_u":
        return m.group(0)
    attrs = _re.sub(r' data-k="\d+"', "", attrs)
    x = float(_re.search(r'cx="([\d.]+)"', attrs).group(1)); y = float(_re.search(r'cy="([\d.]+)"', attrs).group(1))
    lon, lat = _lonlat(x, y)
    lv = "".join(str(_lvl(k, lon, lat)) for k in ("heat", "water", "salt", "soil"))
    d = round(((x - 447.5) ** 2 + (y - 120) ** 2) ** .5)
    return f'<circle class="hm_d" data-p="{lv}" data-d="{d}"{attrs}/>'
_ms = h.index('<svg class="hm_svg"'); _me = h.index('</svg>', _ms)
_svg = _re.sub(r'<circle class="(hm_l|hm_a|hm_u)"([^>]*?)/>', _dot, h[_ms:_me])
_svg = _svg.replace('<circle class="hm_u"', '<circle class="hm_ring" cx="447.5" cy="120.0" r="7"/><circle class="hm_u"', 1)
h = h[:_ms] + _svg + h[_me:]
sub('aria-label="Dot map of the world with arid and semi-arid regions highlighted around the UAE"',
    'aria-label="Illustrative heat map of the world: heat, water scarcity, salinity and soil quality, with the UAE marked"')
sub('<div class="hm_legend"><span class="hm_k hm_kU">UAE</span><span class="hm_k hm_kA">Arid and semi-arid regions</span><em>Illustrative</em></div>',
    '<div class="hm_legend"><span class="hm_k hm_kU">UAE</span><span class="hm_scale" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="hm_scaleTxt">Lower to higher pressure</span><em>Illustrative</em></div>')
sub('<ul class="hm_chips"><li><span data-reveal>Heat</span></li><li><span data-reveal>Water scarcity</span></li><li><span data-reveal>Salinity</span></li><li><span data-reveal>Soil quality</span></li><li><span data-reveal>Operational complexity</span></li></ul>',
    '<ul class="hm_chips" aria-label="Show pressures on the map"><li><button type="button" aria-pressed="true" data-layer="0">Heat</button></li><li><button type="button" aria-pressed="true" data-layer="1">Water scarcity</button></li><li><button type="button" aria-pressed="true" data-layer="2">Salinity</button></li><li><button type="button" aria-pressed="true" data-layer="3">Soil quality</button></li></ul>')
sub("""  var mapSec = $('#mapSec'), arid = $$('.hm_a').sort(function (a, b) { return a.dataset.k - b.dataset.k; }), lit = 0;
  function mapProgress() {
    var r = mapSec.getBoundingClientRect(), vh = innerHeight;
    var p = reduce ? 1 : clamp((vh * 0.9 - r.top) / (vh * 0.7), 0, 1), want = Math.round(p * arid.length);
    if (want === lit) return;
    for (var i = Math.min(lit, want); i < Math.max(lit, want); i++) { if (i < want) arid[i].setAttribute('data-on', ''); else arid[i].removeAttribute('data-on'); }
    lit = want;
  }""", """  // heat map (rev. 6 Nov): each pressure is a filter; the active ones are averaged per dot, spreading out from the UAE as it scrolls in
  var mapSec = $('#mapSec'), hmDots = $$('.hm_d').map(function (c) { return { el: c, d: +c.dataset.d, p: c.dataset.p.split('').map(Number), lv: -1 }; }),
      hmOn = [1, 1, 1, 1], hmR = -1, hmMax = 460;
  function hmPaint(force) {
    var n = hmOn.reduce(function (a, b) { return a + b; }, 0);
    hmDots.forEach(function (o) {
      var lv = 0;
      if (o.d <= hmR && n) { var s = 0; for (var k = 0; k < 4; k++) if (hmOn[k]) s += o.p[k]; lv = Math.round(s / n); if (!lv && s) lv = 1; }
      if (lv !== o.lv || force) { o.lv = lv; o.el.setAttribute('data-lv', lv); }
    });
  }
  $$('#mapSec .hm_chips button').forEach(function (b) {
    b.addEventListener('click', function () { var k = +b.dataset.layer; hmOn[k] = hmOn[k] ? 0 : 1; b.setAttribute('aria-pressed', hmOn[k] ? 'true' : 'false'); hmPaint(true); });
  });
  function mapProgress() {
    var r = mapSec.getBoundingClientRect(), vh = innerHeight;
    var p = reduce ? 1 : clamp((vh * 0.9 - r.top) / (vh * 0.7), 0, 1), want = Math.round(p * hmMax);
    if (want === hmR) return;
    hmR = want; hmPaint(false);
  }""")

# the 3D site: far fewer palm trees (roadside rows gone, the farm orchard thinned and muted)
sub('let K=[];for(let C=-60;C<=34;C+=4.4)K.push([C,36.3],[C,40.7]);for(let C=25.5;C<=30.5;C+=2.5)K.push([-10.4,C],[-5.6,C]);for(let C=-33;C<=33;C+=4.2)K.push([C,23.4]);',
    'let K=[];for(let C=-10.4;C<=-5.6;C+=4.8)K.push([C,28]);')
sub('Le=540,Ce=new tn(new gn(.07,.11,1.8,6),M("#c9bfae"),Le),ht=new tn(ae,M("#9db58c"),Le)',
    'Le=120,Ce=new tn(new gn(.07,.11,1.8,6),M("#d6cfc2"),Le),ht=new tn(ae,M("#b9c6a7"),Le)')
sub('for(let C=0;C<18;C++)for(let N=0;N<30;N++){let j=43+C*3.1', 'for(let C=0;C<4;C++)for(let N=0;N<30;N++){let j=43+C*3.1')

# the 3D site: each place opens a slideshow of the real space (photos for now; a video can take a slot later)
_G = [  # one list per TOUR stop, same order
 ["photos/Archive/Screenshot 2026-09-24 164012.jpg", "photos/Archive/Screenshot 2026-09-24 163505.jpg", "photos/Archive/Screenshot 2026-09-24 163545.jpg"],
 ["photos/Professional Facility Photos (1)/PA__1211-Edit-Edit.jpg", "photos/Professional Facility Photos (1)/PA__1065.jpg", "photos/General MarCom Photos (1)/SAM_8874.jpg"],
 ["photos/Professional Facility Photos (1)/PA__1405.jpg", "photos/Professional Facility Photos (1)/PA__1410.jpg", "photos/Professional Facility Photos (1)/PA__1281.jpg", "photos/Professional Facility Photos (1)/PA__1285.jpg"],
 ["photos/General MarCom Photos (1)/PA__1490.jpg", "photos/General MarCom Photos (1)/PA__1526.jpg", "photos/Professional Facility Photos (1)/PA__1464.jpg", "photos/Professional Facility Photos (1)/PA__1488.jpg"],
 ["photos/Archive/Screenshot 2026-09-24 163612.jpg", "photos/Archive/Screenshot 2026-09-24 163836.jpg", "photos/Archive/Screenshot 2026-09-24 163545.jpg"],
 ["photos/General MarCom Photos (1)/SAM_9200.jpg", "photos/General MarCom Photos (1)/SMJ_2763.jpg", "photos/General MarCom Photos (1)/DSC04723 (1).jpg"],
 ["photos/Archive/Screenshot 2026-09-24 163505.jpg", "photos/Archive/Screenshot 2026-09-24 163812.jpg", "photos/Archive/Screenshot 2026-09-24 164012.jpg"],
]
GALLERY_FILES = sorted({p for g in _G for p in g})
sub('<span class="c_mapCount" id="siteCount">01 <i>/ 07</i></span></div>',
    '<span class="c_mapCount" id="siteCount">01 <i>/ 07</i></span><button type="button" class="x_galOpen" id="siteGalOpen"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="m4 11 3-3 2 2 2-2 2 3" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>See the real space</button></div>')
_GAL_HTML = ('<div class="x_gal" id="siteGal" role="dialog" aria-modal="true" aria-labelledby="siteGalTitle" hidden>'
             '<div class="x_galTop"><p class="x_galTitle" id="siteGalTitle"></p><span class="x_galCount" id="siteGalCount"></span>'
             '<button type="button" class="x_galClose" aria-label="Close">&times;</button></div>'
             '<div class="x_galStage"><button type="button" class="x_galNav" data-d="-1" aria-label="Previous photo">&larr;</button>'
             '<figure class="x_galFig"><img id="siteGalImg" alt=""></figure>'
             '<button type="button" class="x_galNav" data-d="1" aria-label="Next photo">&rarr;</button></div>'
             '<div class="x_galThumbs" id="siteGalThumbs"></div></div>')
sub('</main>', _GAL_HTML + '</main>')
_GAL_JS = """
<script>
/* rev. 6 Nov: the site model's places open a slideshow of the real space */
(function () {
  var G = %s, gal = document.getElementById('siteGal'), img = document.getElementById('siteGalImg'), th = document.getElementById('siteGalThumbs'),
      title = document.getElementById('siteGalTitle'), count = document.getElementById('siteGalCount'), open = document.getElementById('siteGalOpen'), set = [], k = 0, last = null;
  if (!gal || !open) return;
  function cur() { var on = document.querySelector('#siteIndex button[data-on="true"]'); return on ? +on.dataset.i : 0; }
  function show(i) { k = (i + set.length) %% set.length; img.src = set[k]; count.textContent = (k + 1) + ' / ' + set.length;
    [].forEach.call(th.children, function (b, j) { b.setAttribute('aria-current', j === k ? 'true' : 'false'); }); }
  function openGal(i) { var s = i == null ? cur() : i; set = G[s] || []; if (!set.length) return; last = document.activeElement;
    var lab = document.querySelector('#siteIndex button[data-i="' + s + '"] b'); title.textContent = lab ? lab.textContent : '';
    th.innerHTML = set.map(function (p, j) { return '<button type="button" aria-label="Photo ' + (j + 1) + '"><img src="' + p.replace(/"/g, '&quot;') + '" alt=""></button>'; }).join('');
    [].forEach.call(th.children, function (b, j) { b.addEventListener('click', function () { show(j); }); });
    gal.hidden = false; document.documentElement.classList.add('x_galLock'); show(0); gal.querySelector('.x_galClose').focus(); }
  function closeGal() { gal.hidden = true; document.documentElement.classList.remove('x_galLock'); if (last) last.focus(); }
  open.addEventListener('click', function () { openGal(); });
  document.querySelector('.c_mapImg').addEventListener('click', function (e) { if (e.target.closest('button')) return; openGal(); });
  gal.querySelector('.x_galClose').addEventListener('click', closeGal);
  [].forEach.call(gal.querySelectorAll('.x_galNav'), function (b) { b.addEventListener('click', function () { show(k + +b.dataset.d); }); });
  gal.addEventListener('click', function (e) { if (e.target === gal) closeGal(); });
  document.addEventListener('keydown', function (e) { if (gal.hidden) return; if (e.key === 'Escape') closeGal(); else if (e.key === 'ArrowRight') show(k + 1); else if (e.key === 'ArrowLeft') show(k - 1); });
})();
</script>
""" % _json.dumps(_G)
h = h.replace("</body>", _GAL_JS + "</body>") if "</body>" in h else h + _GAL_JS

CSS += """
/* ---- revisions 6 November ---- */
/* navbar: only the page you are on is underlined; hover/focus no longer draws the line, so nothing looks selected by accident */
.s_navItem:hover > a:not([data-active="true"])::after, .s_navItem:focus-within > a:not([data-active="true"])::after { transform: scaleX(0); }
/* heat map */
.hm_d { fill: #dcdcdc; transition: fill .5s ease; }
.hm_d[data-lv="1"] { fill: #a9d6ea; } .hm_d[data-lv="2"] { fill: #4fb0da; } .hm_d[data-lv="3"] { fill: #156a96; }
.hm_u { fill: #e0582f; } .hm_ring { fill: none; stroke: #e0582f; stroke-width: 1.2; opacity: .7; transform-origin: 447.5px 120px; animation: hmPulse 2.4s ease-out infinite; }
@keyframes hmPulse { from { transform: scale(.4); opacity: .9; } to { transform: scale(1.8); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .hm_ring { animation: none; } }
.hm_kU::before { background: #e0582f; }
.hm_scale { display: inline-flex; gap: 3px; } .hm_scale i { width: 14px; height: 7px; border-radius: 2px; background: #dcdcdc; }
.hm_scale i:nth-child(2) { background: #a9d6ea; } .hm_scale i:nth-child(3) { background: #4fb0da; } .hm_scale i:nth-child(4) { background: #156a96; }
.hm_scaleTxt { margin-left: -14px; }
.hm_chips li { padding: 0; border: 0; background: none; box-shadow: none; }
.hm_chips button { font: inherit; font-size: .75rem; padding: 8px 14px 8px 30px; border: 1px solid var(--line); border-radius: 4px; background: #fff; color: var(--charcoal); cursor: pointer; position: relative; box-shadow: 0 6px 16px -12px rgba(40, 36, 35, .25); transition: background .25s, color .25s, border-color .25s; }
.hm_chips button::before { content: ""; position: absolute; left: 11px; top: 50%; width: 11px; height: 11px; margin-top: -6px; border-radius: 3px; border: 1.5px solid currentColor; }
.hm_chips button[aria-pressed="true"] { background: var(--io-ink); border-color: var(--io-ink); color: #fff; }
.hm_chips button[aria-pressed="true"]::before { background: #fff; box-shadow: inset 0 0 0 2px var(--io-ink); }
.hm_chips button:focus-visible { outline: 2px solid var(--io); outline-offset: 2px; }
@media (max-width: 760px) { .hm_chips button { font-size: .6875rem; padding: 6px 10px 6px 26px; } .hm_chips button::before { left: 9px; width: 10px; height: 10px; margin-top: -5px; } }
/* site model: the real space */
.c_mapImg { cursor: zoom-in; }
/* rev. 9 Nov (client comment on "The Arid Advantage": "remove shadow"): no curtain shadow under the chapter, no dark fade on the photo */
.c_why.c_chapter, .hm_map, .c_section.c_white { box-shadow: none !important; }
.c_whySticky::after { display: none !important; }
.x_galOpen { position: absolute; right: 10px; bottom: 10px; z-index: 2; display: inline-flex; align-items: center; gap: 7px; font: inherit; font-size: .6875rem; font-weight: 500; letter-spacing: .02em; padding: 7px 11px; border: 0; border-radius: 999px; background: rgba(255, 255, 255, .92); color: var(--io-ink); cursor: pointer; box-shadow: 0 6px 16px -8px rgba(0, 0, 0, .35); }
.x_galOpen:hover { background: #fff; }
.x_gal { position: fixed; inset: 0; z-index: 120; background: rgba(18, 22, 24, .94); display: grid; grid-template-rows: auto 1fr auto; padding: clamp(14px, 3vh, 28px) clamp(14px, 3vw, 40px); color: #fff; }
.x_gal[hidden] { display: none; }
html.x_galLock { overflow: hidden; }
.x_galTop { display: flex; align-items: center; gap: 18px; }
.x_galTitle { margin: 0; font-size: 1.125rem; font-weight: 400; } .x_galCount { font-size: .8125rem; opacity: .7; font-variant-numeric: tabular-nums; }
.x_galClose { margin-left: auto; width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, .35); background: none; color: #fff; font-size: 1.5rem; line-height: 1; cursor: pointer; }
.x_galStage { display: grid; grid-template-columns: 48px minmax(0, 1fr) 48px; align-items: center; gap: 12px; min-height: 0; }
.x_galFig { margin: 0; height: 100%; min-height: 0; display: grid; place-items: center; }
.x_galFig img { max-width: 100%; max-height: 72vh; object-fit: contain; border-radius: 4px; }
.x_galNav { width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, .35); background: none; color: #fff; font-size: 1.25rem; cursor: pointer; }
.x_galNav:hover, .x_galClose:hover { background: rgba(255, 255, 255, .12); }
.x_galThumbs { display: flex; gap: 8px; justify-content: center; padding-top: 14px; overflow-x: auto; }
.x_galThumbs button { width: 84px; height: 56px; padding: 0; border: 2px solid transparent; border-radius: 4px; overflow: hidden; background: none; cursor: pointer; opacity: .6; flex: none; }
.x_galThumbs button[aria-current="true"] { border-color: #fff; opacity: 1; }
.x_galThumbs img { width: 100%; height: 100%; object-fit: cover; display: block; }
@media (max-width: 760px) { .x_galStage { grid-template-columns: 36px minmax(0, 1fr) 36px; gap: 6px; } .x_galNav { width: 36px; height: 36px; } .x_galThumbs button { width: 60px; height: 40px; } }
"""

last = h.rindex("</style>", 0, h.index('<header class="s_header"'))
h = h[:last] + CSS + h[last:]
open(dst, "w", encoding="utf8").write(h)
print("homepage", len(h))
