/* Webflow homepage: world map (dot SVG + filters), parallax, counters and text reveal from the artifact's page script.
   The Arid Advantage and The Site are native Webflow; The Site runs from /webflow/site/io-site.js.
   Built by prototypes/about-team-news/build_webflow_home.py from public/full-site/index.html. Do not edit by hand. */
(function () {
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  function load(id, file) {
    var host = document.getElementById(id);
    if (!host || host.dataset.ready) return Promise.resolve();
    return fetch(BASE + file).then(function (r) { return r.text(); }).then(function (html) { host.innerHTML = html; host.dataset.ready = '1'; });
  }
  function run() { load('ioMapDots', 'map-dots.html').then(go); }
  function go() {

    // ---- page script (journey, parallax, counters)

(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  $$('a[href="#"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // inertial smooth scroll (same Lenis settings as V1's SmoothScroll.tsx); off for reduced motion
  var lenis = null;
  if (false) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, touchMultiplier: 1.4 }); window.__lenis = lenis;
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
  }

  // stat counters
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return; io.unobserve(en.target);
        var to = +en.target.dataset.count, t0 = performance.now();
        (function tick(t) { var p = Math.min(1, (t - t0) / 1800); en.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); })(t0);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { io.observe(el); });
  }

  // story reading progress + journey line
  var story = $('.c_story'), bar = $('#storyBar'), steps = $$('[data-step]'), jl = $('#jLine'), js = $('#jSteps'), jsvp = $('#jSteps');
  function prog(el, from, to) { var r = el.getBoundingClientRect(), vh = innerHeight; var a = vh * from, b = vh * to; return Math.max(0, Math.min(1, (a - r.top) / (r.height - (b - a) + (a - 0) * 0 || 1))); }
  var cw = $('#jCurtain'), jsec = $('#journey'), jlist = $('#jList'), pinMQ = matchMedia('(min-width: 1000px) and (min-height: 700px)');
  function sh() { return Math.max(innerHeight, 680); }
  function setPin() {
    if (!cw) return;
    var on = !reduce && pinMQ.matches;
    cw.dataset.on = on; var sr_ = $('.s_root'); if (sr_) sr_.dataset.pin = on;
    cw.style.setProperty('--len', on ? Math.round(steps.length * 0.6 * innerHeight) + 'px' : '0px');
    if (!on) jlist.style.transform = '';
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  // subtle parallax: photos drift inside their frame; the second card in the pair drifts a little against the first
  var par = $$('[data-parallax]'), drift = $$('[data-drift]'), pimg = $$('[data-pimg]'), heroM = $('.c_heroMedia'), hero = $('.c_hero'), fimgs = $$('.j_jourFrame img'), jp = 0.5;
  pimg.forEach(function (im) { im.style.scale = innerWidth < 760 ? '1.24' : '1.14'; }); fimgs.forEach(function (im) { im.style.scale = '1.08'; });
  function parallax() {
    if (reduce) return; var vh = innerHeight;
    par.forEach(function (el) { var r = el.parentElement.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return; var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2))); el.style.transform = 'translate3d(0,' + (-p * el.dataset.parallax * (innerWidth < 760 ? 1.5 : 1)).toFixed(2) + '%,0)'; });
    // hero photo trails the scroll; sticky/pinned photos drift with their section's progress
    var hr = hero ? hero.getBoundingClientRect() : { bottom: 0 }; if (hero && heroM && hr.bottom > 0) heroM.style.transform = 'translate3d(0,' + (Math.max(0, Math.min(1, -hr.top / hr.height)) * 12).toFixed(2) + '%,0)';
    pimg.forEach(function (im) { var box = im.closest('[data-pbox]') || im.parentElement, r = box.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return; var q = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height))) - 0.5; im.style.translate = '0 ' + (-q * 2 * im.dataset.pimg * (innerWidth < 760 ? 1.7 : 1)).toFixed(2) + '%'; });
    fimgs.forEach(function (im) { im.style.translate = '0 ' + ((0.5 - jp) * 6).toFixed(2) + '%'; });
    drift.forEach(function (el) { var r = el.getBoundingClientRect(); var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2))); el.style.transform = 'translate3d(0,' + (p * el.dataset.drift).toFixed(1) + 'px,0)'; });
  }
  function onScroll() {
    parallax();
    if (!cw) return;
    var vh = innerHeight;
    if (cw.dataset.on === 'true') {
      // pinned: scroll progress through the curtain drives the milestone
      var len = parseFloat(cw.style.getPropertyValue('--len')) || 1;
      var p = Math.max(0, Math.min(1, -cw.getBoundingClientRect().top / (len + sh())));
      var n = steps.length, f = Math.max(0, Math.min(n - 1, p * n - 0.5));
      var i0 = Math.floor(f), i1 = Math.min(n - 1, i0 + 1), t = f - i0;
      var c = function (el) { return el.offsetTop + el.offsetHeight / 2; };
      var center = lerp(c(steps[i0]), c(steps[i1]), t);
      jlist.style.transform = 'translateY(' + (jsvp.clientHeight / 2 - center) + 'px)';
      // the line lives inside the moving list: it runs from the first dot to the last and fills up to the current one
      var c0 = c(steps[0]); jl.parentElement.style.top = c0 + 'px'; jl.parentElement.style.bottom = 'auto'; jl.parentElement.style.height = (c(steps[n - 1]) - c0) + 'px';
      var ai = Math.min(n - 1, Math.floor(p * n)); jl.style.transform = 'scaleY(' + ((c(steps[ai]) - c0) / ((c(steps[n - 1]) - c0) || 1)) + ')';
      jp = p; fimgs.forEach(function (im) { im.style.translate = '0 ' + ((0.5 - jp) * 6).toFixed(2) + '%'; });
      setStep(Math.min(n - 1, Math.floor(p * n)));
      return;
    }
    jl.parentElement.style.top = ''; jl.parentElement.style.bottom = ''; jl.parentElement.style.height = '';
    var q = js.getBoundingClientRect();
    jl.style.transform = 'scaleY(' + Math.max(0, Math.min(1, (vh * 0.55 - q.top) / q.height)) + ')';
    var best = 0, bd = 1e9;
    steps.forEach(function (s, i) { var b = s.getBoundingClientRect(), d = Math.abs((b.top + b.height / 2) - vh * 0.55); if (d < bd) { bd = d; best = i; } });
    setStep(best);
  }
  // counters roll like an odometer: the old value leaves, the new one slides in from the scroll direction
  function roll(el, text, dir) {
    var old = el.lastElementChild;
    if (!old || old.textContent === text) return;
    var nu = document.createElement('span'); nu.textContent = text;
    if (reduce || !old.animate) { old.textContent = text; return; }
    el.appendChild(nu);
    var o = { duration: 650, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' };
    old.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(' + (-dir * 110) + '%)', opacity: 0 }], o).onfinish = function () { old.remove(); };
    nu.animate([{ transform: 'translateY(' + (dir * 110) + '%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], o);
  }
  var cur = -1, frames = $$('.j_jourFrame'), ticks = $$('.j_jourTicks li');
  function setStep(i) {
    if (i === cur) return; var prev = cur; cur = i;
    var yr = +steps[i].dataset.year, t = Math.floor((yr % 100) / 10), o = yr % 10;
    $('#odoT').style.transform = 'translateY(' + (-t * 10) + '%)'; $('#odoO').style.transform = 'translateY(' + (-o * 10) + '%)';
    var tag = $('#jTag'); tag.textContent = steps[i].dataset.tag; tag.style.animation = 'none'; void tag.offsetWidth; tag.style.animation = '';
    var label = String(i + 1).padStart(2, '0') + ' / ' + String(steps.length).padStart(2, '0');
    // only the digit that changes rolls; the rest of "03 / 08" stays put
    ['#jHead'].forEach(function (id) { var cells = $$('.j_roll', $(id)), d = label.slice(0, 2); roll(cells[0], d[0], i > prev ? 1 : -1); roll(cells[1], d[1], i > prev ? 1 : -1); });
    steps.forEach(function (s, k) { k === i ? s.setAttribute('data-on', '') : s.removeAttribute('data-on'); Math.abs(k - i) > 1 ? s.setAttribute('data-far', '') : s.removeAttribute('data-far'); });
    frames.forEach(function (f, k) { k === i ? f.setAttribute('data-on', '') : f.removeAttribute('data-on'); k < i ? f.setAttribute('data-past', '') : f.removeAttribute('data-past'); });
    ticks.forEach(function (t2, k) { k <= i ? t2.setAttribute('data-on', '') : t2.removeAttribute('data-on'); });
  }
  pinMQ.addEventListener('change', function () { setPin(); onScroll(); });
  setPin(); addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', function () { setPin(); onScroll(); }); onScroll();
})();

    // ---- page script (the site, world map, text reveal)

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

  var sBody = document.createElement('div'), model = null, sCurtain = null, SITE_F = 0, sPlayed = {}, sCurStop = 0;

  /* ---------- World map: arid dots light up outward from the UAE as the section scrolls in ---------- */
  // heat map (rev. 6 Nov): each pressure is a filter; the active ones are averaged per dot, spreading out from the UAE as it scrolls in
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
  $$('#mapSec [data-layer]').forEach(function (b) {
    b.addEventListener('click', function (ev) { ev.preventDefault(); var k = +b.dataset.layer; hmOn[k] = hmOn[k] ? 0 : 1; b.setAttribute('aria-pressed', hmOn[k] ? 'true' : 'false'); b.classList.toggle('is-off', !hmOn[k]); hmPaint(true); });
  });
  function mapProgress() {
    var r = mapSec.getBoundingClientRect(), vh = innerHeight;
    var p = reduce ? 1 : clamp((vh * 0.9 - r.top) / (vh * 0.7), 0, 1), want = Math.round(p * hmMax);
    if (want === hmR) return;
    hmR = want; hmPaint(false);
  }

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
    if ($('#siteCurtain')) at($('#siteCurtain'), 0.6, function () { playAll(rvGroups.site || []); playAll($$('h3, p, .c_mapFacts li, .c_mapRelated a, .c_mapCta', sBody).map(function (e) { return e; }), 0.1); siteArmed = true; });
    if ($('#jCurtain')) at($('#jCurtain'), 0.7, function () { playAll((rvGroups.jour || []).filter(function (e) { return !e.closest('.j_jourStep') || e.closest('.j_jourStep').hasAttribute('data-on'); })); jrArmed = true; });
    // journey: a step's text plays when that step becomes the active one
    $$('.j_jourStep').forEach(function (st) {
      new MutationObserver(function () { if (jrArmed && st.hasAttribute('data-on')) { playAll($$('[data-reveal]', st), 0.05); } }).observe(st, { attributes: true, attributeFilter: ['data-on'] });
    });
    document.documentElement.classList.remove('rv');
  }
  var siteArmed = false, hxArmed = false, jrArmed = false;
  // helix card text: plays when the card becomes the current step
  function hxCardText(c) { var L = c.closest('.hx_bgimg') || c; $$('.x_mPanel').forEach(function (b) { b.classList.toggle('x_on', L.contains(b)); }); if (!RV.ok || !hxArmed) return; var B = L.querySelector('.x_mPanel'), E = 'cubic-bezier(.16,1,.3,1)'; if (B && B.animate) { B.animate([{ opacity: 0, translate: '0 40px' }, { opacity: 1, translate: '0 0' }], { duration: 550, easing: 'cubic-bezier(.33,1,.68,1)', fill: 'backwards' }); var I = B.querySelector('.x_mImg'), G = B.querySelector('.x_mImg img'); if (I) I.animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: 600, delay: 50, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'backwards' }); if (G) G.animate([{ transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 900, delay: 50, easing: E, fill: 'backwards' }); } $$('[data-rvg="hxc"]', L).forEach(function (el, k) { var rv = makeRv(el); if (rv.tw) rv.tw.kill(); rv.played = false; rv.played = true; if (rv.lines.length) { gsap.set(rv.lines, { yPercent: 100 }); rv.tw = gsap.to(rv.lines, { yPercent: 0, duration: 0.5, stagger: 0.03, delay: 0.08 + k * 0.025, ease: 'power3.out' }); } }); }
  // site card text: re-plays for each place
  function siteCardText() { if (!RV.ok || !siteArmed) return; playAll($$('h3, p, .c_mapFacts li, .c_mapRelated a, .c_mapCta', sBody)); sPlayed[sCurStop] = true; }

  function onScroll() {
    if (model) model.setProgress(pin(sCurtain, SITE_F));
    mapProgress();
  }
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { setTimeout(function () { initReveal(); onScroll(); }, 60); });
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();
})();

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
