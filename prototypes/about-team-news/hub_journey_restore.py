"""Hub (ivp-hub.html): owner 11 Nov 'kembalikan ke sebelumnya'. Puts the previous journey (horizontal, pinned, photo + numeral)
back in place of the 'stage rail' concept. Everything else of hub_comments_11nov_c.py stays (card 4, readiness options).
usage: hub_journey_restore.py <bundle dir> <html file that still has the previous journey>"""
import sys, os

P = os.path.join(sys.argv[1], "ivp-hub.html")
SRC = sys.argv[2]
s = open(P, encoding="utf8").read()
old = open(SRC, encoding="utf8").read()
if 'class="x_jour hp_jour" id="xJour"' in s:
    print("previous journey already in place")
    sys.exit(0)
oa = old.find('<div class="x_jour hp_jour" id="xJour"')
ob = old.find("<!-- Two routes to innovation", oa)
assert oa > 0 and ob > oa
prev = old[oa:ob]
na = s.find('<section class="x_sec x_grey hp_jr2"')
nb = s.find("<!-- Two routes to innovation", na)
assert na > 0 and nb > na
s = s[:na] + prev + s[nb:]
open(P, "w", encoding="utf8").write(s)
print("previous journey restored")
