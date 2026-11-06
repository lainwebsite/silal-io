"""Acceleration / Unbreakable Harvest ("Acceleration Page" doc, 5 Nov, with Caitlin's two comments)."""
from common import *

h = load('ivp-accelerator.html')
A = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
I = 'innovation-venture-platforms/img/'
li = lambda xs: ''.join(f'<li>{x}</li>' for x in xs)

# ---------- 1 hero: kept, but on a photo; core message as the side copy ----------
h = rep(h, '<section class="a_hero">', f'<section class="a_hero rv_aHero"><div class="rv_aHeroImg" aria-hidden="true"><img src="{I}hero_acc.webp" alt=""></div>')
h = rep(h, '<i></i><span>Accelerator</span></nav>', '<i></i><span>Acceleration</span></nav>')
h = rep(h, '<p class="x_body" data-reveal>The high-velocity growth engine for Series A+ innovators solving the future of food security and resilience. Innovation Oasis is committing over AED 10M to advancing food security innovation in the UAE and beyond.</p>',
        '<p class="x_body" data-reveal><b>This is not a curriculum-based accelerator.</b> It is a market-access and commercialization platform for mature agrifood ventures. Companies validate proven technologies in UAE conditions, work directly with prospective customers and partners, and build a route from pilot evidence to commercial deployment.</p>')
h = cut(h, '<div class="x_img a_band" data-band>', '</div></div>\n')

# the rest of the view is rebuilt from the doc
start = '  <section class="x_sec" id="accGain">'
end = '  <a class="x_next" href="ivp-agricultural-challenges.html">'
old_body = h[h.index(start):h.index(end)]
gain_media = between(old_body, '<div class="x_img x_corners a_gainMedia" id="accMedia" data-img>', '</div>')

why = f'''  <section class="x_sec"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Why IO Acceleration</span><h2 class="x_h2" data-reveal>From proven technology to commercial opportunity</h2></div>
    <div><p class="x_lead" data-reveal>The UAE offers something most acceleration programs cannot: demanding operating conditions, advanced agrifood infrastructure and direct access to organizations capable of adopting, distributing or commercializing new solutions.</p><p class="x_body" data-reveal>Acceleration connects these assets to mature ventures ready to prove value and grow in the region.</p></div></div>
    <ol class="rv_vlc">{''.join(f'<li><span>{i + 1:02d}</span><b>{k}</b><p>{d}</p></li>' for i, (k, d) in enumerate([("Validate", "Test performance, reliability and economics under relevant UAE conditions."), ("Localize", "Adapt the technology, value proposition and delivery model for the UAE and GCC."), ("Commercialize", "Build the right route to customers, channels, partners or capital.")]))}</ol>
  </div></section>
'''
PROFILE = ['Proven product or working system', 'Typically TRL 7 or above', 'Evidence from a relevant operating environment', 'Clear advantage over existing solutions', 'Credible customer and economic value', 'Capacity to deploy and support a UAE pilot', 'Interest in entering or expanding across the UAE and GCC', 'A strong team with the technical and commercial capability to execute']
CHK = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
who = f'''  <section class="x_sec x_grey"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Venture profile</span><h2 class="x_h2" data-reveal>Built for companies ready to scale</h2></div><div><p class="x_body" data-reveal>Acceleration is designed for mature ventures with differentiated agrifood or adjacent-sector technologies that are ready for growth into a new market.</p></div></div>
    <div class="rv_prof"><div class="rv_profList"><span class="x_label">Ideal profile</span><ul>{''.join(f'<li>{CHK}<span>{x}</span></li>' for x in PROFILE)}</ul>
    <p class="rv_note">The current platform model targets mature ventures, broadly from Series A to C, but company quality and deployment readiness matter more than funding stage alone.</p></div>
    <a class="rv_toInc" href="ivp-incubation.html"><span class="x_label">Earlier stage?</span><b>Still validating an early prototype, customer need or value proposition?</b><span>IO Incubation may be the better place to start.</span><em>Explore Incubation {A}</em></a></div>
  </div></section>
'''
# 4: priority challenges, made very visual, keeping the how-might-we statements
CH = [('Open-field resource optimization', 'Improve yields, economics and resource efficiency in UAE open-field agriculture.', 'close the yield, cost, and resource-efficiency gaps in UAE open-field agriculture, competing with imports and unlocking new economically viable crop categories?', I + 'cs_open.webp', 'Growing &amp; production'),
      ('Protected-agriculture resource optimization', 'Reduce the water, energy and capital intensity of year-round protected production.', 'reduce the water, energy, and capital intensity of protected agriculture across the UAE, making year-round production commercially viable and unlocking crop categories?', I + 'acc_green.webp', 'Growing &amp; production'),
      ('Post-harvest quality and shelf life', 'Reduce quality loss, extend freshness and prevent food waste.', 'reduce post-harvest losses and extend the shelf life of locally produced crops, ensuring quality and freshness from farm gate to consumer?', I + 'cs_post.webp', 'Supply chain &amp; market access'),
      ('Supply-chain visibility and resilience', 'Improve forecasting, traceability, coordination and decision-making across food supply chains.', 'improve traceability, cold-chain integrity, and demand forecasting across the UAE food supply chain, reducing waste and strengthening farm-to-market connectivity?', I + 'cs_supply.webp', 'Supply chain &amp; market access')]
