"""Homepage, rev 6 Nov comments 01-13 + 38."""
import re
from common import *

h = load('index.html')

# 03/04: Silal 2020, IO inauguration 2024, 34 ha, then 37+ strategic partners (in place of "2030 Vision")
stats_old = between(h, '<ul class="c_stats">', '</ul>')
h = rep(h, stats_old, '<ul class="c_stats">'
        '<li><span class="c_statNum" data-count="2020">2020</span><span class="c_statLabel" data-reveal>Silal was established</span></li>'
        '<li><span class="c_statNum" data-count="2024">2024</span><span class="c_statLabel" data-reveal>Innovation Oasis<br>officially inaugurated</span></li>'
        '<li><span class="c_statNum" data-count="34">34</span><span class="c_statLabel" data-reveal>hectare parcel of land<br>adjacent to Al Foah Farm</span></li>'
        '<li><span class="c_statNum" data-count="37" data-suffix="+">37+</span><span class="c_statLabel" data-reveal>strategic partners</span></li></ul>')
h = rep(h, "en.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));",
        "en.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + (en.target.dataset.suffix || '');")
h = rep(h, 'href="/About/V1" class="s_btn', 'href="about.html" class="s_btn')

# ---- section order (06, 11, 12, 38): hero, brief, helix, world map, Arid Advantage, 3D site, principles, journey, news
site_blk = between(h, '<div class="c_curtain" id="siteCurtain"', '</section>\n</div>\n')
map_blk = between(h, '<section class="c_section c_white hm_map" id="mapSec"', '</section>\n')
why_blk = between(h, '<section class="c_why c_chapter" data-pbox>', '</section>\n')
pr_blk = between(h, '<section class="c_section c_white"><div class="s_wrap c_grid">\n  <div class="c_headRow c_noRule"><span class="c_eyebrow" data-reveal>The Principles', '</section>\n')
hx_blk = between(h, '<div class="c_curtain" id="helixCurtain"', '</section>\n</div>\n')
old = site_blk + map_blk + why_blk + pr_blk + hx_blk
assert old in h, 'order changed'

# ---- 08/09/10: world heat map with selectable pressure layers
svg = between(map_blk, '<svg class="hm_svg"', '</svg>')
svg = svg.replace('class="hm_a"', 'class="hm_l"').replace(' data-on', '')
svg = re.sub(r'<circle class="hm_l" cx="([\d.]+)" cy="([\d.]+)" r="1.9"/>', r'<circle class="hm_l" cx="\1" cy="\2" r="2.05"/>', svg)
svg = svg.replace('<circle class="hm_u"', '<circle class="rv_pulse" cx="447.5" cy="120.0" r="4"/><circle class="hm_u"')
svg = svg.replace('aria-label="Dot map of the world with arid and semi-arid regions highlighted around the UAE"',
                  'aria-label="Illustrative world heat map of agricultural pressures (heat, water scarcity, salinity, soil quality), with the UAE marked"')
LAYERS = [('heat', 'Heat'), ('water', 'Water scarcity'), ('salinity', 'Salinity'), ('soil', 'Soil quality')]
chips = ''.join(f'<li><button type="button" class="rv_chip" data-layer="{k}" aria-pressed="true"><i></i>{t}</button></li>' for k, t in LAYERS)
new_map = f'''<section class="c_section c_white hm_map rv_map" id="mapSec" data-n="285">
  <div class="s_wrap">
    <div class="hm_grid">
      <div class="rv_mapText">
        <h2 class="hm_stmt" data-reveal>Conditions once considered unique to the UAE are becoming increasingly common elsewhere.</h2>
        <p class="rv_mapNote" data-reveal>Heat, water scarcity, salinity and declining soil quality already shape farming across much of the world. Select a pressure to see where it is felt, or layer them together.</p>
      </div>
      <div class="hm_side">
        {svg}
        <div class="rv_legend"><span class="rv_kU">UAE · Innovation Oasis</span><span class="rv_ramp"><b>Lower</b><i></i><b>Higher pressure</b></span><em>Illustrative</em></div>
        <ul class="rv_chips" aria-label="Pressures shown on the map">{chips}</ul>
      </div>
    </div>
  </div>
</section>
'''

