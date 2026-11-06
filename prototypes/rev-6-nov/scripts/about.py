"""About (rev 6 Nov 15, 16) and the new Our Ecosystem sub-page (14)."""
import html, re
from common import *

src = load('about.html')

# ---------- About: vision + mission from Strategy Overview.pptx, principles straight after it ----------
mission_old = between(src, '<section class="c_mission">', '</section>')
media = between(mission_old, '<div class="c_missionMedia"', '</div>')
FOCUS = ['Crop genetics', 'Soil &amp; substrate', 'Water &amp; irrigation', 'Energy systems', 'Controlled environment agriculture', 'Robotics &amp; mechanisation', 'Data solutions &amp; AI']
mission_new = f'''<section class="c_mission rv_vm">{media}<div class="c_missionShade"></div><div class="s_wrap c_missionInner rv_vmInner">
<div class="rv_vmCol"><span class="c_eyebrow c_eyebrowLight">Our Vision</span><p class="c_missionText rv_vmText" data-reveal>To be the UAE’s leading agriculture innovation engine, delivering innovative solutions that strengthen national food security and become a global leader for hot arid agriculture innovation.</p></div>
<div class="rv_vmCol"><span class="c_eyebrow c_eyebrowLight">Our Mission</span><p class="c_missionText rv_vmText" data-reveal>To develop and validate arid-adapted agricultural innovations, enable farmer adoption, and commercialize proven solutions.</p></div>
<div class="rv_focus"><span>Strategic focus</span><ul>{''.join(f'<li>{f}</li>' for f in FOCUS)}</ul></div>
</div></section>'''
a = rep(src, mission_old, mission_new)
a = rep(a, '<section class="c_section c_white"><div class="s_wrap c_grid"><div class="c_headRow c_noRule"><span class="c_eyebrow">The Principles That Guide Us</span>',
        '<section class="c_section c_white rv_princ"><div class="s_wrap c_grid"><div class="c_headRow c_noRule"><span class="c_eyebrow">The Principles That Guide Us</span>')
# teaser for the new sub-page, after the journey
teaser = f'''<section class="c_section c_white rv_ecoTeaser"><div class="s_wrap"><div class="rv_ecoT"><div><span class="c_eyebrow">Our Ecosystem</span><h2 class="c_h2">Food security cannot be solved in silos.</h2></div><div><p class="c_body">Universities, startups, government and industry partners work with Innovation Oasis on research, validation, programmes and scale.</p><a class="s_btn s_btnPrimary" href="our-ecosystem.html">Meet our partners {ARROW}</a></div></div></div></section>'''
a = rep(a, '</section></div></div>\n</main>', '</section></div>' + teaser + '</div>\n</main>') if '</section></div></div>\n</main>' in a else rep(a, '\n</main>', teaser + '\n</main>')

ABOUT_CSS = '''<style id="rev6-about">
.rv_vm { min-height: 100svh; align-items: flex-end; }
.rv_vm .c_missionShade { background: linear-gradient(0deg, rgba(14,16,15,.84) 0%, rgba(14,16,15,.45) 55%, rgba(14,16,15,.15) 100%); }
.rv_vmInner { display: grid !important; grid-template-columns: 1fr 1fr; gap: 40px var(--col-gap) !important; align-items: end; }
.rv_vmCol { display: flex; flex-direction: column; gap: 20px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.35); }
.rv_vmText { font-size: clamp(1.5rem, 2.2vw, 2.4rem) !important; max-width: 22em; }
.rv_focus { grid-column: 1 / -1; display: flex; flex-wrap: wrap; align-items: center; gap: 12px 20px; padding-top: 10px; }
.rv_focus > span { font-size: .6875rem; letter-spacing: .16em; text-transform: uppercase; color: #9fd2e8; }
.rv_focus ul { display: flex; flex-wrap: wrap; gap: 8px; }
.rv_focus li { padding: 7px 13px; border: 1px solid rgba(255,255,255,.35); border-radius: 999px; font-size: .8125rem; color: rgba(255,255,255,.92); }
.rv_princ { padding-top: clamp(56px, 6vw, 96px) !important; }
.rv_ecoT { display: grid; grid-template-columns: 1fr 1fr; gap: 32px var(--col-gap); align-items: end; padding-top: 28px; border-top: 1px solid var(--line); }
.rv_ecoT > div:first-child { display: flex; flex-direction: column; gap: 18px; }
.rv_ecoT > div:last-child { display: flex; flex-direction: column; gap: 24px; align-items: flex-start; }
@media (max-width: 899px) { .rv_vmInner, .rv_ecoT { grid-template-columns: 1fr; } }
</style>'''
a = a.replace('</body>', ABOUT_CSS + '</body>')
save('about.html', global_patch(a))

