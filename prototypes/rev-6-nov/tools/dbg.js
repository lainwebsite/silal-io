const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  p.on('pageerror', e => console.log('ERR', e.stack.split('\n').slice(0,3).join(' | ')));
  await p.goto('http://127.0.0.1:8765/' + process.argv[2], { waitUntil: 'load' }); await p.waitForTimeout(1000);
  console.log(await p.evaluate(() => { const r=[]; document.querySelectorAll('main > div > div, main > div > *').forEach(e=>{}); 
    const el=document.querySelector('.rv_appr'); const cs=el&&getComputedStyle(el);
    return {sheets: document.styleSheets.length, font: cs&&cs.fontFamily, bg: cs&&cs.backgroundColor, parent: el && el.parentElement.className, views:[...document.querySelectorAll('[data-view]')].map(v=>v.dataset.view+':'+getComputedStyle(v).display)}; }));
  await b.close();
})();
