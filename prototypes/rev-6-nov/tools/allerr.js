const { chromium } = require('playwright'); const fs=require('fs');
(async () => { const b = await chromium.launch();
 const pages = fs.readdirSync('site').filter(f=>f.endsWith('.html'));
 for (const vp of [{width:1440,height:900},{width:390,height:844}]) {
 for (const f of pages) { const p = await b.newPage({viewport:vp}); const errs=[]; p.on('pageerror', e=>errs.push(e.message));
   await p.goto('http://127.0.0.1:8765/'+f,{waitUntil:'load'}); await p.waitForTimeout(600);
   await p.evaluate(async()=>{ for(let y=0;y<document.documentElement.scrollHeight;y+=700){ if(window.__lenis) window.__lenis.scrollTo(y,{immediate:true}); else scrollTo(0,y); await new Promise(r=>setTimeout(r,40)); } });
   const ov = await p.evaluate(()=>document.documentElement.scrollWidth - innerWidth);
   if (errs.length || ov>2) console.log(vp.width, f, errs.slice(0,2), 'overflowX', ov); await p.close(); } }
 console.log('done'); await b.close(); })();