# ---------- Our Ecosystem ----------
KU = 'innovation-venture-platforms/brand/khalifa-university.png'
SILAL = 'innovation-venture-platforms/brand/silal.png'
CATS = [('academia', 'Academia &amp; research'), ('startups', 'Startups'), ('government', 'Government'), ('industry', 'Industry')]
P = [
    # (category, name, short, role, logo)
    ('academia', 'Khalifa University', 'KU', 'Incubation partner for the Agri-Robotics cohort, physical AI and expert evaluation for the Farm Innovation Fund.', KU),
    ('academia', 'United Arab Emirates University', 'UAEU', 'Agricultural research and scientific expertise from the College of Agriculture and Veterinary Medicine.', None),
    ('academia', 'MIT GEAR Center', 'MIT', 'Irrigation and water research collaboration.', None),
    ('academia', 'Technology Innovation Institute', 'TII', 'Collaboration on energy systems for agriculture.', None),
    ('academia', 'Cranfield University', 'CU', 'Developing a soil health scorecard with the soil and water team.', None),
    ('academia', 'CGIAR', 'CG', 'Global agricultural research translated into UAE desert-agriculture solutions.', None),
    ('startups', 'Square Roots', 'SR', 'Controlled-environment research programme on low-light genetics and an AI copilot for farmers.', None),
    ('startups', 'Geek+', 'G+', 'Robotics partner in physical AI for agriculture.', None),
    ('startups', 'FoodTech Challenge finalists', 'FT', 'Startups developing arid-climate food and agriculture technologies, validated on site.', None),
    ('startups', 'Accelerator Cohort 1', 'AC', 'Eight late-stage startups in inputs, sensing and supply-chain technology.', None),
    ('government', 'Ministry of Climate Change and Environment', 'MOCCAE', 'Connecting farm innovation with national agricultural priorities.', None),
    ('government', 'National Agriculture Centre', 'NAC', 'Agricultural development and farmer engagement across the UAE.', None),
    ('government', 'Abu Dhabi Agriculture and Food Safety Authority', 'ADAFSA', 'Regulatory, agricultural and food-system expertise.', None),
    ('government', 'Presidential Court, International Affairs Office', 'IAO', 'Strategic programme to translate CGIAR research, with IO as programme management partner.', None),
    ('government', 'AI and Advanced Technology Council', 'AIATC', 'Two-year controlled-environment research programme at IO.', None),
    ('government', 'Mohamed bin Zayed Water Initiative', 'MBZWI', 'Programme management and real-world validation of water technologies.', None),
    ('government', 'Department of Energy', 'DoE', 'Water and energy innovations for farming.', None),
    ('industry', 'Silal', 'Silal', 'Innovation Oasis is Silal’s R&amp;D and venture engine: farms, distribution and supply chains to test and scale in.', SILAL),
    ('industry', 'Borouge', 'B', 'Advanced materials collaboration.', None),
    ('industry', 'NICE', 'NICE', 'Controlled environments and physical AI collaboration.', None),
    ('industry', 'Delphy', 'D', 'Content partner for IO Academy training.', None),
    ('industry', 'Tadweer', 'T', 'Anaerobic digestion systems trial.', None),
]
counts = {k: sum(1 for p in P if p[0] == k) for k, _ in CATS}
tabs = f'<button type="button" class="rv_tab" data-cat="all" aria-pressed="true">All <i>{len(P)}</i></button>' + ''.join(
    f'<button type="button" class="rv_tab" data-cat="{k}" aria-pressed="false">{t} <i>{counts[k]}</i></button>' for k, t in CATS)
