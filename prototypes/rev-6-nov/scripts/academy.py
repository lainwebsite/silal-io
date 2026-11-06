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
    # comment 6 Nov (thread de5b61a4): Delphy sits in the "Browse by track" list, its courses as Delphy-style training cards
    s = R(s, "return '<li><a href=\"#top\" data-spy=\"'+t+'\"'+(n?'':' class=\"none\"')+'>'+esc(t)+' <small>'+n+'</small></a></li>'}).join(\"\")",
            "return '<li><a href=\"#top\" data-spy=\"'+t+'\"'+(n?'':' class=\"none\"')+'>'+esc(t)+' <small>'+n+'</small></a></li>'}).join(\"\")+'<li class=\"dlTrack\"><a href=\"#top\" data-dl aria-pressed=\"'+st.dl+'\"><span class=\"dlLock\"><b>iO</b><i>×</i><b>Delphy</b></span> <small>'+C.filter(function(c){return c.partner}).length+'</small></a></li>'")
    s = R(s, 'function feedBody(){',
            'function dlCard(c,i){var f=c.facts||{};return \'<li data-up data-trk="\'+esc(c.track)+\'"><button type="button" class="dlCard" data-open="\'+i+\'"><span class="dlImg"><span class="photo" style="background-image:url(\'+PH[i]+\')"></span><span class="dlBadge">iO × Delphy</span></span><h3>\'+esc(c.title)+\'</h3><p>\'+esc(c.excerpt)+\'</p><ul class="dlMeta"><li>Type: \'+esc(c.mode)+\'</li><li>\'+esc(f.language||"English")+\'</li></ul></button></li>\'}\n'
            'function feedBody(){')
    s = R(s, 'var rows=rowsOf(L).map(', 'var rows=st.dl?\'<li><div class="dlIntro"><span class="dlLock"><b>iO</b><i>×</i><b>Delphy</b></span><p>Co-branded trainings, developed and delivered with Delphy, IO Academy content partner for greenhouse horticulture.</p></div><ul class="dlGrid">\'+L.map(function(x){return dlCard(x.c,x.i)}).join("")+\'</ul></li>\':rowsOf(L).map(')
    s = R(s, 'else if(t.hasAttribute("data-clear")){',
            'else if(t.hasAttribute("data-dl")){ev.preventDefault();st.dl=!st.dl;document.querySelectorAll("[data-dl]").forEach(function(b){b.setAttribute("aria-pressed",st.dl)});refeed()}\n  else if(t.hasAttribute("data-clear")){')
    # detail: partner lockup under the breadcrumb
    s = rep(s, '\'<h1 class="dTitle" data-split>\'+esc(c.title)+\'</h1>',
            '(c.partner?\'<div class="dlBand" data-up>\'+' + LOCK + '+\'<p>Co-branded course, developed and delivered with <b>Delphy</b>, IO Academy content partner for greenhouse horticulture.</p></div>\':\'\')+\'<h1 class="dTitle" data-split>\'+esc(c.title)+\'</h1>')
    CSS = '''<style id="rev6-academy">
.dlBadge { position: absolute; left: 12px; top: 12px; z-index: 2; padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,.95); color: #1b6f93; font-size: .6875rem; font-weight: 600; letter-spacing: .04em; box-shadow: 0 6px 16px -8px rgba(0,0,0,.35); }
.cardImg, .bigImg { position: relative; }
.dlLock { display: inline-flex; align-items: center; gap: 8px; font-size: 1rem; color: #595453; }
.dlLock b { font-weight: 600; letter-spacing: .01em; }
.dlLock b:first-child { color: #3ca7d2; font-size: 1.15em; }
.dlLock i { font-style: normal; color: #7f8284; }
.dlTrack { margin-top: 10px; padding-top: 10px; border-top: 1px solid #e3e3e3; }
.dlTrack a { display: flex !important; align-items: center; gap: 8px; }
.dlTrack a[aria-pressed="true"] { color: #1b6f93; }
.dlTrack a[aria-pressed="true"] .dlLock b:last-child { color: #1b6f93; }
.dlTrack .dlLock { font-size: .9375rem; }
.dlIntro { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 14px 18px; margin-bottom: 18px; border-left: 3px solid #3ca7d2; background: #fafafa; }
.dlIntro p { font-size: .8125rem; color: #7f8284; max-width: 56ch; }
.dlGrid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); gap: 28px 20px; }
.dlCard { all: unset; box-sizing: border-box; cursor: pointer; display: flex; flex-direction: column; gap: 12px; width: 100%; height: 100%; }
.dlCard:focus-visible { outline: 2px solid #3ca7d2; outline-offset: 4px; }
.dlImg { position: relative; display: block; aspect-ratio: 2 / 1; overflow: hidden; background: #f1f1f1; }
.dlImg .photo { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 1s cubic-bezier(.16,1,.3,1); }
.dlCard:hover .dlImg .photo { transform: scale(1.05); }
.dlCard h3 { font-size: 1.125rem; font-weight: 500; line-height: 1.3; color: #595453; }
.dlCard:hover h3 { color: #1b6f93; }
.dlCard p { font-size: .875rem; line-height: 1.55; color: #7f8284; }
.dlMeta { list-style: none; margin: auto 0 0; padding: 12px 0 0; border-top: 1px solid #e3e3e3; display: flex; flex-direction: column; gap: 4px; }
.dlMeta li { position: relative; padding-left: 14px; font-size: .8125rem; color: #595453; }
.dlMeta li::before { content: ""; position: absolute; left: 0; top: .55em; width: 6px; height: 6px; border-radius: 50%; background: #3ca7d2; }
.dlBand { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; margin: 18px 0 6px; padding: 14px 18px; border: 1px solid #e3e3e3; border-left: 3px solid #3ca7d2; background: #fafafa; }
.dlBand p { font-size: .875rem; color: #7f8284; max-width: 60ch; }
.dlBand b { color: #595453; font-weight: 500; }
</style>'''
    return s.replace('</body>', CSS + '</body>') if '</body>' in s else s + CSS

for f in ['io-academy.html', 'training-detail.html']:
    save(f, global_patch(patch(load(f))))
