"""Hero: 'iO Academy' label sits right above each slide title (was a static line floating under the progress bar).
The real H1 stays for a11y but visually hidden. Idempotent. usage: academy_hero_eyebrow.py <bundle dir>"""
import sys, os

P = os.path.join(sys.argv[1], "io-academy.html")
MARK = "/* rev. 10 Nov: hero eyebrow */"
A = '<h1 class="mhTitle">iO Academy</h1>'
A2 = '<h1 class="mhTitle srOnly">iO Academy</h1>'
B = '" data-st><h2 class="mhSlideTitle">'
B2 = '" data-st><p class="mhEye" aria-hidden="true">iO Academy</p><h2 class="mhSlideTitle">'
CSS = ("<style>" + MARK +
       ".mhEye{margin:0 0 calc(12px - clamp(20px,3vh,32px));font-weight:300;font-size:var(--t-h3);line-height:1.2;color:rgb(255 255 255/.9)}"
       "</style>")
s = open(P).read()
if MARK in s:
    print("already patched")
else:
    assert A in s and B in s, "anchors missing"
    s = s.replace(A, A2, 1).replace(B, B2, 1)
    open(P, "w").write(s + CSS)
    print("patched")
