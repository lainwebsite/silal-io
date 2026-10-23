(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var mapRange = function (a, b, c, d, v) { return c + (d - c) * clamp((v - a) / (b - a), 0, 1); };
  function sh() { return Math.max(innerHeight, 680); }
  $$('a[href="#"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });

  /* ---------- smooth scroll (Lenis, same settings as the About page) ---------- */
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, touchMultiplier: 1.4 }); window.__lenis = lenis;
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
  }

  /* ---------- header: transparent over the hero, white panel slides down once the page moves ---------- */
  var hdr = $('#hdr'), open = false, mn = $('#mobileNav');
  function hs() { var sc = scrollY > 40; hdr.dataset.scrolled = sc; hdr.dataset.overlay = !sc && !open; }
  addEventListener('scroll', hs, { passive: true }); hs();
  function setOpen(v) { open = v; if (lenis) { v ? lenis.stop() : lenis.start(); } mn.dataset.open = v; mn.setAttribute('aria-hidden', !v); $('#menuOpen').setAttribute('aria-expanded', v); hs(); }
  $('#menuOpen').addEventListener('click', function () { setOpen(true); });
  $('#menuClose').addEventListener('click', function () { setOpen(false); });
  $('#nl').addEventListener('submit', function (e) { e.preventDefault(); });

  /* ---------- reveal vocabulary: words rise out of a mask, blocks rise out of a mask, images open by wipe ---------- */
  function splitWords(el) {
    var i = 0;
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span'), wi = document.createElement('span');
            w.className = 'w'; wi.className = 'wi'; wi.style.setProperty('--i', i++); wi.textContent = p; w.appendChild(wi); frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains('w')) walk(n);
      });
    })(el);
  }
  $$('[data-split]').forEach(splitWords);
  $$('[data-mask]').forEach(function (el) { var mk = document.createElement('span'); mk.className = 'mk'; while (el.firstChild) mk.appendChild(el.firstChild); el.appendChild(mk); });

  // numbers roll like an odometer
  $$('[data-count]').forEach(function (el) {
    var txt = String(el.dataset.count), strips = [];
    el.setAttribute('aria-label', txt); el.textContent = '';
    txt.split('').forEach(function (ch, k) {
      var od = document.createElement('span'), st = document.createElement('span'); od.className = 'od'; st.className = 'od_s'; od.setAttribute('aria-hidden', 'true');
      for (var d = 0; d < 10; d++) { var i = document.createElement('i'); i.textContent = d; st.appendChild(i); }
      st.dataset.to = ch; st.style.setProperty('--k', k); od.appendChild(st); el.appendChild(od); strips.push(st);
    });
    el._strips = strips;
  });
  function rollNumbers(el) { (el._strips || []).forEach(function (st) { st.style.transform = 'translateY(' + (-(+st.dataset.to) * 10) + '%)'; }); }

  var deferred = $$('[data-reveal-on="curtain"]'), curtainOwned = [];
  deferred.forEach(function (c) { curtainOwned = curtainOwned.concat($$('[data-split],[data-mask],.u_eyebrow,.rv,[data-rise]', c)); });
  var targets = $$('[data-split],[data-mask],.u_eyebrow,.u_row,.rv,.c_pressures,.c_principles,.c_stats,[data-rise],.s_footer').filter(function (el) { return curtainOwned.indexOf(el) < 0; });
  function reveal(el) { if (el.classList.contains('in')) return; el.classList.add('in'); $$('[data-count]', el).forEach(rollNumbers); }
  if ('IntersectionObserver' in window && !reduce) {
    var watch = new Map();
    var rio = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { rio.unobserve(en.target); (watch.get(en.target) || [en.target]).forEach(reveal); } }); }, { rootMargin: '0px 0px -9% 0px', threshold: 0.01 });
    targets.forEach(function (el) { if (el.closest('.c_hero')) return; var t = el.classList.contains('rv') ? el.parentElement : el; watch.set(t, (watch.get(t) || []).concat(el)); rio.observe(t); });
  } else targets.forEach(reveal);
  // the hero opens on load, after the first frame
  requestAnimationFrame(function () { requestAnimationFrame(function () { $$('.c_hero [data-split],.c_hero [data-mask],.c_hero .u_eyebrow').forEach(reveal); }); });

  /* ---------- hero slides: each new photo wipes in over the last one ---------- */
  var slides = $$('.c_slide'), nav = $$('#slideNav button'), idx = 0, tick, clean;
  function show(i) {
    if (i === idx) return;
    var prev = slides[idx], next = slides[i];
    slides.forEach(function (s) { s.removeAttribute('data-prev'); });
    prev.removeAttribute('data-on'); prev.setAttribute('data-prev', '');
    next.setAttribute('data-on', '');
    idx = i; nav.forEach(function (n, k) { n.dataset.on = k === i; });
    clearTimeout(clean); clean = setTimeout(function () { prev.removeAttribute('data-prev'); }, 1700);
  }
  function play() { clearInterval(tick); if (!reduce) tick = setInterval(function () { show((idx + 1) % slides.length); }, 6000); }
  nav.forEach(function (b, k) { b.addEventListener('click', function () { show(k); play(); }); });
  play();

  /* ---------- pinned scenes: progress through a curtain ---------- */
  // a curtain that sits right after another curtain has nothing lifting off above it, so its progress starts the moment it covers the screen
  function off(wrap) { var p = wrap.previousElementSibling; return p && p.classList.contains('c_curtain') ? 0 : sh(); }
  function pin(wrap, factor) {
    var len = Math.round(factor * innerHeight); wrap.style.setProperty('--len', len + 'px');
    return clamp((-wrap.getBoundingClientRect().top - off(wrap)) / len, 0, 1);
  }
  function revealed(wrap) { return (innerHeight - (wrap.getBoundingClientRect().top + off(wrap))) / innerHeight; }
  function scrollToPin(wrap, f, factor) {
    var len = Math.round(factor * innerHeight), y = wrap.getBoundingClientRect().top + scrollY + off(wrap) + f * len + 2;
    if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.6 }); else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* ---------- The site: the 3D model, driven by scroll ---------- */
  var SITE_F = 6.5;
  __TOUR__
  var sCurtain = $('#siteCurtain'), sBody = $('#siteBody'), sImgs = $$('.c_mapImg img'), sPills = $$('#siteIndex button'), sCount = $('#siteCount'), model = null, sLast = 0, sTimer;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function renderStop(i) {
    var t = TOUR[i], dir = i >= sLast ? 1 : -1, cur = -1;
    sImgs.forEach(function (im, k) { if (im.hasAttribute('data-on')) cur = k; });
    if (cur !== i) {
      var nu = sImgs[i], old = sImgs[cur];
      sImgs.forEach(function (im) { im.removeAttribute('data-prev'); });
      if (old) { old.removeAttribute('data-on'); old.setAttribute('data-prev', ''); }
      nu.style.setProperty('--from', dir > 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)');
      nu.removeAttribute('data-on'); void nu.offsetWidth; nu.setAttribute('data-on', '');
      clearTimeout(sTimer); sTimer = setTimeout(function () { sImgs.forEach(function (im) { im.removeAttribute('data-prev'); }); }, 1250);
    }
    sLast = i;
    sPills.forEach(function (b, k) { b.dataset.on = k === i; });
    sCount.innerHTML = String(i + 1).padStart(2, '0') + ' <i>/ ' + String(TOUR.length).padStart(2, '0') + '</i>';
    var h = '<h3><span class="mk" style="--i:0">' + esc(t.title) + '</span></h3><p><span class="mk" style="--i:1">' + esc(t.text) + '</span></p>';
    if (t.facts) h += '<ul class="c_mapFacts">' + t.facts.map(function (f, k) { return '<li style="--i:' + k + '">' + esc(f) + '</li>'; }).join('') + '</ul>';
    if (t.related) h += '<div class="c_mapRelated"><span>Related</span><ul>' + t.related.map(function (r) { return '<li><a href="#">' + esc(r) + ' <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>'; }).join('') + '</ul></div>';
    if (t.cta) h += '<a href="#" class="c_mapCta">' + esc(t.cta) + ' ↗</a>';
    swapBody(h);
  }
  // the card never snaps: old content wipes away, the box glides to its new height, new content rises in
  var swapT, swapEnd, firstBody = true;
  function swapBody(html) {
    clearTimeout(swapT);
    function put() {
      clearTimeout(swapEnd);
      var h0 = sBody.offsetHeight;
      sBody.classList.remove('is-out'); sBody.style.height = ''; sBody.style.transition = ''; sBody.innerHTML = html;
      $$('a[href="#"]', sBody).forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
      if (firstBody || reduce) { firstBody = false; return; }
      var h1 = sBody.offsetHeight;
      sBody.style.height = h0 + 'px'; void sBody.offsetHeight;
      sBody.style.transition = 'height 0.9s cubic-bezier(0.16, 1, 0.3, 1)'; sBody.style.height = h1 + 'px';
      swapEnd = setTimeout(function () { sBody.style.height = ''; sBody.style.transition = ''; }, 950);
    }
    if (firstBody || reduce) { put(); return; }
    sBody.classList.add('is-out'); swapT = setTimeout(put, 300);
  }
  renderStop(0);
  sPills.forEach(function (b) { b.addEventListener('click', function () { scrollToPin(sCurtain, +b.dataset.i / (TOUR.length - 1), SITE_F); }); });
  function mountSite() {
    if (model || !window.mountSite) return;
    model = window.mountSite({
      stage: $('#siteStage'), tour: TOUR,
      onActive: function (i) { renderStop(i); },
      onFail: function () { var f = $('#siteFallback'); f.hidden = false; f.style.cssText = 'background:url(/new-homepage/img/card_plots.jpg) center/cover'; },
      onJump: function (i) { scrollToPin(sCurtain, i / (TOUR.length - 1), SITE_F); }
    });
    if (model) onScroll();
  }
  if ('IntersectionObserver' in window) { var mo = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { mountSite(); mo.disconnect(); } }, { rootMargin: '900px' }); mo.observe(sCurtain); } else mountSite();

  /* ---------- The arid world: the UAE lights first, then arid regions light outward from it as you scroll
     (same scene as the About page v6: dot grid on canvas, lit by distance from the UAE) ---------- */
  var MAP_F = 1.7, mapCurtain = $('#mapCurtain'), mapP = reduce ? 1 : 0, mapChips = $$('.m_chips li'), mapProg = $('#mapProg');
  var WORLD = __WORLD__;
  (function worldMap() {
    var c = $('#mapCanvas'), g = c.getContext('2d'), dots = WORLD.dots, ASPECT = WORLD.aspect;
    var uae = dots.filter(function (d) { return d[2] === 2; }), UAE = [0, 1].map(function (j) { return uae.reduce(function (s, d) { return s + d[j]; }, 0) / uae.length; });
    var w = 0, h = 0, dpr = 1, last = -1, visible = false, lit = new Float32Array(dots.length), prev = 0, drawn = false;
    function resize() { dpr = Math.min(window.devicePixelRatio || 1, 2); w = c.clientWidth; h = w / ASPECT; c.style.height = h + 'px'; c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); last = -1; drawn = false; }
    resize();
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(c); else addEventListener('resize', resize);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(c); else visible = true;
    (function draw(time) {
      requestAnimationFrame(draw);
      var dt = Math.min(100, time - (prev || time)); prev = time;
      if (!visible) return;
      var k = 1 - Math.pow(0.002, dt / 1000), p = mapP;
      var reach = mapRange(0.12, 0.88, 0, 150, p), uaeV = clamp(p / 0.12, 0, 1), moving = Math.abs(p - last) > 1e-4 || !drawn;
      for (var i = 0; i < dots.length; i++) {
        var kind = dots[i][2], dist = dots[i][3];
        var target = kind === 2 ? uaeV : kind === 1 ? clamp((reach - dist) / 10, 0, 1) : 0;
        var v = lit[i] + (target - lit[i]) * k;
        if (Math.abs(v - lit[i]) > 1e-3) moving = true;
        lit[i] = v;
      }
      var pulse = uaeV > 0.5;
      if (!moving && !pulse) return;
      last = p; drawn = true;
      g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, w, h);
      var step = w / 158, r = step * 0.32;
      for (var j = 0; j < dots.length; j++) {
        var d = dots[j], v2 = lit[j], px = d[0] * w, py = d[1] * h;
        if (v2 < 0.02) { g.fillStyle = '#d3d5d6'; g.beginPath(); g.arc(px, py, r, 0, 6.2832); g.fill(); continue; }
        var to = d[2] === 2 ? [26, 111, 150] : [60, 167, 210], from = [211, 213, 214];
        g.fillStyle = 'rgb(' + from.map(function (f, q) { return Math.round(f + (to[q] - f) * v2); }).join(',') + ')';
        g.beginPath(); g.arc(px, py, r * (1 + v2 * (d[2] === 2 ? 0.9 : 0.25)), 0, 6.2832); g.fill();
      }
      if (pulse) {
        var t = (time / 1600) % 1;
        g.strokeStyle = 'rgba(26,111,150,' + (0.6 * (1 - t)) + ')'; g.lineWidth = 1;
        g.beginPath(); g.arc(UAE[0] * w, UAE[1] * h, step * (1.2 + t * 5), 0, 6.2832); g.stroke();
      }
    })(performance.now());
  })();
  function mapScroll() {
    if (!reduce) mapP = pin(mapCurtain, MAP_F);
    mapChips.forEach(function (x, i) { x.toggleAttribute('data-on', mapP > 0.62 + i * 0.06); });
    mapProg.style.transform = 'scaleX(' + mapP.toFixed(4) + ')';
  }

  /* ---------- Helix: one rung is lit at a time, top to bottom; its card sits beside the strand ---------- */
  var hCurtain = $('#helixCurtain'), hSec = $('#helixSec'), hStage = $('#hxStage'), rungs = $$('.hx_r'), cards = $$('.hx_card'), hxBtns = $$('#hxIndex button'), hxBg = $('.hx_bg');
  var HX_STEPS = cards.length, HX_F = 0.7 * HX_STEPS, CARD_RUNG = cards.map(function (c) { return +c.dataset.rung; }), hCur = -1;
  var GEOM = [{ y: 100.5 }, { y: 160.5 }, { y: 222.5 }, { y: 288.5 }, { y: 349.5 }, { y: 411.5 }, { y: 471.5 }];
  function layoutHx() {
    if (innerWidth <= 760) { cards.forEach(function (c) { c.style.left = c.style.top = ''; }); return; }
    var sr = hStage.getBoundingClientRect(), fig = $('.hx_fig').getBoundingClientRect(), ib = $('#hxIndex').getBoundingClientRect();
    var k = fig.height / 571, axis = fig.left - sr.left + 132.5 * k, dist = clamp(innerWidth * 0.225, 210, 330);
    var lo = 72 + 56, hi = ib.top - sr.top - 22;
    cards.forEach(function (c, i) {
      var side = c.dataset.side, w = c.offsetWidth, h = c.offsetHeight, ih = c.querySelector('.hx_img').offsetHeight;
      var ry = fig.top - sr.top + GEOM[CARD_RUNG[i]].y * k;
      var x = axis + (side === 'r' ? dist : -dist) - w / 2, top = clamp(ry - ih * 0.55, lo, Math.max(lo, hi - h));
      c.style.left = Math.round(x) + 'px'; c.style.top = Math.round(top) + 'px';
    });
  }
  function setHx(step) {
    if (step === hCur) return; hCur = step;
    rungs.forEach(function (g, k) { g.toggleAttribute('data-on', k === CARD_RUNG[step]); });
    cards.forEach(function (c, k) { c.toggleAttribute('data-on', k === step); });
    hxBtns.forEach(function (b, k) { b.dataset.on = k === step; });
  }
  hxBtns.forEach(function (b, k) { b.addEventListener('click', function () { scrollToPin(hCurtain, (k + 0.5) / HX_STEPS, HX_F); }); });
  addEventListener('resize', layoutHx); layoutHx(); setHx(0);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutHx);

  /* ---------- journey (pinned): odometer year, photos wipe in, the list glides ---------- */
  var steps = $$('[data-step]'), jl = $('#jLine'), js = $('#jSteps'), cw = $('#jCurtain'), jlist = $('#jList'), pinMQ = matchMedia('(min-width: 1000px) and (min-height: 700px)');
  function setPin() {
    var on = !reduce && pinMQ.matches;
    cw.dataset.on = on; $('.s_root').dataset.pin = on;
    cw.style.setProperty('--len', on ? Math.round(steps.length * 0.6 * innerHeight) + 'px' : '0px');
    if (!on) jlist.style.transform = '';
  }
  var par = $$('[data-parallax]'), pimg = $$('[data-pimg]'), heroM = $('.c_heroMedia'), hero = $('.c_hero'), fimgs = $$('.j_jourFrame img'), jp = 0.5;
  pimg.forEach(function (im) { im.style.scale = '1.14'; });
  function parallax() {
    if (reduce) return; var vh = innerHeight;
    par.forEach(function (el) { var r = el.parentElement.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return; var p = clamp((r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2), -1, 1); el.style.transform = 'translate3d(0,' + (p * 5).toFixed(2) + '%,0)'; });
    var hr = hero.getBoundingClientRect(); if (hr.bottom > 0) heroM.style.transform = 'translate3d(0,' + (clamp(-hr.top / hr.height, 0, 1) * 8).toFixed(2) + '%,0)';
    pimg.forEach(function (im) { var box = im.closest('[data-pbox]') || im.parentElement, r = box.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return; var q = clamp((vh - r.top) / (vh + r.height), 0, 1) - 0.5; im.style.translate = '0 ' + (q * -8).toFixed(2) + '%'; });
    fimgs.forEach(function (im) { im.style.translate = '0 ' + ((0.5 - jp) * 6).toFixed(2) + '%'; });
    var hp = pin(hCurtain, HX_F); hxBg.style.transform = 'translate3d(0,' + ((hp - 0.5) * -5).toFixed(2) + '%,0)';
  }
  function roll(el, text, dir) {
    var old = el.lastElementChild;
    if (!old || old.textContent === text) return;
    var nu = document.createElement('span'); nu.textContent = text;
    if (reduce || !old.animate) { old.textContent = text; return; }
    el.appendChild(nu);
    var o = { duration: 700, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' };
    old.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(' + (-dir * 110) + '%)' }], o).onfinish = function () { old.remove(); };
    nu.animate([{ transform: 'translateY(' + (dir * 110) + '%)' }, { transform: 'translateY(0)' }], o);
  }
  var cur = -1, frames = $$('.j_jourFrame'), ticks = $$('.j_jourTicks li');
  function setStep(i) {
    if (i === cur) return; var prev = cur; cur = i;
    var yr = +steps[i].dataset.year, t = Math.floor((yr % 100) / 10), o = yr % 10;
    $('#odoT').style.transform = 'translateY(' + (-t * 10) + '%)'; $('#odoO').style.transform = 'translateY(' + (-o * 10) + '%)';
    var tag = $('#jTag'); tag.textContent = steps[i].dataset.tag; tag.style.animation = 'none'; void tag.offsetWidth; tag.style.animation = '';
    var label = String(i + 1).padStart(2, '0') + ' / ' + String(steps.length).padStart(2, '0'), cells = $$('.j_roll', $('#jHead')), d = label.slice(0, 2);
    roll(cells[0], d[0], i > prev ? 1 : -1); roll(cells[1], d[1], i > prev ? 1 : -1);
    steps.forEach(function (s, k) { k === i ? s.setAttribute('data-on', '') : s.removeAttribute('data-on'); });
    frames.forEach(function (f, k) { k === i ? f.setAttribute('data-on', '') : f.removeAttribute('data-on'); k < i ? f.setAttribute('data-past', '') : f.removeAttribute('data-past'); });
    ticks.forEach(function (t2, k) { k <= i ? t2.setAttribute('data-on', '') : t2.removeAttribute('data-on'); });
  }
  function journeyScroll() {
    var vh = innerHeight;
    if (cw.dataset.on === 'true') {
      var len = parseFloat(cw.style.getPropertyValue('--len')) || 1;
      var p = clamp((-cw.getBoundingClientRect().top - off(cw)) / len, 0, 1);
      var n = steps.length, f = clamp(p * n - 0.5, 0, n - 1);
      var i0 = Math.floor(f), i1 = Math.min(n - 1, i0 + 1), t = f - i0;
      var c = function (el) { return el.offsetTop + el.offsetHeight / 2; };
      jlist.style.transform = 'translateY(' + (js.clientHeight / 2 - lerp(c(steps[i0]), c(steps[i1]), t)) + 'px)';
      var c0 = c(steps[0]), lp = jl.parentElement; lp.style.top = c0 + 'px'; lp.style.bottom = 'auto'; lp.style.height = (c(steps[n - 1]) - c0) + 'px';
      var ai = Math.min(n - 1, Math.floor(p * n)); jl.style.transform = 'scaleY(' + ((c(steps[ai]) - c0) / ((c(steps[n - 1]) - c0) || 1)) + ')';
      jp = p; setStep(ai);
      return;
    }
    var lp2 = jl.parentElement; lp2.style.top = lp2.style.bottom = lp2.style.height = '';
    var q = js.getBoundingClientRect();
    jl.style.transform = 'scaleY(' + clamp((vh * 0.55 - q.top) / q.height, 0, 1) + ')';
    var best = 0, bd = 1e9;
    steps.forEach(function (s, i) { var b = s.getBoundingClientRect(), dd = Math.abs((b.top + b.height / 2) - vh * 0.55); if (dd < bd) { bd = dd; best = i; } });
    setStep(best);
  }

  /* ---------- one scroll handler ---------- */
  function onScroll() {
    parallax();
    if (model) model.setProgress(pin(sCurtain, SITE_F));
    mapScroll();
    if (revealed(mapCurtain) > 0.5 || reduce) deferred.forEach(function (c) { if (c.closest('#mapCurtain')) $$('[data-split],[data-mask],.u_eyebrow,.rv,[data-rise]', c).forEach(reveal); });
    var hp = pin(hCurtain, HX_F);
    if (revealed(hCurtain) > 0.35 || reduce) hSec.classList.add('in');
    setHx(Math.min(HX_STEPS - 1, Math.floor(hp * HX_STEPS)));
    journeyScroll();
  }
  pinMQ.addEventListener('change', function () { setPin(); onScroll(); });
  setPin(); addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', function () { setPin(); layoutHx(); onScroll(); }); onScroll();
  if (reduce) { hSec.classList.add('in'); deferred.forEach(function (c) { $$('[data-split],[data-mask],.u_eyebrow,.rv,[data-rise]', c).forEach(reveal); }); }
})();
