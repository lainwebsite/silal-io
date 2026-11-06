"""Farm Innovation Fund (rev 6 Nov 27-32 + "00_FIF Page Overview" doc). Projects, not pilots."""
import re
from common import *

h = load('ivp-farm-innovation-fund.html')
A = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
I = 'innovation-venture-platforms/img/'
R = 'rev/img/'
li = lambda xs: ''.join(f'<li>{x}</li>' for x in xs)

# ---------------- 1 hero ----------------
hero = f'''<section class="f_hero x_onPhoto rv_fHero" data-overlay-hero>
    <div class="x_img" data-hero><img src="{R}fif_hero.jpg" alt="Farm Innovation Fund participants in the Innovation Oasis atrium"></div>
    <div class="s_wrap f_heroIn">
      <div class="f_heroTop"><nav class="x_crumb" aria-label="Breadcrumb"><a href="ivp-hub.html">Innovation &amp; Venture Platforms</a><i></i><span>Farm Innovation Fund</span></nav></div>
      <div class="f_heroMain">
        <span class="x_pill">Cohort 1 · Applications closed</span>
        <h1 data-reveal>Farm Innovation Fund</h1>
        <p class="x_lead" data-reveal>A practical pathway from farm needs to tested solutions.</p>
        <p class="rv_heroNext">Next cycle anticipated: <b>April 2027</b></p>
        <div class="x_row"><a href="ivp-enquire.html?platform=fif" class="s_btn s_btnPrimary s_btnSm" data-platform="fif">Register interest {A}</a><a href="#fif-process" class="s_textLink rv_jump">See the process {A}</a></div>
      </div>
      <dl class="f_heroFacts">
        <div><dt>Potential project funding</dt><dd><strong>AED 200,000</strong>up to, per project</dd></div>
        <div><dt>Ideas supported</dt><dd><strong>5</strong>per year</dd></div>
      </dl>
    </div>
    <span class="rv_phNote">Placeholder photo · launch image with H.E. the Minister to follow</span>
  </section>'''

intro = '''<section class="x_sec rv_fIntro"><div class="s_wrap rv_split">
    <span class="c_eyebrow" data-reveal>Innovation &amp; Venture Platforms · Farm Innovation Fund</span>
    <p class="x_statement" data-reveal>Launched in January 2026 in the presence of H.E. Dr. Amna Al Dahak, Minister of Climate Change and Environment, and members of the Board of Directors of the National Agriculture Center, the Farm Innovation Fund was established to help UAE farmers develop, test and scale practical solutions that improve farm performance, profitability and resilience.</p>
    <p class="x_body" data-reveal>Selected projects receive structured support to move from a clearly defined farm challenge to a measurable on-farm experiment or validation project.</p>
  </div></section>'''

# ---------------- 2 why ----------------
why = f'''<section class="x_sec x_grey rv_why"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Why the fund</span><h2 class="x_h2" data-reveal>Supporting local farmers to innovate, grow and build resilience</h2></div>
    <div><p class="x_lead" data-reveal>Farmers understand their operational challenges better than anyone. They often also have practical ideas for improving how farms use water, manage crops, reduce costs, increase yields or adapt to changing conditions.</p>
    <p class="x_body" data-reveal>However, turning an idea into a credible project can require funding, specialist expertise and a structured way to test whether the solution works. The Farm Innovation Fund helps bridge that gap.</p></div></div>
    <ul class="rv_pillars">
      <li><span>01</span><b>Productivity</b><h3>Improve productivity</h3><p>Support solutions that improve yields, quality, efficiency and day-to-day farm performance.</p></li>
      <li><span>02</span><b>Profitability</b><h3>Strengthen profitability</h3><p>Help farms reduce costs, improve returns and identify new sources of value.</p></li>
      <li><span>03</span><b>Resilience</b><h3>Build resilience</h3><p>Enable farms to adapt to resource constraints, environmental pressures and changing production needs.</p></li>
    </ul>
  </div></section>'''

# ---------------- 3 capability ----------------
CAP = [('Define', 'Define the problem', 'Understand the underlying issue, who it affects and its impact on farm performance.'),
       ('Explore', 'Explore potential solutions', 'Consider different technologies, practices and partners rather than starting with a predetermined answer.'),
       ('Test', 'Design the test', 'Establish the baseline, project approach, success measures, budget and implementation requirements.'),
       ('Learn', 'Learn from evidence', 'Assess what worked, what did not and whether the solution should be adopted, adapted, expanded or stopped.')]
