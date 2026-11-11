"""Hub (ivp-hub.html): owner comments of 11 Nov, third batch. Idempotent. usage: hub_comments_11nov_c.py <bundle dir>
 1. Agri-food Challenges card: blue overlay removed (class hp_partner dropped), 'Partner service' pill back in the same pill style as the TRL pills
 2. 'How iO moves innovation forward': new concept (stage rail that fills as evidence accumulates + detail panel), replaces the pinned photo/numeral scroller
 3. 'Technology readiness': two extra options below the current one for comparison (B interlocking circles, C connected columns)"""
import sys, os, re, html

P = os.path.join(sys.argv[1], "ivp-hub.html")
s = open(P, encoding="utf8").read()
log = []

# ---------------------------------------------------------------- 1 card 4
if 'class="h_panel hp_partner"' in s:
    a = s.find('<a class="h_panel hp_partner"')
    end_img = s.find("</div>", s.find('<div class="x_img">', a)) + 6
    s = s[:a] + s[a:].replace('class="h_panel hp_partner"', 'class="h_panel"', 1)
    end_img = s.find("</div>", s.find('<div class="x_img">', a)) + 6
    s = s[:end_img] + '<span class="hp_tag">Partner service</span>' + s[end_img:]
    log.append("card 4 done")

# ---------------------------------------------------------------- 2 journey
J_A = '<div class="x_jour hp_jour" id="xJour"'
J_B = "<!-- Two routes to innovation"
if J_A in s:
    a = s.find(J_A)
    b = s.find(J_B, a)
    seg = s[a:b]
    steps = []
    for m in re.finditer(r'<li class="j_jourStep"[^>]*data-tag="([^"]*)"[^>]*><p class="j_jourWhen">([^<]*)</p><h3 class="j_jourTitle">([^<]*)</h3><p class="j_jourText">([^<]*)</p><div class="hp_acts"><span class="x_label">([^<]*)</span><ul>(.*?)</ul>', seg, re.S):
        steps.append(dict(tag=m.group(1), when=m.group(2), title=m.group(3), text=m.group(4), label=m.group(5), items=re.findall(r"<li>(.*?)</li>", m.group(6))))
    assert len(steps) == 6, len(steps)
    rail = ""
    panels = ""
    for i, st in enumerate(steps):
        rail += ('<li data-state="%s"><button type="button" role="tab" id="jr2t%d" aria-controls="jr2p%d" aria-selected="%s" data-i="%d">'
                 '<span class="jr2_dot" aria-hidden="true"></span><span class="jr2_n">%02d</span><span class="jr2_t">%s</span></button></li>'
                 % ("on" if i == 0 else "", i, i, "true" if i == 0 else "false", i, i + 1, st["tag"]))
        lis = "".join("<li>%s</li>" % it for it in st["items"])
        panels += ('<div class="jr2_panel" role="tabpanel" id="jr2p%d" aria-labelledby="jr2t%d"%s>'
                   '<div class="jr2_pl"><span class="x_label">%s</span><h3 class="jr2_title">%s</h3><p class="x_lead jr2_text">%s</p></div>'
                   '<div class="jr2_pr"><span class="x_label">%s</span><ul>%s</ul></div></div>'
                   % (i, i, "" if i == 0 else " hidden", st["when"], st["title"], st["text"], st["label"], lis))
    arrow = lambda d, p: ('<button type="button" class="jr2_arrow" data-dir="%d" aria-label="%s stage"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">'
                          '<path d="%s" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' % (d, p, "M12 8H4M7.5 4.5L4 8l3.5 3.5" if d < 0 else "M4 8h8M8.5 4.5L12 8l-3.5 3.5"))
    new = ('<section class="x_sec x_grey hp_jr2" id="journey" aria-label="How iO moves innovation forward" style="--c:0"><div class="s_wrap">\n'
           '  <div class="jr2_head"><span class="c_eyebrow">How&nbsp;<span class="x_iO">iO</span>&nbsp;moves innovation forward</span>'
           '<span class="jr2_nav"><span class="jr2_count" id="jr2c">Stage 1 of 6</span>' + arrow(-1, "Previous") + arrow(1, "Next") + '</span></div>\n'
           '  <div class="jr2_railWrap"><i class="jr2_fill" aria-hidden="true"></i><ol class="jr2_rail" role="tablist" aria-label="Stages">' + rail + '</ol></div>\n'
           '  ' + panels + '\n'
           '</div></section>\n'
           '<script>(function(){var r=document.getElementById("journey");if(!r)return;var tabs=[].slice.call(r.querySelectorAll(".jr2_rail button")),lis=tabs.map(function(b){return b.parentNode}),ps=[].slice.call(r.querySelectorAll(".jr2_panel")),cnt=document.getElementById("jr2c"),ar=[].slice.call(r.querySelectorAll(".jr2_arrow")),cur=0;'
           'function go(i,f){i=Math.max(0,Math.min(tabs.length-1,i));cur=i;r.style.setProperty("--c",i);tabs.forEach(function(b,k){b.setAttribute("aria-selected",k===i);b.tabIndex=k===i?0:-1;lis[k].setAttribute("data-state",k<i?"done":k===i?"on":"")});'
           'ps.forEach(function(p,k){if(k===i){p.hidden=false;p.classList.remove("in");void p.offsetWidth;p.classList.add("in")}else p.hidden=true});cnt.textContent="Stage "+(i+1)+" of "+tabs.length;ar[0].disabled=i===0;ar[1].disabled=i===tabs.length-1;if(f)tabs[i].focus()}'
           'tabs.forEach(function(b,i){b.addEventListener("click",function(){go(i)});b.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){e.preventDefault();go(cur+1,1)}if(e.key==="ArrowLeft"){e.preventDefault();go(cur-1,1)}})});'
           'ar.forEach(function(b){b.addEventListener("click",function(){go(cur+ +b.getAttribute("data-dir"))})});go(0)})()</script>\n\n  ')
    s = s[:a] + new + s[b:]
    log.append("journey replaced")

