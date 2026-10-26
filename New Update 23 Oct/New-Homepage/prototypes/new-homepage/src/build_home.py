#!/usr/bin/env python3
"""Homepage = the About page (build_about.py) + sections reused from other variations:
   - The Site: V1 About D 3D model (SiteModel.tsx ported to a vanilla module, bundled with esbuild)
   - Press feature: V2 news 'Latest release' (its CSS rules, prefixed)
   - World map + helix 'where do you want to look first?': new, from the client's PDFs."""
import re, json, pathlib, html, math

import build_about as A   # reuses css / header / footer / hero / intro / why / princ / jour / js (side effect: rewrites art/about.html)

HERE = pathlib.Path(__file__).parent
OUT = HERE / "home"
e = html.escape

# ---------------------------------------------------------------- CSS: V2 news rules, prefixed n_
news_css = pathlib.Path("/home/user/silal-io/app/V2/(news)/resources/news/news.module.css").read_text()


def top_blocks(css):
    out, i, n = [], 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j < 0:
            break
        sel = css[i:j].strip()
        depth, k = 1, j + 1
        while depth and k < n:
            depth += (css[k] == "{") - (css[k] == "}")
            k += 1
        out.append((sel, css[j:k]))
        i = k
    return out


WANT = {".row", ".row::before", ".rowPlain", ".rowPlain::before", ".rowNum", ".rowEnd", ".caption", ".caption > span:first-child",
        ".arrowLink,\n.arrowLinkLight", ".arrowLinkLight", ".arrowLink::after,\n.arrowLinkLight::after", ".arrowLink:hover,\n.arrowLinkLight:hover",
        ".arrowLink:hover::after,\n.arrowLinkLight:hover::after", ".figure", ".frame", ".frameInner", ".frameInner img,\n.cardImg img", ".corners",
        ".meta", ".meta > span:first-child:not(.metaCat)", ".metaCat", ".metaCat::before", ".feature", ".feature .frame", ".featureText",
        ".featureTitle", ".featureTitle a", ".featureTitle a:hover", ".featureExcerpt"}
picked = []
for sel, body in top_blocks(re.sub(r"/\*.*?\*/", "", news_css, flags=re.S)):
    key = re.sub(r"[ \t]+", " ", sel)
    if sel in WANT or key in {re.sub(r"[ \t]+", " ", w) for w in WANT}:
        picked.append(f"{sel} {body}")
news_css_out = A.prefix("\n".join(picked), "n_")
news_css_out = news_css_out.replace("var(--io-mist)", "#8fd1ec")

# ---------------------------------------------------------------- data
# 3D tour: order of V1 About D (tour-d.ts); copy from tour.ts / client journey text. Related labels from docs/sitemap.md.
tour = [
    dict(key="overview", title="An Opportunity in the Desert", text="An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born.", img="card_plots", facts=["34 hectares", "Al Foah Farm, Al Ain"], pill="The parcel"),
    dict(key="collab", title="Collaboration spaces", text="Shared spaces where researchers, farmers, startups and partners work side-by-side.", img="card_collab", related=["Incubation", "Accelerator", "Facilities as a Service"]),
    dict(key="labs", title="Laboratories", text="Specialised laboratories where research teams analyse plants, soil, water and food, close to the fields where solutions are tested.", img="card_labs", related=["Analytical Services", "Food Technology", "Precision Breeding & Plant Health"]),
    dict(key="cea", title="Controlled-environment facilities", text="Growth chambers and phenotyping rooms where heat, light and humidity can be set precisely, so crops can be screened before they reach the field.", img="card_cea", related=["Advanced Controlled Environment Ag (CEA)", "Abiotic Resilience & Crop Genomics (ARC-GEN)"]),
    dict(key="fields", title="Field-testing areas", text="Open-field trial plots where solutions face the pressures that define tomorrow’s food system: heat, water scarcity and salinity.", img="card_fields", related=["R&D Trialing", "Soil & Water Research", "Agri Robotics & AI"]),
    dict(key="greenhouses", title="Greenhouses", text="Greenhouses where crops and growing technologies are validated in real production conditions.", img="card_green", related=["Paid Trials", "Crop Diversification Research"]),
    dict(key="masterplan", title="Building the Blueprint", text="A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation.", img="card_master", cta="Virtual Tour", pill="The masterplan"),
]
n_tour = len(tour)

