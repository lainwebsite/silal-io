"""Hub (ivp-hub.html): owner 11 Nov 'hapus saja sementara'. The overview document does not ask for the 'Partner service' strip
(it is a designer note) or for a 'Partner service' tag on the Agri-food Challenges card. Both removed for now. Idempotent.
The eight capabilities stay in the Find-your-pathway result for option 4. usage: hub_remove_partner_service.py <bundle dir>"""
import sys, os

P = os.path.join(sys.argv[1], "ivp-hub.html")
s = open(P, encoding="utf8").read()
n0 = s
a = s.find('<div class="s_wrap"><div class="hp_svc">')
if a > 0:
    b = s.find("</ul></div></div>", a) + len("</ul></div></div>")
    s = s[:a] + s[b:]
    print("strip removed")
TAG = '<span class="hp_tag hp_tagSvc">Partner service</span>'
if TAG in s:
    s = s.replace(TAG, "", 1)
    print("tag removed")
if s != n0:
    open(P, "w", encoding="utf8").write(s)
else:
    print("already removed")