cap = f'''<section class="x_sec rv_cap"><div class="s_wrap">
    <div class="rv_capGrid">
      <div class="rv_capText"><span class="c_eyebrow" data-reveal>Building innovation capability</span><h2 class="x_h2" data-reveal>Helping farmers move from problem to solution</h2>
      <p class="x_lead" data-reveal>Participants do not need to arrive with a fully developed solution or technical proposal.</p>
      <p class="x_body" data-reveal>Through workshops, mentoring and expert support, the Fund helps participants strengthen the skills required to turn a farm need into a well-designed innovation project. Funding is only one part of the offer.</p></div>
      <div class="x_img rv_capImg"><img src="{R}fif_mentor.jpg" alt="Farmers in a mentoring session" loading="lazy"></div>
    </div>
    <ol class="rv_journey4">{''.join(f'<li><span class="rv_jk">{k}</span><h3>{t}</h3><p>{d}</p></li>' for k, t, d in CAP)}</ol>
    <p class="rv_note">This learning begins during the application process and continues through proposal development, selection and project delivery.</p>
  </div></section>'''

# ---------------- 4 who ----------------
who = f'''<section class="x_sec x_grey"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Who can participate</span><h2 class="x_h2" data-reveal>Supporting local ideas for better farming</h2></div>
    <div><p class="x_lead" data-reveal>The Farm Innovation Fund is designed for UAE National farmers, farm owners and idea sponsors who want to address a practical challenge or opportunity in agriculture.</p>
    <p class="x_body" data-reveal>Applicants may bring forward a challenge experienced on their own farm or sponsor an idea with potential value for UAE agriculture. They can also involve farm managers, entrepreneurs, researchers, technology providers and technical specialists to help develop and deliver the project.</p></div></div>
    <ol class="f_who">
      <li><div class="x_img" data-img><img src="{I}fif_farmers.webp" alt="Two farmers at an Innovation Day session" loading="lazy"></div><h3>Farmers and farm owners</h3><p>Identify and test practical ideas that could improve farm productivity, reduce costs, increase profitability, use resources more efficiently or strengthen resilience.</p></li>
      <li><div class="x_img" data-img><img src="{I}fif_idea.webp" alt="Farmers reviewing a written proposal" loading="lazy"></div><h3>Idea sponsors</h3><p>Bring forward or sponsor an idea that responds to a relevant agricultural need, while operational or technical partners support its development and delivery.</p></li>
      <li><div class="x_img" data-img><img src="{I}fif_table.webp" alt="A team working on a proposal" loading="lazy"></div><h3>Collaborative teams</h3><p>Work with farm managers, entrepreneurs, researchers, technology providers or other specialists to develop and test the solution.</p></li>
    </ol>
    <div class="rv_elig"><span class="x_label">Eligibility</span><p><b>Each application must be led or sponsored by a UAE National</b> and address a clearly defined on-farm or agricultural challenge relevant to the UAE.</p><p>Applicants do not need to have every technical capability in place before applying. The Fund can help bring together the expertise, facilities and partners required to develop and test a promising idea.</p></div>
  </div></section>'''

# ---------------- 5 focus areas ----------------
AREAS = [
    ('Water and Irrigation Management', 'Use water more intelligently and efficiently', I + 'area_water.webp',
     'Ideas that help farms optimize water use, improve irrigation performance, manage water quality or strengthen resilience to water scarcity and salinity.',
     ['Precision irrigation and automated scheduling', 'Soil-moisture and crop-water monitoring', 'Irrigation-system optimization', 'Leak detection and reduction of water losses', 'Water treatment, recycling and reuse', 'Salinity monitoring and management', 'Alternative water sources', 'Data-led irrigation decisions'],
     'How might a farm reduce water consumption without compromising crop yield or quality?'),
    ('Protected Agriculture', 'Improve growing conditions, efficiency and crop performance', I + 'area_protected.webp',
     'Ideas that strengthen production within greenhouses, nethouses and other protected growing environments, particularly under challenging climatic conditions.',
     ['Greenhouse cooling and climate control', 'Energy-efficient growing systems', 'Environmental monitoring and automation', 'Ventilation, humidity and airflow management', 'Improved greenhouse or nethouse designs', 'Hydroponic and soilless production systems', 'Lighting and shading solutions', 'Improved crop management within protected environments'],
     'How might a farm extend its seasonal production window without negatively impacting profitability through the cost of production?'),
    ('Sustainable and Organic Practices', 'Strengthen soil, crop and resource health', I + 'area_organic.webp',
     'Ideas that improve the long-term sustainability of farm operations while supporting crop health, input efficiency and responsible resource use.',
     ['Soil-health improvement', 'Compost and organic soil amendments', 'Biological crop inputs', 'Integrated pest and disease management', 'Reduction of chemical inputs', 'Nutrient-use efficiency', 'Agricultural-waste reuse', 'Circular farming practices', 'Climate-resilient crops or production methods'],
     'How might a farm improve soil quality and crop health while reducing dependency on conventional inputs?'),
    ('Smart Farming and Digital Technology', 'Make farm operations more precise, connected and efficient', I + 'area_smart.webp',
     'Ideas that use data, sensing, automation or digital technologies to improve decisions, reduce labour requirements and strengthen operational control.',
     ['Sensors and remote monitoring', 'Farm-management platforms', 'Artificial intelligence and predictive analytics', 'Robotics and automation', 'Drones and imaging technologies', 'Early detection of crop stress, pests or disease', 'Digital traceability and record management', 'Yield forecasting', 'Equipment and resource monitoring'],
     'How might a farm use real-time data to identify problems earlier and make better operational decisions?'),
]
atabs = ''.join(f'<button type="button" class="rv_atab" data-a="{i}" aria-pressed="{"true" if i == 0 else "false"}"><span>{i + 1:02d}</span>{t}</button>' for i, (t, *_) in enumerate(AREAS))
apanels = ''.join(f'''<div class="rv_apanel" data-a="{i}"{"" if i == 0 else " hidden"}><div class="x_img rv_aImg"><img src="{im}" alt="" loading="lazy"></div><div class="rv_aBody"><span class="x_label">{i + 1:02d} · {t}</span><h3>{sub}</h3><p>{d}</p><span class="rv_stepL">Examples may include</span><ul class="rv_chips2">{li(ex)}</ul><blockquote><span>Example farmer challenge</span>{q}</blockquote></div></div>''' for i, (t, sub, im, d, ex, q) in enumerate(AREAS))
areas = f'''<section class="x_sec"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Key focus areas</span><h2 class="x_h2" data-reveal>Practical innovation for better farm performance</h2></div><div><p class="x_body" data-reveal>The following are common thematic areas we see addressing local farming challenges.</p></div></div>
    <div class="rv_areas"><div class="rv_atabs" role="group" aria-label="Focus areas">{atabs}</div><div class="rv_apanels">{apanels}</div></div>
  </div></section>'''