chal = f'''  <section class="x_sec x_ink rv_chal"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow c_eyebrowLight" data-reveal>Where we focus</span><h2 class="x_h2" data-reveal>Four priority challenges</h2></div><div><p class="x_body" data-reveal>Each challenge is owned by real operations across IO, Silal and partners, so a pilot answers a question someone needs answered.</p></div></div>
    <ul class="rv_chGrid">{''.join(f'<li class="rv_ch"><img src="{im}" alt="" loading="lazy"><div class="rv_chIn"><span class="rv_chN">{i + 1:02d} · {grp}</span><h3>{t}</h3><p class="rv_chSum">{s}</p><p class="rv_hmw"><b>How might we</b> {q}</p></div></li>' for i, (t, s, q, im, grp) in enumerate(CH))}</ul>
  </div></section>
'''
P1 = [('Source', 'Identify high-potential technologies through global scouting, applications and partner networks.'), ('Evaluate', 'Assess maturity, differentiation, evidence, UAE relevance, team capability and commercial potential.'), ('Match', 'Connect shortlisted ventures with a relevant problem owner, business sponsor or customer, or commercial partner.')]
P2 = [('Plan', 'Develop a clear testing plan, success measures and commercial hypothesis.'), ('Pilot', 'Deploy the technology and test technical, operational and economic performance.'), ('Build the case', 'Translate pilot results and stakeholder feedback into a clear business and adoption case.'), ('Commercialize', 'Progress the strongest opportunity through the right customer, channel, technology or investment pathway.')]
steps = lambda P, o: ''.join(f'<li><span>{o + i + 1:02d}</span><h4>{t}</h4><p>{d}</p></li>' for i, (t, d) in enumerate(P))
model = f'''  <section class="x_sec"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>The model</span><h2 class="x_h2" data-reveal>From global pipeline to commercial pathway</h2></div><div><p class="x_body" data-reveal>Two parts: find and select the right ventures, then pilot and commercialize with the organizations that can adopt them.</p></div></div>
    <div class="rv_model2"><div class="rv_mPart"><span class="x_label">Part 1 · Find and select</span><ol>{steps(P1, 0)}</ol></div><div class="rv_mPart rv_mPart2"><span class="x_label">Part 2 · Pilot and commercialize</span><ol>{steps(P2, 3)}</ol></div></div>
  </div></section>
'''
OFFER = [('Pilot funding', 'Potential milestone-based, non-dilutive support for approved pilot costs.'), ('Real operating environments', 'Access to relevant IO, Silal and partner fields, greenhouses, nethouses, laboratories and operational sites.'),
         ('Technical expertise', 'Agricultural, scientific, engineering and analytical support tailored to the pilot.'), ('Pilot delivery', 'Support with scoping, project management, partner coordination, data collection and reporting.'),
         ('Commercial access', 'Direct engagement with prospective customers, business sponsors, distributors and strategic partners.'), ('Market navigation', 'Support with localization, regulatory requirements, procurement and regional operating conditions.'),
         ('Business-case development', 'Translate technical results into customer value, economics, return on investment and deal options.'), ('Ecosystem connections', 'Relevant introductions to commercial partners, investors and the broader UAE agrifood ecosystem.')]
