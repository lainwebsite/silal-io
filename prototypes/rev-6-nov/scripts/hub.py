"""Innovation & Venture Platforms overview (rev 6 Nov 19-26 + "Innovation & Venture Platforms Overview Page Layout.docx")."""
import html, json
from common import *

h = load('ivp-hub.html')
A = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
IMG = 'innovation-venture-platforms/img/'
esc = lambda s: html.escape(s, quote=False)

# ---------------- 1. hero ----------------
hero_old = between(h, '<section class="s_wrap h_top">', '</div></section>')
hero = f'''<section class="s_wrap h_top"><div class="h_topGrid">
    <nav class="x_crumb" aria-label="Breadcrumb"><a href="index.html">Home</a><i></i><span>Innovation &amp; Venture Platforms</span></nav>
    <div class="h_title">
      <span class="c_eyebrow rv_eyeTop" data-reveal>Innovation &amp; Venture Platforms</span>
      <h1 data-reveal>From idea <span>to impact.</span></h1>
    </div>
    <div class="h_aside">
      <p class="x_lead" data-reveal>IO connects ideas, research and proven technologies with the expertise, environments and commercial pathways needed to move them forward.</p>
      <p class="x_body" data-reveal>Whether you are a farmer solving an operational problem, a researcher translating an emerging technology, a startup seeking real-world validation, or an organization addressing a strategic challenge, IO can help identify the right pathway.</p>
      <a href="#pathway" class="s_btn s_btnPrimary rv_jump" data-reveal>Find your pathway {A}</a>
    </div>
  </div></section>'''
h = rep(h, hero_old, hero)

# ---------------- 2. platforms overview ----------------
panels_old = between(h, '<div class="s_wrap"><div class="h_panels" id="hubPanels">', '</a>\n  </div></div>')
P = [
    ('ivp-farm-innovation-fund.html', IMG + 'hero_fif.webp', 'Farmers on the Innovation Day field tour beside the greenhouses', 'Farm Innovation Fund', 'For UAE farmers &amp; entrepreneurs', 'TRL 1–8',
     'Develop and test practical solutions to challenges identified on UAE farms, supported by funding, expert input and structured project delivery.', ''),
    ('ivp-incubation.html', IMG + 'hero_inc.webp', 'Researchers with an agri-robotics prototype', 'Incubation', 'For researchers and early-stage ventures', 'TRL 3–6',
     'Translate promising research and early-stage technologies through focused technical, user, adoption and commercial validation.', ''),
    ('ivp-accelerator.html', IMG + 'acc_green.webp', 'Misting inside a high-tech greenhouse', 'Acceleration', 'For later-stage ventures', 'TRL 7+',
     'Validate, localize and commercialize deployment-ready technologies in demanding operational conditions and build a route into the UAE and wider region.', ''),
    ('ivp-agricultural-challenges.html', IMG + 'chal_seed.webp', 'A seedling growing in open-field soil', 'Agri-food Challenges', 'For government and industry partners', 'Partner service',
     'Design and support innovation programs that identify, evaluate and test promising technologies against priority challenges across agrifood and related sectors such as water, energy and circularity.', ' rv_partner'),
]
panels = ''.join(
    f'<a class="h_panel{x}" href="{u}"><div class="x_img"><img src="{im}" alt="{alt}"{"" if i == 0 else " loading=\"lazy\""}></div><span class="rv_trl">{trl}</span><div class="h_panelIn">'
    f'<h2>{n}</h2><div class="h_more"><div><span class="h_for">{aud}</span><p>{cp}</p><span class="h_go">Explore {A}</span></div></div></div></a>'
    for i, (u, im, alt, n, aud, trl, cp, x) in enumerate(P))
# comment 6 Nov (thread 3e70e6ae): no separate 'Four routes' block; the hero copy above is the change
plat = f'''<div class="s_wrap"><div class="h_panels" id="hubPanels">{panels}</div></div>'''
h = rep(h, panels_old, plat)

# ---------------- 3. find your pathway ----------------
fin_old = between(h, '<section class="x_sec"><div class="s_wrap h_finder">', '</article>\n  </div></section>')
OPTS = [('fif', 'I am a farmer or farm manager with a problem or improvement idea.'),
        ('inc', 'I have research, intellectual property or an early-stage prototype.'),
        ('acc', 'I have a proven technology ready for operational validation.'),
        ('chal', 'I represent an organization looking to solve a strategic challenge.')]