# ---------------- 6 how the fund works: two journeys ----------------
J1 = [
    ('01', 'Submit an initial application', 'Tell us about the challenge and your idea', ['The agricultural or on-farm challenge', 'Why the challenge matters', 'The proposed idea or potential solution', 'The expected benefit', 'The applicant or idea sponsor'], 'Applications are reviewed for completeness and eligibility. Eligible applicants progress to the proposal-development stage.'),
    ('02', 'Develop the idea', 'Strengthen the problem, solution and project approach', ['Innovation workshops', 'Visits to IO’s facilities', 'Problem-definition exercises', 'Solution exploration', 'Technical and expert mentoring', 'Project-design guidance', 'Budget development', 'Success-measure definition', 'Pitch preparation'], 'By the end of this stage applicants have a defined challenge, an appropriate solution, a realistic testing approach, an indicative scope and budget, defined outcomes and an initial delivery team.'),
    ('03', 'Submit the detailed proposal', 'Translate the idea into a credible project', ['The challenge and current baseline', 'The proposed solution and intended users', 'Testing approach and environment', 'Required expertise and delivery partners', 'Activities, timeline and budget', 'Key risks and dependencies', 'Measures of success', 'Potential value beyond the initial project'], 'Where a testing location has not yet been confirmed, applicants describe the environment required. Suitable projects may be matched with IO facilities, a participating farm or another relevant testing environment.'),
    ('04', 'Expert evaluation', 'Assess the project’s value and feasibility', ['Importance and clarity of the challenge', 'Relevance of the proposed solution', 'Potential to improve productivity, profitability or resilience at scale', 'Technical and operational feasibility', 'Quality of the testing approach', 'Reasonableness of the budget', 'Applicant and delivery-team capability', 'Potential for adoption, replication, knowledge or commercialization'], 'Applicants may receive questions or requests for clarification during this stage.'),
    ('05', 'Finalist pitch and selection', 'Present the complete project proposal', ['Shortlisted applicants present to a panel', 'The panel recommends projects for funding and implementation', 'Applicants are notified of the outcome'], 'Selection is competitive. Progression to the finalist stage does not guarantee funding.'),
]
J2 = [
    ('06', 'Project readiness and mobilization', 'Turn into a delivery-ready scope of work', ['Final project scope and testing environment', 'Technical approach', 'Baseline and key performance indicators', 'Delivery activities and timeline', 'Approved budget', 'Procurement and supplier requirements', 'Roles and responsibilities', 'Data collection and reporting', 'Project risks and controls'], 'Before testing begins, the team mobilizes the agreed resources and confirms that the delivery environment is ready.'),
    ('07', 'Project delivery and measurement', 'Test the solution in relevant conditions', ['Crop yield and quality', 'Water and energy consumption', 'Input use and labour requirements', 'Operating costs', 'Waste reduction and resource recovery', 'Production reliability', 'Farm profitability', 'User or operator feedback'], 'IO may support delivery with project-management oversight, scientific and technical expertise, laboratory analysis, facilities, site visits and milestone assessments. The objective is credible evidence, not simply a completed project.'),
    ('08', 'Project review and close-out', 'Understand what worked and what should happen next', ['Final technical and financial reporting', 'Performance-data analysis', 'Farmer and user feedback', 'Assessment of the business or adoption case', 'Intellectual-property review', 'Final presentation and demonstration'], 'Outcome: a clear, evidence-based recommendation to adopt, refine, replicate, progress toward commercialization, or conclude without further investment.'),
    ('09', 'Post-project scaling', 'Use the evidence to identify the next opportunity', ['Replication', 'Further development', 'Local knowledge and intellectual property', 'Commercial partnership', 'New business opportunity', 'Follow-on funding'], 'Progression beyond the funded project is not automatic. It depends on the evidence generated, demand, ownership arrangements, team capability and resources.'),
]
def jsteps(J, first_open):
    return ''.join(f'''<li class="rv_js"><details{" open" if first_open and k == 0 else ""}><summary><span class="rv_jsN">{n}</span><span class="rv_jsT"><b>{t}</b><em>{s}</em></span><span class="rv_plus" aria-hidden="true"></span></summary><div class="rv_jsBody"><ul>{li(xs)}</ul><p>{note}</p></div></details></li>''' for k, (n, t, s, xs, note) in enumerate(J))
