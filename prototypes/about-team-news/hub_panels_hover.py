"""Hub (ivp-hub.html): client 10-11 Nov "make it on hover like the old version".
Drops the round-5 override block that forced every platform panel open at rest, so the original component's
hover accordion applies again (rest = tag + title, hover = panel widens and reveals its text). Idempotent.
usage: hub_panels_hover.py <bundle dir>"""
import sys, os

P = os.path.join(sys.argv[1], "ivp-hub.html")
A = ".h_panels { --h: min(clamp(520px, 66vh, 640px), 44vw); }"
B = ".h_go svg { transition: transform .3s var(--slow); }"
s = open(P, encoding="utf8").read()
i = s.find(A)
if i < 0:
    print("already patched")
else:
    j = s.find(B, i)
    assert j > i, "end anchor missing"
    s = s[:i] + s[j:]
    open(P, "w", encoding="utf8").write(s)
    print("patched")