# ---------------------------------------------------------------- Site section (curtain, reuses V1 css c_map*)
site = f"""
<div class="c_curtain" id="siteCurtain" data-on="true">
<section class="c_map c_curtainStick" id="siteSec" aria-label="Innovation Oasis site model">
  <div class="c_mapStage" id="siteStage" aria-hidden="true"></div>
  <div class="c_mapFallback" id="siteFallback" hidden></div>
  <div class="c_mapHead"><span class="c_eyebrow">The site</span><span class="c_mapHint">Scroll to explore · select a place</span></div>
  <aside class="c_mapCard" aria-live="polite">
    <div class="c_mapImg">{"".join(f'<img src="img/{t["img"]}.jpg" alt=""{" data-on=\"true\"" if i == 0 else " loading=lazy"}>' for i, t in enumerate(tour))}<span class="c_mapCount" id="siteCount">01 <i>/ {n_tour:02d}</i></span></div>
    <div class="c_mapBody" id="siteBody"></div>
  </aside>
  <nav class="c_mapIndex" id="siteIndex" aria-label="Site model places">{"".join(f'<button type="button" data-i="{i}" data-on="{"true" if i == 0 else "false"}"><span>{i+1:02d}</span><b>{e(t.get("pill", t["title"]))}</b></button>' for i, t in enumerate(tour))}</nav>
  <span class="c_mapNote">Based on aerial photography · layout indicative</span>
</section>
</div>"""

# ---------------------------------------------------------------- World map section
md = json.load(open(HERE / "hpb" / "mapdots.json"))
SP = 5.0
dots = md["dots"]
W = (md["lon1"] - md["lon0"]) / md["step"] * SP + 10
H = (md["lat1"] - md["lat0"]) / md["step"] * SP + 10
uae = (54.0, 24.0)
circles, arid_i = [], 0
order = []
for lon, lat, t in dots:
    x = (lon - md["lon0"]) / md["step"] * SP + 5
    y = (md["lat1"] - lat) / md["step"] * SP + 5
    if t == 1:
        order.append((math.hypot(lon - uae[0], lat - uae[1]), len(circles)))
    cls = ("hm_a" if t == 1 else "hm_u" if t == 2 else "hm_l")
    r = 2.9 if t == 2 else 1.9
    circles.append(f'<circle class="{cls}" cx="{x:.1f}" cy="{y:.1f}" r="{r}"/>')
order.sort()
rank = {idx: k for k, (_, idx) in enumerate(order)}
circles = [c.replace('class="hm_a"', f'class="hm_a" data-k="{rank[i]}"') if 'hm_a' in c else c for i, c in enumerate(circles)]
n_arid = len(order)
mapsec = f"""
<section class="c_section c_white hm_map" id="mapSec" data-n="{n_arid}">
  <div class="s_wrap">
    <div class="hm_grid">
      <h2 class="hm_stmt">Conditions once considered unique to the UAE are becoming increasingly common elsewhere.</h2>
      <div class="hm_side">
        <svg class="hm_svg" viewBox="0 0 {W:.0f} {H:.0f}" role="img" aria-label="Dot map of the world with arid and semi-arid regions highlighted around the UAE">{"".join(circles)}</svg>
        <div class="hm_legend"><span class="hm_k hm_kU">UAE</span><span class="hm_k hm_kA">Arid and semi-arid regions</span><em>Illustrative</em></div>
        <ul class="hm_chips">{"".join(f"<li>{x}</li>" for x in ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"])}</ul>
      </div>
    </div>
  </div>
</section>"""

# ---------------------------------------------------------------- Helix section ("Where do you want to look first?")
# 3D helix = the client's helix_3d.gltf (welded to helix.glb); cards + order of steps = helix flow 01..05 of the client PDFs.
# Background = the photo of the highlighted card, blurred (one layer per step, cross-faded).
flows = [  # rung (0 = top), card centre x, image top y, image, title, text
    (1, 386, 267, "hx_research", "Research &amp; Science", "Driving agricultural progress through research and discovery."),
    (2, 1037, 302, "hx_innov", "Innovation &amp; Venture Platforms", "Supporting innovation from idea to impact."),
    (3, 1029, 342, "hx_tech", "Technology &amp; Services", "Solutions designed for real-world challenges."),
    (4, 400, 380, "hx_centres", "Centres of Excellence", "Advancing agriculture through specialised expertise."),
    (5, 304, 415, "hx_talent", "Talent &amp; Training", "Empowering the next generation of innovators."),
]
def card_html(i, r, x, y, im, t, d):
    return f'<figure class="hx_card" data-i="{i}" data-rung="{r}" style="left:{x}px;top:{y}px"><span class="hx_img"><img src="img/{im}.jpg" alt="" loading="lazy"></span><figcaption><b>{t}</b><span>{d}</span></figcaption></figure>'
# one layer per step = blurred photo + tint + that step's card: the circle mask reveals the whole layer, so the previous card is covered by it
bgs = "".join(f'<div class="hx_bgimg" data-i="{i}"><i class="hx_bgin" style="background-image:url(img/bg_{i}.jpg)"></i><div class="hx_tint"></div><div class="hx_stage">{card_html(i, *f)}</div></div>' for i, f in enumerate(flows))
helix = f"""
<div class="c_curtain" id="helixCurtain" data-on="true">
<section class="hx c_curtainStick" id="helixSec" aria-label="Where do you want to look first?" data-hxstep="0">
  <div class="hx_bg"></div>
  <div class="hx_bgs" id="hxBgs">{bgs}</div>
  <div class="hx_gl" id="hxGL" aria-hidden="true"></div>
  <p class="hx_title">This is Innovation Oasis. Where do you want to look first?</p>
</section>
</div>"""