# ---------------------------------------------------------------- 3 readiness options
ra = s.find('<section class="x_sec x_grey hp_ready">')
rb = s.find("</section>", ra) + 10
if "hp_alt" not in s[ra:rb + 20000] and ra > 0:
    seg = s[ra:rb]
    dims = []
    for m in re.finditer(r'<div class="hp_cell"><span class="x_label">([^<]*)</span><p class="x_lead">([^<]*)</p><div class="hp_rdList">.*?<ul class="f_tenets">(.*?)</ul>', seg, re.S):
        dims.append(dict(name=m.group(1), q=m.group(2), items=re.findall(r"<li>(.*?)</li>", m.group(3))))
    assert len(dims) == 4
    close = re.search(r'<p class="x_body hp_rdClose" data-reveal>(.*?)</p>', seg, re.S).group(1)
    short = [d["name"].split()[0] for d in dims]
    # label for the current one
    seg2 = seg.replace('<div class="s_wrap">', '<div class="s_wrap"><span class="alt_tag">Option A · current</span>', 1)
    # Option B: interlocking circles
    pos = [(198, 198), (322, 198), (198, 322), (322, 322)]
    lab = [(140, 170), (380, 170), (140, 350), (380, 350)]
    circles = ""
    for i, d in enumerate(dims):
        cx, cy = pos[i]
        circles += ('<g class="alt_c" role="tab" tabindex="%d" data-i="%d" aria-selected="%s" aria-label="%s"><circle cx="%d" cy="%d" r="118"/>'
                    '<text x="%d" y="%d" text-anchor="middle">%s</text><text x="%d" y="%d" text-anchor="middle" class="alt_c2">readiness</text></g>'
                    % (0 if i else 0, i, "true" if i == 0 else "false", d["name"], cx, cy, lab[i][0], lab[i][1], short[i].upper(), lab[i][0], lab[i][1] + 18))
    svg = ('<svg viewBox="0 0 520 520" class="alt_svg" role="tablist" aria-label="Four readiness dimensions">' + circles +
           '<text x="260" y="268" text-anchor="middle" class="alt_mid">iO</text></svg>')
    bpanels = ""
    for i, d in enumerate(dims):
        bpanels += ('<div class="alt_pane" data-i="%d"%s><span class="x_label">%s</span><p class="x_lead">%s</p><span class="x_label alt_lab"><span class="x_iO">iO</span>&nbsp;considers</span><ul>%s</ul></div>'
                    % (i, "" if i == 0 else " hidden", d["name"], d["q"], "".join("<li>%s</li>" % x for x in d["items"])))
    optB = ('<section class="x_sec hp_alt hp_altB"><div class="s_wrap"><span class="alt_tag">Option B · interlocking circles</span>\n'
            '<div class="alt_grid"><div class="alt_left">' + svg + '</div><div class="alt_right">' + bpanels + '</div></div>\n'
            '<p class="x_body alt_close">' + close + '</p></div></section>\n'
            '<script>(function(){var r=document.querySelector(".hp_altB");if(!r)return;var cs=[].slice.call(r.querySelectorAll(".alt_c")),ps=[].slice.call(r.querySelectorAll(".alt_pane"));'
            'function go(i){cs.forEach(function(c,k){c.setAttribute("aria-selected",k===i)});ps.forEach(function(p,k){p.hidden=k!==i})}'
            'cs.forEach(function(c,i){c.addEventListener("click",function(){go(i)});c.addEventListener("mouseenter",function(){go(i)});c.addEventListener("focus",function(){go(i)});c.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go(i)}})})})()</script>\n')
    # Option C: connected columns
    cols = ""
    for i, d in enumerate(dims):
        cols += ('<div class="alt_col"><span class="alt_node" aria-hidden="true">%d</span><span class="x_label">%s</span><p class="x_lead">%s</p><ul>%s</ul></div>'
                 % (i + 1, d["name"], d["q"], "".join("<li>%s</li>" % x for x in d["items"])))
    optC = ('<section class="x_sec hp_alt hp_altC"><div class="s_wrap"><span class="alt_tag">Option C · four connected columns</span>\n'
            '<div class="alt_cols"><i class="alt_loop" aria-hidden="true"></i>' + cols + '</div>\n'
            '<p class="x_body alt_close">' + close + '</p></div></section>\n')
    s = s[:ra] + seg2 + "\n\n  " + optB + "\n  " + optC + s[rb:]
    log.append("readiness options added")

