/* The Innovation Oasis Method (3D helix) for the Webflow homepage, native version (CMS Collection List + Method Step Card).
   Same logic as the helix part of public/full-site/index.html: pinned curtain, scroll turns the 3D helix,
   one blurred photo + white box per step opening as a circle from the centre, Codegrid "Copy" text reveal.
   Needs: gsap + ScrollTrigger + SplitText (optional, for the text reveal) and three-helix.js (window.mountHelix). */
(function () {
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  function sh() { return Math.max(innerHeight, 680); }

  /* Native Webflow: the steps are the "Method Step Card" components of the Method Steps Collection List ([data-hx-card]);
     each Collection item carries data-order / data-side / data-rung (bound to the CMS). This builds the scroll scene around them:
     one full-screen background layer per step (the card's Background image) with its card inside, the 3D helix canvas on top. */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function txt(el) { return el ? (el.textContent || '').trim() : ''; }
  function drop(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }
  function buildSteps() {
    var root = $('[data-hx]');
    if (!root) return false;
    var panel = $('[data-hx-panel]', root), stage = $('[data-hx-stage]', root);
    if (!panel || !stage) return false;
    var cards = $$('[data-hx-card]', root).map(function (c, i) { var it = c.closest('[data-order]'); return { c: c, it: it, o: it ? parseFloat(it.getAttribute('data-order')) : NaN, i: i }; })
      .sort(function (a, b) { return ((isNaN(a.o) ? 1e9 : a.o) - (isNaN(b.o) ? 1e9 : b.o)) || a.i - b.i; });
    if (!cards.length) return false;
    root.classList.add('io-hx', 'c_curtain'); root.id = 'helixCurtain'; root.dataset.on = 'true';
    panel.classList.add('hx', 'c_curtainStick'); panel.id = 'helixSec'; panel.dataset.hxstep = '0';
    var ttl = $('[data-hx-title]', panel); if (ttl) { ttl.classList.add('hx_title'); ttl.setAttribute('data-reveal', ''); ttl.setAttribute('data-rvg', 'helix'); }
    stage.innerHTML = '<div class="hx_bg"></div><div class="hx_bgs" id="hxBgs"></div><div class="hx_gl" id="hxGL" aria-hidden="true"></div>';
    var host = $('#hxBgs', stage);
    cards.forEach(function (x, k) {
      var c = x.c, it = x.it, bgImg = $('[data-f="background"]', c), bg = bgImg ? (bgImg.currentSrc || bgImg.getAttribute('src') || '') : '';
      var side = it && /right/i.test(it.getAttribute('data-side') || '') ? 'right' : 'left', rung = it ? parseInt(it.getAttribute('data-rung'), 10) : NaN;
      var L = document.createElement('div'); L.className = 'hx_bgimg'; L.dataset.i = k;
      L.innerHTML = '<i class="hx_bgin" style="background-image:url(&quot;' + esc(bg) + '&quot;)"></i><div class="hx_tint"></div><div class="hx_stage"><figure class="hx_card" data-i="' + k + '" data-rung="' + (rung || k + 1) + '"></figure></div>';
      // empty CMS fields (e.g. no question) leave an empty element: drop it
      $$('[data-f]', c).forEach(function (e) { if (e.tagName !== 'IMG' && (e.classList.contains('w-dyn-bind-empty') || !txt(e))) drop(e); });
      drop(bgImg);
      $$('[data-f="title"], [data-f="body"] p, [data-f="question"], [data-f="outcome"]', c).forEach(function (e) { e.setAttribute('data-reveal', ''); e.setAttribute('data-rvg', 'hxc'); });
      c.classList.add('io-hx-box'); c.dataset.side = side;
      L.appendChild(c); host.appendChild(L);
    });
    var list = $('[data-hx-cards]', root); if (list) list.style.display = 'none';
    return true;
  }

  function start() {
    if (!buildSteps()) return;
    var hCurtain = $('#helixCurtain'), hSec = $('#helixSec');
    var cardsEl = $$('.hx_card', hSec), bgsEl = $$('.hx_bgimg', hSec), HX_F = 1.0 * (cardsEl.length + 1), hCur = -2, hxGL = null, hxLoading = false, hxRot = 0;

    function hxScale() {
      var w = hSec.clientWidth, hh = hSec.clientHeight, hs = Math.max(0.5, Math.min(1.35, Math.min(w / 1440, hh / 931)));
      hSec.style.setProperty('--hs', hs.toFixed(3));
      // desktop: title stays near the top; the helix (+ boxes) is centred in the space between the title and the bottom edge
      var ttl = $('.hx_title', hSec), hy = 0;
      if (w >= 760) {
        var tt = 104, tH = 23, inkTop = hh / 2 - 160 * hs, ink = 362 * hs, free0 = tt + tH + 20;
        hy = free0 + (hh - free0 - ink) / 2 - inkTop; ttl.style.top = tt + 'px';
      } else ttl.style.top = '';
      hSec.style.setProperty('--hy', Math.round(hy) + 'px');
    }
    var HX_WIN = 0.32; // share of each step used by the transition to the next one (the rest is a hold)
    var ease = function (t) { return t * t * (3 - 2 * t); };
    // slot 0 = intro (helix only); slots 1..n = the five steps
    function layHx(p) {
      var n = cardsEl.length, m = n + 1, u = Math.min(m - 1e-6, p * m), slot = Math.floor(u), f = u - slot;
      var t = (slot < m - 1 && f > 1 - HX_WIN) ? ease((f - (1 - HX_WIN)) / HX_WIN) : 0, ci = slot - 1, ni = t > 0 ? slot : -1;
      var R = function (k) { return (k * 74).toFixed(2) + '%'; };
      bgsEl.forEach(function (bg, k) {
        var inn = bg.firstElementChild, vis = k === ci || k === ni;
        bg.style.visibility = vis ? 'visible' : 'hidden'; bg.style.zIndex = k === ni ? 2 : 1;
        if (k === ci) { bg.style.clipPath = 'inset(0 0 0 0)'; inn.style.transform = 'scale(' + (1.06 + t * 0.03).toFixed(3) + ')'; }
        else if (k === ni) { bg.style.clipPath = 'circle(' + R(t) + ' at 50% 50%)'; inn.style.transform = 'scale(' + (1.12 - t * 0.06).toFixed(3) + ')'; }
      });
      cardsEl.forEach(function (c, k) { c.style.transform = k === ni ? 'translate3d(0,' + ((1 - t) * 14).toFixed(1) + 'px,0) scale(' + (0.86 + t * 0.14).toFixed(3) + ')' : 'none'; });
      hxRot = p;
      var cur = t >= 0.5 ? slot : slot - 1; // -1 = intro, nothing highlighted
      if (cur !== hCur) { hCur = cur; hSec.dataset.hxstep = cur; if (cur >= 0) hxCardText(cardsEl[cur]); if (hxGL) hxGL.highlight(cur >= 0 ? +cardsEl[cur].dataset.rung : -1); }
    }
    function mountHx() {
      if (hxGL || hxLoading || !window.mountHelix) return;
      hxLoading = true;
      fetch(BASE + 'helix.glb').then(function (r) { return r.arrayBuffer(); }).then(function (data) {
        if (hxGL) return;
        hxGL = window.mountHelix({ host: $('#hxGL'), data: data, onFail: function () {} });
        if (hxGL) { hxGL.setScroll(hxRot); hxGL.setEnter(hxE); hxGL.highlight(hCur >= 0 ? +cardsEl[hCur].dataset.rung : -1); }
      }).catch(function () { hxLoading = false; });
    }
    if ('IntersectionObserver' in window) { var ho = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { mountHx(); ho.disconnect(); } }, { rootMargin: '1200px' }); ho.observe(hCurtain); } else mountHx();

    /* text reveal (Codegrid "Copy"): lines split in an overflow mask, y 100% -> 0 */
    var RV = { ok: !!(window.gsap && window.SplitText && window.ScrollTrigger) && !reduce };
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
    var hxArmed = false, rvHelix = [];
    function hxCardText(c) {
      var L = c.closest('.hx_bgimg') || c;
      $$('.io-hx-box', hSec).forEach(function (b) { b.classList.toggle('x_on', L.contains(b)); });
      if (!RV.ok || !hxArmed) return;
      var B = L.querySelector('.io-hx-box'), E = 'cubic-bezier(.16,1,.3,1)';
      if (B && B.animate) {
        B.animate([{ opacity: 0, translate: '0 40px' }, { opacity: 1, translate: '0 0' }], { duration: 550, easing: 'cubic-bezier(.33,1,.68,1)', fill: 'backwards' });
        var I = B.querySelector('.io-hx-card-img'), G = null;
        if (I) I.animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: 600, delay: 50, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'backwards' });
        if (G) G.animate([{ transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 900, delay: 50, easing: E, fill: 'backwards' });
      }
      $$('[data-rvg="hxc"]', L).forEach(function (el, k) { var rv = makeRv(el); if (rv.tw) rv.tw.kill(); rv.played = true; if (rv.lines.length) { gsap.set(rv.lines, { yPercent: 100 }); rv.tw = gsap.to(rv.lines, { yPercent: 0, duration: 0.5, stagger: 0.03, delay: 0.08 + k * 0.025, ease: 'power3.out' }); } });
    }
    function initReveal() {
      if (!RV.ok) { hxArmed = true; document.documentElement.classList.remove('rv'); return; }
      $$('[data-reveal]', hCurtain).forEach(function (el) { makeRv(el); if (el.getAttribute('data-rvg') === 'helix') rvHelix.push(el); });
      ScrollTrigger.create({ trigger: hCurtain, start: function () { return 'top+=' + Math.round(sh() * 0.05) + ' top'; }, once: true, onEnter: function () {
        rvHelix.forEach(function (el) { makeRv(el).play(0); }); hxArmed = true; if (hCur >= 0) hxCardText(cardsEl[hCur]);
      } });
      document.documentElement.classList.remove('rv');
    }

    var hxE = 0;
    function onScroll() {
      // progress runs from the moment the panel starts to uncover; the 3D entrance plays while it is uncovered
      var hl = Math.round(HX_F * innerHeight); hCurtain.style.setProperty('--len', hl + 'px');
      var hr = -hCurtain.getBoundingClientRect().top, p = clamp(hr / (hl + sh()), 0, 1), e = clamp(hr / (sh() * 0.9), 0, 1); hxE = e;
      layHx(p);
      if (hxGL) { hxGL.setScroll(hxRot); hxGL.setEnter(e); }
    }
    hxScale(); layHx(0.0001);
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { setTimeout(function () { initReveal(); onScroll(); }, 60); });
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', function () { hxScale(); onScroll(); });
    onScroll();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
