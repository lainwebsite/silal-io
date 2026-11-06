// node shots2.js <page> <out> <w> <h> <selector> <offsetStart> <step> <n>
const { chromium } = require('playwright');
(async () => {
  const [pg, out, w, h, sel, o, step, n] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const errs=[]; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://127.0.0.1:8765/' + pg, { waitUntil: 'load' }); await p.waitForTimeout(1200);
  const top = await p.evaluate(s => { const e=document.querySelector(s); return e.getBoundingClientRect().top + scrollY; }, sel);
  for (let i = 0; i < +n; i++) {
    const y = top + +o + i * +step;
    await p.evaluate(y => { if (window.__lenis) window.__lenis.scrollTo(y, {immediate:true}); else window.scrollTo(0, y); }, y);
    await p.waitForTimeout(1000);
    await p.screenshot({ path: `${out}_${String(i).padStart(2,'0')}.png` });
  }
  console.log('top', top, 'errors', JSON.stringify(errs)); await b.close();
})();