process = f'''<section class="x_sec rv_proc" id="fif-process"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>The participant journey</span><h2 class="x_h2" data-reveal>From initial idea to a funded project</h2></div>
    <div><p class="x_body" data-reveal>The Farm Innovation Fund supports participants through two connected journeys. First, applicants develop and present a strong project proposal through workshops, mentoring and expert evaluation. Selected projects then move through detailed scoping, contracting, funded implementation and results review.</p></div></div>
    <div class="rv_jour rv_jour1"><div class="rv_jourHead"><span class="x_label">Journey 1</span><h3>Your route to selection</h3><ol class="rv_flow"><li>Apply</li><li>Develop</li><li>Submit</li><li>Evaluate</li><li>Pitch and select</li></ol></div><ol class="rv_jsList">{jsteps(J1, True)}</ol></div>
    <div class="rv_jour rv_jour2"><div class="rv_jourHead"><span class="x_label">Journey 2</span><h3>If your project is selected</h3><ol class="rv_flow"><li>Scope and mobilize</li><li>Deliver</li><li>Review</li><li>Progress</li></ol></div><ol class="rv_jsList">{jsteps(J2, False)}</ol></div>
  </div></section>'''

# ---------------- 7 cohort 1: a clear funnel instead of the dot field ----------------
FUN = [(1000, '1,000+', 'Farmers reached', 'Targeted outreach introduced the Fund to local farmers and agricultural networks across the UAE.'),
       (130, '130', 'Applications submitted', 'Applicants brought forward a diverse range of ideas addressing practical agricultural challenges and opportunities.'),
       (68, '68', 'Applicants progressed', 'Eligible participants advanced to the proposal-development phase and were invited to strengthen their initial ideas.'),
       (8, '8', 'Shortlisted for the final pitch', 'Eight finalists presented their ideas for funding and implementation support.')]
import math
fun = ''.join(f'<li style="--w:{max(8, round(100 * math.log10(v) / math.log10(1000)))}%"><div class="rv_fBar"><b>{n}</b></div><div class="rv_fTxt"><h3>{t}</h3><p>{d}</p></div></li>' for v, n, t, d in FUN)
cohort = f'''<section class="x_sec rv_cohort"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Cohort 1 at a glance · 2026</span><h2 class="x_h2" data-reveal>Farmer-led ideas from across the UAE</h2></div><div><p class="x_body" data-reveal>The first cycle in figures, from outreach to the final pitch. Funded projects and projects in progress will be added as they are confirmed.</p></div></div>
    <div class="rv_cohGrid"><ol class="rv_funnel">{fun}</ol>
    <ul class="rv_side"><li><b>7</b><span>Emirates represented</span><p>Applications came from all seven Emirates, giving the first cycle nationwide representation.</p></li><li><b>17</b><span>Expert reviewers engaged</span><p>Agricultural, scientific, technical, operational and commercial specialists contributed to proposal evaluation.</p></li></ul></div>
    <div class="rv_impact"><div><span class="x_label">Impact · end of Cycle 1</span><p>Outcome metrics are added here as projects report verified results.</p></div><ul><li><b>—</b><span>Water saved</span></li><li><b>—</b><span>Yield increase</span></li><li><b>—</b><span>Input and cost savings</span></li><li><b>—</b><span>Solutions adopted</span></li></ul></div>
    <p class="rv_note">Cohort 1, 2026. Funnel bars use a log scale so every stage stays readable.</p>
  </div></section>'''

# ---------------- 8 innovation day (kept) ----------------
day = between(h, '<section class="x_grey"><div class="f_dayPin" id="dayPin">', '</div></div></section>')
day = day.replace('Stronger pilot proposals, built in a day.', 'Stronger project proposals, built in a day.')
day = day.replace('<span class="c_eyebrow" data-reveal>Innovation Day · 26 July 2026</span>', '<span class="c_eyebrow" data-reveal>Innovation Day spotlight · 26 July 2026</span>')

