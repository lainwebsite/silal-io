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
# geometry measured from the client's PDFs (1440 x 931 frame); order of steps = helix flow 01..05
rungs = [  # y, bar x0, bar x1, cap cx, cap r, right cx, right r
    (311, 652, 750, 658, 8, 788, 20), (361, 623, 775, 631, 9, 814, 14), (413, 603, 789, 612, 11, 829, 13), (468, 593, 795, 606, 14, 847, 13),
    (519, 604, 790, 619, 14, 830, 11), (571, 620, 773, 633, 15, 812, 9), (621, 640, 746, 660, 21, 787, 7)]
idle = [0.30, 0.28, 0.26, 0.25, 0.24, 0.2, 0.14]
hx_svg = f'<circle class="hx_end" cx="703" cy="250" r="23"/><circle class="hx_end" cx="703" cy="681" r="23"/>'
for k, (y, b0, b1, cx, cr, rx, rr) in enumerate(rungs):
    hx_svg += (f'<g class="hx_r" data-r="{k}" style="--o:{idle[k]}"><rect x="{b0}" y="{y-3.5}" width="{b1-b0}" height="7" rx="3.5"/>'
               f'<circle cx="{cx}" cy="{y}" r="{cr}"/><circle cx="{rx}" cy="{y}" r="{rr}"/></g>')
flows = [  # rung, card centre x, image top y, image, title, text
    (1, 386, 275, "hx_research", "Research &amp; Science", "Driving agricultural progress through research and discovery."),
    (1, 1037, 275, "hx_innov", "Innovation &amp; Venture Platforms", "Supporting innovation from idea to impact."),
    (3, 1029, 380, "hx_tech", "Technology &amp; Services", "Solutions designed for real-world challenges."),
    (2, 400, 327, "hx_centres", "Centres of Excellence", "Advancing agriculture through specialised expertise."),
    (4, 304, 416, "hx_talent", "Talent &amp; Training", "Empowering the next generation of innovators."),
]
cards = "".join(
    f'<figure class="hx_card" data-i="{i}" data-rung="{r}" style="left:{x}px;top:{y}px"><span class="hx_img"><img src="img/{im}.jpg" alt="" loading="lazy"></span><figcaption><b>{t}</b><span>{d}</span></figcaption></figure>'
    for i, (r, x, y, im, t, d) in enumerate(flows))
helix = f"""
<div class="c_curtain" id="helixCurtain" data-on="true">
<section class="hx c_curtainStick" id="helixSec" aria-label="Where do you want to look first?" data-step="0">
  <div class="hx_bg" style="background-image:url(img/helix_bg.jpg)"></div>
  <div class="hx_stage" id="hxStage">
    <p class="hx_title">This is Innovation Oasis. Where do you want to look first?</p>
    <svg class="hx_helix" viewBox="0 0 1440 931" aria-hidden="true">{hx_svg}</svg>
    {cards}
  </div>
</section>
</div>"""