label = dict(CATS)
def card(c, name, short, role, logo):
    mark = f'<img src="{logo}" alt="">' if logo else f'<b>{short}</b>'
    return (f'<li class="rv_pCard" data-cat="{c}"><span class="rv_pLogo{" rv_pImg" if logo else ""}">{mark}</span>'
            f'<span class="rv_pTag">{label[c]}</span><h3>{name}</h3><p>{role}</p></li>')
groups = ''.join(
    f'<div class="rv_pGroup" data-cat="{k}"><div class="rv_pGroupHead"><h2>{t}</h2><span>{counts[k]:02d}</span></div><ul class="rv_pGrid">'
    + ''.join(card(*p) for p in P if p[0] == k) + '</ul></div>' for k, t in CATS)

eco_main = f'''<main>
<div class="c_page x_about rv_eco">
<section class="c_section c_white rv_ecoHero"><div class="s_wrap">
  <p class="rv_crumb"><a href="about.html">About IO</a><i></i><span>Our Ecosystem</span></p>
  <div class="rv_ecoHead">
    <div><span class="c_eyebrow">Our Ecosystem</span><h1 class="rv_h1" data-reveal>Built to connect, not to work alone.</h1></div>
    <div class="rv_ecoIntro"><p class="c_lead" data-reveal>Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all.</p>
    <p class="c_body" data-reveal>Research institutions, startups, government entities and industry partners work with us across research, validation, programme delivery and scale. Because food security cannot be solved in silos.</p></div>
  </div>
  <ul class="rv_ecoStats"><li><b>37+</b><span>strategic partners</span></li><li><b>4</b><span>partner groups: academia, startups, government, industry</span></li><li><b>1</b><span>place to research, validate and scale</span></li></ul>
</div></section>
<section class="c_section c_white rv_ecoBody"><div class="s_wrap">
  <div class="rv_tabs" role="group" aria-label="Filter partners">{tabs}</div>
  {groups}
  <p class="rv_ecoNote">Partner logos follow the approved partner list. Roles vary by programme and project.</p>
</div></section>
<section class="c_section rv_ecoCta"><div class="s_wrap"><div class="rv_ecoT rv_ecoTDark"><div><span class="c_eyebrow c_eyebrowLight">Partner with us</span><h2 class="c_h2">Bring a challenge, a technology or a research question.</h2></div><div><p class="c_body">We work with partners on research, programme design, validation in real conditions and routes to scale.</p><a class="s_btn s_btnPrimary" href="ivp-enquire.html">Start a conversation {ARROW}</a></div></div></div></section>
</div>
</main>'''
e = src
e = e[:e.index('<main>')] + eco_main + e[e.index('</main>') + len('</main>'):]
e = re.sub(r'<title>[^<]*</title>', '<title>Our Ecosystem · Innovation Oasis</title>', e, count=1)
ECO_CSS = ABOUT_CSS.replace('rev6-about', 'rev6-eco-base') + '''<style id="rev6-eco">
.rv_ecoHero { padding-top: clamp(140px, 13vw, 210px) !important; padding-bottom: clamp(48px, 5vw, 80px) !important; }
.rv_crumb { display: flex; align-items: center; gap: 12px; font-size: .75rem; color: var(--grey); margin-bottom: clamp(32px, 4vw, 56px); }
.rv_crumb a { color: var(--grey); } .rv_crumb a:hover { color: var(--io-ink); }
.rv_crumb i { width: 24px; height: 1px; background: var(--line); }
.rv_ecoHead { display: grid; grid-template-columns: 1.1fr 1fr; gap: 32px var(--col-gap); align-items: end; }
.rv_ecoHead > div:first-child { display: flex; flex-direction: column; gap: 22px; }
.rv_h1 { font-size: clamp(2.4rem, 4.6vw, 4.6rem); font-weight: 300; line-height: 1.04; letter-spacing: -0.03em; color: var(--charcoal); }
.rv_ecoIntro { display: flex; flex-direction: column; gap: 18px; }
.rv_ecoStats { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--col-gap); margin-top: clamp(48px, 6vw, 88px); }
.rv_ecoStats li { display: flex; flex-direction: column; gap: 8px; padding-top: 18px; border-top: 1px solid var(--line); }
.rv_ecoStats b { font-size: clamp(2.4rem, 4vw, 3.6rem); font-weight: 300; color: var(--io-ink); line-height: 1; }
.rv_ecoStats span { font-size: .875rem; color: var(--grey); max-width: 22ch; }
.rv_ecoBody { padding-top: 0 !important; }
.rv_tabs { position: sticky; top: 76px; z-index: 5; display: flex; flex-wrap: wrap; gap: 8px; padding: 14px 0; margin-bottom: 24px; background: rgba(255,255,255,.94); backdrop-filter: blur(8px); }
.rv_tab { padding: 10px 16px; border: 1px solid var(--line); border-radius: 999px; background: #fff; font: inherit; font-size: .875rem; color: var(--charcoal); cursor: pointer; transition: background .25s, color .25s, border-color .25s; }
.rv_tab i { font-style: normal; font-size: .75rem; color: var(--grey); margin-left: 4px; }
.rv_tab[aria-pressed="true"] { background: var(--io-ink); border-color: var(--io-ink); color: #fff; }
.rv_tab[aria-pressed="true"] i { color: rgba(255,255,255,.7); }
.rv_tab:hover { border-color: var(--io-ink); }
.rv_pGroup { padding: clamp(32px, 4vw, 56px) 0; border-top: 1px solid var(--line); }
.rv_pGroup[hidden] { display: none; }
.rv_pGroupHead { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 28px; }
.rv_pGroupHead h2 { font-size: var(--fs-h3, 1.5rem); font-weight: 400; color: var(--charcoal); }
.rv_pGroupHead span { font-size: .75rem; letter-spacing: .1em; color: var(--io); }
.rv_pGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
.rv_pCard { display: flex; flex-direction: column; gap: 10px; padding: 20px; background: #f6f6f5; border: 1px solid transparent; transition: border-color .3s, background .3s, transform .3s; }
.rv_pCard:hover { background: #fff; border-color: var(--line); transform: translateY(-2px); }
.rv_pLogo { height: 72px; display: flex; align-items: center; margin-bottom: 8px; }
.rv_pLogo b { display: inline-flex; align-items: center; justify-content: center; min-width: 56px; height: 56px; padding: 0 12px; border-radius: 8px; background: #fff; border: 1px solid var(--line); font-size: .9375rem; font-weight: 600; letter-spacing: .02em; color: var(--io-ink); }
.rv_pImg img { max-height: 52px; max-width: 160px; object-fit: contain; }
.rv_pTag { font-size: .625rem; letter-spacing: .14em; text-transform: uppercase; color: var(--grey); }
.rv_pCard h3 { font-size: 1.0625rem; font-weight: 500; line-height: 1.3; color: var(--charcoal); }
.rv_pCard p { font-size: .875rem; line-height: 1.55; color: var(--grey); }
.rv_ecoNote { margin-top: 8px; font-size: .75rem; color: var(--grey); }
.rv_ecoCta { background: var(--charcoal); color: #fff; }
.rv_ecoTDark { border-top-color: rgba(255,255,255,.25); }
.rv_ecoTDark .c_h2 { color: #fff; } .rv_ecoTDark .c_body { color: rgba(255,255,255,.8); }
@media (max-width: 1099px) { .rv_pGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 899px) { .rv_ecoHead { grid-template-columns: 1fr; } .rv_ecoStats { grid-template-columns: 1fr; gap: 20px; } .rv_tabs { top: 60px; } }
@media (max-width: 559px) { .rv_pGrid { grid-template-columns: 1fr; } }
</style>
<script>
(function () {
  var tabs = [].slice.call(document.querySelectorAll('.rv_tab')), groups = [].slice.call(document.querySelectorAll('.rv_pGroup'));
  tabs.forEach(function (t) { t.addEventListener('click', function () {
    tabs.forEach(function (x) { x.setAttribute('aria-pressed', x === t ? 'true' : 'false'); });
    groups.forEach(function (g) { g.hidden = t.dataset.cat !== 'all' && g.dataset.cat !== t.dataset.cat; });
  }); });
})();
</script>'''
e = e.replace('</body>', ECO_CSS + '</body>')
save('our-ecosystem.html', global_patch(e))