# ---------------- 9 partners ----------------
PG = [('National and sector alignment', [
          ('Ministry of Climate Change and Environment', 'Connecting farm innovation with national agricultural priorities', 'The Ministry plays an important role in the UAE’s agriculture and environmental landscape, including the advancement of sustainable and climate-smart agriculture, agricultural research and innovative production approaches.'),
          ('National Agriculture Centre', 'Supporting agricultural development and farmer engagement', 'The Centre provides an important connection to the wider UAE agricultural ecosystem and to the farmers, production priorities and support structures that the Fund is intended to serve.'),
          ('Abu Dhabi Agriculture and Food Safety Authority', 'Bringing regulatory, agricultural and food-system expertise', 'Responsible for agriculture, food safety, food security and biosecurity in the Emirate of Abu Dhabi, including agricultural programs, farm oversight, licensing and the sustainable development of the sector.')]),
      ('Strategic issue expertise', [
          ('Mohamed bin Zayed Water Initiative', 'Advancing solutions to water scarcity', 'The Initiative works to accelerate the development, testing and deployment of technologies addressing water scarcity, using UAE infrastructure and expertise to support promising solutions with potential for wider deployment.')]),
      ('Research and technical expertise', [
          ('United Arab Emirates University', 'Providing agricultural research and scientific expertise', 'The College of Agriculture and Veterinary Medicine is a significant national resource for agricultural education and research, with experimental stations, a food pilot plant and laboratories.'),
          ('Khalifa University', 'Connecting projects to advanced science and engineering', 'Khalifa University contributes advanced research and engineering capabilities relevant to agricultural innovation, water, energy and sustainable systems.')])]
pgroups = ''.join(f'<div class="rv_pg"><span class="x_label">{g}</span>' + ''.join(
    f'<details class="rv_pcard"><summary><span class="rv_pMark">{"".join(w[0] for w in n.split() if w[0].isupper())[:5]}</span><span><b>{n}</b><em>{one}</em></span><span class="rv_plus" aria-hidden="true"></span></summary><p>{d}</p></details>'
    for n, one, d in L) + '</div>' for g, L in PG)
partners = f'''<section class="x_sec x_grey rv_partners"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Our partner network</span><h2 class="x_h2" data-reveal>National expertise supporting ideas from evaluation to scale</h2></div>
    <div><p class="x_lead" data-reveal>The Farm Innovation Fund brings together leading government, research and innovation organizations from across the UAE.</p><p class="x_body" data-reveal>Partners contribute complementary expertise to help assess ideas, strengthen project design, support implementation and identify pathways for successful solutions to be adopted, replicated or developed further.</p></div></div>
    <div class="rv_pGrid2">
      <div class="rv_eco" aria-hidden="true"><div class="rv_ecoC">Farm Innovation Fund</div><span class="rv_r1">Farmer and sector engagement</span><span class="rv_r2">Expert evaluation</span><span class="rv_r3">Technical and project support</span><span class="rv_r4">Adoption and progression</span></div>
      <div class="rv_pgs">{pgroups}<p class="rv_note">Partner participation and responsibilities may vary by project, cycle stage and area of expertise.</p></div>
    </div>
  </div></section>'''

# ---------------- 10 evaluation ----------------
CRIT = [('A real and important farm challenge', 'The proposal addresses a clearly defined need with a meaningful impact on farm operations.'),
        ('A relevant solution', 'The proposed approach is connected to the problem and provides a clear improvement over current practice.'),
        ('Practical feasibility', 'The solution can reasonably be implemented and tested within the available farm environment, budget and timeline.'),
        ('Measurable value', 'The project has defined outcomes related to productivity, profitability, quality, resource use or resilience.'),
        ('Delivery readiness', 'The required site, team, technical partners, approvals and operational resources can be mobilized.'),
        ('Potential beyond the project', 'The project could generate useful knowledge, farm adoption, wider replication or a commercial opportunity.')]
evalu = f'''<section class="x_sec"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Selection</span><h2 class="x_h2" data-reveal>What makes a strong proposal?</h2></div>
    <div><p class="x_body" data-reveal>Projects are assessed by experts with relevant agricultural, scientific, technical, operational and commercial experience. The evaluation considers both the proposed solution and the applicant’s readiness to deliver a structured on-farm project.</p></div></div>
    <ol class="rv_crit">{''.join(f'<li><span>{i + 1:02d}</span><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(CRIT))}</ol>
    <p class="rv_critNote"><b>Selection is competitive.</b> Meeting the eligibility criteria does not guarantee funding. <a href="#fif-faq" class="rv_jump">Applicant guidance and FAQs {A}</a></p>
  </div></section>'''

