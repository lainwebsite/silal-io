"""Hub (ivp-hub.html): owner 11 Nov 'aku mau pakai fix yang A dulu'. Keeps the current readiness block (Option A) and removes the
comparison options B and C and the 'Option A' label. Idempotent. usage: hub_readiness_pick_a.py <bundle dir>"""
import sys, os

P = os.path.join(sys.argv[1], "ivp-hub.html")
s = open(P, encoding="utf8").read()
n0 = s
a = s.find('<section class="x_sec hp_alt hp_altB">')
if a > 0:
    c = s.find('<section class="x_sec hp_alt hp_altC">', a)
    c_end = s.find("</section>", c) + len("</section>")
    s = s[:a].rstrip() + "\n\n  " + s[c_end:].lstrip("\n ")
    print("options B and C removed")
TAG = '<span class="alt_tag">Option A · current</span>'
if TAG in s:
    s = s.replace(TAG, "", 1)
    print("label removed")
if s != n0:
    open(P, "w", encoding="utf8").write(s)
else:
    print("nothing to do")
