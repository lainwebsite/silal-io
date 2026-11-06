const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
 await p.goto(process.argv[2], { waitUntil: 'load' }); await p.waitForTimeout(800);
 await p.evaluate(() => window.__lenis ? window.__lenis.scrollTo(3000,{immediate:true}) : scrollTo(0,3000)); await p.waitForTimeout(1200);
 console.log(await p.evaluate(() => { const a=document.querySelectorAll('#dock a'); return [...a].map(x=>x.textContent.trim()+' | '+getComputedStyle(x).fontFamily.slice(0,20)+' | '+x.className+' | parent:'+x.parentElement.id); }));
 await b.close(); })();