# ---------------- 11 receive + commit (replaces "A funded, measured on-farm pilot") ----------------
REC = [('Funding', 'Potential project funding', 'Selected projects may receive funding of up to AED 200,000, subject to the approved scope, budget, milestones and Fund terms. Funds are used for eligible project costs and released according to agreed delivery and evidence requirements.', [], I + 'area_water.webp'),
       ('Design', 'Project design', 'IO works with each selected team to define the project before anything starts.', ['Operational baseline', 'Project scope', 'Technical approach', 'Work plan', 'Budget', 'Success measures', 'Data requirements', 'Risk controls'], I + 'fif_table.webp'),
       ('Expertise', 'Expert and technical support', 'Depending on the project, support may include access to specialists and facilities.', ['Agronomists', 'Scientists', 'Irrigation specialists', 'Greenhouse and CEA specialists', 'Laboratories', 'Technology providers', 'Commercial advisers', 'Project-management specialists'], R + 'fif_lab.jpg'),
       ('Delivery', 'Delivery and measurement', 'Projects are managed through a clear rhythm, start to finish.', ['Mobilization', 'Milestone reviews', 'Site visits', 'Risk and issue management', 'Budget control', 'Evidence submission', 'Final evaluation'], I + 'fif_soil.webp'),
       ('Visibility', 'Visibility and next opportunities', 'Where appropriate and agreed, projects may gain visibility and connections.', ['Demonstration events', 'Farmer-engagement activities', 'Case studies', 'Industry introductions', 'Technology-provider partnerships', 'Commercial and investment discussions'], I + 'fif_audience.webp')]
rec = ''.join(f'<li class="rv_rec"><div class="x_img"><img src="{im}" alt="" loading="lazy"></div><div class="rv_recBody"><span class="x_label">{k}</span><h3>{t}</h3><p>{d}</p>{"<ul class=\"rv_chips2\">" + li(xs) + "</ul>" if xs else "<p class=\"rv_big\">AED 200,000 <small>up to, per project</small></p>"}</div></li>' for k, t, d, xs, im in REC)
COM = [('A suitable project environment', 'Provide the agreed farm site, operational access and relevant farm resources.'),
       ('A named project lead', 'Nominate a person responsible for coordinating delivery, information and decision-making.'),
       ('Time and participation', 'Attend project meetings, workshops, reviews and agreed delivery activities.'),
       ('Data and evidence', 'Support baseline collection, monitoring and the timely sharing of agreed project data.'),
       ('Safe and compliant delivery', 'Meet relevant farm, environmental, regulatory, procurement and health and safety requirements.'),
       ('Knowledge sharing', 'Where agreed, contribute to demonstrations or case studies so that learning can benefit the wider farming community.')]
CHECK = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
receive = f'''<section class="x_sec rv_recv"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Selected project support</span><h2 class="x_h2" data-reveal>More than funding</h2></div><div><p class="x_body" data-reveal>Selected projects receive a support package tailored to the approved project scope. This may combine funding, technical guidance, project-management support, specialist expertise and access to relevant facilities or partners.</p></div></div>
    <div class="rv_give"><div class="rv_giveHead"><span>What IO provides</span><span>What participants contribute</span></div>
    <div class="rv_giveGrid"><ol class="rv_recList">{rec}</ol>
    <div class="rv_commit"><span class="c_eyebrow">A shared commitment</span><h3>Successful projects require active participation</h3><p>The Fund provides structured support, but successful delivery depends on active ownership from the applicant, participating farm and wider project team.</p><ul>{''.join(f'<li>{CHECK}<span><b>{t}</b>{d}</span></li>' for t, d in COM)}</ul></div></div></div>
  </div></section>'''

# ---------------- 12 from project to longer-term value: branching pathway ----------------
BR = [('Adopt', 'Farm adoption', 'The participating farm continues using the solution because it has demonstrated practical value.'),
      ('Replicate', 'Replication and scale', 'The solution is implemented on additional farms, crops, production systems or sites.'),
      ('Protect', 'Local knowledge and IP', 'Data, methods or a potentially protectable design or technical solution.'),
      ('Commercialize', 'New business opportunities', 'A new product, service, licensing model, farm-based business or commercial partnership.'),
      ('Develop further', 'Continued development', 'A larger project, follow-on funding, commercial validation or another IO platform.')]
branch = f'''<section class="x_sec x_ink rv_branch"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow c_eyebrowLight" data-reveal>What success can unlock</span><h2 class="x_h2" data-reveal>Turning farm learning into wider opportunity</h2></div><div><p class="x_body" data-reveal>A completed project is not the final objective. Successful projects should create evidence and knowledge that helps determine what should happen next. Not every project will follow the same route.</p></div></div>
    <div class="rv_tree">
      <div class="rv_trunk"><span>Funded project</span><i></i><span>Evidence generated</span></div>
      <svg class="rv_lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{''.join(f'<path d="M0 50 C 45 50, 55 {10 + i * 20}, 100 {10 + i * 20}" pathLength="1"/>' for i in range(5))}</svg>
      <ol class="rv_leaves">{''.join(f'<li><b>{k}</b><h3>{t}</h3><p>{d}</p></li>' for k, t, d in BR)}</ol>
    </div>
    <p class="rv_noteW">These are potential pathways rather than guaranteed outcomes. Progression depends on the project results, ownership arrangements, market demand and the capacity of the project team.</p>
  </div></section>'''

