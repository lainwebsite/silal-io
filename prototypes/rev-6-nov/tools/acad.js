const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs=[]; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://127.0.0.1:8765/io-academy.html', { waitUntil: 'load' }); await p.waitForTimeout(1200);
  const y = await p.evaluate(() => document.querySelector('.feed').getBoundingClientRect().top + scrollY);
  await p.evaluate(y => window.__lenis ? window.__lenis.scrollTo(y,{immediate:true}) : scrollTo(0,y), y - 80); await p.waitForTimeout(1500);
  await p.screenshot({ path: 'shots/acad1.png' });
  await p.click('.dlFilter'); await p.waitForTimeout(1500); await p.screenshot({ path: 'shots/acad2.png' });
  console.log('count', await p.evaluate(() => document.querySelector('#feedbody .count').textContent));
  await p.goto('http://127.0.0.1:8765/training-detail.html', { waitUntil: 'load' }); await p.waitForTimeout(1800); await p.screenshot({ path: 'shots/acad3.png' });
  console.log(errs); await b.close();
})();
