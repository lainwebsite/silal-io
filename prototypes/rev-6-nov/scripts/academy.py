"""IO Academy + Training Detail (rev 6 Nov 18): co-branded iO x Delphy courses, their own library filter, Delphy lockup."""
import json
from common import *

DELPHY = {0, 1, 4}   # greenhouse management, irrigation & fertigation, crop trial design (Delphy = greenhouse horticulture specialists)
LOCK = ("'<span class=\"dlLock\"><b>iO</b><i>×</i><b>Delphy</b></span>'")

def patch(s):
    k = s.index('{', s.index('DATA='))
    data, end = json.JSONDecoder().raw_decode(s[k:])
    for i, c in enumerate(data['courses']):
        if i in DELPHY:
            c['partner'] = 'Delphy'
            c['trainers'].append({'role': 'Delphy horticulture specialist', 'focus': 'Co-delivered module with Delphy, IO Academy content partner'})
    s = s[:k] + json.dumps(data, ensure_ascii=False) + s[k + end:]
    # state + filter logic
    s = s.replace('track:"All tracks",mode:"All formats",q:"",sent:false}', 'track:"All tracks",mode:"All formats",q:"",dl:false,sent:false}', 1)
    lib = 'function feedBody' in s
    soft = lambda s, a, b, count=1: s.replace(a, b) if a in s else s
    R = rep if lib else soft
    flt = '(st.track==="All tracks"||c.track===st.track)&&(st.mode==="All formats"||c.mode===st.mode)'
    s = R(s, flt, flt + '&&(!st.dl||c.partner==="Delphy")', count=2)
    s = R(s, 'st.track="All tracks";st.mode="All formats";st.q="";render()', 'st.track="All tracks";st.mode="All formats";st.q="";st.dl=false;render()')
    # badges on cards and the big card
    s = R(s, '<div class="cardImg"><div class="photo" style="background-image:url(\'+PH[i]+\')"></div></div>',
            '<div class="cardImg"><div class="photo" style="background-image:url(\'+PH[i]+\')"></div>\'+(c.partner?\'<span class="dlBadge">iO × Delphy</span>\':\'\')+\'</div>')
    s = R(s, '<div class="bigImg"><div class="photo" style="background-image:url(\'+PH[i]+\')"></div></div>',
            '<div class="bigImg"><div class="photo" style="background-image:url(\'+PH[i]+\')"></div>\'+(c.partner?\'<span class="dlBadge">iO × Delphy</span>\':\'\')+\'</div>')
    # library: partner filter pill + a partner block in the side nav
    s = R(s, '<div class="filters"><label class="select"><span class="srOnly">Track</span>',
            '<div class="filters"><button type="button" class="dlFilter" data-dl aria-pressed="\'+st.dl+\'"><span class="dlDot"></span>iO × Delphy <small>\'+C.filter(function(c){return c.partner}).length+\'</small></button><label class="select"><span class="srOnly">Track</span>')
    s = R(s, '<nav aria-label="Browse by track"><p class="sideTitle">Browse by track</p><ul class="sideList" id="sidetracks">\'+sideTracks()+\'</ul></nav>',
            '<nav aria-label="Browse by track"><p class="sideTitle">Browse by track</p><ul class="sideList" id="sidetracks">\'+sideTracks()+\'</ul></nav>'
            '<div class="dlSide"><p class="sideTitle">Partner programmes</p><button type="button" class="dlSideBtn" data-dl aria-pressed="\'+st.dl+\'">\'+' + LOCK + '+\'<span>Co-branded courses with Delphy, greenhouse horticulture specialists.</span></button></div>')
    s = R(s, 'else if(t.hasAttribute("data-clear")){',
            'else if(t.hasAttribute("data-dl")){ev.preventDefault();st.dl=!st.dl;document.querySelectorAll("[data-dl]").forEach(function(b){b.setAttribute("aria-pressed",st.dl)});refeed()}\n  else if(t.hasAttribute("data-clear")){')
    # detail: partner lockup under the breadcrumb
    s = rep(s, '\'<h1 class="dTitle" data-split>\'+esc(c.title)+\'</h1>',
            '(c.partner?\'<div class="dlBand" data-up>\'+' + LOCK + '+\'<p>Co-branded course, developed and delivered with <b>Delphy</b>, IO Academy content partner for greenhouse horticulture.</p></div>\':\'\')+\'<h1 class="dTitle" data-split>\'+esc(c.title)+\'</h1>')
    CSS = '''<style id="rev6-academy">
.dlBadge { position: absolute; left: 12px; top: 12px; z-index: 2; padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,.95); color: #1b6f93; font-size: .6875rem; font-weight: 600; letter-spacing: .04em; box-shadow: 0 6px 16px -8px rgba(0,0,0,.35); }
.cardImg, .bigImg { position: relative; }
.dlFilter { display: inline-flex; align-items: center; gap: 8px; padding: 0 16px; min-height: 40px; border: 1px solid #d9d9d9; border-radius: 999px; background: #fff; font: inherit; font-size: .8125rem; color: #595453; cursor: pointer; white-space: nowrap; transition: background .25s, color .25s, border-color .25s; }
.dlFilter small { font-size: .6875rem; color: #7f8284; }
.dlDot { width: 8px; height: 8px; border-radius: 50%; border: 1.5px solid #3ca7d2; }
.dlFilter[aria-pressed="true"] { background: #1b6f93; border-color: #1b6f93; color: #fff; }
.dlFilter[aria-pressed="true"] small { color: rgba(255,255,255,.75); }
.dlFilter[aria-pressed="true"] .dlDot { background: #fff; border-color: #fff; }
.dlSide { margin-top: 36px; }
.dlSideBtn { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; width: 100%; padding: 16px; border: 1px solid #e3e3e3; background: #fff; font: inherit; text-align: left; cursor: pointer; transition: border-color .25s, box-shadow .25s; }
.dlSideBtn span { font-size: .75rem; line-height: 1.5; color: #7f8284; }
.dlSideBtn[aria-pressed="true"] { border-color: #1b6f93; box-shadow: inset 3px 0 0 #1b6f93; }
.dlLock { display: inline-flex; align-items: center; gap: 8px; font-size: 1rem; color: #595453; }
.dlLock b { font-weight: 600; letter-spacing: .01em; }
.dlLock b:first-child { color: #3ca7d2; font-size: 1.15em; }
.dlLock i { font-style: normal; color: #7f8284; }
.dlBand { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; margin: 18px 0 6px; padding: 14px 18px; border: 1px solid #e3e3e3; border-left: 3px solid #3ca7d2; background: #fafafa; }
.dlBand p { font-size: .875rem; color: #7f8284; max-width: 60ch; }
.dlBand b { color: #595453; font-weight: 500; }
</style>'''
    return s.replace('</body>', CSS + '</body>') if '</body>' in s else s + CSS

for f in ['io-academy.html', 'training-detail.html']:
    save(f, global_patch(patch(load(f))))