# ---------------- 13 how we measure success ----------------
MEAS = [('Capability building', ['Participants completing innovation workshops', 'Proposals strengthened through mentoring', 'Improved innovation-planning capability', 'Teams applying structured problem-definition and project-design methods']),
        ('Project delivery', ['Projects funded', 'Projects completed against agreed milestones', 'Projects achieving defined technical or operational criteria', 'Measurable productivity, profitability, resource-efficiency or resilience benefits']),
        ('Knowledge and IP', ['Local datasets and validated insights generated', 'New methods or operating protocols developed', 'Intellectual-property opportunities identified', 'Case studies and demonstrations completed']),
        ('Adoption and scale', ['Solutions adopted by participating farms', 'Solutions replicated on additional farms or sites', 'Follow-on projects or applications initiated']),
        ('Commercial', ['New products or services developed', 'Licensing or procurement agreements secured', 'New ventures established', 'Follow-on funding or investment obtained'])]
measure = f'''<section class="x_sec"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Program outcomes</span><h2 class="x_h2" data-reveal>How we measure success</h2></div><div><p class="x_body" data-reveal>Value is measured beyond the funded project. Outputs, such as workshops delivered, are reported separately from outcomes, such as solutions adopted or commercial agreements signed. Figures are published once verified and labelled by cycle.</p></div></div>
    <ol class="rv_meas">{''.join(f'<li><span>{i + 1:02d}</span><h3>{t}</h3><ul>{li(xs)}</ul></li>' for i, (t, xs) in enumerate(MEAS))}</ol>
    <dl class="rv_defs"><div><dt>Scaled solution</dt><dd>A solution that progresses beyond the original project and is adopted by at least one additional farm, operating site or paying customer.</dd></div><div><dt>Commercial outcome</dt><dd>A signed procurement agreement, paid deployment, licensing agreement, new venture, follow-on investment or another documented revenue-generating pathway.</dd></div></dl>
  </div></section>'''

# ---------------- 14 featured projects (structure ready, details on approval) ----------------
FP = [('Water and irrigation', 'Project selected'), ('Protected agriculture', 'Scoping underway'), ('Smart farming', 'Project selected')]
featured = f'''<section class="x_sec x_grey"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Farm innovation in action</span><h2 class="x_h2" data-reveal>Explore selected projects</h2></div><div><p class="x_body" data-reveal>See how participating farms are testing practical approaches to improve productivity, profitability, resource efficiency and resilience.</p></div></div>
    <ul class="rv_proj">{''.join(f'<li><div class="rv_projTop"><span class="rv_status">{s}</span><span class="x_label">{a}</span></div><h3>Cohort 1 project</h3><dl><div><dt>Farm challenge</dt><dd>Published with the farm’s approval</dd></div><div><dt>The test</dt><dd>Approach and duration</dd></div><div><dt>What is measured</dt><dd>Agreed success measures</dd></div><div><dt>Emirate</dt><dd>To be confirmed</dd></div></dl></li>' for a, s in FP)}</ul>
    <p class="rv_note">Project cards show the challenge, the test and the intended evidence until verified results are available.</p>
  </div></section>'''

# ---------------- 15 FAQ ----------------
FAQ = [('Who is eligible to apply?', 'Each application must be led or sponsored by a UAE National and address a clearly defined on-farm or agricultural challenge relevant to the UAE.'),
       ('Can farm managers, researchers or technology companies participate?', 'Yes, as project partners where the application has an eligible local applicant or sponsor and a participating UAE farm.'),
       ('Do I need a finished solution?', 'No. Applicants should have a clear farm challenge and an initial idea, but the Fund can help strengthen the proposed approach and testing plan.'),
       ('How much funding is available?', 'Selected projects may receive up to AED 200,000. Awards vary with the approved scope and budget, cover eligible costs and are released against agreed milestones and evidence.'),
       ('Can I apply for standard equipment?', 'Equipment may only be eligible where it forms part of a genuine innovation project and an approved testing plan.'),
       ('Who owns the intellectual property?', 'Farmers keep ownership of their ideas. A plain-language summary and the formal terms are published with the application documents.'),
       ('What project costs are eligible?', 'Representative examples and the main exclusions are set out in the eligible-cost guidance for each cycle.'),
       ('How long will a funded project last?', 'A typical range will be published with the next cycle.'),
       ('What reporting is required?', 'Projects report against agreed milestones, budget and data requirements, and close with a final evaluation.'),
       ('What happens after the project?', 'Depending on the evidence, a project may be adopted, refined, replicated or progressed toward commercialization. Progression is not automatic.'),
       ('Is support available in Arabic and English?', 'Innovation Day workshops were facilitated in Arabic. The delivery model for the next cycle will be confirmed before applications open.')]
