"""Incubation, rebuilt from the "Incubation Page" doc (5 Nov). Replaces the 6 Nov first pass.
Order: hero, model, who, readiness (TRL stairs + ARL + TRL x ARL matrix), journey, support, commitments, selection,
KU research-translation portfolio, success, partner model, expression of interest, related pathway."""
from common import *

h = load('ivp-incubation.html')
A = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
CHK = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
I = 'innovation-venture-platforms/img/'
li = lambda xs: ''.join(f'<li>{x}</li>' for x in xs)
two = lambda eb, h2, right, light=False: (f'<div class="rv_two"><div><span class="c_eyebrow{" c_eyebrowLight" if light else ""}" data-reveal>{eb}</span><h2 class="x_h2" data-reveal>{h2}</h2></div><div>{right}</div></div>')

# ---------- 1 hero ----------
h = rep(h, '<h1 data-reveal>Incubation</h1>\n        <p class="x_lead" data-reveal>From lab research to market-ready. A platform for early-stage ventures.</p>\n        <div class="i_partner"><img src="innovation-venture-platforms/brand/silal.png" alt="Silal"><span aria-hidden="true">×</span><img src="innovation-venture-platforms/brand/khalifa-university.png" alt="Khalifa University"></div>',
        f'''<span class="rv_aud">Research translation and technology incubation</span>
        <h1 data-reveal>Incubation</h1>
        <p class="rv_heroH" data-reveal>Turning promising research into pathways to value</p>
        <p class="x_body" data-reveal>IO Incubation helps researchers, universities and technology teams translate promising research, intellectual property and early-stage technologies into solutions with practical and commercial potential.</p>
        <p class="x_body" data-reveal>Through focused experimentation, real-world validation and customer discovery, IO helps teams resolve critical uncertainties, refine their solutions and determine the strongest route forward.</p>
        <div class="x_row"><a href="#inc-eoi" class="s_btn s_btnPrimary s_btnSm rv_jump">Discuss an incubation opportunity {A}</a><a href="#inc-journey" class="s_textLink rv_jump">Explore how incubation works {A}</a></div>''')

old_start = '  <section class="x_sec"><div class="s_wrap i_intro">'
old_end = '  <a class="x_next" href="ivp-accelerator.html">'
old = h[h.index(old_start):h.index(old_end)]
trl_block = between(old, '<div class="i_marker" id="trlMarker" aria-hidden="true"><i></i></div>', '</div>\n    <div class="i_bands">')[:-len('\n    <div class="i_bands">')]
techs = between(old, '<div class="i_techs" id="techs">', '</article>\n      </div>\n    </div>')

# ---------- 2 model ----------
PR = [('Start with the problem', 'Projects must address an evidenced and strategically relevant need, with a defined user, customer or problem owner.'),
      ('Invest in learning', 'Every activity should generate evidence that reduces uncertainty or unlocks a specific next decision.'),
      ('Follow the evidence', 'Projects may continue, pivot or stop. Negative results are valuable when they prevent unnecessary development or reveal a stronger route forward.')]
model = f'''  <section class="x_sec rv_model"><div class="s_wrap">
    <span class="c_eyebrow" data-reveal>Our model</span>
    <h2 class="rv_big" data-reveal>Not open-ended research. <span>Not a conventional accelerator.</span></h2>
    <div class="rv_modelGrid"><p class="x_lead">IO Incubation is a tech translation model for determining the fastest credible pathway from research or prototype to first user.</p>
    <p class="x_body">Each project is structured as a sequence of focused experiments. Rather than committing immediately to a long development roadmap, IO and the project team identify the most consequential uncertainty, design the smallest credible test to resolve it and use the evidence to determine what happens next.</p></div>
    <ol class="rv_princ3">{''.join(f'<li><span>{i + 1:02d}</span><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(PR))}</ol>
    <p class="rv_pull">Incubation is successful when it produces faster, data-driven decision making, not simply when a project completes its original roadmap.</p>
  </div></section>
'''
# ---------- 3 who ----------
WHO = [('Research teams and universities', 'Translate scientific research, intellectual property or laboratory findings into a defined product, service, capability or commercial application.'),
       ('Early-stage ventures', 'Test the critical assumptions behind an emerging venture, strengthen the product and value proposition, and generate the evidence needed to identify a credible route toward customers, partnerships or further investment.'),
       ('Technology developers', 'Validate an early prototype, adapt an existing solution for agrifood or UAE conditions, or resolve critical technical, operational and market uncertainties.'),
       ('Collaborative teams', 'Bring together research, engineering, agronomy, product, commercial and industry expertise to develop and validate a shared opportunity.')]
