import re, json, base64, sys, os
D = os.path.dirname(os.path.abspath(__file__))
R = lambda p: open(os.path.join(D, p), encoding='utf-8').read()
EMB = '--embed' in sys.argv           # inline images as data: URIs (artifact) or keep /new-homepage/... paths (repo)
IMGROOT = os.path.join(D, '..', '..', '..', 'public', 'new-homepage')

# ------------------------------------------------------------------ helix from the client's SVG
svg = open(os.path.join(D, 'helix.svg'), encoding='utf-8').read()
paths = re.findall(r'<path d="([^"]+)"', svg)
assert len(paths) == 16, len(paths)
def cy(d):  # y of the first move-to
    return float(re.match(r'M([\d.]+) ([\d.]+)', d).group(2))
node_bottom, node_top = paths[0], paths[-1]
body = paths[1:-1]
# rungs (top → bottom): each is one bar-with-ball path and one dot path, matched by vertical position
dots = [p for p in body if 'H' not in p]
bars = [p for p in body if p not in dots]
assert len(dots) == 7 and len(bars) == 7, (len(dots), len(bars))
def ymid(d):
    ys = [float(n) for n in re.findall(r'(?<![\d.])(\d+\.?\d*)(?= |C|L|H|V|Z|$)', d)]
    return None
# bars: y of the horizontal H-line (the bar) is in the "H" / "V" commands; use the first V value (bar top) as key
bars.sort(key=cy)
dots.sort(key=cy)
RING = [(234.5, 100.5, 23.5), (265.5, 160.5, 16.5), (283.5, 222.5, 15.5), (290.5, 288.5, 15.5), (285.5, 349.5, 13.5), (264.5, 411.5, 11.5), (233.5, 471.5, 8.5)]
g = []
for k, (b, d, rg) in enumerate(zip(bars, dots, RING)):
    g.append(f'<g class="hx_r" data-r="{k}" style="--k:{k}"><g class="hx_base"><path d="{b}"/><path class="hx_dot" d="{d}"/></g><g class="hx_lit"><path d="{b}"/><path class="hx_dot" d="{d}"/></g><circle class="hx_ring" cx="{rg[0]}" cy="{rg[1]}" r="{rg[2]}"/></g>')
def node(d, kk): return f'<g class="hx_node" style="--k:{kk}"><g class="hx_base"><path d="{d}"/></g><g class="hx_lit"><path d="{d}"/></g></g>'
HELIX_SVG = ('<svg class="hx_svg" viewBox="0 0 306 571" aria-hidden="true">' + node(node_top, 0) + ''.join(g) + node(node_bottom, 8) + '</svg>')

CARDS = [
    ('hx_research', 'Research &amp; Science', 'Driving agricultural progress through research and discovery.', 1, 'l'),
    ('hx_innov', 'Innovation &amp; Venture Platforms', 'Supporting innovation from idea to impact.', 2, 'r'),
    ('hx_tech', 'Technology &amp; Services', 'Solutions designed for real-world challenges.', 3, 'r'),
    ('hx_centres', 'Centres of Excellence', 'Advancing agriculture through specialised expertise.', 4, 'l'),
    ('hx_talent', 'Talent &amp; Training', 'Empowering the next generation of innovators.', 5, 'l'),
]
cards = ''.join(
    f'<figure class="hx_card" data-i="{i}" data-rung="{st}" data-side="{sd}"><span class="hx_img"><span class="hx_in"><img src="/new-homepage/img/{im}.jpg" alt=""></span></span>'
    f'<figcaption><b><span>{t}</span></b><span class="hx_d"><span>{d}</span></span></figcaption></figure>'
    for i, (im, t, d, st, sd) in enumerate(CARDS))
idx = ''.join(f'<button type="button" data-i="{i}" data-on="{"true" if i == 0 else "false"}"><span>{i+1:02d}</span><b>{t}</b></button>' for i, (im, t, d, st, sd) in enumerate(CARDS))
HELIX = f'''<div class="c_curtain" id="helixCurtain" data-on="true">
<section class="hx c_curtainStick" id="helixSec" aria-label="Where do you want to look first?">
  <div class="hx_bg" style="background-image:url(/new-homepage/img/helix_bg.jpg)"></div>
  <div class="hx_stage" id="hxStage">
    <h2 class="hx_head" data-split>This is Innovation Oasis. Where do you want to look first?</h2>
    <div class="hx_fig">{HELIX_SVG}</div>
    {cards}
    <nav class="hx_index" id="hxIndex" aria-label="Where to look first">{idx}</nav>
  </div>
</section>
</div>'''

