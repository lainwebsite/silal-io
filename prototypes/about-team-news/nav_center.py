"""Centre every nav dropdown under its item (clamped to viewport). Idempotent. usage: nav_center.py <bundle dir>
Handles both class prefixes: .navItem/.dropdown (academy pages) and .s_navItem/.s_dropdown (homepage + site pages)."""
import sys, glob, os, re

D = sys.argv[1]
CSS = ('<style id="navc">'
       '.navItem .dropdown,.navItem:nth-last-child(-n + 2) .dropdown,'
       '.s_navItem .s_dropdown,.s_navItem:nth-last-child(-n + 2) .s_dropdown{left:50%;right:auto;margin:0}</style>')
JS = (
    '<script id="navcj">(function(){var Q=".navItem,.s_navItem";'
    'function fit(li){var d=li.querySelector(".dropdown,.s_dropdown");if(!d)return;'
    'd.style.right="auto";d.style.left="50%";d.style.marginLeft=(-d.offsetWidth/2)+"px";var r=d.getBoundingClientRect(),'
    'vw=document.documentElement.clientWidth,m=16,s=0;'
    'if(r.left<m)s=m-r.left;else if(r.right>vw-m)s=vw-m-r.right;'
    'if(s)d.style.marginLeft=(-d.offsetWidth/2+s)+"px"}'
    'function all(){document.querySelectorAll(Q).forEach(fit)}'
    'document.addEventListener("mouseover",function(e){var l=e.target.closest&&e.target.closest(Q);if(l)fit(l)});'
    'document.addEventListener("focusin",function(e){var l=e.target.closest&&e.target.closest(Q);if(l)fit(l)});'
    'window.addEventListener("resize",all);window.addEventListener("load",all)})()</script>'
)
STRIP = re.compile(r'<style id="navc">.*?</style>|<script id="navcj">.*?</script>', re.S)
n = 0
for f in glob.glob(os.path.join(D, "*.html")):
    s = open(f).read()
    if "navItem" not in s and "s_navItem" not in s:
        continue
    s = STRIP.sub("", s)
    if "</head>" in s:
        s = s.replace("</head>", CSS + "</head>", 1)
    elif re.search(r"<head[^>]*>", s):  # never put anything before <!doctype> (quirks mode)
        s = re.sub(r"(<head[^>]*>)", lambda m: m.group(1) + CSS, s, count=1)
    else:
        s = CSS + s
    s = s.replace("</body>", JS + "</body>", 1) if "</body>" in s else s + JS
    open(f, "w").write(s)
    n += 1
print("patched", n)