# ---------------------------------------------------------------- Press feature (V2 news 'Latest release')
press = """
<section class="c_section c_white hm_press" aria-label="Latest release">
  <div class="s_wrap">
    <p class="n_row n_rowPlain"><span class="n_rowNum"></span><span></span><span class="n_rowEnd">26 Nov 2025</span></p>
    <article class="n_feature">
      <figure class="n_figure">
        <a href="#" class="n_frame" tabindex="-1" aria-hidden="true"><div class="n_frameInner" data-parallax="5"><img src="img/press.jpg" alt="" loading="lazy"></div><span class="n_corners"></span></a>
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
/* ============ homepage: new sections ============ */
.c_page { padding-bottom: 0; }
/* the intro sits above the pinned 3D panel: it needs its own solid ground so the panel does not show through */
.c_page .c_intro { background: var(--light); }
.n_wrap { }
.c_page { --grey-ink: #6e7173; --slow: cubic-bezier(0.16, 1, 0.3, 1); }
.hm_press { padding-top: clamp(72px, 8vw, 140px); padding-bottom: clamp(96px, 10vw, 170px); --grey-ink: #6e7173; --slow: cubic-bezier(0.16, 1, 0.3, 1); font-size: 17px; }
.n_frame { aspect-ratio: 16 / 10; }
.n_frameInner img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.n_frameInner { inset: -6% 0; will-change: transform; }
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

/* --- helix: where do you want to look first? (client PDFs, flows 01-05) --- */
.hx { position: relative; overflow: hidden; color: #fff; background: #7a3b1c; }
.hx_bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
.hx_stage { position: absolute; left: 50%; top: 50%; width: 1440px; height: 931px; margin: -465.5px 0 0 -720px; transform: scale(var(--hs, 1)); transform-origin: 50% 50%; }
.hx_title { position: absolute; left: 0; right: 0; top: 38px; text-align: center; font-size: 13px; font-weight: 500; letter-spacing: 0; text-shadow: 0 1px 10px rgba(0, 0, 0, .25); }
.hx_helix { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.hx_end { fill: #fff; opacity: .22; }
.hx_r { --o: .3; transform-box: fill-box; transform-origin: center; }
.hx_r rect, .hx_r circle { fill: #fff; opacity: var(--o); transition: opacity .7s ease; }
.hx_r[data-on] rect, .hx_r[data-on] circle { opacity: 1; }
.hx_r { transition: transform .8s var(--ease); }
.hx_r[data-on] { transform: scale(1.04); }
.hx_card { position: absolute; margin: 0; width: 220px; margin-left: -110px; text-align: center; opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .9s var(--ease); pointer-events: none; }
.hx_card[data-on] { opacity: 1; transform: none; }
.hx_img { display: block; width: 156px; height: 105px; margin: 0 auto 14px; border-radius: 14px; overflow: hidden; border: 3px solid rgba(255, 224, 190, .45); box-shadow: 0 18px 40px -18px rgba(60, 20, 0, .5); }
.hx_img img { width: 100%; height: 100%; object-fit: cover; }
.hx_card figcaption { display: flex; flex-direction: column; gap: 3px; }
.hx_card b { font-size: 12.5px; font-weight: 600; }
.hx_card figcaption span { font-size: 11.5px; line-height: 1.45; color: rgba(255, 255, 255, .78); }
@media (prefers-reduced-motion: reduce) { .hx_r, .hx_r rect, .hx_r circle, .hx_card { transition: none !important; } }
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
  var sCurtain = $('#siteCurtain'), sBody = $('#siteBody'), sImgs = $$('.c_mapImg img'), sPills = $$('#siteIndex button'), sCount = $('#siteCount'), model = null, sActive = 0;
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

  /* ---------- Helix: scroll highlights one rung + card at a time ---------- */
  var hCurtain = $('#helixCurtain'), hSec = $('#helixSec'), hStage = $('#hxStage'), rungsEl = $$('.hx_r'), cardsEl = $$('.hx_card'), HX_F = 0.8 * cardsEl.length, hCur = -1;
  function hxScale() { var s = Math.min(hSec.clientWidth / 1440, hSec.clientHeight / 931); hSec.style.setProperty('--hs', Math.max(0.5, Math.min(1.35, s)).toFixed(3)); }
  function setHx(i) {
    if (i === hCur) return; hCur = i;
    var rung = +cardsEl[i].dataset.rung;
    rungsEl.forEach(function (g, k) { k === rung ? g.setAttribute('data-on', '') : g.removeAttribute('data-on'); });
    cardsEl.forEach(function (c, k) { k === i ? c.setAttribute('data-on', '') : c.removeAttribute('data-on'); });
    hSec.dataset.step = i;
  }

  function onScroll() {
    if (model) model.setProgress(pin(sCurtain, SITE_F));
    mapProgress();
    var p = pin(hCurtain, HX_F);
    setHx(Math.min(cardsEl.length - 1, Math.floor(p * cardsEl.length)));
  }
  hxScale(); setHx(0);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', function () { hxScale(); onScroll(); });
  onScroll();
})();
""".replace("__TOUR__", tour_json)

# ---------------------------------------------------------------- patch reused pieces
hero = A.hero.replace('c_eyebrowLight">About Innovation Oasis<', 'c_eyebrowLight">Innovation Oasis<')
intro = A.intro.replace('<p class="c_lead">If solutions can succeed here, they can succeed almost anywhere.</p>', '<p class="c_lead">What it lacked was implementation.</p>')
intro = intro.replace('<section class="c_section">', '<section class="c_section c_intro">', 1)
assert 'c_intro' in intro and hero != A.hero
a_js = A.js.replace("lenis = new Lenis({ duration: 1.15, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, touchMultiplier: 1.4 });",
                    "lenis = new Lenis({ duration: 1.15, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, touchMultiplier: 1.4 }); window.__lenis = lenis;")
assert a_js != A.js

bundle = (HERE / "hpb" / "site3d.bundle.js").read_text()
css = A.css + "\n" + news_css_out + "\n" + home_css

page = f"""<meta charset="utf-8">
<title>IO Homepage</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600&display=swap">
<style>
:root {{ color-scheme: light; }}
{css}
</style>
<div class="s_root" data-wide data-blue="false">
{A.header}
<main><div class="c_page">
{hero}{intro}{site}{mapsec}{A.why}{A.princ}{helix}{A.jour}{press}
</div></main>
{A.footer}
</div>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
<script>{bundle}</script>
<script>{a_js}</script>
<script>{home_js}</script>
"""
(OUT / "home.html").write_text(page)
print(len(page) // 1024, "KB", "| arid dots:", n_arid)