ENTRY = ['The opportunity addresses a clearly evidenced agrifood problem', 'The intended user, customer or problem owner can be identified', 'An early solution, prototype, research output or technical asset already exists',
         'Important technical, customer, operational or commercial assumptions remain unvalidated', 'A focused experiment could resolve a critical uncertainty or unlock a defined next step',
         'The core team has the capability and commitment to participate in the validation process', 'IO can provide meaningful access to expertise, facilities, data, users, operating environments or commercial relationships',
         'There is an initial hypothesis for how the opportunity could ultimately create value']
who = f'''  <section class="x_sec rv_whoSec"><div class="s_wrap">
    {two('Who it is for', 'Promising opportunities that need focused validation', '<p class="x_lead" data-reveal>IO Incubation supports researchers, universities, scientific teams, technology developers and early-stage ventures with promising solutions that require further evidence before they can progress.</p><p class="x_body" data-reveal>Suitable opportunities may begin as research, intellectual property, an early prototype or an early-stage venture proposition. What matters is that the opportunity addresses a clearly defined agrifood need and can benefit from focused technical, user, operational or commercial validation.</p>')}
    <ul class="rv_who4">{''.join(f'<li><span>{i + 1:02d}</span><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(WHO))}</ul>
    <div class="rv_entry"><div><span class="x_label">Entry profile</span><h3>Incubation is most relevant where:</h3><p class="rv_sel">Incubation is very selective. Opportunities are assessed on the importance of the problem, strength of existing evidence, team capability, potential value and fit with IO’s capabilities.</p></div><ul>{''.join(f'<li>{CHK}<span>{x}</span></li>' for x in ENTRY)}</ul></div>
  </div></section>
'''
# ---------- 4 readiness: TRL stairs, ARL, TRL x ARL ----------
trl_block = trl_block.replace('<div class="i_step" style="--n:7" data-band="acc">', '<div class="i_step" style="--n:7" data-band="acc">')
trl_block = trl_block.replace('aria-label="Technology readiness levels 1 to 9. Incubation covers 3 to 6; the accelerator takes deployed technologies at 7 to 9."', 'aria-label="Technology readiness levels 1 to 9. Incubation typically covers 3 to 6; Acceleration typically 7 and above."')
ARL = [('Value proposition', 'Does the solution offer a meaningful advantage?', ['Functional performance', 'Delivered cost', 'Ease of use']),
       ('Market acceptance', 'Is there a clear customer need and a receptive market?', ['Strength of demand', 'Market opportunity', 'Position in the value chain']),
       ('Resource maturity', 'Can the solution be produced, delivered and supported?', ['Infrastructure', 'Manufacturing and supply', 'Skills and workforce']),
       ('License to operate', 'Can the solution navigate the requirements for implementation?', ['Regulation and approvals', 'Environmental and safety requirements', 'Policy and user acceptance'])]
# matrix cells: rows = adoption high -> low, cols = technology low -> high
Z = {'R': ('Research', 'Further research or laboratory testing'), 'PV': ('Proof of concept', 'Proof of concept focused on customer need and value'),
     'PT': ('Proof of concept', 'Technical proof of concept'), 'P': ('Pilot', 'Pilot in a relevant environment'),
     'O': ('Operational demonstration', 'Operational pilot or demonstration'), 'C': ('Commercial deployment', 'Commercial deployment or scaled rollout')}
