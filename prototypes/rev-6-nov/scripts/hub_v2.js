<script id="rev6-hub-v2-js">
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, wide = function () { return innerWidth >= 900; };
  var G = window.gsap && window.ScrollTrigger;

  /* pathway: maturity rail and the route's own interest form follow the selected option */
  var RANGE = { fif: [1, 8, 'TRL 1–8', 'fif'], inc: [3, 6, 'TRL 3–6', 'inc'], acc: [7, 9, 'TRL 7+', 'acc'], chal: [0, 0, 'Partner service', 'chal'] };
  var rail = $('.v2_rail'), bar = $('#v2Range'), ticks = $$('.v2_railBar i'), railV = $('#v2RailV'), form = $('#v2Form');
  function setRail(k) {
    var r = RANGE[k]; if (!r || !rail) return;
    rail.classList.toggle('partner', !r[0]);
    ticks.forEach(function (t) { var n = +t.dataset.n; t.classList.toggle('on', r[0] && n >= r[0] && n <= r[1]); });
    if (r[0]) { bar.style.left = ((r[0] - 1) / 9 * 100 + 100 / 18) + '%'; bar.style.width = ((r[1] - r[0]) / 9 * 100) + '%'; } else { bar.style.width = '0'; }
    railV.textContent = r[2];
    form.href = 'ivp-enquire.html?platform=' + r[3]; form.firstChild.nodeValue = k === 'chal' ? 'Discuss a partner program ' : 'Register interest ';
  }
  var opts = $$('.h_opt');
  function current() { var o = opts.filter(function (b) { return b.getAttribute('aria-checked') === 'true'; })[0]; return o ? o.dataset.pick : 'fif'; }
  if (opts.length) { new MutationObserver(function () { setRail(current()); }).observe($('.h_opts'), { attributes: true, subtree: true, attributeFilter: ['aria-checked'] }); setRail(current()); }

  /* approach: pinned, the six steps travel sideways; evidence accumulates */
  var pin = $('#v2ApxPin'), track = $('#v2Track'), steps = $$('.v2_step'), meter = $('#v2Meter'), meterN = $('#v2MeterN'), curve = $('#v2Curve');
  function setStep(i) {
    steps.forEach(function (s, k) { s.classList.toggle('on', k === i); s.classList.toggle('done', k < i); });
    meter.style.width = ((i + 1) / steps.length * 100) + '%';
    meterN.textContent = 'Step ' + String(i + 1).padStart(2, '0') + ' of ' + String(steps.length).padStart(2, '0');
  }
  setStep(0);
  if (G && !reduce && pin) {
    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', function () {
      var dist = function () { return Math.max(0, track.scrollWidth - innerWidth); };
      var tw = gsap.to(track, { x: function () { return -dist(); }, ease: 'none', scrollTrigger: { trigger: pin, start: 'top top', end: function () { return '+=' + dist(); }, pin: true, scrub: 0.6, invalidateOnRefresh: true,
        onUpdate: function (s) { var i = Math.min(steps.length - 1, Math.floor(s.progress * steps.length * 0.999)); setStep(i); curve.style.setProperty('--draw', (1 - s.progress).toFixed(3)); } } });
      return function () { tw.scrollTrigger && tw.scrollTrigger.kill(); gsap.set(track, { x: 0 }); };
    });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) setStep(+e.target.dataset.i); }); }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(function (s) { io.observe(s); }); if (curve) curve.style.setProperty('--draw', 0);
  }

  /* readiness: rings */
  var rings = $$('.v2_ring'), rlabels = $$('.v2_ringT'), rpanels = $$('.v2_rqPanel');
  function pickRing(q) {
    rings.forEach(function (r) { r.setAttribute('aria-pressed', r.dataset.q === q); });
    rlabels.forEach(function (t) { t.classList.toggle('on', t.dataset.q === q); });
    rpanels.forEach(function (p) { p.hidden = p.dataset.q !== q; });
  }
  rings.forEach(function (r) {
    r.addEventListener('click', function () { pickRing(r.dataset.q); });
    r.addEventListener('mouseenter', function () { if (matchMedia('(hover: hover)').matches) pickRing(r.dataset.q); });
    r.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pickRing(r.dataset.q); } });
  });
  pickRing('0');

  /* technology groups */
  var gt = $$('.v2_gtab'), gp = $$('.v2_gpanel');
  gt.forEach(function (t) { t.addEventListener('click', function () { gt.forEach(function (x) { x.setAttribute('aria-pressed', x === t); }); gp.forEach(function (p) { p.hidden = p.dataset.t !== t.dataset.t; }); if (G) ScrollTrigger.refresh(); }); });

  /* featured: the photo follows the beat being read */
  var beats = $$('.v2_beat'), bimgs = $$('.v2_caseImgs img');
  function beat(i) { beats.forEach(function (b, k) { b.classList.toggle('on', k === i); }); bimgs.forEach(function (im, k) { k === i ? im.setAttribute('data-on', '') : im.removeAttribute('data-on'); }); }
  beat(0);
  if ('IntersectionObserver' in window) { var bo = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) beat(+e.target.dataset.i); }); }, { rootMargin: '-40% 0px -50% 0px' }); beats.forEach(function (b) { bo.observe(b); }); }
})();
</script>