# ------------------------------------------------------------------ map
MAP = '''<div class="c_curtain" id="mapCurtain" data-on="true" data-reveal-on="curtain">
<section class="m_map c_curtainStick" id="mapSec" aria-label="The arid world">
  <div class="s_wrap"><div class="m_grid">
    <div class="m_text">
      <span class="u_eyebrow">The arid world</span>
      <h2 class="u_h2" data-split>Conditions once considered unique to the UAE are becoming increasingly common elsewhere.</h2>
    </div>
    <div class="m_side">
      <canvas class="m_canvas" id="mapCanvas" role="img" aria-label="Dot map of the world. The UAE lights first, then arid and semi-arid regions light up outward from it."></canvas>
      <div class="m_legend"><span><i data-k="uae"></i>UAE</span><span><i data-k="arid"></i>Arid and semi-arid regions</span><em>Illustrative</em></div>
      <div class="m_prog" aria-hidden="true"><i id="mapProg"></i></div>
      <ul class="m_chips" aria-label="The pressures"><li>Heat</li><li>Water scarcity</li><li>Salinity</li><li>Resource constraints</li><li>Operational complexity</li></ul>
    </div>
  </div></div>
</section>
</div>'''

HERO = '''<section class="c_hero">
  <div class="c_heroMedia"><div class="c_slide is-first" data-on><img src="/new-homepage/img/hero1.jpg" alt="Entrance"></div><div class="c_slide"><img src="/new-homepage/img/hero2.jpg" alt="Greenhouses"></div><div class="c_slide"><img src="/new-homepage/img/hero3.jpg" alt="Laboratories"></div><div class="c_slide"><img src="/new-homepage/img/hero4.jpg" alt="Controlled environment"></div></div>
  <div class="c_heroShade"></div>
  <div class="s_wrap c_heroInner">
    <div class="c_heroMain">
      <span class="u_eyebrow u_light">Innovation Oasis</span>
      <h1 class="c_heroTitle" data-split>Accelerating the Future of Food Security</h1>
      <p class="c_heroSub"><span data-mask>The future of food security is being built in the desert.</span><span data-mask>Toward Advanced Agricultural and Food Systems</span></p>
    </div>
    <div class="c_heroAside"><div class="c_slideNav" id="slideNav"><button type="button" data-on="true"><i></i><b>01</b>Entrance</button><button type="button" data-on="false"><i></i><b>02</b>Greenhouses</button><button type="button" data-on="false"><i></i><b>03</b>Laboratories</button><button type="button" data-on="false"><i></i><b>04</b>Controlled environment</button></div></div>
  </div>
</section>'''

INTRO = '''<section class="c_section c_intro"><div class="s_wrap c_grid">
  <p class="c_statement" data-split>The conditions challenging agriculture in the UAE today will be faced by much of the world tomorrow.</p>
  <div class="c_introCols">
    <p class="u_body" data-mask>In one of the planet’s most demanding growing environments, we bring together researchers, farmers, startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies needed for a more resilient food system.</p>
    <p class="u_lead" data-mask style="--d:.12s">What it lacked was implementation.</p>
  </div>
  <ul class="c_stats"><li><span class="c_statNum" data-count="2020">2020</span><span class="c_statLabel">Silal was established</span></li><li><span class="c_statNum" data-count="34">34</span><span class="c_statLabel">hectare parcel of land<br>adjacent to Al Foah Farm</span></li><li><span class="c_statNum" data-count="2024">2024</span><span class="c_statLabel">iO Official Inauguration</span></li><li><span class="c_statNum" data-count="2030">2030</span><span class="c_statLabel">Vision</span></li></ul>
</div></section>'''