# ---------------------------------------------------------------- Press feature (V2 news 'Latest release')
press = """
<section class="c_section c_white hm_press" aria-label="Latest release">
  <div class="s_wrap">
    <p class="n_row n_rowPlain"><span class="c_eyebrow">Latest release</span><span class="n_rowEnd">26 Nov 2025</span></p>
    <article class="n_feature">
      <figure class="n_figure">
        <a href="#" class="n_frame" tabindex="-1" aria-hidden="true"><div class="n_frameInner" data-parallax="11"><img src="img/press.jpg" alt="" loading="lazy"></div><span class="n_corners"></span></a>
        <figcaption class="n_caption"><span>Fig. 01</span>FoodTech Challenge winners on stage</figcaption>
      </figure>
      <div class="n_featureText">
        <p class="n_meta"><time datetime="2025-11-26">26 Nov 2025</time><span class="n_metaCat">Programmes</span></p>
        <h2 class="n_featureTitle"><a href="#">FoodTech Challenge winners recognised at Innovation Oasis</a></h2>
        <p class="n_featureExcerpt">Startups developing technologies for arid-climate agriculture were recognised after a final round of pitches to partners and investors.</p>
        <a href="#" class="n_arrowLink">Read the release</a>
      </div>
    </article>
  </div>
</section>"""