CHK = '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
opts = ''.join(f'<button class="h_opt" role="radio" aria-checked="{"true" if i == 0 else "false"}"{"" if i == 0 else " tabindex=\"-1\""} data-pick="{k}">{t}{CHK}</button>' for i, (k, t) in enumerate(OPTS))
fin = f'''<section class="x_sec" id="pathway"><div class="s_wrap h_finder">
    <div class="h_finderQ">
      <span class="c_eyebrow" data-reveal>Find the right place to start</span>
      <h2 class="x_h2" data-reveal>Find your pathway</h2>
      <p class="x_body rv_finderIntro" data-reveal>Tell us where you are starting, and we will guide you to the most relevant IO platform or service.</p>
      <div class="h_opts" role="radiogroup" aria-label="Where are you starting?">{opts}</div>
    </div>
    <article class="h_result" id="pickCard" aria-live="polite">
      <div class="x_img h_resultImgs"><img src="{IMG}fif_workshop.webp" alt="" data-k="fif" style="clip-path:inset(0)"><img src="{IMG}hero_inc.webp" alt="" data-k="inc" loading="lazy" style="clip-path:inset(0 0 100% 0)"><img src="{IMG}acc_green.webp" alt="" data-k="acc" loading="lazy" style="clip-path:inset(0 0 100% 0)"><img src="{IMG}hero_chal.webp" alt="" data-k="chal" loading="lazy" style="clip-path:inset(0 0 100% 0)"></div>
      <div class="h_resultBox"><div class="h_resultIn">
        <span class="x_label">Best place to start</span>
        <h3 class="h_swap" id="pickName">Farm Innovation Fund</h3>
        <dl><dt>Why</dt><dd class="h_swap" id="pickWhy"></dd><dt>Support</dt><dd class="h_swap" id="pickSup"></dd><dt>When</dt><dd class="h_swap" id="pickNow"></dd></dl>
        <a href="ivp-farm-innovation-fund.html" id="pickGo" class="s_btn s_btnPrimary s_btnSm" style="align-self:flex-start"><span id="pickGoText">Go to Farm Innovation Fund</span> {A}</a>
      </div></div>
    </article>
  </div></section>'''
h = rep(h, fin_old, fin)
PICK_old = between(h, '    var PICK = {', '    };\n')
PICK = {
    'fif': dict(route='farm-innovation-fund', name='Farm Innovation Fund', why='Turn a practical farm challenge or improvement idea into a structured, real-world project while retaining ownership of your solution.',
               sup='Potential non-dilutive funding, expert guidance, pilot design, technical support and access to relevant IO capabilities.', now='Current cycle closed. Next cycle anticipated in April 2027.'),
    'inc': dict(route='incubation', name='Incubation', why='Test the critical technical, user, adoption and commercial assumptions behind promising research or an early-stage technology.',
               sup='Expert review, experimental design, facility access, focused validation and guidance toward commercialization or further development.', now='Expressions of interest accepted year-round, subject to evaluation cycles and available capacity.'),
    'acc': dict(route='accelerator', name='Acceleration', why='Generate the operational and commercial evidence needed to localize a proven technology and build a route into the UAE and wider region.',
               sup='Pilot delivery, operating-environment access, technical expertise, prospective customer engagement and commercialization support, with potential milestone-based funding.', now='Current cycle closed. Next cycle anticipated in April 2027. Register interest in the next cohort.'),
    'chal': dict(route='agricultural-challenges', name='Agri-food Challenges', why='Engage IO to design and deliver an innovation program that finds, evaluates and tests technologies against your priority challenge.',
                sup='Challenge design, technology sourcing, expert evaluation, finalist assessment, pilot design, real-world validation and scale planning.', now='Partner programs are scoped with each organization, year-round.'),
}
h = rep(h, PICK_old, '    var PICK = ' + json.dumps(PICK, ensure_ascii=False) + ';\n')
# the result card fills itself on load (it was hard-coded before)
h = rep(h, "    var opts = $$('.h_opt', view), imgs = $$('.h_resultImgs img', view), z = 2;",
        "    var opts = $$('.h_opt', view), imgs = $$('.h_resultImgs img', view), z = 2;\n    (function () { var p = PICK.fif; $('#pickWhy').textContent = p.why; $('#pickSup').textContent = p.sup; $('#pickNow').textContent = p.now; })();")

# ---------------- 25: metrics ticker removed ----------------
h = cut(h, '<div class="h_ticker" aria-label="Platform facts">', '</div></div>\n')
h = rep(h, "var tick = $('.h_ticker', view), tickAnim = $('.h_tickTrack', view).getAnimations ? $('.h_tickTrack', view).getAnimations()[0] : null,",
        "var tick = $('.h_ticker', view), tickAnim = (tick && $('.h_tickTrack', view).getAnimations) ? $('.h_tickTrack', view).getAnimations()[0] : null,")