# ---- 05/07: 3D site follows the Arid Advantage; galleries of the real spaces; fewer palms
GAL = {
    0: [('sp_parcel1.jpg', 'The parcel beside Al Foah Farm'), ('sp_parcel2.jpg', 'Trial plots and greenhouses from the air'), ('sp_parcel3.jpg', 'Greenhouse rooftops at the edge of the site')],
    1: [('sp_collab1.jpg', 'The atrium'), ('sp_collab2.jpg', 'Farmers and partners in the atrium'), ('sp_collab3.jpg', 'Workshop in the agritech room'), ('sp_collab4.jpg', 'Mentoring tables')],
    2: [('sp_labs1.jpg', 'Seed development laboratory'), ('sp_labs2.jpg', 'Scientists at work'), ('sp_labs3.jpg', 'Fume hood work'), ('sp_labs4.jpg', 'Microscopy')],
    3: [('sp_cea1.jpg', 'Growth chamber'), ('sp_cea2.jpg', 'Growth chamber'), ('sp_cea3.jpg', 'Growth chamber'), ('sp_cea4.jpg', 'Phenotyping chamber')],
    4: [('sp_fields1.jpg', 'Open-field trials from above'), ('sp_fields2.jpg', 'Field specialist among the crop rows'), ('sp_fields3.jpg', 'Soil sensing in the field'), ('sp_fields4.jpg', 'Field tour by the greenhouses')],
    5: [('sp_green1.jpg', 'Greenhouse crop'), ('sp_green2.jpg', 'Tomato aisle'), ('sp_green3.jpg', 'Leafy greens'), ('sp_green4.jpg', 'Blueberry trial')],
    6: [('sp_master1.jpg', 'The campus from above'), ('sp_master2.jpg', 'Entrance canopy'), ('sp_master3.jpg', 'The main building'), ('sp_master4.jpg', 'Official inauguration, 2024')],
}
import json
site_new = site_blk.replace('<span class="c_mapHint" data-reveal data-rvg="site">Scroll to explore · select a place</span>',
                            '<span class="c_mapHint" data-reveal data-rvg="site">Scroll to explore · select a place to see it</span>')
lightbox = '''<div class="rv_lb" id="rvLb" hidden role="dialog" aria-modal="true" aria-label="Photos of the space">
  <div class="rv_lbTop"><span class="rv_lbKicker" id="rvLbKick"></span><h3 id="rvLbTitle"></h3><button type="button" class="rv_lbX" id="rvLbX" aria-label="Close">&times;</button></div>
  <div class="rv_lbStage" id="rvLbStage"></div>
  <div class="rv_lbBar"><button type="button" class="rv_lbNav" id="rvLbPrev" aria-label="Previous photo">&larr;</button><p id="rvLbCap"></p><span id="rvLbN"></span><button type="button" class="rv_lbNav" id="rvLbNext" aria-label="Next photo">&rarr;</button></div>
  <div class="rv_lbThumbs" id="rvLbThumbs"></div>
</div>
'''
h = rep(h, old, hx_blk + new_map + why_blk + site_new + pr_blk)
h = rep(h, "if (t.cta) h += '<a href=\"#\" class=\"c_mapCta\">' + esc(t.cta) + ' ↗</a>';",
        "if (t.cta) h += '<a href=\"#\" class=\"c_mapCta\">' + esc(t.cta) + ' ↗</a>';\n"
        "    if (window.RV_GAL && RV_GAL[i]) h += '<button type=\"button\" class=\"rv_spBtn\" data-sp=\"' + i + '\"><span class=\"rv_spPlay\"></span>See the space <em>' + RV_GAL[i].length + ' photos</em></button>';")
h = rep(h, 'var TOUR = [', 'window.RV_GAL = ' + json.dumps(GAL) + ';\n  var TOUR = [')

# 07: palms toned down: the 540-tree grove is gone, the avenue keeps one sparse row in a softer green
h = rep(h, 'for(let C=-60;C<=34;C+=4.4)K.push([C,36.3],[C,40.7]);', 'for(let C=-60;C<=34;C+=13.2)K.push([C,38.5]);')
h = rep(h, 'for(let C=-33;C<=33;C+=4.2)K.push([C,23.4]);', 'for(let C=-33;C<=33;C+=16.5)K.push([C,23.4]);')
h = rep(h, 'xe=new tn(yh(Ze),M("#9db58c"),K.length)', 'xe=new tn(yh(Ze),M("#b9c2a6"),K.length)')
h = rep(h, 'be++}[Ce,ht].forEach(C=', 'be++}Ce.count=0,ht.count=0;[Ce,ht].forEach(C=')

