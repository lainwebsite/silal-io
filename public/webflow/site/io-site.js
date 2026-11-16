/* The Site (Webflow homepage): the 3D site model driven by the scroll, with the CMS cards.
   Webflow holds everything you see: the panel ([data-site]), the Site Places Collection List with one
   "Site Place Card" component per place ([data-site-card], fields in [data-f]) and the empty tab bar ([data-site-tabs]).
   This script only: mounts the 3D model (window.mountSite from ../helix/three-helix.js), pins the panel while the
   page scrolls through the places, shows the active card, builds the photo slideshow, the 01-07 tabs and the gallery. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  function sh() { return Math.max(innerHeight, 680); }
  function text(el) { return el ? (el.innerText || el.textContent || '').trim() : ''; }
  function lines(t) { return t.split(/\n+/).map(function (x) { return x.trim(); }).filter(Boolean); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  function start() {
    var root = $('[data-site]');
    if (!root) return;
    var stage = $('[data-site-stage]', root), tabsEl = $('[data-site-tabs]', root);
    var cards = $$('[data-site-card]', root);
    if (!cards.length) cards = $$('.io-site-card', root);
    if (!cards.length) return;
    /* CMS order: each Collection item carries data-order (bound to the Order field); sort the items in the DOM by it */
    var ord = function (c) { var it = c.closest('[data-order]'); var v = it ? parseFloat(it.getAttribute('data-order')) : NaN; return isNaN(v) ? 1e9 : v; };
    cards = cards.map(function (c, i) { return { c: c, o: ord(c), i: i }; }).sort(function (a, b) { return a.o - b.o || a.i - b.i; }).map(function (x) { return x.c; });
    cards.forEach(function (c) { var it = c.closest('.w-dyn-item'); if (it && it.parentNode) it.parentNode.appendChild(it); });
    var n = cards.length, active = -1, model = null;

    /* cards: drop empty photos and empty lists (CMS fields left blank).
       An empty image field shows the component's placeholder image (a site asset); CMS images all live in one folder
       on the Webflow CDN, so a photo outside the folder most photos use is the placeholder. */
    var dir = function (s) { return (s || '').replace(/[^/]*$/, ''); }, dirs = {}, cms = '';
    cards.forEach(function (c) { $$('img[data-f="photo"]', c).forEach(function (im) { var d = dir(im.getAttribute('src')); dirs[d] = (dirs[d] || 0) + 1; if (!cms || dirs[d] > dirs[cms]) cms = d; }); });
    var places = cards.map(function (c, i) {
      $$('img[data-f="photo"]', c).forEach(function (im) { var s = im.getAttribute('src'); if (im.classList.contains('w-dyn-bind-empty') || !s || dir(s) !== cms) im.remove(); });
      var rel = $('[data-f="related"]', c);
      if (rel && text(rel)) rel.innerHTML = lines(text(rel)).map(function (t) { return '<span class="io-site-rel">' + esc(t) + '<i aria-hidden="true"></i></span>'; }).join('');
      ['facts', 'related', 'cta'].forEach(function (f) { var b = $('[data-site-block="' + f + '"]', c); if (b && !text($('[data-f="' + f + '"]', c))) b.hidden = true; });
      var name = text($('[data-f="name"]', c));
      return { key: text($('[data-f="key"]', c)) || 'overview', title: name, tab: text($('[data-f="tab"]', c)) || name, card: c, photos: $$('img[data-f="photo"]', c), k: 0, timer: null };
    });

    /* slideshow inside each card: arrows, counter, thumbnails */
    places.forEach(function (p, i) {
      var box = $('[data-site-photos]', p.card) || $('.io-site-photos', p.card);
      if (!box || !p.photos.length) return;
      var cap = el('div', 'io-site-count', '<b>' + String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0') + '</b><span>Real photography · Innovation Oasis, Al Ain</span>');
      var ttl = $('[data-f="name"]', box), bar = $('[data-site-bar]', box);
      if (ttl) box.insertBefore(cap, ttl); else box.appendChild(cap);
      if (p.photos.length > 1) {
        [-1, 1].forEach(function (d) { var b = el('button', 'io-site-nav', ''); b.type = 'button'; b.dataset.d = d; b.setAttribute('aria-label', d < 0 ? 'Previous photo' : 'Next photo'); b.addEventListener('click', function () { show(p, p.k + d); }); box.appendChild(b); });
        var th = el('div', 'io-site-thumbs');
        p.photos.forEach(function (im, j) { var b = el('button', '', '<img src="' + esc(im.currentSrc || im.src) + '" alt="">'); b.type = 'button'; b.setAttribute('aria-label', 'Photo ' + (j + 1)); b.addEventListener('click', function () { show(p, j); }); th.appendChild(b); });
        if (bar) bar.insertBefore(th, bar.firstChild); else box.appendChild(th); p.thumbs = th;
      }
      var gal = $('[data-site-gal]', p.card);
      if (gal) gal.addEventListener('click', function (e) { e.preventDefault(); openGallery(p); });
    });
    function show(p, j) {
      var m = p.photos.length; if (!m) return; p.k = (j + m) % m;
      p.photos.forEach(function (im, i) { im.dataset.on = i === p.k; });
      if (p.thumbs) [].forEach.call(p.thumbs.children, function (b, i) { b.setAttribute('aria-current', i === p.k ? 'true' : 'false'); });
      clearTimeout(p.timer); if (m > 1 && !reduce) p.timer = setTimeout(function () { show(p, p.k + 1); }, 6000);
    }

    /* tabs 01-07 */
    var tabs = places.map(function (p, i) {
      var b = el('button', 'io-site-tab', '<span>' + String(i + 1).padStart(2, '0') + '</span><b>' + esc(p.tab) + '</b>'); b.type = 'button';
      b.addEventListener('click', function () { jump(i); }); if (tabsEl) tabsEl.appendChild(b); return b;
    });

    function setActive(i) {
      if (i === active) return; active = i;
      places.forEach(function (p, k) { p.card.dataset.on = k === i; var it = p.card.closest('.w-dyn-item'); if (it) it.dataset.on = k === i; if (k !== i) clearTimeout(p.timer); });
      tabs.forEach(function (b, k) { b.dataset.on = k === i; });
      show(places[i], 0);
    }
    root.classList.add('is-live'); setActive(0);

    /* pinned scroll: one screen per place */
    function len() { return Math.round((n - 1) * 0.95 * innerHeight); }
    function layout() { root.style.height = (len() + sh()) + 'px'; }
    function progress() { return clamp(-root.getBoundingClientRect().top / len(), 0, 1); }
    function jump(i) {
      var y = root.getBoundingClientRect().top + scrollY + (n > 1 ? i / (n - 1) : 0) * len() + 2;
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    }
    function onScroll() {
      var p = progress();
      if (model) model.setProgress(p); else setActive(Math.round(p * (n - 1)));
    }
    layout();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', function () { layout(); onScroll(); });

    /* 3D model, mounted when the section gets near */
    function mount() {
      if (model || !window.mountSite || !stage) return;
      model = window.mountSite({ stage: stage, tour: places.map(function (p) { return { key: p.key, title: p.title }; }),
        onActive: setActive, onFail: function () { stage.classList.add('is-fallback'); }, onJump: jump });
      onScroll();
    }
    function whenReady(n2) { if (window.mountSite) mount(); else if (n2 < 200) setTimeout(function () { whenReady(n2 + 1); }, 100); }
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { whenReady(0); io.disconnect(); } }, { rootMargin: '900px' }); io.observe(root); } else whenReady(0);
    onScroll();

    /* full-screen gallery of the real space */
    var G = null;
    function openGallery(p) {
      if (!G) {
        G = el('div', 'io-gal', '<div class="io-gal-top"><p class="io-gal-title"></p><span class="io-gal-count"></span><button type="button" class="io-gal-close" aria-label="Close">&times;</button></div>' +
          '<div class="io-gal-stage"><button type="button" class="io-gal-nav" data-d="-1" aria-label="Previous photo">&larr;</button><img class="io-gal-img" alt=""><button type="button" class="io-gal-nav" data-d="1" aria-label="Next photo">&rarr;</button></div><div class="io-gal-thumbs"></div>');
        G.setAttribute('role', 'dialog'); G.setAttribute('aria-modal', 'true'); G.hidden = true; document.body.appendChild(G);
        $('.io-gal-close', G).addEventListener('click', closeGallery);
        $$('.io-gal-nav', G).forEach(function (b) { b.addEventListener('click', function () { galShow(G.k + +b.dataset.d); }); });
        G.addEventListener('click', function (e) { if (e.target === G) closeGallery(); });
        document.addEventListener('keydown', function (e) { if (G.hidden) return; if (e.key === 'Escape') closeGallery(); else if (e.key === 'ArrowRight') galShow(G.k + 1); else if (e.key === 'ArrowLeft') galShow(G.k - 1); });
      }
      G.set = p.photos.map(function (im) { return im.currentSrc || im.src; });
      $('.io-gal-title', G).textContent = p.title;
      var th = $('.io-gal-thumbs', G); th.innerHTML = '';
      G.set.forEach(function (s, j) { var b = el('button', '', '<img src="' + esc(s) + '" alt="">'); b.type = 'button'; b.addEventListener('click', function () { galShow(j); }); th.appendChild(b); });
      G.hidden = false; document.documentElement.classList.add('io-gal-lock'); galShow(p.k || 0); $('.io-gal-close', G).focus();
    }
    function galShow(j) {
      var m = G.set.length; if (!m) return; G.k = (j + m) % m;
      $('.io-gal-img', G).src = G.set[G.k]; $('.io-gal-count', G).textContent = (G.k + 1) + ' / ' + m;
      [].forEach.call($('.io-gal-thumbs', G).children, function (b, i) { b.setAttribute('aria-current', i === G.k ? 'true' : 'false'); });
    }
    function closeGallery() { G.hidden = true; document.documentElement.classList.remove('io-gal-lock'); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