offer = f'''  <section class="x_sec x_grey" id="accGain"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>The offer</span><h2 class="x_h2" data-reveal>What ventures receive</h2></div></div>
    <div class="a_gain">
      <div class="x_img x_corners a_gainMedia" id="accMedia" data-img>{gain_media}</div>
      <ol class="a_list" id="accList">{''.join(f'<li class="a_item"{" data-on" if i == 0 else ""}><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(OFFER))}</ol>
    </div>
  </div></section>
'''
ROUTES = [('Customer', ['Venture-client adoption', 'Paid deployment', 'Commercial supply agreement']), ('Channel', ['Distribution', 'Reseller agreement', 'Agent or brokerage model', 'White-label partnership']),
          ('Technology', ['Licensing', 'Co-development', 'Technology acquisition']), ('Strategic growth', ['Joint venture', 'Strategic partnership', 'Regional operating partner'])]
routes = f'''  <section class="x_sec"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Commercial pathways</span><h2 class="x_h2" data-reveal>The pilot is not the destination</h2></div><div><p class="x_body" data-reveal>A successful pilot should create a credible route to adoption, revenue or strategic growth. Depending on the technology and market opportunity, pathways may include:</p></div></div>
    <ul class="rv_routes4">{''.join(f'<li><h3>{t}</h3><ul>{li(xs)}</ul></li>' for t, xs in ROUTES)}</ul>
  </div></section>
'''
powers = between(old_body, '<section class="x_sec a_powersSec">', '</div></section>')
powers = powers.replace('<span class="c_eyebrow" data-reveal>Who powers Unbreakable Harvest</span><h2 class="x_h2" data-reveal>Innovation Oasis and Silal.</h2>',
                        '<span class="c_eyebrow" data-reveal>Why the UAE and IO</span><h2 class="x_h2" data-reveal>Your regional launchpad</h2><p class="x_body rv_launch" data-reveal>The UAE combines real demand for resilient agrifood solutions with operating environments that test technologies against heat, water scarcity, salinity and supply-chain complexity. Through IO and the wider Silal ecosystem, ventures can access capabilities across innovation, farming, agricultural inputs, food operations, commercial distribution and supply-chain infrastructure.</p>')
# 9: cohort, configurable cards (placeholder until confirmed)
COH = [('Agricultural inputs', 'Open-field resource optimization'), ('Agricultural inputs', 'Protected-agriculture resource optimization'), ('Agricultural inputs', 'Open-field resource optimization'),
       ('Sensing', 'Protected-agriculture resource optimization'), ('Sensing', 'Open-field resource optimization'), ('Sensing', 'Post-harvest quality and shelf life'),
       ('Supply-chain technology', 'Supply-chain visibility and resilience'), ('Supply-chain technology', 'Post-harvest quality and shelf life')]