# ---------------- 4-7: approach, routes, readiness, technology areas, featured ----------------
STEPS = [
    ('Define the problem', 'Establish the operational need, intended user, current baseline and strategic importance of the challenge.', ['Stakeholder discovery', 'User and customer interviews', 'Baseline definition', 'Constraint mapping', 'Success-measure development']),
    ('Source the right ideas and technologies', 'Identify relevant ideas, research, technical teams and market-ready technologies through targeted outreach and ecosystem engagement.', ['Technology landscaping', 'Startup sourcing', 'Research and university engagement', 'Open calls', 'Farmer engagement', 'Partner referrals']),
    ('Evaluate the opportunity', 'Assess strategic relevance, technical potential, differentiation, commercial viability, operational feasibility, adoption barriers and team capability.', ['Scientific and technical review', 'Market assessment', 'Prior-art and IP review', 'Commercial analysis', 'Team assessment', 'Adoption-risk review']),
    ('Design the validation pathway', 'Determine the most important uncertainties and develop the smallest credible experiment, proof of concept or pilot required to resolve them.', ['Experimental design', 'Pilot scoping', 'Protocol development', 'Site selection', 'KPI definition', 'Go, no-go and pivot criteria']),
    ('Test in real conditions', 'Generate reliable evidence in environments that reflect how the technology or solution will ultimately be used.', ['Laboratory analysis', 'Greenhouse or nethouse trials', 'Field validation', 'User testing', 'Operational deployment', 'Performance and economic measurement']),
    ('Build the pathway to adoption and scale', 'Use the evidence generated to define the most appropriate next step.', ['Venture clienting', 'Licensing', 'Co-development', 'Strategic partnership', 'Investment', 'Joint venture', 'Venture creation', 'Further research, validation or replication']),
]
steps = ''.join(
    f'<li class="rv_step" data-i="{i}"><button type="button" class="rv_stepHead" aria-expanded="{"true" if i == 0 else "false"}"><span class="rv_stepN">{i + 1:02d}</span><span class="rv_stepT">{t}</span></button>'
    f'<div class="rv_stepBody"><p>{d}</p><span class="rv_stepL">{"Potential pathways" if i == 5 else "Typical activities"}</span><ul>{"".join(f"<li>{a}</li>" for a in acts)}</ul></div></li>'
    for i, (t, d, acts) in enumerate(STEPS))
approach = f'''<section class="x_sec x_grey rv_appr" id="approach"><div class="s_wrap">
    <div class="rv_twoCol"><div><span class="c_eyebrow" data-reveal>Our approach</span><h2 class="x_h2" data-reveal>From problem to scale</h2></div>
    <div><p class="x_lead" data-reveal>Every IO platform and program is supported by a structured process that reduces uncertainty and builds the evidence required for a clear next decision.</p>
    <p class="x_body" data-reveal>The precise journey varies according to the maturity of the idea or technology, but the underlying method remains consistent.</p></div></div>
    <div class="rv_evid" aria-hidden="true"><span>Evidence</span><i><b id="rvEvid"></b></i><span>Decision</span></div>
    <ol class="rv_steps" id="rvSteps">{steps}</ol>
  </div></section>
  <section class="x_sec rv_routes"><div class="s_wrap">
    <div class="rv_routeHead"><span class="c_eyebrow" data-reveal>Two routes to innovation</span><h2 class="x_h2" data-reveal>Localize the best. <span class="rv_blue">Build what is missing.</span></h2></div>
    <div class="rv_routeGrid">
      <article class="rv_route"><span class="rv_routeK">Localize</span><p class="x_lead">We identify strong solutions from the UAE and around the world, bring them into relevant operating environments and adapt them to local conditions and market requirements.</p><p class="x_body">This path is appropriate when a solution already has strong problem-solution fit and localization provides a faster or more efficient route than developing a new solution.</p></article>
      <article class="rv_route rv_routeB"><span class="rv_routeK">Build</span><p class="x_lead">When the market does not offer an adequate solution, we work with researchers, technical teams and partners to develop and validate new approaches.</p><p class="x_body">This path is appropriate where there is a demonstrated market or capability gap, the right team is available and the potential value justifies the higher time, cost and technical risk.</p></article>
    </div>
  </div></section>'''
READY = [
    ('Technical', 'Can the solution perform reliably in the intended environment?', ['Core functionality', 'Supporting scientific evidence', 'Reliability and repeatability', 'Performance against the baseline', 'Suitability for local environmental conditions', 'Safety and technical risks']),
    ('Commercial', 'Does the solution address a meaningful need and offer a credible path to economic value?', ['Customer and user need', 'Value proposition', 'Market potential', 'Competitive differentiation', 'Business model', 'Cost and return on investment', 'Willingness to pay']),
    ('Operational', 'Can the solution be deployed, operated and supported at the required scale?', ['Manufacturing and supply', 'Installation and integration', 'Infrastructure requirements', 'Day-to-day operation', 'Maintenance and after-sales support', 'Skills and training requirements', 'Ability to scale delivery']),
    ('Adoption', 'Can the solution overcome the practical barriers to implementation?', ['Regulation and permitting', 'User acceptance', 'Procurement processes', 'Data and system integration', 'Policy alignment', 'Infrastructure dependencies', 'Organizational change requirements']),
]
ready_cards = ''.join(
    f'<button type="button" class="rv_rq rv_rq{i}" data-q="{i}" aria-pressed="{"true" if i == 0 else "false"}"><span class="rv_rqK">{k} readiness</span><span class="rv_rqQ">{q}</span></button>'
    for i, (k, q, _) in enumerate(READY))