GRID = [['PT', 'PT', 'C'], ['PT', 'P', 'O'], ['R', 'PV', 'PV']]
ZC = {'R': 'z1', 'PV': 'z2', 'PT': 'z2', 'P': 'z3', 'O': 'z4', 'C': 'z5'}
cells = ''.join(f'<button type="button" class="rv_cell {ZC[c]}" data-z="{c}"><b>{Z[c][0]}</b><span>{Z[c][1]}</span></button>' for row in GRID for c in row)
ready = f'''  <section class="x_sec x_grey rv_ready"><div class="s_wrap">
    {two('Measuring readiness', 'From early proof of concept to real-world validation', '<p class="x_lead" data-reveal>Technology Readiness Levels, or TRLs, show how far a technology has progressed from an initial idea toward proven operational use.</p><p class="x_body" data-reveal>IO Incubation typically supports technologies between TRL 3 and TRL 6, helping teams move from experimental proof of concept toward validation in relevant conditions.</p>')}
    {trl_block}
    <div class="rv_bands"><div class="rv_bInc"><b>IO Incubation</b><span>Typically TRL 3–6</span><p>For research, prototypes and early-stage ventures that still require focused technical, user or commercial validation.</p></div><div class="rv_bAcc"><b>Acceleration</b><span>Typically TRL 7 and above</span><p>For mature technologies ready for operational validation, localization and commercial engagement. <a href="ivp-accelerator.html">Unbreakable Harvest</a></p></div></div>
    <p class="rv_note">These ranges are indicative. The right pathway also depends on the evidence available and the questions that still need to be answered.</p>
  </div></section>
  <section class="x_sec x_ink rv_arl"><div class="s_wrap">
    {two('Beyond the technology', 'Is the solution ready to be adopted?', '<p class="x_body" data-reveal>Technical maturity alone does not determine whether a solution will succeed. IO also considers Adoption Readiness Level, or ARL, to understand whether a solution can create value and work in practice.</p>', True)}
    <ol class="rv_arlGrid">{''.join(f'<li style="--k:{i}"><span class="rv_arlBar"></span><h3>{t}</h3><p>{q}</p><ul>{li(xs)}</ul></li>' for i, (t, q, xs) in enumerate(ARL))}</ol>
    <div class="rv_mx">
      <div class="rv_mxText"><span class="c_eyebrow c_eyebrowLight">Validation pathway</span><h3>TRL and ARL determine what should happen next</h3><p>IO considers technology and adoption readiness together to determine the most appropriate validation activity.</p>
        <div class="rv_mxOut" aria-live="polite"><span>Likely next step</span><b id="mxOut">Pilot in a relevant environment</b></div>
        <p class="rv_mxClose">Projects do not all enter Incubation at the same point or follow the same route. IO identifies the most important technical or adoption question and designs the next experiment around it. The evidence then determines whether the project should continue, pivot, progress to a larger pilot or conclude.</p>
        <a href="#inc-journey" class="rv_mxLink rv_jump">How incubation works {A}</a></div>
      <div class="rv_mxWrap"><span class="rv_axY">Adoption readiness <i>Low → High</i></span><div class="rv_mxGrid">{cells}</div><span class="rv_axX">Technology readiness <i>Low → High</i></span></div>
    </div>
  </div></section>
'''
# ---------- 5 journey ----------
J = [('Frame the opportunity', 'Define', ['The problem', 'The intended user or customer', 'The current baseline', 'Existing alternatives', 'The strategic importance', 'The initial solution and value hypothesis'], 'A clearly framed opportunity and initial route-to-value hypothesis'),
     ('Assess the evidence', 'Review', ['Existing technical results', 'User and customer evidence', 'Prior art and competing solutions', 'Intellectual-property position', 'Team capability', 'Market and adoption assumptions', 'Regulatory and operational barriers'], 'A clear picture of what is known, unknown and assumed'),
     ('Prioritize the critical uncertainty', 'Identify the assumption most likely to determine whether the opportunity should progress, for example', ['Technical performance', 'User need', 'Customer willingness to pay', 'Unit economics', 'Operational adoption', 'Manufacturability', 'Regulatory feasibility', 'IP freedom to operate'], 'A prioritized validation question and decision gate'),
     ('Design the experiment', 'The smallest credible experiment capable of resolving the priority uncertainty. This may involve', ['Laboratory analysis', 'Prototype iteration', 'Greenhouse or field testing', 'User interviews', 'Workflow testing', 'Market testing', 'Cost modelling', 'Prior-art or IP assessment'], 'An agreed experiment, evidence plan and success criteria'),
     ('Run the validation cycle', 'Implement the experiment with access to the required expertise, facilities, users, data and operating environments.', [], 'Technical, user, operational or commercial evidence'),
     ('Review and decide', 'Assess the results against predefined criteria. Every cycle concludes with one of three decisions.', [], 'An evidence-based decision and next-step recommendation')]
