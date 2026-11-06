const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage();
 await p.goto(process.argv[2], { waitUntil: 'load' });
 console.log(await p.evaluate(() => { let e=document.getElementById('dock'), r=[]; while(e){ r.push(e.tagName+'.'+(e.className||'')+'#'+(e.id||'')); e=e.parentElement;} return r.join(' < '); }));
 await b.close(); })();