ready_lists = ''.join(f'<div class="rv_rqList" data-q="{i}"{"" if i == 0 else " hidden"}><span class="x_label">IO considers · {k} readiness</span><ul>{"".join(f"<li>{x}</li>" for x in L)}</ul></div>' for i, (k, _, L) in enumerate(READY))
ready = f'''<section class="x_sec x_ink rv_ready"><div class="s_wrap">
    <div class="rv_twoCol"><div><span class="c_eyebrow c_eyebrowLight" data-reveal>What we evaluate</span><h2 class="x_h2" data-reveal>Technology readiness is only part of the picture</h2></div>
    <div><p class="x_lead" data-reveal>A solution can perform successfully in a controlled environment and still fail to achieve adoption.</p>
    <p class="x_body" data-reveal>IO evaluates opportunities across four connected dimensions to understand whether a solution is technically credible, commercially relevant, operationally feasible and ready for implementation.</p></div></div>
    <div class="rv_readyGrid">
      <div class="rv_wheel">{ready_cards}<div class="rv_core"><b>Ready for</b><span>implementation</span></div></div>
      <div class="rv_readyAside">{ready_lists}<p class="rv_readyClose">By assessing all four dimensions together, IO can identify the most important barriers, design more relevant validation activities and help partners make better-informed investment and implementation decisions.</p></div>
    </div>
  </div></section>'''
TECH = [
    ('production', 'Production', [
        ('Soil and plant health', 'Solutions that improve soil quality, nutrient and water retention, crop health, stress tolerance and productive capacity.', ['Soil inputs and amendments', 'Biological and plant-health inputs', 'Nutrient-management technologies', 'Soil-health monitoring', 'Biostimulants and biological crop protection', 'Resilience to abiotic and biotic stresses']),
        ('Precision agriculture', 'Data-led technologies that improve decision-making, resource use and farm productivity.', ['Data-driven farming', 'IoT and remote sensing', 'Imaging and crop monitoring', 'Robotics and automation', 'Variable-rate technologies', 'Decision-support systems', 'AI-enabled farm management']),
        ('Water and energy management', 'Technologies that improve water-use efficiency, energy performance and resource resilience.', ['Precision irrigation', 'Water monitoring and optimization', 'Water treatment, recycling and reuse', 'Energy-efficient climate control', 'Renewable-energy integration', 'Resource-efficient cooling']),
        ('Controlled-environment agriculture', 'Technologies and systems supporting efficient indoor and protected cultivation.', ['Greenhouse and nethouse systems', 'Controlled-environment equipment', 'Climate-control technologies', 'Lighting and growing systems', 'Environmental monitoring', 'Automation for protected agriculture']),
        ('Crop innovation', 'Scientific and technological approaches that improve crop performance under challenging conditions.', ['Genomic innovation', 'Crop breeding technologies', 'Multi-stress-tolerant crops', 'Phenotyping', 'Seed and varietal innovation', 'Climate-resilient production systems']),
    ]),
    ('waste', 'Waste and circularity', [
        ('Prevention', 'Technologies that prevent food loss, maintain quality and improve planning before products become waste.', ['Cold-chain infrastructure', 'Temperature-controlled storage and transport', 'AI-enabled supply management', 'Quality and freshness monitoring', 'Shelf-life-extension technologies', 'Advanced packaging, coatings and materials']),
        ('Rescue and reuse', 'Solutions that redirect surplus products or convert waste into higher-value resources.', ['Food-redistribution platforms', 'Alternative demand channels', 'Waste-to-resource technologies', 'Agricultural by-product utilization', 'Organic-waste conversion', 'Inputs, materials and energy derived from waste']),
    ]),
    ('supply', 'Supply-chain visibility and intelligence', [
        ('Data platforms and infrastructure', 'Technologies that create, capture and connect data across agrifood value chains.', ['Agribusiness platforms and marketplaces', 'Supply-chain IoT', 'Alternative data sources', 'Farm-to-market connectivity', 'Product and logistics tracking', 'Data integration infrastructure']),
        ('Applications and analytics', 'Solutions that turn value-chain data into stronger decisions, transparency and operational improvements.', ['Traceability systems', 'Blockchain-enabled records', 'Demand forecasting', 'Supply planning', 'Inventory optimization', 'Predictive analytics', 'AI-enabled supply-chain management']),
    ]),
]
ttabs = ''.join(f'<button type="button" class="rv_ttab" data-t="{k}" aria-pressed="{"true" if i == 0 else "false"}"><span>{i + 1:02d}</span>{n}<i>{len(S)} areas</i></button>' for i, (k, n, S) in enumerate(TECH))
tpanels = ''.join(f'<div class="rv_tpanel" data-t="{k}"{"" if i == 0 else " hidden"}>' + ''.join(
    f'<details class="rv_tcard"{" open" if j == 0 else ""}><summary><h3>{t}</h3><span class="rv_plus" aria-hidden="true"></span></summary><p>{d}</p><ul>{"".join(f"<li>{x}</li>" for x in ex)}</ul></details>'
    for j, (t, d, ex) in enumerate(S)) + '</div>' for i, (k, n, S) in enumerate(TECH))
