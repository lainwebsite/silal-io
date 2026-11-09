"""Revision 6 November (client): specific IO Academy courses come from Delphy and are co-branded IO x Delphy;
they get their own filter in the library and the Delphy mark on cards and course pages.
Run after academy.py / site.py: python3 academy_rev6.py <dir with io-academy.html and training-detail.html>
Which courses are Delphy's is a placeholder until the client's list (Trainings - Delphy) arrives: the greenhouse and
the irrigation/fertigation courses."""
import pathlib, sys

D = pathlib.Path(sys.argv[1])
DELPHY = ["controlled-environment-agriculture-hightech-greenhouse", "precision-irrigation-and-fertigation-in-arid-climates"]
MARK = '<b class="cobrand"><span>IO</span><i>&times;</i><span class="cobrandD">Delphy</span></b>'
CSS = """<style>/* rev. 6 Nov: IO x Delphy co-branded courses */
.cobrand{display:inline-flex;align-items:center;gap:6px;margin-left:10px;padding:3px 9px 3px 8px;border:1px solid #2e7d4f;border-radius:999px;font-weight:600;font-size:11px;letter-spacing:.04em;color:#2e7d4f;background:#fff;text-transform:none;vertical-align:1px}
.cobrand i{font-style:normal;font-weight:400;opacity:.6}.cobrandD{font-family:Georgia,'Times New Roman',serif;font-weight:700;letter-spacing:.01em}
.cobrandBig{margin:0 0 18px;font-size:12px;padding:6px 12px}
.partnerBox{margin-top:36px;padding-top:22px;border-top:1px solid var(--line)}.partnerBox p{margin:0 0 10px;font-size:13px;color:var(--grey-ink)}
.partnerBtn{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;padding:12px 14px;border:1px solid var(--line);border-radius:8px;background:#fff;font:inherit;font-size:14px;color:var(--charcoal);cursor:pointer;text-align:left}
.partnerBtn[aria-pressed=true]{border-color:#2e7d4f;box-shadow:inset 0 0 0 1px #2e7d4f}.partnerBtn small{color:var(--grey-ink)}
</style>"""


def sub(s, a, b, n=1):
    if a not in s:
        raise SystemExit("not found: " + a[:90])
    return s.replace(a, b, n)


p = D / "io-academy.html"
s = p.read_text(encoding="utf8")
if "cobrand" not in s:
    for slug in DELPHY:
        s = sub(s, f'"slug": "{slug}", ', f'"slug": "{slug}", "partner": "Delphy", ')
    s = sub(s, 'var st={view:"lib",cur:0,track:"All tracks",mode:"All formats",', 'var st={view:"lib",cur:0,track:"All tracks",mode:"All formats",prov:"All providers",')
    cond = '(st.mode==="All formats"||c.mode===st.mode)'
    s = s.replace(cond, cond + '&&(st.prov==="All providers"||(st.prov==="IO \\u00d7 Delphy"?c.partner==="Delphy":!c.partner))')
    meta = """<p class="meta"><span>'+c.mode+'</span>'+c.level+'</p>"""
    s = sub(s, meta, """<p class="meta"><span>'+c.mode+'</span>'+c.level+(c.partner?'""" + MARK + """':'')+'</p>""", 2)
    s = sub(s, """<select id="fmode">'+opt(MO,"All formats",st.mode)+'</select></label>""",
            """<select id="fmode">'+opt(MO,"All formats",st.mode)+'</select></label><label class="select"><span class="srOnly">Provider</span><select id="fprov">'+opt(["IO Academy","IO \\u00d7 Delphy"],"All providers",st.prov)+'</select></label>""")
    s = sub(s, """<ul class="sideList" id="sidetracks">'+sideTracks()+'</ul></nav>""",
            """<ul class="sideList" id="sidetracks">'+sideTracks()+'</ul></nav><div class="partnerBox"><p class="sideTitle">Partner courses</p><p>Co-branded courses delivered with Delphy, the Dutch horticulture specialists.</p><button type="button" class="partnerBtn" data-prov aria-pressed="'+(st.prov==="IO \\u00d7 Delphy")+'">""" + MARK.replace("cobrand", "cobrand cobrandBig").replace('cobrand cobrandBigD', 'cobrandD') + """<small>'+C.filter(function(c){return c.partner}).length+' courses</small></button></div>""")
    s = sub(s, 'if(ev.target.id==="fmode"){st.mode=ev.target.value;refeed()}', 'if(ev.target.id==="fmode"){st.mode=ev.target.value;refeed()}if(ev.target.id==="fprov"){st.prov=ev.target.value;render()}')
    s = sub(s, 'else if(t.hasAttribute("data-clear")){st.track="All tracks";st.mode="All formats";', 'else if(t.hasAttribute("data-prov")){ev.preventDefault();st.prov=st.prov==="IO \\u00d7 Delphy"?"All providers":"IO \\u00d7 Delphy";render()}else if(t.hasAttribute("data-clear")){st.track="All tracks";st.mode="All formats";st.prov="All providers";')
    s = sub(s, """'<h1 class="dTitle" data-split>'+esc(c.title)+'</h1>""", """(c.partner?'<p>""" + MARK.replace("cobrand", "cobrand cobrandBig").replace('cobrand cobrandBigD', 'cobrandD') + """</p>':'')+'<h1 class="dTitle" data-split>'+esc(c.title)+'</h1>""")
    s = s.replace("<head>", "<head>" + CSS, 1)
    p.write_text(s, encoding="utf8")
    print("io-academy: Delphy co-brand")

p = D / "training-detail.html"
s = p.read_text(encoding="utf8")
if "cobrand" not in s:
    for slug in DELPHY:
        s = s.replace(f'"slug": "{slug}", ', f'"slug": "{slug}", "partner": "Delphy", ')
    if """'<h1 class="dTitle" data-split>'+esc(c.title)+'</h1>""" in s:
        s = s.replace("""'<h1 class="dTitle" data-split>'+esc(c.title)+'</h1>""", """(c.partner?'<p>""" + MARK.replace("cobrand", "cobrand cobrandBig").replace('cobrand cobrandBigD', 'cobrandD') + """</p>':'')+'<h1 class="dTitle" data-split>'+esc(c.title)+'</h1>""")
    s = s.replace("<head>", "<head>" + CSS, 1)
    p.write_text(s, encoding="utf8")
    print("training-detail: Delphy co-brand")