cohort = f'''  <section class="x_sec x_grey rv_coh"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Acceleration in action</span><h2 class="x_h2" data-reveal>Meet the current cohort</h2></div><div><p class="x_body" data-reveal>Eight selected startups spanning agricultural inputs, sensing and supply-chain technologies. Select a venture to see its pilot.</p></div></div>
    <ul class="rv_vGrid">{''.join(f'<li><details class="rv_v"><summary><span class="rv_vLogo">Logo</span><span class="rv_vTxt"><b>Venture {i + 1:02d}</b><em>{tech}</em></span><span class="rv_plus" aria-hidden="true"></span></summary><dl><div><dt>Country</dt><dd>To be confirmed</dd></div><div><dt>Technology</dt><dd>{tech}</dd></div><div><dt>Challenge addressed</dt><dd>{ch}</dd></div><div><dt>Pilot question</dt><dd>Shared once the pilot scope is approved</dd></div></dl></details></li>' for i, (tech, ch) in enumerate(COH))}</ul>
    <p class="rv_note">Placeholder: venture names, logos and pilot imagery follow once the cohort highlights are confirmed.</p>
  </div></section>
'''
FAQ = [('Is this a traditional accelerator?', 'No. The platform focuses on operational validation, localization, market access and commercialization rather than general startup education.'),
       ('Is funding guaranteed?', 'No. Support depends on selection, final pilot scope, budget, milestones and partner participation.'),
       ('Is procurement guaranteed?', 'No. The platform generates evidence and commercial engagement, but procurement and other commercial agreements remain subject to partner decisions and approvals.'),
       ('Does the company need to be based in the UAE?', 'International ventures are encouraged to apply, provided they are committed and able to deploy, support and commercialize their solution in the region.')]
faq = f'''  <section class="x_sec x_ink"><div class="s_wrap a_faq">
    <div class="a_faqSide"><span class="c_eyebrow" data-reveal>FAQs</span><h2 class="x_h2" data-reveal>Questions founders ask.</h2><a href="https://unbreakableharvest.com/" target="_blank" rel="noopener" class="s_textLink">Visit unbreakableharvest.com ↗</a></div>
    <div class="a_faqList" id="faq">{''.join(f'<div class="a_faqItem"{" data-open" if i == 0 else ""}><button aria-expanded="{"true" if i == 0 else "false"}">{q}<i></i></button><div class="a_faqA"><div><p>{a}</p></div></div></div>' for i, (q, a) in enumerate(FAQ))}</div>
  </div></section>
  <section class="x_sec x_secTop0"><div class="s_wrap"><div class="x_cbox rv_final">
    <img class="x_cboxMark" src="innovation-venture-platforms/brand/io-mark.svg" alt="" aria-hidden="true">
    <div class="x_cboxMain"><span class="x_label">Ready to enter the region?</span><h2 data-reveal>Tell us what your technology has proven.</h2><p data-reveal>Tell us what your technology has proven, which challenge it solves and why the UAE is the right next market.</p></div>
    <div class="rv_cboxBtns"><a href="ivp-enquire.html?platform=acc" class="s_btn rv_btnWhite" data-platform="acc">Register your interest {A}</a></div>
  </div></div></section>
'''
h = h.replace(old_body, why + who + chal + model + offer + routes + powers + '\n' + cohort + faq)
h = rep(h, '<span class="x_label">Next platform · Open calls</span><strong>Agricultural Challenges</strong><p>Proven on Silal ground. Al Miyah winners in December 2026.</p>',
        '<span class="x_label">Next platform · For government and industry partners</span><strong>Agri-food Challenges</strong><p>Design and support innovation programs against priority challenges.</p>')

# script: title, offer list and FAQ stay; the removed sections lose their set-up
init_old = between(h, 'INIT.accelerator = function (view) {', '\n  };\n')
keep_title = between(init_old, '    // title: characters rise one by one', "delay: 0.2 }); }\n")
keep_offer = between(init_old, '    // benefits: the one crossing', "onToggle: function (s) { if (s.isActive) accPick(i); } }); });\n    }\n")
keep_faq = between(init_old, '    // FAQ: smooth open/close', '    });')
h = rep(h, init_old, 'INIT.accelerator = function (view) {\n' + keep_title + keep_offer + keep_faq + '\n  };')

CSS = (S / 'scripts' / 'acc.css').read_text()
h = h.replace('</body>', CSS + '</body>')
save('ivp-accelerator.html', global_patch(h))
