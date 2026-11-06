// node shots.js <page> <outprefix> <width> <height> <step px> <count>
const { chromium } = require('playwright');
(async () => {
  const [page_, out, w, h, step, n] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const errs=[]; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://127.0.0.1:8765/' + page_, { waitUntil: 'load' });
  await p.waitForTimeout(1500);
  for (let i = 0; i < +n; i++) {
    await p.evaluate(y => { if (window.__lenis) window.__lenis.scrollTo(y, {immediate:true}); else window.scrollTo(0, y); }, i * +step);
    await p.waitForTimeout(900);
    await p.screenshot({ path: `${out}_${String(i).padStart(2,'0')}.png` });
  }
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  console.log('height', H, 'errors', JSON.stringify(errs));
  await b.close();
})();