# ---------------------------------------------------------------- CSS (new sections only)
home_css = r"""
/* ---- text reveal ---- */
.rv [data-reveal] { visibility: hidden; }
span[data-reveal], b[data-reveal], time[data-reveal] { display: inline-block; }
b[data-reveal] { font-weight: inherit; }
[data-reveal] [class*="-mask"], [data-reveal][class*="-mask"] { padding-bottom: 0.12em; margin-bottom: -0.12em; }

/* ============ homepage: new sections ============ */
.c_page { padding-bottom: 0; }
/* the intro sits above the pinned 3D panel: it needs its own solid ground so the panel does not show through */
.c_page .c_intro { background: var(--light); }
.c_introRight { display: flex; flex-direction: column; align-items: flex-start; }
.c_introBtn { margin-top: 28px; }
.n_wrap { }
.c_page { --grey-ink: #6e7173; --slow: cubic-bezier(0.16, 1, 0.3, 1); }
.hm_press { padding-top: clamp(72px, 8vw, 140px); padding-bottom: clamp(96px, 10vw, 170px); --grey-ink: #6e7173; --slow: cubic-bezier(0.16, 1, 0.3, 1); font-size: 17px; }
.n_frame { aspect-ratio: 16 / 10; }
.n_frameInner img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.n_frameInner { inset: -14% 0; will-change: transform; }
.n_figure { min-width: 0; }
.n_featureText { min-width: 0; }
@media (max-width: 900px) { .n_feature { grid-template-columns: 1fr; } }

/* --- world map section --- */
.hm_map { padding-block: clamp(80px, 9vw, 150px); }
.hm_grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: 40px; align-items: center; }
.hm_stmt { grid-column: 2 / span 4; font-size: clamp(1.75rem, 2.7vw, 2.9rem); font-weight: 300; line-height: 1.12; letter-spacing: -0.025em; color: var(--charcoal); }
.hm_side { grid-column: 7 / span 6; min-width: 0; }
.hm_svg { display: block; width: 100%; height: auto; overflow: visible; }
.hm_l { fill: #d4d4d4; }
.hm_a { fill: #d4d4d4; transition: fill .6s ease; }
.hm_a[data-on] { fill: var(--io); }
.hm_u { fill: var(--io-ink); }
.hm_legend { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 22px; margin-top: 14px; font-size: .75rem; color: var(--charcoal); }
.hm_k::before { content: ""; display: inline-block; width: 7px; height: 7px; border-radius: 50%; margin-right: 7px; vertical-align: 1px; }
.hm_kU::before { background: var(--io-ink); }
.hm_kA::before { background: var(--io); }
.hm_legend em { margin-left: auto; font-style: normal; font-size: .6875rem; color: var(--grey); }
.hm_chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
.hm_chips li { padding: 8px 14px; border: 1px solid var(--line); border-radius: 4px; background: #fff; font-size: .75rem; color: var(--charcoal); box-shadow: 0 6px 16px -12px rgba(40, 36, 35, .25); }
@media (max-width: 1000px) { .hm_stmt, .hm_side { grid-column: 1 / -1; } }

/* --- mobile: map labels in proportion to the map; helix card below the helix, never cut off --- */
@media (max-width: 760px) {
  .hm_map { padding-block: 64px; }
  .hm_stmt { font-size: clamp(1.4rem, 6.2vw, 1.75rem); }
  .hm_legend { font-size: .625rem; gap: 6px 14px; margin-top: 10px; }
  .hm_legend em { font-size: .5625rem; }
  .hm_k::before { width: 5px; height: 5px; margin-right: 5px; }
  .hm_chips { gap: 6px; margin-top: 16px; }
  .hm_chips li { padding: 5px 9px; font-size: .625rem; }
  .hx_stage { left: 0; top: 0; width: 100%; height: 100%; margin: 0; transform: none; }
  .hx_card { left: 50% !important; top: auto !important; bottom: 6%; width: min(300px, calc(100vw - 40px)); margin-left: calc(min(300px, calc(100vw - 40px)) / -2); }
  .hx_img { width: 210px; height: 141px; margin-bottom: 10px; }
  .hx_card b { font-size: 16px; }
  .hx_card figcaption span { font-size: 13px; }
  .hx_title { top: 84px; font-size: 13px; }
  .n_frameInner { inset: -26% 0; }
}
/* navbar: optical centring, the logo's ink and the link text sat ~1-2px high in the bar */
.s_logo { padding-top: 0; }
.s_logoFull > span > span { align-items: center !important; }
.s_logoFull img:first-child { height: 46px; width: auto; }
.s_logoFull img:last-child { height: 46px; width: auto; }
.s_navItem > a { padding-top: 2px; }
/* journey timeline (unpinned layout): the dots sit on the line */
@media (max-width: 1000px) { .j_jourLine { inset-inline-start: -32px; } }
/* --- helix: where do you want to look first? (client PDFs, flows 01-05; 3D from helix_3d.gltf) --- */
.hx { position: relative; overflow: hidden; color: #fff; background: #7a3b1c; }
.hx_bg, .hx_bgs, .hx_bgimg, .hx_gl { position: absolute; inset: 0; }
.hx_bg { background: #3DA7CF; } /* intro: Silal blue */
/* circle mask on the section photo (from the centre, small to large) + parallax zoom; cards enter/exit with a rise + scale in step with it. Driven by scroll, no timed fades. */
.hx_bgs { z-index: 0; isolation: isolate; }
.hx_gl { z-index: 2; transform: translateY(var(--hy, 0px)); }
.hx_bgimg { overflow: hidden; clip-path: inset(0 0 0 0); visibility: hidden; will-change: clip-path; }
.hx_bgin { position: absolute; left: 0; right: 0; top: -12%; bottom: -12%; background-size: cover; background-position: center; will-change: transform; }
.hx_tint, .hx_gl { position: absolute; inset: 0; }
.hx_bg { background-size: cover; background-position: center; }
/* no fades in this section: photo + card switch instantly with the step (same as the other scroll sections) */
.hx_bgimg { background-size: cover; background-position: center; visibility: hidden; transform: scale(1.06); }
.hx_bgimg[data-on] { visibility: visible; }
.hx_bgimg[data-on] { opacity: 1; transform: scale(1.06); }
.hx_tint { background: linear-gradient(180deg, rgba(0, 0, 0, .22) 0%, rgba(0, 0, 0, .30) 55%, rgba(0, 0, 0, .42) 100%); }
.hx_gl canvas { display: block; width: 100%; height: 100%; }
.hx_stage { position: absolute; left: 50%; top: 50%; width: 1440px; height: 931px; margin: -465.5px 0 0 -720px; transform: translateY(var(--hy, 0px)) scale(var(--hs, 1)); transform-origin: 50% 50%; pointer-events: none; }
/* the title sits below the sticky header (it was hidden behind it on desktop) */
.hx_title { position: absolute; left: 0; right: 0; top: 104px; z-index: 4; margin: 0; padding-inline: 16px; text-align: center; font-size: 14px; font-weight: 500; text-shadow: 0 1px 10px rgba(0, 0, 0, .3); }
.hx_card { position: absolute; margin: 0; width: 300px; margin-left: -150px; text-align: center; pointer-events: none; will-change: transform; }
.hx_img { display: block; width: 260px; height: 175px; margin: 0 auto 14px; border-radius: 14px; overflow: hidden; border: 1px solid rgba(255, 255, 255, .55); box-shadow: 0 18px 40px -18px rgba(40, 14, 0, .6); }
.hx_img img { width: 100%; height: 100%; object-fit: cover; }
.hx_card figcaption { display: flex; flex-direction: column; gap: 6px; text-shadow: 0 1px 8px rgba(0, 0, 0, .35); }
.hx_card b { font-size: 17px; font-weight: 600; letter-spacing: -0.01em; }
.hx_card figcaption span { font-size: 14px; line-height: 1.5; color: rgba(255, 255, 255, .92); }
"""