CSS = '''<style id="rev6-home">
/* world heat map (rev 6 Nov 08-10) */
.rv_map .hm_grid { align-items: center; }
.rv_mapText { grid-column: 1 / span 5; display: flex; flex-direction: column; gap: 22px; }
.rv_map .hm_stmt { grid-column: auto; }
.rv_mapNote { font-size: .9375rem; line-height: 1.6; color: var(--grey); max-width: 34ch; }
.rv_map .hm_side { grid-column: 6 / span 7; }
.rv_map .hm_l { fill: #e3e3e3; transition: fill .7s ease; }
.rv_map .hm_u { fill: var(--io-ink); stroke: #fff; stroke-width: 1.2; }
.rv_pulse { fill: none; stroke: var(--io-ink); stroke-width: 1.2; transform-box: fill-box; transform-origin: center; animation: rvPulse 2.4s ease-out infinite; }
@keyframes rvPulse { from { transform: scale(.6); opacity: .9; } to { transform: scale(3.2); opacity: 0; } }
.rv_legend { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 24px; margin-top: 16px; font-size: .75rem; color: var(--charcoal); }
.rv_kU::before { content: ""; display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--io-ink); margin-right: 8px; vertical-align: 0; box-shadow: 0 0 0 3px rgba(60,167,210,.25); }
.rv_ramp { display: inline-flex; align-items: center; gap: 8px; }
.rv_ramp b { font-weight: 400; color: var(--grey); }
.rv_ramp i { width: 96px; height: 6px; border-radius: 3px; background: linear-gradient(90deg, #e3e3e3, #f7cf9f 35%, #F08104 70%, #EB5D3E); }
.rv_legend em { margin-left: auto; font-style: normal; font-size: .6875rem; color: var(--grey); }
.rv_chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
.rv_chip { display: inline-flex; align-items: center; gap: 9px; padding: 9px 15px; border: 1px solid var(--line); border-radius: 999px; background: #fff; font: inherit; font-size: .8125rem; color: var(--grey); cursor: pointer; transition: border-color .25s, color .25s, background .25s, box-shadow .25s; }
.rv_chip i { width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid #c9c9c9; position: relative; transition: inherit; }
.rv_chip[aria-pressed="true"] { color: var(--charcoal); border-color: #F08104; box-shadow: 0 8px 18px -14px rgba(240,129,4,.8); }
.rv_chip[aria-pressed="true"] i { border-color: #F08104; background: #F08104; }
.rv_chip[aria-pressed="true"] i::after { content: ""; position: absolute; left: 3.5px; top: 1.5px; width: 3px; height: 6px; border: solid #fff; border-width: 0 1.5px 1.5px 0; transform: rotate(45deg); }
.rv_chip:hover { border-color: var(--charcoal); color: var(--charcoal); }
.rv_chip:focus-visible { outline: 2px solid var(--io); outline-offset: 2px; }
@media (max-width: 899px) {
  .rv_mapText, .rv_map .hm_side { grid-column: 1 / -1; }
  .rv_chip { padding: 7px 12px; font-size: .75rem; }
  .rv_ramp i { width: 64px; }
}
/* site tour: see the real space (rev 6 Nov 05) */
.c_mapImg { cursor: zoom-in; }
.rv_spBtn { align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; margin-top: 2px; padding: 10px 16px 10px 10px; border: 0; border-radius: 999px; background: var(--io-ink); color: #fff; font: inherit; font-size: .8125rem; font-weight: 500; cursor: pointer; transition: background .25s, transform .25s; }
.rv_spBtn:hover { background: #12506d; transform: translateY(-1px); }
.rv_spBtn em { font-style: normal; font-weight: 400; opacity: .75; }
.rv_spPlay { width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,.18); position: relative; }
.rv_spPlay::after { content: ""; position: absolute; inset: 6px; border: 1.5px solid #fff; border-radius: 2px; }
.rv_lb { position: fixed; inset: 0; z-index: 1000; display: grid; grid-template-rows: auto 1fr auto auto; background: #171514; color: #fff; padding: clamp(16px, 3vw, 40px); gap: 16px; animation: rvFade .35s ease both; }
.rv_lb[hidden] { display: none; }
@keyframes rvFade { from { opacity: 0; } }
.rv_lbTop { display: flex; align-items: baseline; gap: 18px; }
.rv_lbKicker { font-size: .6875rem; letter-spacing: .16em; text-transform: uppercase; color: #9fd2e8; }
.rv_lbTop h3 { font-size: clamp(1.25rem, 2.2vw, 1.75rem); font-weight: 300; }
.rv_lbX { margin-left: auto; width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,.3); background: none; color: #fff; font-size: 26px; line-height: 1; cursor: pointer; }
.rv_lbStage { position: relative; min-height: 0; overflow: hidden; }
.rv_lbStage img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; opacity: 0; transform: scale(1.03); transition: opacity .6s ease, transform 1.2s cubic-bezier(.16,1,.3,1); }
.rv_lbStage img[data-on="true"] { opacity: 1; transform: none; }
.rv_lbBar { display: flex; align-items: center; gap: 16px; font-size: .875rem; }
.rv_lbBar p { flex: 1; color: rgba(255,255,255,.85); }
.rv_lbBar span { color: rgba(255,255,255,.55); font-variant-numeric: tabular-nums; }
.rv_lbNav { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,.3); background: none; color: #fff; font-size: 18px; cursor: pointer; }
.rv_lbNav:hover, .rv_lbX:hover { background: rgba(255,255,255,.1); }
.rv_lbThumbs { display: flex; gap: 8px; overflow-x: auto; }
.rv_lbThumbs button { flex: 0 0 auto; width: 96px; aspect-ratio: 3 / 2; padding: 0; border: 2px solid transparent; background: none; opacity: .55; cursor: pointer; transition: opacity .25s, border-color .25s; }
.rv_lbThumbs button[data-on="true"] { opacity: 1; border-color: var(--io); }
.rv_lbThumbs img { width: 100%; height: 100%; object-fit: cover; display: block; }
@media (max-width: 899px) { .rv_lbThumbs button { width: 64px; } .rv_lbTop { flex-wrap: wrap; } }
</style>'''