nodes = ''.join(f'<g class="rv_node" data-i="{i}"><circle cx="{160 + 118 * __import__("math").cos(__import__("math").radians(-90 + i * 60)):.1f}" cy="{160 + 118 * __import__("math").sin(__import__("math").radians(-90 + i * 60)):.1f}" r="20"/><text x="{160 + 118 * __import__("math").cos(__import__("math").radians(-90 + i * 60)):.1f}" y="{164 + 118 * __import__("math").sin(__import__("math").radians(-90 + i * 60)):.1f}" text-anchor="middle">{i + 1:02d}</text></g>' for i in range(6))
jsteps = ''.join(f'<li class="rv_js" data-i="{i}"><span class="rv_jsN">{i + 1:02d}</span><h3>{t}</h3><p>{lead}{":" if xs else ""}</p>{"<ul>" + li(xs) + "</ul>" if xs else ""}<p class="rv_out"><b>Output</b>{o}</p></li>' for i, (t, lead, xs, o) in enumerate(J))
journey = f'''  <section class="x_sec rv_journey" id="inc-journey"><div class="s_wrap">
    {two('The incubation journey', 'Evidence first. Investment follows.', '<p class="x_body" data-reveal>Each incubation project follows a tailored sequence of learning cycles. The scope, timeline and support model depend on the opportunity, the evidence already available and the most consequential uncertainties.</p>')}
    <div class="rv_jGrid">
      <div class="rv_cycle"><div class="rv_cycleStick"><svg viewBox="0 0 320 320" aria-hidden="true"><circle class="rv_ring" cx="160" cy="160" r="118"/><circle class="rv_ringOn" id="cycArc" cx="160" cy="160" r="118" pathLength="1" transform="rotate(-90 160 160)"/>{nodes}<text class="rv_cycT" x="160" y="152" text-anchor="middle">Learning</text><text class="rv_cycT" x="160" y="174" text-anchor="middle">cycle</text></svg>
        <p id="cycLbl" class="rv_cycLbl">01 · Frame the opportunity</p></div></div>
      <ol class="rv_jList">{jsteps}</ol>
    </div>
    <ul class="rv_dec"><li class="d1"><b>Continue</b><p>The evidence supports another focused validation cycle.</p></li><li class="d2"><b>Pivot</b><p>The evidence suggests that the use case, customer, product design, technical approach or value pathway should change.</p></li><li class="d3"><b>Stop</b><p>The evidence no longer justifies further investment, while useful data, know-how or intellectual property are documented and preserved.</p></li></ul>
  </div></section>
'''
# ---------- 6 support ----------
SUP = [('Opportunity and product development', ['Problem and use-case definition', 'Product and value-proposition development', 'Customer discovery', 'Commercial pathway assessment', 'Business-case development']),
       ('Scientific and technical validation', ['Experimental design', 'Trial protocols', 'Laboratory support', 'Greenhouse, nethouse and field access', 'Technical and agronomic expertise', 'Data review and interpretation']),
       ('Real-world access', ['Farm and operational environments', 'Relevant users and customers', 'Crop and production data', 'Supply-chain workflows', 'Industry and ecosystem stakeholders']),
       ('Commercial and strategic support', ['Market and competitive assessment', 'Partnership development', 'Internal sponsor engagement', 'Licensing and co-development pathways', 'Investor or customer introductions where appropriate']),
       ('Intellectual property and evidence', ['Prior-art assessment', 'IP-position review', 'Data and evidence planning', 'Identification of potentially protectable know-how', 'Documentation of results and learnings'])]