# ---------------------------------------------------------------- page-specific JS
tour_json = json.dumps([dict(key=t["key"], title=t["title"], text=t["text"], facts=t.get("facts"), related=t.get("related"), cta=t.get("cta"), pill=t.get("pill")) for t in tour], ensure_ascii=False)
home_js = r"""
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  function sh() { return Math.max(innerHeight, 680); }
  // progress through a pinned curtain: 0 when the section above has fully lifted off, 1 after `len` px
  function pin(wrap, factor) {
    var len = Math.round(factor * innerHeight); wrap.style.setProperty('--len', len + 'px');
    return clamp((-wrap.getBoundingClientRect().top - sh()) / len, 0, 1);
  }
  function scrollToPin(wrap, f, factor) {
    var len = Math.round(factor * innerHeight), y = wrap.getBoundingClientRect().top + scrollY + sh() + f * len + 2;
    if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.6 }); else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* ---------- The Site: V1's 3D model, driven by scroll ---------- */
  var TOUR = __TOUR__, SITE_F = (TOUR.length - 1) * 0.95;
  var sCurtain = $('#siteCurtain'), sBody = $('#siteBody'), sImgs = $$('.c_mapImg img'), sPills = $$('#siteIndex button'), sCount = $('#siteCount'), model = null, sActive = 0, sPlayed = {}, sCurStop = 0;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function renderStop(i) {
    var t = TOUR[i];
    sImgs.forEach(function (im, k) { im.dataset.on = k === i; });
    sPills.forEach(function (b, k) { b.dataset.on = k === i; });
    sCount.innerHTML = String(i + 1).padStart(2, '0') + ' <i>/ ' + String(TOUR.length).padStart(2, '0') + '</i>';
    var h = '<h3>' + esc(t.title) + '</h3><p>' + esc(t.text) + '</p>';
    if (t.facts) h += '<ul class="c_mapFacts">' + t.facts.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>';
    if (t.related) h += '<div class="c_mapRelated"><span>Related</span><ul>' + t.related.map(function (r) { return '<li><a href="#">' + esc(r) + ' <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a></li>'; }).join('') + '</ul></div>';
    if (t.cta) h += '<a href="#" class="c_mapCta">' + esc(t.cta) + ' ↗</a>';
    sBody.innerHTML = h;
    $$('a[href="#"]', sBody).forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
    sCurStop = i;
    if (typeof RV !== 'undefined' && RV.ok && typeof siteArmed !== 'undefined') { var pre = !!sPlayed[i]; $$('h3, p, .c_mapFacts li, .c_mapRelated a, .c_mapCta', sBody).forEach(function (e) { makeRv(e, pre); }); if (siteArmed && !pre) siteCardText(); }
  }
  renderStop(0);
  sPills.forEach(function (b) { b.addEventListener('click', function () { scrollToPin(sCurtain, +b.dataset.i / (TOUR.length - 1), SITE_F); }); });
  function mountSite() {
    if (model || !window.mountSite) return;
    model = window.mountSite({
      stage: $('#siteStage'), tour: TOUR,
      onActive: function (i) { sActive = i; renderStop(i); },
      onFail: function () { var f = $('#siteFallback'); f.hidden = false; f.style.cssText = 'background:url(img/card_plots.jpg) center/cover'; },
      onJump: function (i) { scrollToPin(sCurtain, i / (TOUR.length - 1), SITE_F); }
    });
    if (model) onScroll();
  }
  if ('IntersectionObserver' in window) { var mo = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { mountSite(); mo.disconnect(); } }, { rootMargin: '900px' }); mo.observe(sCurtain); } else mountSite();

  /* ---------- World map: arid dots light up outward from the UAE as the section scrolls in ---------- */
  var mapSec = $('#mapSec'), arid = $$('.hm_a').sort(function (a, b) { return a.dataset.k - b.dataset.k; }), lit = 0;
  function mapProgress() {
    var r = mapSec.getBoundingClientRect(), vh = innerHeight;
    var p = reduce ? 1 : clamp((vh * 0.9 - r.top) / (vh * 0.7), 0, 1), want = Math.round(p * arid.length);
    if (want === lit) return;
    for (var i = Math.min(lit, want); i < Math.max(lit, want); i++) { if (i < want) arid[i].setAttribute('data-on', ''); else arid[i].removeAttribute('data-on'); }
    lit = want;
  }

  /* ---------- Helix: 3D helix turns with the scroll; one rung + card + blurred photo per step ---------- */
  var hCurtain = $('#helixCurtain'), hSec = $('#helixSec'), cardsEl = $$('.hx_card'), bgsEl = $$('.hx_bgimg'), HX_F = 1.0 * (cardsEl.length + 1), hCur = -2, hxGL = null, hxP = 0, hxE = 0, hxRot = 0;
  function hxScale() {
    var w = hSec.clientWidth, hh = hSec.clientHeight, hs = Math.max(0.5, Math.min(1.35, Math.min(w / 1440, hh / 931)));
    hSec.style.setProperty('--hs', hs.toFixed(3));
    // desktop: title stays near the top; the helix (+ cards) is centred in the space between the title and the bottom edge
    var ttl = $('.hx_title'), hy = 0;
    if (w >= 760) {
      var tt = 104, tH = 23, inkTop = hh / 2 - 160 * hs, ink = 362 * hs, free0 = tt + tH + 20;
      hy = free0 + (hh - free0 - ink) / 2 - inkTop; ttl.style.top = tt + 'px';
    } else ttl.style.top = '';
    hSec.style.setProperty('--hy', Math.round(hy) + 'px');
  }
  var HX_WIN = 0.32; // share of each step used by the transition to the next one (the rest is a hold)
  var ease = function (t) { return t * t * (3 - 2 * t); };
  // slot 0 = intro (helix only, no card yet); slots 1..n = the five places
  function layHx(p) {
    var n = cardsEl.length, m = n + 1, u = Math.min(m - 1e-6, p * m), slot = Math.floor(u), f = u - slot;
    var t = (slot < m - 1 && f > 1 - HX_WIN) ? ease((f - (1 - HX_WIN)) / HX_WIN) : 0, ci = slot - 1, ni = t > 0 ? slot : -1;
    // circle reveal on the section photo only (the card lives in its layer, so the new circle also covers the previous card)
    var R = function (k) { return (k * 74).toFixed(2) + '%'; };
    bgsEl.forEach(function (bg, k) {
      var inn = bg.firstElementChild, vis = k === ci || k === ni;
      bg.style.visibility = vis ? 'visible' : 'hidden'; bg.style.zIndex = k === ni ? 2 : 1;
      if (k === ci) { bg.style.clipPath = 'inset(0 0 0 0)'; inn.style.transform = 'scale(' + (1.06 + t * 0.03).toFixed(3) + ')'; }
      else if (k === ni) { bg.style.clipPath = 'circle(' + R(t) + ' at 50% 50%)'; inn.style.transform = 'scale(' + (1.12 - t * 0.06).toFixed(3) + ')'; }
    });
    cardsEl.forEach(function (c, k) { c.style.transform = k === ni ? 'translate3d(0,' + ((1 - t) * 14).toFixed(1) + 'px,0) scale(' + (0.86 + t * 0.14).toFixed(3) + ')' : 'none'; });
        hxRot = p;   // continuous: the helix keeps turning with the scroll and settles only when the scroll stops
    var cur = t >= 0.5 ? slot : slot - 1;   // -1 = intro, nothing highlighted
    if (cur !== hCur) { hCur = cur; hSec.dataset.hxstep = cur; if (cur >= 0) hxCardText(cardsEl[cur]); if (hxGL) hxGL.highlight(cur >= 0 ? +cardsEl[cur].dataset.rung : -1); }
  }
  function setHx() { layHx(0.0001); }
  function mountHx() {
    if (hxGL || !window.mountHelix) return;
    var b64 = window.__HX_GLB || '', bin = atob(b64), buf = new Uint8Array(bin.length); for (var q = 0; q < bin.length; q++) buf[q] = bin.charCodeAt(q);
    hxGL = window.mountHelix({ host: $('#hxGL'), data: buf.buffer, onFail: function () {} });
    if (hxGL) { hxGL.setScroll(hxRot); hxGL.setEnter(hxE); hxGL.highlight(hCur >= 0 ? +cardsEl[hCur].dataset.rung : -1); }
  }
  if ('IntersectionObserver' in window) { var ho = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { mountHx(); ho.disconnect(); } }, { rootMargin: '1200px' }); ho.observe(hCurtain); } else mountHx();


  /* ---------- Text reveal (Codegrid "Copy"): lines split in an overflow mask, y 100% -> 0, stagger .1, power3.out ---------- */
  var RV = { ok: !!(window.gsap && window.SplitText && window.ScrollTrigger) && !reduce, all: [] };
  if (RV.ok) gsap.registerPlugin(ScrollTrigger, SplitText);
  function makeRv(el, pre) {
    if (el.__rv) return el.__rv;
    var rv = el.__rv = { lines: [], played: !!pre, tw: null };
    SplitText.create(el, { type: 'lines', mask: 'lines', autoSplit: true, aria: 'none', onSplit: function (self) {
      rv.lines = self.lines; gsap.set(rv.lines, { yPercent: rv.played ? 0 : 100 }); el.style.visibility = 'visible';
    } });
    rv.play = function (delay) { if (rv.played) return; rv.played = true; if (rv.tw) rv.tw.kill(); rv.tw = gsap.to(rv.lines, { yPercent: 0, duration: 1, stagger: 0.1, delay: delay || 0, ease: 'power3.out' }); };
    return rv;
  }
  function playAll(els, delay) { els.forEach(function (el) { makeRv(el).play(delay); }); }
  var rvGroups = {}, heroEls = [];
  function initReveal() {
    if (!RV.ok) { document.documentElement.classList.remove('rv'); return; }
    $$('[data-reveal]').forEach(function (el) {
      var g = el.getAttribute('data-rvg'); makeRv(el);
      if (g) { (rvGroups[g] = rvGroups[g] || []).push(el); return; }
      if (el.closest('.c_hero')) { heroEls.push(el); return; }   // hero: plays on load (Copy with animateOnScroll off)
      ScrollTrigger.create({ trigger: el, start: 'top 75%', once: true, onEnter: function () { makeRv(el).play(0); } });
    });
    $$('h3, p, .c_mapFacts li, .c_mapRelated a, .c_mapCta', sBody).forEach(function (e) { makeRv(e); });
    heroEls.forEach(function (el, k) { makeRv(el).play(0.3 + k * 0.12); });
    var at = function (wrap, f, fn) { ScrollTrigger.create({ trigger: wrap, start: function () { return 'top+=' + Math.round(sh() * f) + ' top'; }, once: true, onEnter: fn }); };
    // pinned panels: their text plays when the panel has lifted into view
    at($('#siteCurtain'), 0.6, function () { playAll(rvGroups.site || []); playAll($$('h3, p, .c_mapFacts li, .c_mapRelated a, .c_mapCta', sBody).map(function (e) { return e; }), 0.1); siteArmed = true; });
    at($('#helixCurtain'), 0.05, function () { playAll(rvGroups.helix || []); hxArmed = true; if (hCur >= 0) hxCardText(cardsEl[hCur]); });
    at($('#jCurtain'), 0.7, function () { playAll((rvGroups.jour || []).filter(function (e) { return !e.closest('.j_jourStep') || e.closest('.j_jourStep').hasAttribute('data-on'); })); jrArmed = true; });
    // journey: a step's text plays when that step becomes the active one
    $$('.j_jourStep').forEach(function (st) {
      new MutationObserver(function () { if (jrArmed && st.hasAttribute('data-on')) { playAll($$('[data-reveal]', st), 0.05); } }).observe(st, { attributes: true, attributeFilter: ['data-on'] });
    });
    document.documentElement.classList.remove('rv');
  }
  var siteArmed = false, hxArmed = false, jrArmed = false;
  // helix card text: plays when the card becomes the current step
  function hxCardText(c) { if (!RV.ok || !hxArmed) return; playAll($$('[data-rvg="hxc"]', c), 0.05); }
  // site card text: re-plays for each place
  function siteCardText() { if (!RV.ok || !siteArmed) return; playAll($$('h3, p, .c_mapFacts li, .c_mapRelated a, .c_mapCta', sBody)); sPlayed[sCurStop] = true; }

  function onScroll() {
    if (model) model.setProgress(pin(sCurtain, SITE_F));
    mapProgress();
    // helix: progress runs from the moment its panel starts to uncover (no dead scroll before it); the 3D entrance plays while it is uncovered
    var hl = Math.round(HX_F * innerHeight); hCurtain.style.setProperty('--len', hl + 'px');
    var hr = -hCurtain.getBoundingClientRect().top, p = clamp(hr / (hl + sh()), 0, 1), e = clamp(hr / (sh() * 0.9), 0, 1); hxP = p; hxE = e;
    layHx(p);
    if (hxGL) { hxGL.setScroll(hxRot); hxGL.setEnter(e); }
  }
  hxScale(); setHx(0);
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { setTimeout(function () { initReveal(); onScroll(); }, 60); });
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', function () { hxScale(); onScroll(); });
  onScroll();
})();
""".replace("__TOUR__", tour_json)