# ---------------------------------------------------------------- css
MARK = "/* hub comments 11 Nov c */"
CSS = MARK + """
body .hp_jr2 { padding-top: 0; }
body .jr2_head { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: clamp(24px, 3vw, 40px); padding-top: 20px; border-top: 1px solid var(--io); }
body .jr2_nav { display: flex; align-items: center; gap: 8px; }
body .jr2_count { margin-right: 10px; font-size: var(--t-small); color: var(--grey); font-variant-numeric: tabular-nums; }
body .jr2_arrow { width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(89,84,83,.3); background: transparent; color: var(--charcoal); display: grid; place-items: center; cursor: pointer; transition: border-color .25s, background-color .25s, color .25s, opacity .25s; }
body .jr2_arrow:hover:not(:disabled) { background: var(--charcoal); color: #fff; border-color: var(--charcoal); }
body .jr2_arrow:disabled { opacity: .35; cursor: default; }
body .jr2_railWrap { position: relative; margin-bottom: clamp(24px, 3vw, 40px); }
body .jr2_railWrap::before { content: ""; position: absolute; left: 0; right: 0; top: 10px; height: 2px; background: #d6d6d6; }
body .jr2_fill { position: absolute; left: 0; top: 10px; height: 2px; background: var(--io); width: calc(var(--c, 0) / 5 * (100% - 100% / 6) + 10px); max-width: 100%; transition: width .6s cubic-bezier(.22,.8,.2,1); }
body .jr2_rail { position: relative; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); list-style: none; margin: 0; padding: 0; }
body .jr2_rail button { position: relative; display: block; width: 100%; padding: 34px 12px 0 0; background: none; border: 0; text-align: left; font: inherit; color: inherit; cursor: pointer; }
body .jr2_dot { position: absolute; top: 1px; left: 0; width: 20px; height: 20px; border-radius: 50%; background: #f0f0f0; border: 2px solid #c9c9c9; transition: background-color .3s, border-color .3s, box-shadow .3s; }
body .jr2_rail li[data-state="done"] .jr2_dot { background: var(--io); border-color: var(--io); }
body .jr2_rail li[data-state="on"] .jr2_dot { background: var(--io); border-color: var(--io); box-shadow: 0 0 0 6px rgba(41,167,223,.2); }
body .jr2_n { display: block; font-size: var(--t-label); font-weight: 500; letter-spacing: .14em; color: var(--grey); }
body .jr2_t { display: block; margin-top: 4px; font-size: var(--fs-lead); font-weight: 300; line-height: 1.2; color: var(--grey); transition: color .3s; }
body .jr2_rail li[data-state="done"] .jr2_t, body .jr2_rail li[data-state="on"] .jr2_t { color: var(--charcoal); }
body .jr2_rail li[data-state="on"] .jr2_n { color: var(--io-ink); }
body .jr2_rail button:hover .jr2_t { color: var(--io-ink); }
body .jr2_rail button:focus-visible { outline: 2px solid var(--io); outline-offset: 2px; }
body .hp_tag { text-transform: uppercase; }
body .jr2_panel { min-height: 300px; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); align-items: start; background: #fff; padding: clamp(28px, 3.5vw, 56px); }
body .jr2_panel[hidden] { display: none; }
body .jr2_panel.in { animation: jr2in .35s ease-out; }
@keyframes jr2in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
body .jr2_pl { grid-column: 1 / span 6; display: flex; flex-direction: column; gap: var(--stack); }
body .jr2_pr { grid-column: 7 / -1; display: flex; flex-direction: column; gap: 14px; }
body .jr2_title { font-size: var(--t-h3); font-weight: 300; line-height: 1.15; letter-spacing: -.02em; }
body .jr2_pr ul { display: grid; grid-template-columns: 1fr 1fr; column-gap: var(--col-gap); border-bottom: 1px solid var(--line); }
body .jr2_pr li { border-top: 1px solid var(--line); padding: 11px 0; font-size: var(--t-small); line-height: 1.45; }
@media (max-width: 900px) {
  body .jr2_pl, body .jr2_pr { grid-column: 1 / -1; }
  body .jr2_pl { margin-bottom: 24px; }
  body .jr2_t { display: none; }
  body .jr2_rail button { padding-top: 32px; }
}
@media (max-width: 560px) { body .jr2_pr ul { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { body .jr2_panel.in { animation: none; } body .jr2_fill { transition: none; } }

/* readiness options (comparison only) */
body .alt_tag { display: inline-flex; align-self: flex-start; margin-bottom: 28px; padding: 5px 12px; border: 1px dashed var(--io-ink); border-radius: 999px; font-size: var(--t-label); font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: var(--io-ink); background: #fff; }
body .hp_alt { padding-top: 0; }
body .alt_grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); align-items: center; }
body .alt_left { grid-column: 1 / span 6; }
body .alt_right { grid-column: 8 / -1; min-height: 360px; }
body .alt_svg { width: 100%; height: auto; max-width: 560px; display: block; }
body .alt_c { cursor: pointer; outline: none; }
body .alt_c circle { fill: rgba(41,167,223,.08); stroke: #9fcfe6; stroke-width: 1.5; transition: fill .3s, stroke .3s; mix-blend-mode: multiply; }
body .alt_c[aria-selected="true"] circle { fill: rgba(41,167,223,.24); stroke: var(--io); stroke-width: 2; }
body .alt_c:focus-visible circle { stroke: var(--io-ink); stroke-width: 3; }
body .alt_c text { font-family: inherit; font-size: 12px; letter-spacing: .1em; font-weight: 500; fill: var(--charcoal); pointer-events: none; }
body .alt_c .alt_c2, body .alt_svg .alt_c2 { font-size: 11px; letter-spacing: .08em; font-weight: 400; fill: var(--grey); }
body .alt_mid { font-family: inherit; font-size: 22px; font-weight: 500; fill: var(--io-ink); }
body .alt_pane { display: flex; flex-direction: column; gap: 14px; }
body .alt_pane[hidden] { display: none; }
body .alt_lab { margin-top: 6px; }
body .alt_pane ul { display: grid; grid-template-columns: 1fr 1fr; column-gap: var(--col-gap); border-bottom: 1px solid var(--line); }
body .alt_pane li, body .alt_col li { border-top: 1px solid var(--line); padding: 11px 0; font-size: var(--t-small); line-height: 1.45; }
body .alt_close { margin-top: clamp(28px, 3.5vw, 48px); max-width: 52em; }
body .alt_cols { position: relative; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); column-gap: var(--col-gap); padding-top: 22px; }
body .alt_loop { position: absolute; left: 14px; right: 14px; top: 14px; height: 2px; background: var(--io); }
body .alt_col { position: relative; display: flex; flex-direction: column; gap: 14px; padding-top: 34px; }
body .alt_node { position: absolute; top: -16px; left: 0; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--io); color: #fff; font-size: 13px; font-weight: 500; }
body .alt_col ul { border-bottom: 1px solid var(--line); }
@media (max-width: 1100px) { body .alt_cols { grid-template-columns: 1fr 1fr; row-gap: 48px; } body .alt_loop { display: none; } }
@media (max-width: 900px) { body .alt_left, body .alt_right { grid-column: 1 / -1; } body .alt_right { margin-top: 24px; min-height: 0; } }
@media (max-width: 640px) { body .alt_cols { grid-template-columns: 1fr; } body .alt_pane ul { grid-template-columns: 1fr; } }
"""
s = re.sub(r"<style>/\* hub comments 11 Nov c[^<]*</style>", "", s)
s = s.replace("</head>", "<style>" + CSS + "</style></head>", 1)
open(P, "w", encoding="utf8").write(s)
print("\n".join(log) or "css refreshed")