SIMG = [I + 'inc_people.webp', I + 'inc_chamber.webp', I + 'fif_greenh.webp', I + 'chal_jury.webp', I + 'inc_lab.webp']
RES = ['In-kind IO contributions', 'Access to facilities and expertise', 'Partner contributions', 'Milestone-based project funding', 'Specialist services', 'Further funding recommendations']
stabs = ''.join(f'<button type="button" class="rv_stab" data-s="{i}" aria-pressed="{"true" if i == 0 else "false"}"><span>{i + 1:02d}</span>{t}</button>' for i, (t, _) in enumerate(SUP))
spans = ''.join(f'<div class="rv_span" data-s="{i}"{"" if i == 0 else " hidden"}><div class="x_img"><img src="{SIMG[i]}" alt="" loading="lazy"></div><div><h3>{t}</h3><ul>{"".join(f"<li>{CHK}<span>{x}</span></li>" for x in xs)}</ul></div></div>' for i, (t, xs) in enumerate(SUP))
COMMIT = ['Assign a capable and accountable project lead', 'Commit the required scientific and technical contributors', 'Participate in customer and user discovery', 'Share relevant data, research and project information',
          'Respond to evidence, including changing the proposed approach', 'Work against defined decision gates and deadlines', 'Clarify ownership, background IP and new IP', 'Support project reporting and governance',
          'Engage with relevant users, partners or sponsors', 'Accept that incubation may recommend a pivot or stop decision']
support = f'''  <section class="x_sec x_grey"><div class="s_wrap">
    {two('Incubation support', 'IO acts as a co-developer, not only a funder', '<p class="x_body" data-reveal>Selected projects receive a support package tailored to the opportunity and validation cycle.</p>')}
    <div class="rv_sup"><div class="rv_stabs" role="group" aria-label="Support areas">{stabs}</div><div class="rv_spans">{spans}</div></div>
    <div class="rv_res"><span class="x_label">Potential project resources</span><p>Depending on the opportunity, support may include</p><ul>{li(RES)}</ul></div>
  </div></section>
  <section class="x_sec"><div class="s_wrap rv_commitGrid">
    <div><span class="c_eyebrow" data-reveal>Accountable ownership</span><h2 class="x_h2" data-reveal>Strong projects need capable, committed teams</h2><p class="x_body">Incubation is a collaborative development process. Project teams remain accountable for the technical work, project delivery and quality of evidence.</p>
    <blockquote class="rv_callout">Incubation is not designed to protect the original idea. It is designed to find the strongest evidence-supported pathway to value.</blockquote></div>
    <div><span class="x_label">Teams should be prepared to</span><ol class="rv_commit">{''.join(f'<li><span>{i + 1:02d}</span>{x}</li>' for i, x in enumerate(COMMIT))}</ol></div>
  </div></section>
'''
# ---------- 8 selection ----------
SEL = [('Problem relevance', 'Is the project addressing an evidenced and strategically important agrifood challenge?'), ('Clear user or customer', 'Is there an identified problem owner, user, customer or operational sponsor?'),
       ('Strength of early evidence', 'Is there sufficient technical or user evidence to justify further validation?'), ('IO’s right to contribute', 'Can IO provide important access to farms, facilities, data, expertise, customers, regulators or operating environments?'),
       ('Team capability', 'Is the required scientific, technical, product and commercial capability available and accountable?'), ('Potential value', 'Could the opportunity create meaningful operational, commercial, strategic or intellectual-property value, more than will be invested to make it successful?'),
       ('Evidence gap', 'Can a focused experiment resolve a defined uncertainty or unlock a specific next step?'), ('Route beyond incubation', 'Is there an initial hypothesis for deployment, licensing, partnership, investment or another value pathway?')]