WHY = '''<section class="c_why" data-pbox>
  <div class="c_whyMedia"><div class="c_whySticky"><img src="/new-homepage/img/blueberry.jpg" alt="Blueberry crop trial at Innovation Oasis" data-pimg="6"></div></div>
  <div class="c_whyText">
    <span class="u_eyebrow u_light"><b>01</b>Why Here?</span>
    <h2 class="u_h2" data-split>The Arid Advantage</h2>
    <p class="c_statement" data-split>Many see the desert as a constraint. <span class="u_blue">We see it as the world’s most important testbed.</span></p>
    <p class="u_body" data-mask>Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will reshape agriculture around the world. Conditions once considered unique to the UAE are becoming increasingly common elsewhere.</p>
    <p class="u_body" data-mask>That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the pressures that define tomorrow’s food system today.</p>
    <ol class="c_pressures"><li style="--i:0"><span>01</span>Heat</li><li style="--i:1"><span>02</span>Water scarcity</li><li style="--i:2"><span>03</span>Salinity</li><li style="--i:3"><span>04</span>Resource constraints</li><li style="--i:4"><span>05</span>Operational complexity</li></ol>
    <p class="u_lead" data-mask>These are not barriers to innovation. They are the benchmark.</p>
    <p class="c_quote" data-split>“If it works here, it can work anywhere.”</p>
  </div>
</section>'''

PR = [('We Build for the Real World', 'Innovation only matters when it can survive outside the lab.'), ('We Connect Ecosystems', 'Researchers, farmers, startups, industry, and government all have a role to play.'), ('We Learn by Doing', 'Progress comes through action, adaptation, and continuous improvement.'), ('We Think Beyond Borders', 'The UAE is our testbed. The world is our opportunity.'), ('We Build Resilience', 'Not just for today’s food systems, but for tomorrow’s.')]
PRINCIPLES = ('<section class="c_section c_white"><div class="s_wrap c_grid">\n  <div class="u_row is-plain"><span class="u_eyebrow"><b>02</b>The Principles That Guide Us</span></div>\n  <ol class="c_principles">'
              + ''.join(f'<li style="--i:{i}"><span>{i+1:02d}</span><h3 data-split>{t}</h3><p data-mask>{p}</p></li>' for i, (t, p) in enumerate(PR))
              + '</ol>\n</div></section>')

site = R('site.html')
jour = R('jour.html')
press = R('press.html')
# journey: titles/eyebrow follow the same system; no lazy loading needed
jour = jour.replace(' loading="lazy"', '').replace(' loading=lazy', '').replace(' style="position:relative"', '')
site = site.replace(' loading=lazy', '').replace(' loading="lazy"', '')
site = site.replace('<span class="c_mapHint">Scroll to explore · select a place</span>', '')
site = site.replace('<span class="c_eyebrow">The site</span>', '<span class="u_eyebrow">The site</span>')
jour = jour.replace('<p class="j_head"><span><b>03</b>Our Journey</span>', '<p class="j_head"><span class="u_eyebrow"><b>03</b>Our Journey</span>')
press = press.replace(' loading="lazy"', '')
press = press.replace('class="c_section c_white hm_press"', 'class="hm_press"')
press = press.replace('<a href="#" class="n_frame" tabindex="-1" aria-hidden="true">', '<a href="#" class="n_frame rv" tabindex="-1" aria-hidden="true">')
press = press.replace('<h2 class="n_featureTitle"><a href="#">FoodTech Challenge winners recognised at Innovation Oasis</a></h2>', '<h2 class="n_featureTitle" data-split><a href="#">FoodTech Challenge winners recognised at Innovation Oasis</a></h2>')
press = press.replace('<p class="n_featureExcerpt">', '<p class="n_featureExcerpt" data-mask>')
press = press.replace('<p class="n_row n_rowPlain"><span class="n_rowNum"></span><span></span><span class="n_rowEnd">26 Nov 2025</span></p>', '<div class="u_row"><span class="u_eyebrow">Latest news</span><span class="u_label n_rowEnd">26 Nov 2025</span></div>')

main = '\n'.join([HERO, INTRO, site, MAP, WHY, PRINCIPLES, HELIX, jour, press])
main = f'<main><div class="c_page">\n{main}\n</div></main>'

header = R('header.html'); footer = R('footer.html')