# ---------------------------------------------------------------- text reveal (Codegrid "Copy": SplitText lines in an overflow mask, y 100% -> 0, stagger .1, power3.out, once at top 75%)
import re as _re
def tag(html, classes, attr="data-reveal"):
    def f(m):
        toks = m.group(0).split('class="')[1].split('"')[0].split()
        return m.group(0)[:-1] + f" {attr}>" if any(c in toks for c in classes) and attr not in m.group(0) else m.group(0)
    return _re.sub(r'<\w+\s[^>]*class="[^"]*"[^>]*>', f, html)
def wrap_text(html, pattern, repl):
    return _re.sub(pattern, repl, html)

# ---------------------------------------------------------------- patch reused pieces
hero = A.hero.replace('c_eyebrowLight">About Innovation Oasis<', 'c_eyebrowLight">Innovation Oasis<')
intro = A.intro.replace('<p class="c_lead">If solutions can succeed here, they can succeed almost anywhere.</p>', '<p class="c_lead">What it lacked was implementation.</p>')
assert intro != A.intro and hero != A.hero
# client comment (Rushikesh): the 'About IO' button next to the lead was missing
intro = intro.replace('<p class="c_lead">What it lacked was implementation.</p>', '<div class="c_introRight"><p class="c_lead">What it lacked was implementation.</p><a href="/About/V1" class="s_btn s_btnPrimary s_btnSm c_introBtn">About IO ' + A.ARROW + '</a></div>', 1)
assert 'c_introBtn' in intro
intro = intro.replace('<section class="c_section">', '<section class="c_section c_intro">', 1)
a_js = A.js.replace("lenis = new Lenis({ duration: 1.15, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, touchMultiplier: 1.4 });",
                    "lenis = new Lenis({ duration: 1.15, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, touchMultiplier: 1.4 }); window.__lenis = lenis;")
