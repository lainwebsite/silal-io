"""Centre every nav dropdown under its item (clamped to viewport). Idempotent. usage: nav_center.py <bundle dir>"""
import sys, glob, os

D = sys.argv[1]
CSS = '<style id="navc">.navItem .dropdown,.navItem:nth-last-child(-n + 2) .dropdown{left:50%;right:auto;margin:0}</style>'
JS = (
    '<script id="navcj">(function(){function fit(li){var d=li.querySelector(".dropdown");if(!d)return;'
    'd.style.left="50%";d.style.marginLeft=(-d.offsetWidth/2)+"px";var r=d.getBoundingClientRect(),'
    'vw=document.documentElement.clientWidth,m=16,s=0;'
    'if(r.left<m)s=m-r.left;else if(r.right>vw-m)s=vw-m-r.right;'
    'if(s)d.style.marginLeft=(-d.offsetWidth/2+s)+"px"}'
    'function all(){document.querySelectorAll(".navItem").forEach(fit)}'
    'document.addEventListener("mouseover",function(e){var l=e.target.closest&&e.target.closest(".navItem");if(l)fit(l)});'
    'document.addEventListener("focusin",function(e){var l=e.target.closest&&e.target.closest(".navItem");if(l)fit(l)});'
    'window.addEventListener("resize",all);window.addEventListener("load",all)})()</script>'
)
n = 0
for f in glob.glob(os.path.join(D, "*.html")):
    s = open(f).read()
    if "navItem" not in s or 'id="navc"' in s:
        continue
    s = s.replace("</head>", CSS + "</head>", 1) if "</head>" in s else CSS + s
    s = s.replace("</body>", JS + "</body>", 1) if "</body>" in s else s + JS
    open(f, "w").write(s)
    n += 1
print("patched", n)