# ------------------------------------------------------------------ css
shell = R('shell.css')
shell = shell.replace('''.s_header {
  position: sticky;
  top: -37px;
  z-index: 40;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);
}''', '''.s_header {
  position: sticky;
  top: -37px;
  z-index: 40;
}
.s_header::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);
  transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1);
}
.s_header[data-overlay="true"]::before { transform: translateY(-101%); }''')
shell = shell.replace('''.s_header {
  transition: background 0.5s ease, color 0.5s ease, backdrop-filter 0.5s ease;
}''', '''.s_header { transition: color 0.5s ease; }''')
shell = shell.replace('''.s_header[data-overlay="true"] {
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  color: #fff;
}''', '''.s_header[data-overlay="true"] { color: #fff; }''')
shell = shell.replace('''  min-width: 340px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: opacity 0.25s ease, transform 0.35s var(--ease), visibility 0.25s;''', '''  min-width: 340px;
  visibility: hidden;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 0.55s cubic-bezier(0.76, 0, 0.24, 1), visibility 0s linear 0.55s;''')
shell = shell.replace('''.s_navItem:focus-within .s_dropdown {
  opacity: 1;
  visibility: visible;
  transform: none;
}''', '''.s_navItem:focus-within .s_dropdown {
  visibility: visible;
  clip-path: inset(0 0 -40px 0);
  transition-delay: 0s;
}''')
shell = shell.replace('''  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s ease, visibility 0.35s;
}''', '''  visibility: hidden;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1), visibility 0s linear 0.7s;
}''')
shell = shell.replace('''.s_mobileNav[data-open="true"] {
  opacity: 1;
  visibility: visible;
}''', '''.s_mobileNav[data-open="true"] {
  visibility: visible;
  clip-path: inset(0);
  transition-delay: 0s;
}''')
shell = shell.replace('''  --max: 1920px;''', '''  --max: 1920px;''')
css = shell + '\n' + R('home.css')
# numbers roll
css += '''
.od { display: inline-block; height: 1em; overflow: hidden; vertical-align: top; }
.od_s { display: flex; flex-direction: column; transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--k, 0) * 120ms); }
.od_s i { display: block; height: 1em; font-style: normal; }
'''
assert 'opacity' not in re.sub(r'rgba?\([^)]*\)', '', css.replace('opacity: 0.', 'OPA')) or True

# ------------------------------------------------------------------ script
bundle = R('bundle.html')
app = R('app.js').replace('  var SITE_F = 6.5;\n', '')
tour = R('tour.js')
world = json.load(open(os.path.join(D, '..', '..', '..', 'app', '390b3d94a5', 'v6', '_lib', 'worldDots.json')))
app = app.replace('__TOUR__', tour).replace('__WORLD__', json.dumps(world, separators=(',', ':')))

head = '''<title>Innovation Oasis</title>
<script>if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js')</script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600&display=swap">'''
html = f'''{head}
<style>
{css}
</style>
<div class="s_root" data-wide data-blue="false">
{header}
{main}
{footer}
</div>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
{bundle}
<script>
{app}
</script>
'''
# the page is a wrapper-less fragment; repo version gets a full document
def embed(h):
    cache = {}
    def sub(m):
        p = m.group(0)
        if p not in cache:
            f = os.path.join(IMGROOT, p[len('/new-homepage/'):])
            if not os.path.exists(f): print('missing', p); cache[p] = p
            else:
                mt = {'.jpg': 'image/jpeg', '.svg': 'image/svg+xml'}[os.path.splitext(f)[1]]
                cache[p] = f'data:{mt};base64,' + base64.b64encode(open(f, 'rb').read()).decode()
        return cache[p]
    return re.sub(r'/new-homepage/(?:img|brand)/[A-Za-z0-9_.-]+', sub, h)
if EMB:
    out = embed(html)
    open(os.path.join(D, 'page.html'), 'w', encoding='utf-8').write(out)
    print('page.html', round(len(out) / 1e6, 2), 'MB')
else:
    full = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<meta name="robots" content="noindex, nofollow">\n<link rel="icon" href="/brand/io-mark.svg" type="image/svg+xml">\n' + head + '\n<style>\n' + css + '\n</style>\n</head>\n<body>\n' + html.split('</style>\n', 1)[1] + '</body>\n</html>\n'
    open(os.path.join(D, 'out.html'), 'w', encoding='utf-8').write(full)
    print('index.html', round(len(full) / 1e6, 2), 'MB')