assert a_js != A.js
assert 'var p = Math.max(0, Math.min(1, (-cw.getBoundingClientRect().top - sh()) / len));' in a_js
# journey progress starts as soon as its panel starts to uncover (no dead scroll while the helix lifts off)
a_js = a_js.replace('var p = Math.max(0, Math.min(1, (-cw.getBoundingClientRect().top - sh()) / len));', 'var p = Math.max(0, Math.min(1, -cw.getBoundingClientRect().top / (len + sh())));')
why = A.why.replace('<span class="c_eyebrowNum">01</span>Why Here?', 'Why Here?')
princ = A.princ.replace('<span class="c_eyebrowNum">02</span>The Principles', 'The Principles')
jour = A.jour.replace('<span><b>03</b>Our Journey</span>', '<span class="c_eyebrow">Our Journey</span>')
footer = A.footer.replace("News &amp; Media", "Content Library").replace('<li><a href="#">Publications &amp; Case Studies</a></li>', "")
assert why != A.why and princ != A.princ and jour != A.jour and footer != A.footer

# --- tag every text for the reveal (numbering text is left out: stat numbers, odometer, counters, tick years, 01-05 numbers)
hero = tag(hero, ["c_heroTitle", "c_heroSub", "c_eyebrow"])
intro = tag(intro, ["c_statement", "c_body", "c_lead", "c_statLabel"])
why = tag(why, ["c_eyebrow", "c_h2", "c_statement", "c_body", "c_lead", "c_quoteBlue"])
why = _re.sub(r'(<li><span>\d+</span>)([^<]+)(</li>)', r'\1<b data-reveal>\2</b>\3', why)
princ = tag(princ, ["c_eyebrow"]).replace('<h3>', '<h3 data-reveal>').replace('<p>', '<p data-reveal>')
mapsec = tag(mapsec, ["hm_stmt"])
mapsec = _re.sub(r'(<li>)(Heat|Water scarcity|Salinity|Resource constraints|Operational complexity)(</li>)', r'\1<span data-reveal>\2</span>\3', mapsec)
site = tag(site, ["c_eyebrow", "c_mapHint", "c_mapNote"], "data-reveal data-rvg=\"site\"")
helix = helix.replace('<p class="hx_title">', '<p class="hx_title" data-reveal data-rvg="helix">', 1)
helix = _re.sub(r'(<figcaption>)<b>', r'\1<b data-reveal data-rvg="hxc">', helix)
helix = helix.replace('</b><span>', '</b><span data-reveal data-rvg="hxc">')
jour = tag(jour, ["c_eyebrow", "j_jourTitle", "j_jourText"], "data-reveal data-rvg=\"jour\"")
press = tag(press, ["c_eyebrow", "n_featureExcerpt", "n_rowEnd", "n_metaCat"])
press = press.replace('<time datetime="2025-11-26">', '<time datetime="2025-11-26" data-reveal>', 1)
press = press.replace('<h2 class="n_featureTitle">', '<h2 class="n_featureTitle" data-reveal>', 1)
press = press.replace('>Read the release</a>', '><span data-reveal>Read the release</span></a>', 1)
press = press.replace('</span>FoodTech Challenge winners on stage</figcaption>', '</span><span data-reveal>FoodTech Challenge winners on stage</span></figcaption>', 1)
footer = footer.replace('<h4>', '<h4 data-reveal>').replace('<h4 style="margin-top:32px">', '<h4 style="margin-top:32px" data-reveal>').replace('<p>', '<p data-reveal>').replace('<address>', '<address data-reveal>')
footer = _re.sub(r'(<li><a href="#">)([^<]+)', r'\1<span data-reveal>\2</span>', footer)
footer = footer.replace('class="s_footerUrl">io-silal.ae</a>', 'class="s_footerUrl"><span data-reveal>io-silal.ae</span></a>', 1)
footer = footer.replace('<span>© 2026 Silal. All rights reserved.</span>', '<span data-reveal>© 2026 Silal. All rights reserved.</span>', 1)
footer = _re.sub(r'(<nav aria-label="Legal">)(.*?)(</nav>)', lambda m: m.group(1) + _re.sub(r'(<a href="#">)([^<]+)', r'\1<span data-reveal>\2</span>', m.group(2)) + m.group(3), footer, flags=_re.S)

bundle = (HERE / "hpb" / "site3d.bundle.js").read_text()
import base64
glb_b64 = base64.b64encode((HERE / "gl" / "helix.glb").read_bytes()).decode()
css = A.css + "\n" + news_css_out + "\n" + home_css

page = f"""<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>IO Homepage</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600&display=swap">
<style>
:root {{ color-scheme: light; }}
{css}
</style>
<script>document.documentElement.classList.add("rv");setTimeout(function(){{document.documentElement.classList.remove("rv")}},6000)</script>
<div class="s_root" data-wide data-blue="false">
{A.header}
<main><div class="c_page">
{hero}{intro}{site}{mapsec}{why}{princ}{helix}{jour}{press}
</div></main>
{footer}
</div>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
<script>window.__HX_GLB="{glb_b64}";</script>
<script>{bundle}</script>
<script>{a_js}</script>
<script>{home_js}</script>
"""
(OUT / "home.html").write_text(page)
print(len(page) // 1024, "KB", "| arid dots:", n_arid)