JS = r'''<script id="rev6-home-js">
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* ---------- world heat map: illustrative pressure layers (lon, lat, radius in degrees, weight) ---------- */
  var L = {
    heat: [[10,22,18,1],[47,23,12,1],[60,28,9,.85],[78,22,10,.8],[2,14,13,.85],[133,-24,14,.75],[-108,29,8,.7],[22,-24,8,.5],[-62,-23,8,.5],[101,15,9,.55],[62,40,8,.45],[30,8,9,.55]],
    water: [[38,27,18,1],[72,28,9,.95],[110,38,10,.8],[62,42,10,.7],[-112,33,10,.8],[-71,-23,6,.75],[22,-28,9,.65],[135,-29,15,.6],[-3,39,6,.6],[4,16,12,.5],[44,15,7,.8]],
    salinity: [[47,27,13,.9],[69,27,7,.95],[59,43,8,.85],[124,-31,13,.75],[-63,-35,8,.55],[104,40,9,.55],[8,31,9,.6],[-115,36,6,.5],[54,32,8,.85],[31,30,5,.8]],
    soil: [[2,14,15,.9],[38,25,15,.75],[79,22,11,.8],[108,36,9,.75],[38,5,9,.65],[-50,-12,10,.5],[-90,15,6,.55],[135,-25,14,.5],[47,-20,4,.55],[65,42,9,.6],[-104,25,7,.45]]
  };
  var sec = $('#mapSec'); if (!sec) return;
  var dots = $$('.hm_l', sec), chips = $$('.rv_chip', sec);
  var ramp = [[0, [227,227,227]], [.32, [247,207,159]], [.66, [240,129,4]], [1, [235,93,62]]];
  function col(v) {
    if (v <= .06) return 'rgb(227,227,227)';
    for (var i = 1; i < ramp.length; i++) if (v <= ramp[i][0]) {
      var a = ramp[i - 1], b = ramp[i], t = (v - a[0]) / (b[0] - a[0]);
      return 'rgb(' + a[1].map(function (c, k) { return Math.round(c + (b[1][k] - c) * t); }).join(',') + ')';
    }
    return 'rgb(235,93,62)';
  }
  var pts = dots.map(function (d) {
    var x = +d.getAttribute('cx'), y = +d.getAttribute('cy'), lon = x * 0.5172 - 177, lat = 85 - y * 0.5172, v = {};
    Object.keys(L).forEach(function (k) {
      var s = 0; L[k].forEach(function (b) { var dx = (lon - b[0]) * Math.cos(lat * Math.PI / 180), dy = lat - b[1]; s += b[3] * Math.exp(-(dx * dx + dy * dy) / (2 * b[2] * b[2])); });
      v[k] = Math.min(1, s);
    });
    var du = Math.hypot(x - 447.5, y - 120);
    d.style.transitionDelay = reduce ? '0ms' : Math.round(du * 2.2) + 'ms';
    return { el: d, v: v };
  });
  function paint() {
    var on = chips.filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; }).map(function (c) { return c.dataset.layer; });
    pts.forEach(function (p) {
      var s = 0; on.forEach(function (k) { s += p.v[k]; });
      var v = on.length ? s / Math.max(1, on.length * 0.62) : 0;
      p.el.style.fill = col(Math.min(1, v));
    });
  }
  chips.forEach(function (c) { c.addEventListener('click', function () {
    c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    pts.forEach(function (p) { p.el.style.transitionDelay = '0ms'; });
    paint();
  }); });
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { paint(); io.disconnect(); setTimeout(function () { pts.forEach(function (p) { p.el.style.transitionDelay = '0ms'; }); }, 1800); } }, { threshold: .35 });
    io.observe(sec);
  } else paint();

  /* ---------- site tour: photos of the real space ---------- */
  var G = window.RV_GAL || {}, lb = $('#rvLb'), stage = $('#rvLbStage'), thumbs = $('#rvLbThumbs'), cur = 0, list = [], stop = 0, timer = null, lastFocus = null;
  function titleOf(i) { var b = $$('#siteIndex button')[i]; return b ? b.querySelector('b').textContent : ''; }
  function show(k) {
    cur = (k + list.length) % list.length;
    $$('img', stage).forEach(function (im, j) { im.dataset.on = j === cur; });
    $$('button', thumbs).forEach(function (b, j) { b.dataset.on = j === cur; });
    $('#rvLbCap').textContent = list[cur][1];
    $('#rvLbN').textContent = String(cur + 1).padStart(2, '0') + ' / ' + String(list.length).padStart(2, '0');
  }
  function auto() { clearInterval(timer); if (!reduce) timer = setInterval(function () { show(cur + 1); }, 4500); }
  function open(i) {
    list = G[i] || []; if (!list.length) return; stop = i; lastFocus = document.activeElement;
    stage.innerHTML = list.map(function (p) { return '<img src="rev/img/' + p[0] + '" alt="' + p[1].replace(/"/g, '&quot;') + '">'; }).join('');
    thumbs.innerHTML = list.map(function (p, j) { return '<button type="button" aria-label="Photo ' + (j + 1) + '"><img src="rev/img/' + p[0] + '" alt=""></button>'; }).join('');
    $$('button', thumbs).forEach(function (b, j) { b.addEventListener('click', function () { show(j); auto(); }); });
    $('#rvLbKick').textContent = String(i + 1).padStart(2, '0') + ' / 07 · The site';
    $('#rvLbTitle').textContent = titleOf(i);
    lb.hidden = false; document.documentElement.style.overflow = 'hidden'; if (window.__lenis) window.__lenis.stop();
    show(0); auto(); $('#rvLbX').focus();
  }
  function close() { lb.hidden = true; clearInterval(timer); document.documentElement.style.overflow = ''; if (window.__lenis) window.__lenis.start(); if (lastFocus) lastFocus.focus(); }
  $('#rvLbX').addEventListener('click', close);
  $('#rvLbPrev').addEventListener('click', function () { show(cur - 1); auto(); });
  $('#rvLbNext').addEventListener('click', function () { show(cur + 1); auto(); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target === stage) close(); });
  addEventListener('keydown', function (e) { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') { show(cur + 1); auto(); } if (e.key === 'ArrowLeft') { show(cur - 1); auto(); } });
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.rv_spBtn'); if (b) { open(+b.dataset.sp); return; }
    var im = e.target.closest && e.target.closest('.c_mapImg'); if (im) { var on = $('#siteIndex button[data-on="true"]'); open(on ? +on.dataset.i : 0); }
  });
})();
</script>'''
CSS = lightbox + CSS
h = h + CSS + JS if '</body>' not in h else h.replace('</body>', CSS + JS + '</body>')
h = global_patch(h)
# the artifact wraps index.html in its own skeleton: keep only what sits inside <body>
if h.lstrip().lower().startswith('<!doctype'):
    h = h[h.index('<body>') + len('<body>'):]
    h = re.sub(r'</body>\s*</html>\s*$', '', h)
save('index.html', h)