select = f'''  <section class="x_sec x_ink"><div class="s_wrap">
    {two('Selection principles', 'Where IO can make a meaningful difference', '<p class="x_body" data-reveal>Projects are not selected only because the technology is interesting. IO prioritizes opportunities where the problem matters, the potential value is credible and IO can provide a differentiated advantage.</p>', True)}
    <ol class="rv_sel8">{''.join(f'<li><span>{i + 1:02d}</span><h3>{t}</h3><p>{q}</p></li>' for i, (t, q) in enumerate(SEL))}</ol>
  </div></section>
'''
# ---------- 9 portfolio (KU, presented as an example) ----------
portfolio = f'''  <section class="x_sec rv_port"><div class="s_wrap">
    {two('Incubation in action', 'Khalifa University Research Translation Portfolio', '<p class="x_lead" data-reveal>The first incubation portfolio, developed with Khalifa University, is testing how emerging agricultural technologies can progress from university research toward practical, operational and commercial application.</p><p class="x_body" data-reveal>The portfolio currently includes technologies related to pollination, post-harvest quality, crop monitoring and plant health. It is one example of IO’s incubation model, not the whole platform.</p>')}
    {techs}
  </div></section>
'''
# ---------- 11 success ----------
SUC = [('Learning', ['Critical assumptions tested', 'Validation cycles completed', 'Technical and commercial uncertainties resolved', 'Evidence-based pivots made', 'Resources redirected away from weak pathways']),
       ('Validation', ['Performance demonstrated against a relevant baseline', 'User or customer need confirmed', 'Operational conditions understood', 'Unit economics or value case strengthened', 'Adoption barriers identified and addressed']),
       ('Assets created', ['Locally relevant data', 'Validated protocols', 'Prototype improvements', 'Defensible know-how', 'Intellectual-property opportunities', 'Reusable technical or market insight']),
       ('Pathways unlocked', ['Internal deployment', 'Licensing', 'Co-development', 'Procurement', 'Strategic partnership', 'Follow-on investment', 'Venture creation', 'Progression to later-stage validation'])]
success = f'''  <section class="x_sec x_grey"><div class="s_wrap">
    {two('Incubation outcomes', 'Better evidence. Better decisions. Stronger pathways.', '<p class="x_body" data-reveal>Success is not defined only by advancing a technology-readiness level or completing a planned list of deliverables. IO measures incubation through the quality and speed of learning and the extent to which evidence unlocks a credible next step.</p>')}
    <ol class="rv_suc">{''.join(f'<li><span>{i + 1:02d}</span><h3>{t}</h3><ul>{li(xs)}</ul></li>' for i, (t, xs) in enumerate(SUC))}</ol>
    <p class="rv_statement">Incubation succeeds when a project generates enough evidence to support a confident decision and a credible pathway forward, <span>including when that decision is to pivot or stop.</span></p>
    <p class="rv_note">Portfolio ambition: at least one project becomes jointly-owned IP, a commercial or scaled deployment, or attracts further investment.</p>
  </div></section>
'''
# ---------- 12 partner model ----------
PM = [('Research partners contribute', ['Scientific expertise', 'Research teams', 'Background intellectual property', 'Laboratory and engineering capabilities', 'Technical development']),
      ('IO contributes', ['Problem and use-case definition', 'Agrifood and arid-environment expertise', 'Farm, greenhouse and operational access', 'Data and user insight', 'Experimental and pilot design', 'Product and commercialization support', 'Industry and ecosystem relationships']),
      ('Operating and commercial partners contribute', ['Customer and user requirements', 'Operational environments', 'Adoption and implementation insight', 'Market access', 'Potential deployment, licensing or investment pathways'])]
partner = f'''  <section class="x_sec"><div class="s_wrap">
    {two('Research and industry partnerships', 'Combining research excellence with real-world access', '<p class="x_body" data-reveal>IO works with research institutions, operating partners and technical specialists to translate emerging technologies into practical opportunities.</p>')}
    <ol class="rv_pm">{''.join(f'<li class="{"io" if i == 1 else ""}"><h3>{t}</h3><ul>{li(xs)}</ul></li>' for i, (t, xs) in enumerate(PM))}</ol>
    <div class="rv_ku"><div class="i_partner"><img src="innovation-venture-platforms/brand/silal.png" alt="Silal"><span aria-hidden="true">×</span><img src="innovation-venture-platforms/brand/khalifa-university.png" alt="Khalifa University"></div><p><b>Khalifa University example.</b> Khalifa University is the primary research partner for the current agricultural-technology portfolio, with project teams spanning robotics, artificial intelligence, sensing and engineering.</p></div>
  </div></section>
'''
# ---------- 13 expression of interest ----------
READY = ['The problem', 'Intended user or customer', 'Current solution or research', 'Evidence generated to date', 'Technology and commercial readiness', 'Team and intellectual-property ownership', 'Critical uncertainties', 'Support required', 'Initial route-to-value hypothesis']
F = [('eoiName', 'Applicant name', 'text'), ('eoiOrg', 'Organization', 'text'), ('eoiEmail', 'Email', 'email'), ('eoiProj', 'Project or technology name', 'text'), ('eoiProb', 'Problem addressed', 'area'), ('eoiUser', 'Intended user or customer', 'text'),
     ('eoiEv', 'Current evidence', 'area'), ('eoiTrl', 'Current TRL and CRL, if known', 'text'), ('eoiIp', 'Intellectual-property status', 'text'), ('eoiTeam', 'Team members and capabilities', 'area'), ('eoiSup', 'Required IO support', 'area')]
