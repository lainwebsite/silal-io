const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs=[]; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://127.0.0.1:8765/index.html', { waitUntil: 'load' }); await p.waitForTimeout(1000);
  const go = async sel => { const y = await p.evaluate(s => document.querySelector(s).getBoundingClientRect().top + scrollY, sel); await p.evaluate(y => window.__lenis ? window.__lenis.scrollTo(y,{immediate:true}) : scrollTo(0,y), y - 60); await p.waitForTimeout(2600); };
  await go('#mapSec'); await p.screenshot({ path: 'shots/map_all.png' });
  await p.click('.rv_chip[data-layer="heat"]'); await p.click('.rv_chip[data-layer="salinity"]'); await p.click('.rv_chip[data-layer="soil"]'); await p.waitForTimeout(1200);
  await p.screenshot({ path: 'shots/map_water.png' });
  await go('#siteCurtain'); await p.waitForTimeout(1500);
  await p.click('.rv_spBtn'); await p.waitForTimeout(1200); await p.screenshot({ path: 'shots/lb.png' });
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(900); await p.screenshot({ path: 'shots/lb2.png' });
  await p.keyboard.press('Escape'); await p.waitForTimeout(500);
  console.log('lb hidden', await p.evaluate(() => document.getElementById('rvLb').hidden), errs);
  await b.close();
})();
