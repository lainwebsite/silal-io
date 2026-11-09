"""Revision 9 November (client comment on the IO Academy course library): the "Partner courses" box under "Browse by track" is
not wanted there; Delphy becomes a row of the "Browse by track" list itself, in Delphy's own colour and with Delphy's real logo
(logos/delphy.svg); the co-brand badge on the cards and the detail title uses the same logo and colour instead of a typed
wordmark. Idempotent. Run after academy.py / academy_rev6.py / brand_io.py:  python3 academy_delphy_row.py <bundle dir>
"""
import pathlib, re, sys
B = pathlib.Path(sys.argv[1])
RED = "#a51140"  # the red of the Delphy logo file
for name in ("io-academy.html", "training-detail.html"):
    f = B / name
    if not f.exists():
        continue
    s = f.read_text(encoding="utf8"); o = s
    # 1. the box is gone
    s = re.sub(r"<div class=\"partnerBox\">.*?</div></aside>", "</aside>", s, flags=re.S)
    # 2. Delphy is a row of the track list (the list is rebuilt by sideTracks(), so the row lives there)
    if "sideProv" not in s:
        s = s.replace("""+'<li class="sideInd" aria-hidden="true"></li>'}""",
                      """+'<li class="sideProv"><a href="#top" data-prov aria-label="Delphy courses"'+(st.prov==="iO \\u00d7 Delphy"?' data-on="true"':'')+'><img src="logos/delphy.svg" alt="Delphy"/> <small>'+C.filter(function(c){return c.partner==="Delphy"}).length+'</small></a></li><li class="sideInd" aria-hidden="true"></li>'}""", 1)
    # 3. the badge uses the real logo
    s = s.replace('<span class="cobrandD">Delphy</span>', '<img class="cobrandLogo" src="logos/delphy.svg" alt="Delphy"/>')
    # 4. Delphy colour and logo size
    if "sideProv" in s and "rev. 9 Nov: Delphy row" not in s:
        css = (f"<style>/* rev. 9 Nov: Delphy row in Browse by track, Delphy red and logo */"
               f".cobrand{{border-color:{RED}!important;color:{RED}!important}}.cobrandLogo{{height:17px;width:auto;display:block}}"
               f".sideProv{{margin-top:10px;padding-top:10px;border-top:1px solid var(--line)}}"
               f".sideProv a{{display:flex!important;align-items:center;gap:10px}}"
               f".sideProv img{{height:22px;width:auto;display:block;opacity:.9}}.sideProv a:hover img,.sideProv a[data-on] img{{opacity:1}}"
               f".sideProv a[data-on]{{color:{RED}}}.sideProv a[data-on] small{{color:{RED}}}"
               f".sideProv a[data-on]::before{{content:\"\";position:absolute;left:0;top:6px;bottom:6px;width:2px;background:{RED}}}</style>")
        s = s.replace("<head>", "<head>" + css, 1) if "<head>" in s else css + s
    if s != o:
        f.write_text(s, encoding="utf8")
        print(name, "patched")