fields = ''.join(f'<label class="rv_f{" rv_fw" if t == "area" else ""}" for="{i}"><span>{l}</span>' + (f'<textarea id="{i}" rows="3"></textarea>' if t == 'area' else f'<input id="{i}" type="{t}">') + '</label>' for i, l, t in F)
eoi = f'''  <section class="x_sec x_grey" id="inc-eoi"><div class="s_wrap rv_eoi">
    <div class="rv_eoiSide"><span class="c_eyebrow" data-reveal>Work with IO</span><h2 class="x_h2" data-reveal>Is your research ready for translation?</h2><p class="x_body">IO is interested in opportunities that address an evidenced agrifood need and can benefit materially from our technical, operational, validation and commercial capabilities.</p>
      <span class="x_label">Before contacting IO, be ready to describe</span><ol>{''.join(f'<li><span>{i + 1:02d}</span>{x}</li>' for i, x in enumerate(READY))}</ol>
      <a class="s_textLink" href="ivp-enquire.html?platform=inc">Speak to the incubation team {A}</a></div>
    <form class="rv_form" id="eoiForm"><h3>Submit an expression of interest</h3><div class="rv_fGrid">{fields}<label class="rv_f rv_fw rv_file" for="eoiFile"><span>Supporting document</span><input id="eoiFile" type="file"></label></div>
      <button class="s_btn s_btnPrimary" type="submit">Submit an expression of interest {A}</button><p class="rv_formNote" id="eoiNote">Layout preview: the live form will connect to the incubation team’s intake.</p></form>
  </div></section>
'''
body = model + who + ready + journey + support + select + portfolio + success + partner + eoi
h = h.replace(old, body)
# ---------- 14 related pathway ----------
h = rep(h, '<span class="x_label">Next platform · For Series A+</span><strong>Accelerator</strong><p>Unbreakable Harvest. Stop pitching, start piloting.</p><span class="s_btn s_btnPrimary s_btnSm">Go to Accelerator',
        '<span class="x_label">Ready for operational validation?</span><strong>Unbreakable Harvest</strong><p>If your technology has already been proven in a relevant operating environment and is ready for UAE validation, customer engagement and market entry, Unbreakable Harvest may be the better place to start.</p><span class="s_btn s_btnPrimary s_btnSm">Explore Unbreakable Harvest')

# ---------- script ----------
init_old = between(h, 'INIT.incubation = function (view) {', '\n  };\n')
h = rep(h, init_old, '''INIT.incubation = function (view) {
    var steps = $$('.i_step', view), stairs = $('#stairs'), marker = $('#trlMarker i');
    if (G && stairs) {
      gsap.from(steps, { scaleY: 0, duration: 1.4, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: stairs, start: 'top 80%', once: true } });
      ScrollTrigger.create({ trigger: stairs, start: 'top 70%', end: 'bottom 40%', scrub: true, onUpdate: function (s) {
        var w = stairs.clientWidth, col = w / 9, from = col * 2 + col / 2, to = col * 5 + col / 2; marker.parentElement.style.setProperty('--m', 0);
        gsap.set(marker, { x: from + (to - from) * s.progress - 6 });
      } });
    }
    if (G && !mobile() && $('#techs')) gsap.fromTo($('#techs [data-lag]', view), { y: 80 }, { y: -80, ease: 'none', scrollTrigger: { trigger: '#techs', start: 'top bottom', end: 'bottom top', scrub: true } });
  };''')

CSS = (S / 'scripts' / 'inc.css').read_text()
h = h.replace('</body>', CSS + '</body>')
save('ivp-incubation.html', global_patch(h))
