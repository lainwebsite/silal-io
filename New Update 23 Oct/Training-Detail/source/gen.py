import re,json,base64,io
from PIL import Image
S="/tmp/claude-0/-home-user-silal-io/a35b169d-f94b-5421-b8a0-c6b77ebde0a1/scratchpad/"
V="app/390b3d94a5/v10/"
D=json.load(open(S+"courses.json")); ph=json.load(open(S+"photos.json"))
def img(path,w,q):
    im=Image.open(path).convert("RGB"); im.thumbnail((w,w)); b=io.BytesIO(); im.save(b,"JPEG",quality=q,optimize=True); return "data:image/jpeg;base64,"+base64.b64encode(b.getvalue()).decode()
P="public/photos/"
CEO=img(P+"iO Team Headshot & Bios/Shamal/Shamal-2.jpg",420,72)
heroes=[img(P+"General MarCom Photos (1)/DSC04723 (1).jpg",1700,56),img(P+"Archive/Screenshot 2026-09-24 163836.jpg",1700,56),img(P+"Final Pitches/FRH_1604.JPG",1700,56)]
shell=open(V+"shell.module.css").read()
shell=re.sub(r'/\*.*?\*/','',shell,flags=re.S)
def uri(p): return "data:image/svg+xml;base64,"+base64.b64encode(open(p,"rb").read()).decode()
WM=uri("public/new-homepage/brand/io-wordmark-endorsed.svg");WMR=uri("public/new-homepage/brand/io-wordmark-endorsed-reversed.svg");MK=uri("public/new-homepage/brand/io-mark.svg")
AR='<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
css=open(S+"gen.css").read()
js=open(S+"gen.js").read()
html=f'''<title>IO Academy</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500&display=swap">
<style>
body{{margin:0;background:#fff;color:#595453}}
{shell.replace('var(--font-d10), "Readex Pro"','"Readex Pro"')}
{css}
</style>
<div class="root" id="top">
<header class="header" id="hdr" data-scrolled="false" data-overlay="true">
 <div class="utility"><div class="wrap utilityInner"><span>Advancing Agri-food Systems <span class="utilitySep">·</span> <span lang="ar">نحو أنظمة زراعة وغذاء متطورة</span></span><span class="utilityLinks"><a href="#top">Resources</a><a href="#top">Contact</a><span lang="ar">عربي</span></span></div></div>
 <div class="headerMain"><div class="wrap headerInner">
  <a href="#top" class="logo" aria-label="Innovation Oasis, home"><span class="logoFull"><span class="logoOnLight"><span style="display:inline-flex;align-items:flex-start;gap:9px"><img data-wm alt="Innovation Oasis — Part of Silal" width="110" height="50"><img data-mk alt="" height="39" width="53"></span></span><span class="logoOnDark"><span style="display:inline-flex;align-items:flex-start;gap:9px"><img data-wmr alt="Innovation Oasis — Part of Silal" width="110" height="50"><img data-mk alt="" height="39" width="53"></span></span></span><span class="logoSmall"><img data-mk alt="Innovation Oasis" height="36" width="49"></span></a>
  <nav class="nav" aria-label="Main"><ul id="navlist"></ul></nav>
  <div class="headerActions"><a href="#top" class="btn btnPrimary btnSm">Enquire {AR}</a><button class="menuToggle" id="mo" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></div>
 </div></div>
 <div class="mobileNav" id="mn" data-open="false" aria-hidden="true"><div class="wrap mobileNavTop"><span style="display:inline-flex;align-items:flex-start;gap:8px"><img data-wm alt="Innovation Oasis — Part of Silal" width="93" height="42"><img data-mk alt="" height="33" width="45"></span><button class="menuClose" id="mc" aria-label="Close menu"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 7l14 14M21 7 7 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div><div class="wrap" id="mlist"></div></div>
</header>
<main id="main"><div id="view"></div></main>
<footer class="footer"><div class="wrap footerGrid"><div class="footerCols">
 <div class="footerNews"><h4>Stay close to the work</h4><p>Research, programmes and calls for innovators, a few times a year.</p><form class="newsletter" id="nlf"><input type="email" id="nlEmail" placeholder="Email address" aria-label="Email address"><button type="submit" class="btn btnPrimary btnSm" aria-label="Subscribe">{AR}</button></form></div>
 <div><h4>Explore</h4><ul id="fx"></ul></div>
 <div><h4>Resources</h4><ul><li><a href="#top">Content Library</a></li><li><a href="#top">FAQs</a></li></ul><h4 style="margin-top:32px">Connect</h4><ul><li><a href="#top">Contact</a></li><li><a href="#top">Enquire</a></li><li><a href="#top">LinkedIn<svg class="extIcon" width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" rx="2" fill="#7f8284"/><path d="M5 11l6-6M6.5 5H11v4.5" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li></ul></div>
</div><div class="footerBrand"><img class="footerMark" data-mk alt="" height="150" width="203"><div class="footerRule"></div><div class="footerId"><img data-wm alt="Innovation Oasis — Part of Silal" width="240" height="109"><a href="#top" class="footerUrl">io-silal.ae</a><address><span lang="ar">واحة الابتكار – سلال، العين، الإمارات العربية المتحدة</span><br>Innovation Oasis – Silal, Al Ain, UAE</address></div></div></div>
<div class="wrap footerBottom"><span>© 2026 Silal. All rights reserved.</span><nav aria-label="Legal"><a href="#top">Terms of Use</a><a href="#top">Privacy</a></nav></div></footer>
</div>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
<script>
var WM="{WM}",WMR="{WMR}",MK="{MK}",PH={json.dumps(ph)},HERO={json.dumps(heroes)},DATA={json.dumps(D)},CEO="{CEO}",AR='{AR}';
{js}
</script>
'''
open(S+"io-academy-library.html","w").write(html); print(len(html)//1024,"KB")