ADJ = ['Agricultural water and wastewater', 'Energy use and renewable integration', 'Advanced materials', 'Environmental monitoring', 'Logistics and mobility', 'Climate adaptation', 'Resource recovery', 'Circular production systems']
tech = f'''<section class="x_sec rv_tech"><div class="s_wrap">
    <div class="rv_twoCol"><div><span class="c_eyebrow" data-reveal>Our focus areas</span><h2 class="x_h2" data-reveal>Technologies shaping the future of agrifood</h2></div>
    <div><p class="x_lead" data-reveal>IO works across the agrifood value chain, from production and resource efficiency to supply-chain intelligence, waste prevention and circularity.</p>
    <p class="x_body" data-reveal>Our areas of focus evolve in response to strategic priorities, partner needs and emerging technologies. We also consider innovations from adjacent industries where they can create meaningful value for agriculture, food production or resource resilience.</p></div></div>
    <div class="rv_techGrid"><div class="rv_ttabs" role="group" aria-label="Technology groups">{ttabs}</div><div>{tpanels}</div></div>
    <div class="rv_adj"><div><span class="x_label">Adjacent sectors</span><h3>Agrifood specialization with adjacent-sector reach</h3><p class="x_body">IO’s core focus is agrifood innovation. However, many of agriculture’s most important challenges intersect with other sectors. We therefore consider adjacent technologies where there is a clear application, and validate whether they can create meaningful operational or commercial value in agricultural environments.</p></div><ul>{"".join(f"<li>{x}</li>" for x in ADJ)}</ul></div>
  </div></section>'''
featured = f'''<section class="x_sec x_secTop0 rv_feat"><div class="s_wrap">
    <div class="rv_featHead"><span class="c_eyebrow" data-reveal>Featured work</span><h2 class="x_h2" data-reveal>Innovation in action</h2></div>
    <article class="rv_case">
      <div class="x_img rv_caseImg"><img src="{IMG}chal_line.webp" alt="Finalist technologies under test in the field" loading="lazy"></div>
      <div class="rv_caseBody">
        <span class="rv_caseCat">Agricultural Challenges</span>
        <h3>Validating water technologies under real-world conditions</h3>
        <p>IO supported the evaluation of finalist technologies for the Al Miyah Challenge by designing and delivering real-world validation activities.</p>
        <p>The work generated technical and operational evidence to help compare technologies and inform the final winner evaluation and selection process.</p>
        <dl><div><dt>Partner</dt><dd>Mohamed bin Zayed Water Initiative</dd></div><div><dt>IO role</dt><dd>Real-world technology validation</dd></div><div><dt>Environment</dt><dd>Relevant agricultural operating conditions</dd></div><div><dt>Outcome</dt><dd>Evidence to support finalist evaluation and selection</dd></div></dl>
        <a class="s_btn s_btnPrimary s_btnSm" href="ivp-agricultural-challenges.html">Read the case study {A}</a>
      </div>
    </article>
  </div></section>'''
latest_old = '<div class="x_head"><div><span class="c_eyebrow" data-reveal>On the ground now</span><h2 class="x_h2" data-reveal>Latest from the platforms.</h2></div></div>'
exec((S / 'scripts' / 'hub_v2.py').read_text())
h = rep(h, '  <section class="x_sec"><div class="s_wrap">\n    ' + latest_old,
        approach + ready + tech + featured + '\n  <section class="x_sec x_secTop0"><div class="s_wrap">\n    '
        + '<div class="x_head rv_latestHead"><div><span class="c_eyebrow" data-reveal>On the ground now</span><h2 class="x_h2" data-reveal>Latest from Innovation &amp; Ventures</h2></div><p class="x_body">Follow current calls, cohort milestones, validation projects, partner programs and results from across IO’s innovation portfolio.</p></div>')
h = rep(h, '<p>Five field pilots and a geothermal-cooled greenhouse, ahead of the December 2026 award.</p>', '<p>Field validation of finalist technologies, delivered by IO for a partner-led water challenge.</p>')
h = rep(h, '<p>Series A+ startups begin 3 to 5 month pilots with Silal’s business units.</p>', '<p>Later-stage ventures begin pilots with Silal’s business units.</p>')
h = rep(h, '<h3><span>Innovation Day: 38 farmers sharpen their pilot proposals</span></h3>', '<h3><span>Innovation Day: 38 farmers sharpen their project proposals</span></h3>')

# ---------------- 9 / 26: guided enquiry ----------------
cbox_old = between(h, '<div class="x_cboxMain">', '</a>\n    </div>')
cbox = f'''<div class="x_cboxMain"><span class="x_label">Guided enquiry</span><h2 data-reveal>Not sure where to start?</h2><p data-reveal>Tell us about your idea, technology or challenge. The IO team will identify the most relevant platform, service or validation pathway.</p></div>
      <ul class="x_cboxList"><li><a href="ivp-farm-innovation-fund.html">Farm Innovation Fund<span>For UAE farmers &amp; entrepreneurs</span></a></li><li><a href="ivp-incubation.html">Incubation<span>For researchers and early-stage ventures</span></a></li><li><a href="ivp-accelerator.html">Acceleration<span>For later-stage ventures</span></a></li><li><a href="ivp-agricultural-challenges.html">Agri-food Challenges<span>For government and industry partners</span></a></li></ul>
      <div class="rv_cboxBtns"><a href="#pathway" class="s_btn rv_btnWhite rv_jump">Find your pathway {A}</a><a href="ivp-enquire.html" class="rv_textW">or send an enquiry {A}</a></div>
    </div>'''
