"""Revision 9 November, second comment on the IO Academy library ("do not separate it, put Delphy with the other tracks, so that scrolling
reaches it too"): Delphy is a row of "Browse by track" like the others (real logo as its label, same row style, no divider). Its two courses
form the last group of the feed (data-trk="Delphy"), so the list highlights Delphy when the visitor scrolls to them. The subject tracks keep
counting those courses by subject (c.topic), the way a tag would. Idempotent; each step has its own marker.
Run after academy_delphy_row.py:  python3 academy_delphy_track.py <bundle dir>
"""
import pathlib, re, sys
B = pathlib.Path(sys.argv[1])
RED = "#a51140"
for name in ("io-academy.html", "training-detail.html"):
    f = B / name
    if not f.exists():
        continue
    s = f.read_text(encoding="utf8"); o = s
    if "c.topic=c.track" not in s:
        s = s.replace("TR=DATA.tracks,MO=DATA.modes;",
                      'TR=DATA.tracks,MO=DATA.modes;C.forEach(function(c){if(c.partner==="Delphy"){c.topic=c.track;c.track="Delphy"}});TR=TR.concat(["Delphy"]);', 1)
    if "function mt(c,t)" not in s:
        s = s.replace("function esc(s){", 'function mt(c,t){return c.track===t}\nfunction esc(s){', 1)
    if True:
        s = s.replace("""<p class="cardSub">'+esc(c.track)+""", """<p class="cardSub">'+esc(c.topic||c.track)+""")
        s = s.replace("""<span aria-current="page">'+esc(c.track)+'</span>""", """<span aria-current="page">'+esc(c.topic||c.track)+'</span>""")
    # filters and counts by subject; the Delphy row matches the partner courses
    s = s.replace("c.track===st.track", "mt(c,st.track)").replace("V.filter(function(c){return c.track===t})", "V.filter(function(c){return mt(c,t)})")
    if "L.sort(function(a,b){return (a.c.track" not in s:
        s = re.sub(r"(\(!q\|\|\(c\.title\+\" \"\+c\.excerpt\)\.toLowerCase\(\)\.indexOf\(q\)>-1\)\}\);)(\s*var rows=rowsOf\(L\))",
                   r'\1L.sort(function(a,b){return (a.c.track==="Delphy")-(b.c.track==="Delphy")||a.i-b.i});\2', s, count=1)
    s = re.sub(r"""\+'<li class="sideProv">.*?</li>(<li class="sideInd")""", r"+'\1", s, flags=re.S)
    if 'class="sideLogo"' not in s:
        s = s.replace("""+esc(t)+' <small>'+n+'</small></a></li>'""", """+(t==="Delphy"?'<img class="sideLogo" src="logos/delphy.svg" alt="Delphy"/>':esc(t))+' <small>'+n+'</small></a></li>'""")
    if "rev. 9 Nov: Delphy track row" not in s:
        css = ("<style>/* rev. 9 Nov: Delphy track row */.sideList a[data-spy=\"Delphy\"]{display:flex;align-items:center;gap:8px}"
               ".sideLogo{height:30px;width:auto;display:block}"
               f".sideList a[data-spy=\"Delphy\"][aria-current] small{{color:{RED}}}</style>")
        s = s.replace("<head>", "<head>" + css, 1) if "<head>" in s else css + s
    if s != o:
        f.write_text(s, encoding="utf8"); print(name, "patched")

# revision 9 November, third comment on the IO Academy page ("align the body text to the bottom"): in the hero the slide text sits on the
# bottom edge of its block, so the course link keeps the same place on every slide and a shorter title grows upward from it
for name in ("io-academy.html",):
    f = B / name
    if f.exists():
        s = f.read_text(encoding="utf8")
        if "mhSlide{grid-area:1/1;display:grid;align-content:end" not in s:
            s = s.replace("mhSlide{grid-area:1/1;display:grid;align-content:start", "mhSlide{grid-area:1/1;display:grid;align-content:end", 1)
            f.write_text(s, encoding="utf8"); print(name, "hero text bottom-aligned")

# revision 9 November, fourth comment ("while scrolling there are two labels in one row, so a label gets skipped"): the feed is laid out per
# track, so a row never mixes two tracks and the side list highlights every track in turn
for name in ("io-academy.html",):
    f = B / name
    if f.exists():
        s = f.read_text(encoding="utf8")
        if "G.map(function(g){return rowsOf(g.l)})" not in s:
            s = s.replace("var rows=rowsOf(L).map(",
                          "var G=[];L.forEach(function(x){var g=G[G.length-1];if(g&&g.t===x.c.track)g.l.push(x);else G.push({t:x.c.track,l:[x]})});"
                          "var rows=[].concat.apply([],G.map(function(g){return rowsOf(g.l)})).map(", 1)
            f.write_text(s, encoding="utf8"); print(name, "rows per track")

for name in ("io-academy.html", "training-detail.html"):
    f = B / name
    if f.exists():
        s = f.read_text(encoding="utf8")
        o = 'function mt(c,t){return t==="Delphy"?c.partner==="Delphy":(c.topic||c.track)===t}'
        if o in s:
            f.write_text(s.replace(o, "function mt(c,t){return c.track===t}"), encoding="utf8"); print(name, "counts per feed group")

# revision 9 November, fifth comment ("sort the labels in the order of the list, no jumping back; drop Controlled Environment when it has no course"):
# the track list = the tracks that have courses, in the order the feed shows them, Delphy last
for name in ("io-academy.html", "training-detail.html"):
    f = B / name
    if f.exists():
        s = f.read_text(encoding="utf8")
        o = 'TR=TR.concat(["Delphy"]);'
        n = 'TR=[].concat(C.map(function(c){return c.track}).filter(function(t,i,a){return a.indexOf(t)===i&&t!=="Delphy"}),["Delphy"]);'
        if o in s:
            f.write_text(s.replace(o, n), encoding="utf8"); print(name, "track list in feed order")