DOCS = ['Applicant guide', 'Eligibility guidance', 'Evaluation criteria', 'Eligible-cost guidance', 'Terms and conditions']
faq = f'''<section class="x_sec" id="fif-faq"><div class="s_wrap rv_faqGrid">
    <div class="rv_faqSide"><span class="c_eyebrow" data-reveal>Frequently asked questions</span><h2 class="x_h2" data-reveal>Before you apply</h2>
    <ul class="rv_docs">{''.join(f'<li><a href="#" aria-disabled="true"><span>{d}</span><em>PDF · Arabic &amp; English · soon</em></a></li>' for d in DOCS)}</ul></div>
    <div class="rv_faq">{''.join(f'<details><summary>{q}<span class="rv_plus" aria-hidden="true"></span></summary><p>{a}</p></details>' for q, a in FAQ)}</div>
  </div></section>'''

# ---------------- 16 final CTA ----------------
final = f'''<section class="x_sec x_secTop0"><div class="s_wrap"><div class="x_cbox rv_final">
    <img class="x_cboxMark" src="innovation-venture-platforms/brand/io-mark.svg" alt="" aria-hidden="true">
    <div class="x_cboxMain"><span class="x_label">Next cycle · April 2027</span><h2 data-reveal>Have an idea that could improve a UAE farm?</h2><p data-reveal>Register to receive updates about the next Farm Innovation Fund cycle, applicant workshops and future opportunities.</p></div>
    <div class="rv_cboxBtns"><a href="ivp-enquire.html?platform=fif" class="s_btn rv_btnWhite" data-platform="fif">Register for the next cycle {A}</a><a href="#fif-faq" class="rv_textW rv_jump">Review the applicant guidance {A}</a></div>
  </div></div></section>'''

nxt = between(h, '<a class="x_next" href="ivp-incubation.html">', '</a>\n</div>')[:-len('\n</div>')]
nxt = nxt.replace('<span class="x_label">Next platform · For researchers</span>', '<span class="x_label">Next platform · For researchers and early-stage ventures</span>')
nxt = nxt.replace('<p>From lab research to market-ready, with Khalifa University.</p>', '<p>Translate promising research and early-stage technologies through focused validation.</p>')

body = '\n'.join([hero, intro, why, cap, who, areas, process, cohort, day, partners, evalu, receive, branch, measure, featured, faq, final, nxt])
old = between(h, '<div data-view="farm-innovation-fund">', '</a>\n</div>')
h = rep(h, old, '<div data-view="farm-innovation-fund">\n' + body + '\n</div>')

# the page script: only the Innovation Day gallery is left from the old set-up
init_old = between(h, "INIT['farm-innovation-fund'] = function (view) {", "    // innovation day: vertical scroll moves the gallery sideways; photos drift inside their frames\n")
h = rep(h, init_old, "INIT['farm-innovation-fund'] = function (view) {\n    // innovation day: vertical scroll moves the gallery sideways; photos drift inside their frames\n")

CSS = (S / 'scripts' / 'fif.css').read_text()
JS = '''<script id="rev6-fif-js">
(function () {
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  $$('.rv_jump').forEach(function (a) { a.addEventListener('click', function (e) { var t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); if (window.__lenis) window.__lenis.scrollTo(t, { offset: -90, duration: 1.4 }); else t.scrollIntoView({ behavior: 'smooth' }); }); });
  var tabs = $$('.rv_atab'), pans = $$('.rv_apanel');
  tabs.forEach(function (t) { t.addEventListener('click', function () { tabs.forEach(function (x) { x.setAttribute('aria-pressed', x === t); }); pans.forEach(function (p) { p.hidden = p.dataset.a !== t.dataset.a; }); if (window.ScrollTrigger) ScrollTrigger.refresh(); }); });
  $$('details').forEach(function (d) { d.addEventListener('toggle', function () { if (window.ScrollTrigger) ScrollTrigger.refresh(); }); });
  $$('.rv_docs a').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .25 });
    $$('.rv_funnel, .rv_tree, .rv_journey4').forEach(function (el) { io.observe(el); });
  } else $$('.rv_funnel, .rv_tree, .rv_journey4').forEach(function (el) { el.classList.add('in'); });
})();
</script>'''
h = h.replace('</body>', CSS + JS + '</body>')
h = global_patch(h)
assert 'pilot' not in re.sub(r'<script.*?</script>|<style.*?</style>', '', h[h.index('<main'):h.index('</main>')], flags=re.S).lower().replace('pilot plant', ''), 'pilot wording left'
save('ivp-farm-innovation-fund.html', h)