h = rep(h, cbox_old, cbox)
h = rep(h, '<span class="x_label">Start with · For farmers</span><strong>Farm Innovation Fund</strong><p>From farm need to field evidence. Up to AED 200,000 per pilot.</p>',
        '<span class="x_label">Start with · For UAE farmers &amp; entrepreneurs</span><strong>Farm Innovation Fund</strong><p>A practical pathway from farm needs to tested solutions.</p>')

CSS = '''<style id="rev6-hub">
.rv_eyeTop { display: block; margin-bottom: 18px; }
.rv_jump { margin-top: 8px; align-self: flex-start; }
.h_aside { display: flex; flex-direction: column; gap: 18px; }
.rv_twoCol { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: 20px; align-items: end; margin-bottom: clamp(32px, 4vw, 64px); }
.rv_twoCol > div:first-child { grid-column: 1 / span 6; display: flex; flex-direction: column; gap: 16px; }
.rv_twoCol > div:last-child { grid-column: 7 / span 6; display: flex; flex-direction: column; gap: 14px; }
.rv_platHead { padding-top: clamp(16px, 2vw, 32px); }
.rv_trl { position: absolute; top: var(--pad); left: var(--pad); z-index: 2; padding: 5px 10px; border: 1px solid rgba(255,255,255,.35); border-radius: 999px; background: rgba(20,20,20,.45); font-size: .6875rem; letter-spacing: .08em; color: #fff; backdrop-filter: blur(6px); }
.rv_partner { background: var(--io-ink); }
.rv_partner .x_img img { opacity: .38; mix-blend-mode: luminosity; }
.rv_partner .rv_trl { background: #fff; color: var(--io-ink); border-color: #fff; }
.rv_partner::after { content: ""; position: absolute; inset: 0; border: 2px dashed rgba(255,255,255,.35); pointer-events: none; }
.rv_finderIntro { margin-top: 12px; }
/* approach */
.rv_evid { display: flex; align-items: center; gap: 14px; margin: 0 0 18px; font-size: .6875rem; letter-spacing: .14em; text-transform: uppercase; color: var(--grey); }
.rv_evid i { flex: 1; height: 4px; background: #e2e2e2; border-radius: 2px; overflow: hidden; }
.rv_evid b { display: block; height: 100%; width: 16.66%; background: linear-gradient(90deg, #9fd2e8, var(--io), var(--io-ink)); transition: width 1s cubic-bezier(.16,1,.3,1); }
.rv_steps { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 8px; counter-reset: s; }
.rv_step { display: flex; flex-direction: column; background: #fff; border-top: 3px solid #dcdcdc; transition: border-color .4s; min-height: 100%; }
.rv_step.on { border-top-color: var(--io); }
.rv_step.done { border-top-color: var(--io-ink); }
.rv_stepHead { all: unset; cursor: pointer; display: flex; flex-direction: column; gap: 14px; padding: 18px 18px 12px; }
.rv_stepN { font-size: .75rem; letter-spacing: .1em; color: var(--io); }
.rv_stepT { font-size: 1.0625rem; line-height: 1.3; color: var(--charcoal); }
.rv_stepBody { padding: 0 18px 20px; display: flex; flex-direction: column; gap: 12px; }
.rv_stepBody p { font-size: .875rem; line-height: 1.55; color: var(--grey); }
.rv_stepL { font-size: .625rem; letter-spacing: .14em; text-transform: uppercase; color: var(--io-ink); }
.rv_stepBody ul { display: flex; flex-direction: column; gap: 6px; }
.rv_stepBody li { font-size: .8125rem; color: var(--charcoal); padding-left: 14px; position: relative; }
.rv_stepBody li::before { content: ""; position: absolute; left: 0; top: .55em; width: 6px; height: 1px; background: var(--io); }
/* routes */
.rv_routeHead { display: flex; flex-direction: column; gap: 16px; margin-bottom: clamp(28px, 3vw, 48px); }
.rv_blue { color: var(--io); }
.rv_routeGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.rv_route { display: flex; flex-direction: column; gap: 16px; padding: clamp(24px, 3vw, 44px); background: var(--light); }
.rv_routeB { background: var(--io-ink); color: #fff; }
.rv_routeB .x_lead, .rv_routeB .x_body { color: #fff; } .rv_routeB .x_body { opacity: .82; }
.rv_routeK { font-size: clamp(2rem, 3.4vw, 3.2rem); font-weight: 300; letter-spacing: -.02em; color: var(--io-ink); }
.rv_routeB .rv_routeK { color: #9fd2e8; }
/* readiness */
.rv_ready .x_label { color: #9fd2e8; }
.rv_readyGrid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: 32px; align-items: center; }
.rv_wheel { grid-column: 1 / span 7; position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.rv_rq { all: unset; box-sizing: border-box; cursor: pointer; min-height: clamp(150px, 15vw, 210px); padding: clamp(18px, 2vw, 28px); display: flex; flex-direction: column; gap: 12px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); transition: background .35s, border-color .35s; }
.rv_rq0 { border-radius: 120px 0 0 0; padding-left: clamp(40px, 4vw, 64px); } .rv_rq1 { border-radius: 0 120px 0 0; align-items: flex-end; text-align: right; padding-right: clamp(40px, 4vw, 64px); }
.rv_rq2 { border-radius: 0 0 0 120px; justify-content: flex-end; padding-left: clamp(40px, 4vw, 64px); } .rv_rq3 { border-radius: 0 0 120px 0; align-items: flex-end; justify-content: flex-end; text-align: right; padding-right: clamp(40px, 4vw, 64px); }
.rv_rq:hover { background: rgba(255,255,255,.1); }
.rv_rq[aria-pressed="true"] { background: var(--io); border-color: var(--io); }
.rv_rqK { font-size: .6875rem; letter-spacing: .14em; text-transform: uppercase; color: #9fd2e8; }
.rv_rq[aria-pressed="true"] .rv_rqK { color: #fff; }
.rv_rqQ { font-size: clamp(1rem, 1.3vw, 1.2rem); line-height: 1.35; color: #fff; max-width: 22ch; }
.rv_core { position: absolute; left: 50%; top: 50%; width: clamp(110px, 11vw, 150px); aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%; background: #fff; color: var(--io-ink); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 0 0 10px var(--ink-bg, #2b2a29); pointer-events: none; }
.rv_core b { font-size: .6875rem; letter-spacing: .12em; text-transform: uppercase; font-weight: 500; } .rv_core span { font-size: .9375rem; }
.rv_readyAside { grid-column: 9 / span 4; display: flex; flex-direction: column; gap: 24px; }
.rv_rqList ul { margin-top: 14px; display: flex; flex-direction: column; gap: 0; border-top: 1px solid rgba(255,255,255,.2); }
.rv_rqList li { padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,.12); font-size: .9375rem; color: #fff; }
.rv_readyClose { font-size: .875rem; line-height: 1.65; color: rgba(255,255,255,.7); }
/* technology areas */
.rv_techGrid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: 24px; align-items: start; }
.rv_ttabs { grid-column: 1 / span 4; display: flex; flex-direction: column; border-top: 1px solid var(--line); position: sticky; top: 110px; }
.rv_ttab { all: unset; box-sizing: border-box; cursor: pointer; display: grid; grid-template-columns: 36px 1fr; row-gap: 4px; padding: 18px 0; border-bottom: 1px solid var(--line); font-size: 1.125rem; color: var(--grey); transition: color .3s; }
.rv_ttab span { grid-row: span 2; font-size: .75rem; color: var(--io); padding-top: 5px; }
.rv_ttab i { font-style: normal; font-size: .75rem; color: var(--grey); }
.rv_ttab[aria-pressed="true"] { color: var(--charcoal); box-shadow: inset 3px 0 0 var(--io); padding-left: 14px; }
.rv_techGrid > div:last-child { grid-column: 6 / span 7; }
.rv_tpanel { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
.rv_tcard { border-bottom: 1px solid var(--line); }
.rv_tcard summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 20px 0; }
.rv_tcard summary::-webkit-details-marker { display: none; }
.rv_tcard h3 { font-size: 1.25rem; font-weight: 400; color: var(--charcoal); }
.rv_plus { width: 28px; height: 28px; border: 1px solid var(--line); border-radius: 50%; position: relative; flex: none; transition: transform .3s; }
.rv_plus::before, .rv_plus::after { content: ""; position: absolute; left: 50%; top: 50%; width: 10px; height: 1.5px; background: var(--charcoal); transform: translate(-50%, -50%); }
.rv_plus::after { transform: translate(-50%, -50%) rotate(90deg); transition: opacity .3s; }
.rv_tcard[open] .rv_plus::after { opacity: 0; }
.rv_tcard p { font-size: .9375rem; color: var(--grey); max-width: 52ch; }
.rv_tcard ul { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px 0 24px; }
.rv_tcard li { padding: 7px 12px; background: var(--light); border-radius: 999px; font-size: .8125rem; color: var(--charcoal); }
.rv_adj { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: 24px; margin-top: clamp(48px, 6vw, 96px); padding: clamp(24px, 3vw, 44px); background: var(--light); }
.rv_adj > div { grid-column: 1 / span 6; display: flex; flex-direction: column; gap: 14px; }
.rv_adj h3 { font-size: var(--fs-h3, 1.5rem); font-weight: 400; color: var(--charcoal); }
.rv_adj ul { grid-column: 8 / span 5; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; align-content: center; }
.rv_adj li { padding: 10px 12px; background: #fff; font-size: .8125rem; color: var(--charcoal); }
/* featured */
.rv_featHead { display: flex; flex-direction: column; gap: 16px; margin-bottom: clamp(28px, 3vw, 48px); }
.rv_case { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); background: var(--light); }
.rv_caseImg { grid-column: 1 / span 6; min-height: 420px; }
.rv_caseBody { grid-column: 7 / span 6; padding: clamp(24px, 3vw, 48px) clamp(24px, 3vw, 48px) clamp(24px, 3vw, 48px) 0; display: flex; flex-direction: column; gap: 16px; }
.rv_caseCat { font-size: .6875rem; letter-spacing: .14em; text-transform: uppercase; color: var(--io-ink); }
.rv_caseBody h3 { font-size: clamp(1.5rem, 2.2vw, 2.1rem); font-weight: 300; line-height: 1.2; color: var(--charcoal); }
.rv_caseBody p { font-size: .9375rem; line-height: 1.65; color: var(--grey); }
.rv_caseBody dl { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 24px; padding: 18px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.rv_caseBody dt { font-size: .625rem; letter-spacing: .14em; text-transform: uppercase; color: var(--grey); }
.rv_caseBody dd { font-size: .875rem; color: var(--charcoal); margin-top: 4px; }
.rv_caseBody .s_btn { align-self: flex-start; }
.rv_latestHead { align-items: end; gap: 24px; } .rv_latestHead .x_body { max-width: 46ch; }
.rv_cboxBtns { grid-column: 1 / -1; display: flex; align-items: center; flex-wrap: wrap; gap: 20px; }
.rv_btnWhite { background: #fff !important; color: var(--io-ink) !important; }
.rv_textW { display: inline-flex; align-items: center; gap: 8px; color: #fff; font-size: .875rem; opacity: .85; } .rv_textW:hover { opacity: 1; }
@media (max-width: 1099px) { .rv_steps { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 899px) {
  .rv_twoCol > div:first-child, .rv_twoCol > div:last-child, .rv_wheel, .rv_readyAside, .rv_ttabs, .rv_techGrid > div:last-child, .rv_adj > div, .rv_adj ul, .rv_caseImg, .rv_caseBody { grid-column: 1 / -1; }
  .rv_steps { grid-template-columns: 1fr; }
  .rv_step:not(.open) .rv_stepBody { display: none; }
  .rv_routeGrid { grid-template-columns: 1fr; }
  .rv_ttabs { position: static; }
  .rv_caseImg { min-height: 240px; } .rv_caseBody { padding: 24px; }
  .rv_rq0, .rv_rq1, .rv_rq2, .rv_rq3 { border-radius: 0; padding: 18px; align-items: flex-start; text-align: left; justify-content: flex-start; min-height: 130px; }
  .rv_core { display: none; }
  .rv_trl { left: auto; right: var(--pad); }
}
</style>
<script id="rev6-hub-js">
(function () {
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  // in-page jumps (Find your pathway)
  $$('.rv_jump').forEach(function (a) { a.addEventListener('click', function (e) { var t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); if (window.__lenis) window.__lenis.scrollTo(t, { offset: -90, duration: 1.4 }); else t.scrollIntoView({ behavior: 'smooth' }); }); });
  // approach: evidence builds up as the steps are read; on phones each step opens on tap
  var steps = $$('.rv_step'), bar = document.getElementById('rvEvid');
  function setStep(n) { steps.forEach(function (s, i) { s.classList.toggle('done', i < n); s.classList.toggle('on', i === n); }); if (bar) bar.style.width = ((n + 1) / steps.length * 100) + '%'; }
  steps.forEach(function (s, i) {
    s.addEventListener('mouseenter', function () { setStep(i); });
    s.querySelector('.rv_stepHead').addEventListener('click', function () { setStep(i); s.classList.toggle('open'); this.setAttribute('aria-expanded', s.classList.contains('open')); });
  });
  if ('IntersectionObserver' in window && steps.length) {
    var seen = -1, io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var i = +e.target.dataset.i; if (i > seen) { seen = i; setStep(i); } } }); }, { rootMargin: '0px 0px -35% 0px' });
    steps.forEach(function (s) { io.observe(s); });
  } else setStep(5);
  if (steps[0]) { steps[0].classList.add('open'); setStep(0); }
  // readiness model
  var qs = $$('.rv_rq'), lists = $$('.rv_rqList');
  qs.forEach(function (q) { function on() { qs.forEach(function (x) { x.setAttribute('aria-pressed', x === q); }); lists.forEach(function (l) { l.hidden = l.dataset.q !== q.dataset.q; }); } q.addEventListener('click', on); q.addEventListener('mouseenter', on); });
  // technology explorer
  var tt = $$('.rv_ttab'), tp = $$('.rv_tpanel');
  tt.forEach(function (t) { t.addEventListener('click', function () { tt.forEach(function (x) { x.setAttribute('aria-pressed', x === t); }); tp.forEach(function (p) { p.hidden = p.dataset.t !== t.dataset.t; }); if (window.ScrollTrigger) ScrollTrigger.refresh(); }); });
})();
</script>'''
h = h.replace('</body>', CSS + '</body>')
h = h.replace('</body>', V2 + '</body>')
save('ivp-hub.html', global_patch(h))
