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
        s = s.replace("function esc(s){", 'function mt(c,t){return t==="Delphy"?c.partner==="Delphy":(c.topic||c.track)===t}\nfunction esc(s){', 1)
    if True:
        s = s.replace("""<p class="cardSub">'+esc(c.track)+""", """<p class="cardSub">'+esc(c.topic||c.track)+""")
        s = s.replace("""<span aria-current="page">'+esc(c.track)+'</span>""", """<span aria-current="page">'+esc(c.topic||c.track)+'</span>""")
    # filters and counts by subject; the Delphy row matches the partner courses
    s = s.replace("c.track===st.track", "mt(c,st.track)").replace("V.filter(function(c){return c.track===t})", "V.filter(function(c){return mt(c,t)})")
    if "L.sort(function(a,b){return TR.indexOf" not in s:
        s = re.sub(r"(\(!q\|\|\(c\.title\+\" \"\+c\.excerpt\)\.toLowerCase\(\)\.indexOf\(q\)>-1\)\}\);)(\s*var rows=rowsOf\(L\))",
                   r"\1L.sort(function(a,b){return (a.c.track==="Delphy")-(b.c.track==="Delphy")||a.i-b.i});\2", s, count=1)
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
