#!/usr/bin/env python3
"""Developing Local Talent page for the review artifact (Innovation & Venture Platforms).

Usage:  python3 local_talent.py <bundle_dir>

<bundle_dir> is a local copy of the review artifact (the folder that holds index.html, ivp-*.html,
innovation-venture-platforms/img/ ...). The script is idempotent:

  1. builds ivp-local-talent.html from ivp-farm-innovation-fund.html (same shell, CSS, scripts, header,
     footer and dock; only <main> and the per-page script are replaced),
  2. writes the page images as innovation-venture-platforms/img/lt_*.webp (from public/photos/ in this repo),
  3. adds "Developing Local Talent" to the Innovation & Venture Platforms menu (desktop + mobile), the IVP dock
     and the link map on every page, and as a platform option in the enquiry form.

Copy: docs from the client brief "Local Talent Development" (Google Doc 1ANqXPJ9...), used verbatim; the page
is called "Developing Local Talent" at the owner's request. Editor notes [a]-[d] and the design guidance
are NOT shown on the page.
"""
import re, sys, os, glob, json

BUNDLE = os.path.abspath(sys.argv[1])
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
PHOTOS = os.path.join(REPO, 'public', 'photos')
IMG = os.path.join(BUNDLE, 'innovation-venture-platforms', 'img')
PAGE = 'ivp-local-talent.html'
NAME = 'Developing Local Talent'

# ----------------------------------------------------------------------------------------------------------------
# helpers
# ----------------------------------------------------------------------------------------------------------------
ARR = '<svg class="x_arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
CHK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
IO = '<span class="x_iO">iO</span>'
ENQ = 'ivp-enquire.html?platform=talent'


def T(s):
    """brand: IO is written iO (BRIEF standing rule)"""
    return re.sub(r'\bIO\b', IO, s)


def im(stem):
    return 'innovation-venture-platforms/img/' + stem + '.webp'


def btn(href, label, extra=''):
    return '<a href="%s" class="s_btn s_btnPrimary s_btnSm"%s>%s %s</a>' % (href, extra, label, ARR)


def tlink(href, label, extra=''):
    return '<a href="%s" class="s_textLink"%s>%s %s</a>' % (href, extra, label, ARR)


def enq(label):
    return btn(ENQ, label, ' data-platform="talent"')


def checks(items):
    return '<ul class="f_check lt_checks" data-stagger>' + ''.join('<li>%s<span>%s</span></li>' % (CHK, T(i)) for i in items) + '</ul>'


def dots(items):
    return '<ul class="f_measDots">' + ''.join('<li>%s</li>' % T(i) for i in items) + '</ul>'


# ----------------------------------------------------------------------------------------------------------------
# images: (name, source in public/photos, max width). Existing artifact images are reused where they fit.
# ----------------------------------------------------------------------------------------------------------------
MC = 'General MarCom Photos (1)/'
PF = 'Professional Facility Photos (1)/'
AR = 'Archive/'
IMAGES = [
    ('hero',    MC + 'PA__1490.jpg', 2000),
    ('why',     MC + 'PA_L0008-Edit (1).jpg', 1500),
    ('p_school', PF + 'PA__1065.jpg', 1400),
    ('p_youth', PF + 'PA__1211-Edit-Edit.jpg', 1400),
    ('p_uni',   PF + 'PA__1405.jpg', 1400),
    ('p_pro',   PF + 'PA__1464.jpg', 1400),
    ('p_phd',   PF + 'PA__1421.jpg', 1400),
    ('s_io',    MC + 'SAM_8874.jpg', 1600),
    ('s_farm',  MC + 'SMJ_2763.jpg', 1600),
    ('s_pack',  MC + 'Screenshot 2026-02-20 at 10.58.36 AM copy.jpg', 1600),
    ('i_soil',  MC + 'PA__1420.jpg', 1600),
    ('i_mol',   MC + 'PA__1413 (1).jpg', 1600),
    ('i_crop',  MC + 'PA__1576.jpg', 1600),
    ('i_trial', MC + 'SAM_9200.jpg', 1600),
    ('i_tech',  PF + 'PA__1483.jpg', 1600),
    ('i_data',  PF + 'PA__1424.jpg', 1600),
    ('l_water', PF + 'PA__1281.jpg', 1400),
    ('l_mol',   PF + 'PA__1410.jpg', 1400),
    ('l_post',  PF + 'PA__1285.jpg', 1400),
    ('l_chamber', MC + 'PA__1526.jpg', 1400),
    ('l_green', MC + 'DSC04723 (1).jpg', 1400),
    ('l_field', AR + 'Screenshot 2026-09-24 163545.jpg', 1400),
    ('l_farm',  AR + 'Screenshot 2026-09-24 164012.jpg', 1400),
]


def find_photo(src):
    """screenshot names carry a narrow no-break space before AM/PM: match on normalised whitespace"""
    p = os.path.join(PHOTOS, src)
    if os.path.exists(p):
        return p
    d, base = os.path.split(p)
    norm = lambda s: re.sub(r'\s', ' ', s)
    for f in os.listdir(d):
        if norm(f) == norm(base):
            return os.path.join(d, f)
    raise FileNotFoundError(p)


def build_images():
    from PIL import Image
    os.makedirs(IMG, exist_ok=True)
    for stem, src, w in IMAGES:
        out = os.path.join(IMG, 'lt_%s.webp' % stem)
        if os.path.exists(out):
            continue
        im_ = Image.open(find_photo(src)).convert('RGB')
        if im_.width > w:
            im_ = im_.resize((w, round(im_.height * w / im_.width)), Image.LANCZOS)
        im_.save(out, 'WEBP', quality=76, method=6)


# ----------------------------------------------------------------------------------------------------------------
# page body
# ----------------------------------------------------------------------------------------------------------------
def li_obj(n, word, text):
    return '<li><em>Objective %02d</em><strong>%s</strong><span>%s</span></li>' % (n, word, T(text))


STAGES = [
    ('School students', 'p_school', 'School',
     'Introduce agriculture, food production, sustainability and agritech through guided visits and practical activities.',
     'Relevant programs',
     [('School Discovery Programme', '#lt-school'), ('School visits', '#lt-school'),
      ('Introductory laboratory and farm demonstrations', None)]),
    ('Teenagers and youth participants', 'p_youth', 'Youth',
     'Build foundational skills through structured, hands-on programs focused on food, agriculture, science and environmental challenges.',
     'Relevant programs',
     [('MUSTADEEM', '#lt-mustadeem'), ('Youth workshops', None)]),
    ('University students and recent graduates', 'p_uni', 'University',
     'Apply academic knowledge through internships, laboratory placements, field research and project-based work.',
     'Relevant programs',
     [('Future Innovators', '#lt-cohort'), ('Practical placements', '#lt-interns'), ('Graduation projects', None),
      ('University research collaboration', '#lt-partners')]),
    ('Emerging professionals and technical talent', 'p_pro', 'Professional',
     'Develop skills in modern agricultural technologies, laboratory methods, research operations and technical delivery.',
     'Relevant programs',
     [('Specialist training', 'io-academy.html')]),
    ('Doctoral and postdoctoral researchers', 'p_phd', 'Research',
     'Contribute to long-term scientific programs addressing strategic UAE agrifood priorities.',
     'Potential pathways',
     [('Joint doctoral research', '#lt-research'), ('Postdoctoral research', '#lt-research'),
      ('University and IO co-supervision', None), ('Applied research fellowships', None)]),
]


def gate(i, s):
    title, img, short, text, plabel, progs = s
    chips = ''.join(('<li><a href="%s">%s</a></li>' % (h, T(p))) if h else '<li>%s</li>' % T(p) for p, h in progs)
    return ('<li class="f_gate"><span class="f_gateN" aria-hidden="true"></span><div><span class="x_label">%02d · %s</span>'
            '<h3>%s</h3><p>%s</p><div class="lt_progs"><span class="x_label">%s</span><ul>%s</ul></div></div></li>'
            % (i + 1, short, title, T(text), plabel, chips))


EXPERIENCE = [
    ('Innovation Oasis', 's_io', 'Explore how science and agritech are used to improve crops, manage resources and test agricultural solutions.'),
    ('Al Foah Farm', 's_farm', 'Experience sustainable farming in a real operating environment and understand how crops are grown under UAE conditions.'),
    ('Packhouse', 's_pack', 'See how fresh produce is received, sorted, handled and packaged using modern technology.'),
]
OUTCOMES = ['How food is produced and prepared for market', 'Why agriculture matters to the UAE',
            'How technology supports modern farming', 'The importance of water and resource efficiency',
            'Potential careers in science, agriculture and sustainability']

SKILLS = [
    ('Research', 'Ask clear questions, gather evidence and document findings.'),
    ('Problem-Solving', 'Break complex food and environmental challenges into manageable problems.'),
    ('Teamwork', 'Work with peers and specialists to complete practical activities.'),
    ('Critical Thinking', 'Compare evidence, evaluate possible solutions and explain conclusions.'),
]

# placement areas: name, image, note (only Soil and Water has one in the brief), bullets
AREAS = [
    ('Soil and Water Science', 'i_soil',
     'The Soil and Water Laboratory is operated with the involvement of UAE National talent and interns from leading universities, supporting hands-on training in soil science, water management and agricultural sustainability.',
     ['Sample preparation', 'Laboratory testing', 'Soil-health research', 'Irrigation-water assessment', 'Data recording and quality controls']),
    ('Molecular Biology', 'i_mol', '',
     ['Molecular laboratory methods', 'PCR and diagnostic workflows', 'Plant genetics', 'Pathogen detection', 'Research documentation']),
    ('Crop and Plant Health', 'i_crop', '',
     ['Plant-disease assessment', 'Crop-health monitoring', 'Seed-health testing', 'Diagnostic sampling', 'Trial observation']),
    ('Crop Trials and Field Research', 'i_trial', '',
     ['Crop measurements', 'Variety assessment', 'Treatment comparisons', 'Data collection', 'Greenhouse, nethouse and field activities']),
    ('Agricultural Technology', 'i_tech', '',
     ['Sensors and monitoring', 'Robotics and automation', 'Technology trials', 'Data analysis', 'Pilot support']),
    ('Research Data and Reporting', 'i_data', '',
     ['Data entry and quality checks', 'Literature review', 'Results consolidation', 'Technical reporting', 'Research presentations']),
]
GAIN = ['Practical experience in real research environments', 'Exposure to laboratory, greenhouse and field methods',
        'Structured supervision and mentorship from relevant specialists', 'Experience working within scientific procedures',
        'Understanding of research quality, safety and documentation', 'Stronger awareness of agrifood career pathways',
        'A defined project, presentation or learning output where appropriate']

COHORT = [
    ('The Cohort', 'Include verified information on:',
     ['Number of interns', 'Universities represented', 'Academic disciplines', 'Placement duration', 'IO departments or research areas']),
    ('The Experience', 'Practical activities such as:',
     ['Laboratory analysis', 'Soil and water testing', 'Crop-health assessment', 'Field or greenhouse trials', 'Molecular work',
      'Data collection', 'Research presentations']),
    ('The Outputs', 'Potential outputs could include:',
     ['Technical presentations', 'Research summaries', 'Laboratory or field datasets', 'Project reports', 'Learning portfolios',
      'Recommendations for future work']),
    ('Recognition', 'Approved photographs from:',
     ['Graduation or completion ceremony', 'Certificate presentation', 'Intern project presentations', 'Laboratory or field activity']),
    ('Participant Perspectives', 'Short approved quotes answering:',
     ['What did the participant work on?', 'What new capability did the participant develop?',
      'How did the placement influence future study or career plans?']),
]

LEARN_AREAS = ['Modern production systems', 'Precision agriculture', 'Sensors and agricultural data', 'Robotics and automation',
               'Soil and water management', 'Controlled-environment agriculture', 'Crop health',
               'Laboratory and analytical methods', 'Research and experimentation', 'Technology testing and validation']
AUDIENCES = ['Students', 'Graduates', 'Farmers and farm teams', 'Laboratory and technical staff', 'Early-career researchers',
             'Technology and operations professionals']

DOC = ('Doctoral Research',
       'A three- to four-year inter-institutional program could enable doctoral candidates to work under joint supervision from a participating university and IO, with part of the research conducted using IO facilities and operating environments.',
       'Initial topic areas', ['Soil-quality improvement', 'Gene-edited crops for UAE conditions', 'Robotics for UAE agriculture'],
       ['An applied research question connected to UAE needs', 'Access to laboratories and agricultural environments',
        'Academic and industry-linked supervision', 'Opportunities to generate publications, data and intellectual property',
        'Stronger pathways between universities and agrifood industry'])
POST = ('Postdoctoral Research',
        'Two- to three-year postdoctoral opportunities could bring specialist expertise and international research networks into priority IO programs.',
        'Potential research areas', ['Agronomy', 'Precision breeding', 'Soil health', 'Crop diversification'],
        ['Leadership of defined research work packages', 'Access to field and laboratory infrastructure',
         'Participation in multidisciplinary programs', 'Collaboration with academic and industry partners',
         'Translation of research toward practical or commercial outcomes'])

# Learning environments: caption, image. Packhouse and robotics reuse photos already in the artifact.
ENVS = [
    ('Soil and water laboratory', 'lt_l_water'), ('Molecular laboratories', 'lt_l_mol'), ('Crop-health laboratory', 'lt_p_phd'),
    ('Post-harvest laboratory', 'lt_l_post'), ('Growth chambers', 'lt_l_chamber'), ('Greenhouses and nethouses', 'lt_l_green'),
    ('Open-field trials', 'lt_l_field'), ('Agri-robotics and AI facilities', 'inc_robot'),
    ('Packhouse and supply-chain environments', 'cs_post'), ('Operating farms', 'lt_l_farm'),
]

PARTNERS = [
    ('Schools', ['Guided educational visits', 'Sustainability activities', 'Agritech demonstrations', 'Career-awareness sessions']),
    ('Universities', ['Internships and placements', 'Graduation projects', 'Joint supervision', 'Research collaboration',
                      'Doctoral and postdoctoral pathways', 'Laboratory and field exposure']),
    ('Government and Youth Organizations', ['National talent initiatives', 'Youth sustainability programs',
                                            'Emerging-skills programs', 'Food-security and environmental education']),
    ('Industry Partners', ['Guest specialists', 'Technology demonstrations', 'Project sponsorship', 'Practical training',
                           'Career exposure', 'Research and challenge projects']),
]

STORIES = [
    ('news-school-programme-on-site.html', 'photos/Professional%20Facility%20Photos%20(1)/PA__1405.jpg',
     'A researcher working in a laboratory', 'Training · 20 May 2026',
     'Students spend a week in the labs and greenhouses',
     'The school programme brings the next generation into real research, side-by-side with the team.'),
    ('news-advanced-agritech-academy-first-cohort.html', 'photos/Archive/Screenshot%202026-09-24%20164221.jpg',
     'A trainee at the Advanced Agritech Academy', 'Training · 14 Sep 2025',
     'Advanced Agritech Academy welcomes its first cohort',
     'A new generation of agri-food talent begins hands-on training in laboratories, greenhouses and the field.'),
]
STORY_TYPES = ['Intern profiles', 'Cohort graduations', 'Student project highlights', 'MUSTADEEM activities', 'School visits',
               'Training milestones', 'Researcher profiles', 'University partnerships', 'New course or placement announcements']


def main_html():
    h = []
    a = h.append
    a('<main><div class="c_page">\n<!-- ===== DEVELOPING LOCAL TALENT · sub page · same layout as Farm Innovation Fund · copy: client brief "Local Talent Development" ===== -->\n<div data-view="local-talent">')

    # 1 hero
    a('''  <section class="f_hero x_onPhoto lt_hero" data-overlay-hero>
    <div class="x_img" data-hero><img src="%(hero)s" alt="An iO scientist guiding a visitor through a growth chamber"></div>
    <div class="s_wrap f_heroIn">
      <div class="f_heroTop"><nav class="x_crumb" aria-label="Breadcrumb"><a href="ivp-hub.html">Innovation &amp; Venture Platforms</a><i></i><span>%(name)s</span></nav></div>
      <div class="f_heroMain">
        <span class="c_eyebrow f_heroEy" data-reveal>Innovation &amp; Venture Platforms – %(name)s</span>
        <h1 data-reveal>%(name)s</h1>
        <p class="x_lead" data-reveal>Building the next generation of agrifood talent.</p>
        <div class="x_row">%(btn)s<a href="#lt-pathway" class="s_textLink">See the Pathway %(arr)s</a></div>
      </div>
      <div class="f_heroSide">
        <div class="f_heroIntro"><p>%(p1)s</p><p>%(p2)s</p></div>
        <dl class="f_heroFacts">
          <div><dt>School visits</dt><dd><strong>Ages 11+</strong>School Discovery Programme</dd></div>
          <div><dt>Youth programme</dt><dd><strong>Ages 13–16</strong>MUSTADEEM</dd></div>
        </dl>
      </div>
    </div>
  </section>
''' % dict(hero=im('lt_hero'), name=NAME, btn=enq('Enquire'), arr=ARR,
           p1=T('IO creates practical learning and research opportunities that help young people develop the knowledge, skills and experience needed to contribute to the UAE’s future food system.'),
           p2=T('From school discovery visits and youth programs to internships, professional training and advanced research pathways, participants learn in an environment where science, technology and agriculture come together.')))

    # 2 purpose
    a('''  <section class="x_sec" id="lt-why"><div class="s_wrap f_why">
    <div class="f_whyHead"><span class="c_eyebrow">Our purpose</span><p class="x_statement" data-scrub>Developing the people behind <b>resilient food systems</b>.</p></div>
    <div class="x_img x_corners f_whyImg" data-img><img src="%s" alt="An iO scientist preparing a laboratory sample" loading="lazy"></div>
    <div class="f_whyBody">
      <p class="x_body" data-reveal>The future of agriculture requires more than new technologies and facilities. It requires people who can understand complex food, resource and environmental challenges and turn scientific knowledge into practical solutions.</p>
      <p class="x_body f_bridge" data-reveal>%s</p>
    </div>
    <ul class="f_tenets f_pillars">%s</ul>
  </div></section>
''' % (im('lt_why'),
       T('IO helps strengthen local capability by connecting education with real agricultural environments, applied research and emerging technologies.'),
       ''.join([
           li_obj(1, 'Inspire', 'Introduce young people to the importance of agriculture, food security and environmental sustainability.'),
           li_obj(2, 'Equip', 'Build practical scientific, technical and problem-solving skills through hands-on learning.'),
           li_obj(3, 'Connect', 'Bring students and early-career talent into contact with scientists, agricultural specialists, technology teams and industry partners.'),
           li_obj(4, 'Progress', 'Create clearer pathways from education and training into research, technical and agrifood careers.')])))

    # 3 pathway (gates)
    a('''  <section class="x_sec" id="lt-pathway"><div class="s_wrap f_gates">
    <div class="f_gatesSide">
      <span class="c_eyebrow" data-reveal>From discovery to expertise</span>
      <h2 class="x_h2" data-reveal>A pathway for every stage of learning.</h2>
      <div class="x_img x_corners f_gateImgs" id="gateImgs" data-img>%s</div>
      <p class="x_cap f_gateJ" id="gateJ"><b id="gateJb">Stage 1</b><span id="gateJs">School students</span></p>
    </div>
    <ol class="f_gatesList" id="gates">
      <i class="f_gatesRail" aria-hidden="true"></i><i class="f_gatesFill" aria-hidden="true"></i>
      %s
    </ol>
  </div></section>
''' % (''.join('<img src="%s" alt="%s"%s>' % (im('lt_' + s[1]), s[0], ' class="on"' if k == 0 else ' loading="lazy"') for k, s in enumerate(STAGES)),
       '\n      '.join(gate(k, s) for k, s in enumerate(STAGES))))

    # 4 school discovery
    exp_imgs = ''.join('<img src="%s" alt="%s"%s>' % (im('lt_' + e[1]), e[0], ' loading="lazy" class="on"' if k == 0 else ' loading="lazy"') for k, e in enumerate(EXPERIENCE))
    exp_rows = ''.join(
        '<li%s tabindex="0"><span class="f_whoNum">%02d</span><div class="f_whoTxt"><h3>%s</h3><p>%s</p></div><div class="x_img f_whoThumb"><img src="%s" alt="" loading="lazy"></div></li>'
        % (' data-on' if k == 0 else '', k + 1, e[0], T(e[2]), im('lt_' + e[1])) for k, e in enumerate(EXPERIENCE))
    a('''  <section class="x_sec x_grey" id="lt-school"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Discover agriculture</span><h2 class="x_h2" data-reveal>See how food moves from farm to market.</h2></div><div class="x_stack"><p class="x_body" data-reveal>The School Discovery Programme is a guided educational experience for students, generally aged 11 and above, introducing farming, food, technology and sustainability through visits to Silal facilities in Al Ain.</p></div></div>
    <div class="f_whoGrid">
      <div class="x_img x_corners f_whoStage" id="whoStage">%s</div>
      <div class="f_whoSide"><span class="x_label">The Experience</span><ol class="f_whoList" id="whoList">%s</ol></div>
    </div>
    <div class="lt_split"><div><span class="x_label">Learning Outcomes</span><p class="x_body" data-reveal>Students can develop a clearer understanding of:</p></div>%s</div>
    <div class="x_row lt_cta">%s</div>
  </div></section>
''' % (exp_imgs, exp_rows, checks(OUTCOMES), enq('Enquire about a school visit')))

    # 5 MUSTADEEM
    a('''  <section class="x_sec" id="lt-mustadeem"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Hands-on youth learning</span><h2 class="x_h2" data-reveal>Developing skills for environmental and food challenges.</h2></div><div class="x_stack"><p class="x_body" data-reveal>MUSTADEEM is a UAE youth-training program focused on sustainability, agriculture and environmental science. It gives teenagers aged 13 to 16 practical experience in addressing environmental and food-system challenges through science and technology.</p><p class="x_body" data-reveal>The program was launched by the Ministry of Climate Change and Environment with participating partners including Silal in 2025.</p></div></div>
    <ol class="c_principles f_capSteps">%s</ol>
    <p class="f_callout"><b>Program Purpose</b><span>MUSTADEEM aims to prepare young people for future opportunities in sustainability and agriculture while building awareness of the scientific and technical work behind food security.</span></p>
    <div class="x_row lt_cta">%s</div>
  </div></section>
''' % (''.join('<li><span>Skill %02d</span><h3 data-reveal>%s</h3><p data-reveal>%s</p></li>' % (k + 1, s[0], s[1]) for k, s in enumerate(SKILLS)),
       btn(ENQ, 'Explore youth programs', ' data-platform="talent"')))

    # 6 internships (tabs + stage)
    tabs = ''.join(
        '<button class="f_areaTab" role="tab" id="fa-%d" aria-controls="faStage" aria-selected="%s" tabindex="%d"><strong>%s</strong>%s</button>'
        % (k, 'true' if k == 0 else 'false', 0 if k == 0 else -1, ar[0], ARR) for k, ar in enumerate(AREAS))
    stage = ''.join('<img src="%s" alt="%s"%s>' % (im(ar[1] if ar[1].startswith('lt_') else 'lt_' + ar[1]), ar[0], ' loading="lazy" class="on"' if k == 0 else ' loading="lazy"') for k, ar in enumerate(AREAS))
    a('''  <section class="x_sec x_grey" id="lt-interns"><div class="s_wrap">
    <div class="f_areas">
      <div class="f_areaSide"><div class="f_areaHead"><span class="c_eyebrow" data-reveal>Learn by doing</span><h2 class="x_h2" data-reveal>Turn academic learning into practical experience.</h2><p class="x_body" data-reveal>Internships give university students and recent graduates direct exposure to agricultural science, laboratory operations, field research and innovation projects.</p><p class="x_body" data-reveal>Participants can work alongside %s specialists and contribute to real activities rather than observing from a distance.</p></div>
      <div class="f_areaTabs" role="tablist" aria-label="Potential placement areas" id="areaTabs">%s</div></div>
      <div class="x_img f_areaStage" id="faStage" role="tabpanel" aria-labelledby="fa-0" data-img>%s<div class="f_areaCap"><span>Potential placement area</span><p id="faText">%s</p><p class="f_areaDesc" id="faDesc">%s</p><div class="f_areaChips" id="faChips"></div></div></div>
    </div>
    <div class="lt_split lt_gain"><div><span class="x_label">What Participants Gain</span></div>%s</div>
  </div></section>
''' % (IO, tabs, stage, AREAS[0][0], AREAS[0][2], checks(GAIN)))

    # 7 first intern cohort
    cards = ''
    for k, (title, intro, items) in enumerate(COHORT):
        cards += '<li><span class="x_label">%02d</span><h3>%s</h3><p>%s</p>%s</li>' % (k + 1, title, intro, dots(items))
    a('''  <section class="x_sec" id="lt-cohort"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Our future innovators</span><h2 class="x_h2" data-reveal>First intern cohort.</h2></div><div class="x_stack"><p class="x_body" data-reveal>The first intern cohort is the leading proof point for %s’s internship model.</p></div></div>
    <ol class="lt_story">%s</ol>
    <p class="f_callout"><b>Status</b><span>Cohort figures, photographs and participant quotes are added here once they have been verified and approved.</span></p>
  </div></section>
''' % (IO, cards))

    # 8 training
    a('''  <section class="x_sec x_grey" id="lt-training"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Technical and professional development</span><h2 class="x_h2" data-reveal>Skills for the future of agriculture.</h2></div><div class="x_stack"><p class="x_body" data-reveal>The %s Academy is intended to help people develop practical capabilities in modern agricultural technologies and production systems.</p><p class="x_body" data-reveal>The Academy was launched in 2025 as part of the UAE’s wider food-security and sustainability ambitions and focuses on developing Emirati talent for emerging agricultural careers.</p></div></div>
    <div class="f_share">
      <div class="f_shareIO"><span class="x_label">Potential Learning Areas</span><ol class="f_shareList">%s</ol></div>
      <div class="f_shareYou"><span class="x_label">Target Audiences</span><p class="x_body lt_note">Subject to the approved operating model.</p>%s</div>
    </div>
    <div class="x_row lt_cta">%s</div>
  </div></section>
''' % (IO, ''.join('<li><b>%02d</b>%s</li>' % (k + 1, x) for k, x in enumerate(LEARN_AREAS)), checks(AUDIENCES),
       btn('io-academy.html', 'Explore Trainings')))

    # 9 doctoral / postdoctoral
    def col(c):
        title, model, tl, topics, ben = c
        return ('<article class="lt_col"><h3>%s</h3><div><span class="x_label">Proposed model</span><p class="x_body">%s</p></div>'
                '<div><span class="x_label">%s</span>%s</div><div><span class="x_label">Potential Benefits</span>%s</div></article>'
                % (title, T(model), tl, checks(topics), checks(ben)))
    a('''  <section class="x_sec" id="lt-research"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Advanced research pathways</span><h2 class="x_h2" data-reveal>Developing specialist scientific capability.</h2></div><div class="x_stack"><p class="x_body" data-reveal>%s</p></div></div>
    <div class="lt_pair">%s%s</div>
    <p class="f_callout"><b>Future pathway</b><span>Doctoral and postdoctoral programs are being developed with prospective academic and research partners. Opportunities will be published once funding, supervision and program terms are confirmed.</span></p>
    <div class="x_row lt_cta">%s</div>
  </div></section>
''' % (T('IO’s science strategy proposes longer-term pathways for doctoral and postdoctoral researchers to contribute to applied research addressing UAE agricultural priorities.'),
       col(DOC), col(POST), btn(ENQ, 'Register interest in research opportunities', ' data-platform="talent"')))

    # 10 learning at IO (pinned horizontal gallery)
    figs = ''.join('<figure><div class="x_img x_corners"><img src="%s" alt="%s" loading="lazy"></div><figcaption class="x_cap">%s</figcaption></figure>'
                   % (im(i), c, c) for c, i in ENVS)
    a('''  <section class="x_grey" id="lt-learning"><div class="f_dayPin" id="dayPin"><div class="f_dayStick">
    <div class="s_wrap f_dayHead">
      <div><span class="c_eyebrow" data-reveal>A living learning environment</span><h2 class="x_h2" data-reveal>Education connected to real agricultural work.</h2><p class="x_body" data-reveal>%s</p></div>
    </div>
    <div class="f_track" id="dayTrack">%s</div>
  </div></div></section>
''' % (T('IO’s value as a learning environment comes from the combination of scientific facilities, agricultural systems, technical specialists and active programs.'), figs))

    # 11 partnerships
    groups = ''.join('<div class="f_pGroup"><div class="f_pGroupHead"><span class="x_label">%02d</span><h3>%s</h3></div>%s</div>'
                     % (k + 1, t, dots(items)) for k, (t, items) in enumerate(PARTNERS))
    a('''  <section class="x_sec" id="lt-partners"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Developing talent together</span><h2 class="x_h2" data-reveal>Stronger pathways between education and industry.</h2></div><div class="x_stack"><p class="x_body" data-reveal>%s</p></div></div>
    <div class="f_pGrid lt_pGrid">%s</div>
    <div class="x_row lt_cta">%s</div>
  </div></section>
''' % (T('IO can work with schools, universities, government organizations and industry partners to develop relevant learning and research opportunities.'),
       groups, enq('Develop a learning program with IO'.replace('IO', 'iO'))))

    # 12 stories
    cards = ''.join(
        '<a class="lt_card" href="%s"><div class="x_img x_corners lt_cardImg"><img src="%s" alt="%s" loading="lazy"></div><div class="lt_cardTxt"><span class="x_label">%s</span><h3>%s</h3><p>%s</p><span class="s_textLink">Read the story %s</span></div></a>'
        % (u, i, al, lab, t, p, ARR) for u, i, al, lab, t, p in STORIES)
    a('''  <section class="x_sec x_grey" id="lt-stories"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Talent in action</span><h2 class="x_h2" data-reveal>Learning, research and achievement at iO.</h2></div></div>
    <div class="lt_news">%s</div>
    <div class="lt_types"><span class="x_label">Stories we share</span><ul>%s</ul></div>
    <div class="x_row lt_cta">%s</div>
  </div></section>
''' % (cards, ''.join('<li>%s</li>' % s for s in STORY_TYPES), tlink('news.html', 'All news and stories')))

    # 13 final CTA (same band as the other IVP pages, incl. the helix hook)
    a('''  <section class="x_sec i_successSec f_reg" id="lt-register"><img class="i_successMark" src="innovation-venture-platforms/brand/io-mark.svg" alt="" aria-hidden="true"><div class="i_successGl" id="succHelix" hidden aria-hidden="true"></div><div class="s_wrap f_regGrid">
    <div class="f_regMain">
      <span class="f_regStatus"><span>Build the future with iO</span></span>
      <p class="x_statement" id="ctaTitle" data-scrub data-from="rgba(255,255,255,.4)">Start a learning journey <b>in agrifood.</b></p>
      <p id="ctaBody">%s</p>
      <div class="x_row f_regBtns" id="succBtn">%s<a href="io-academy.html" class="s_textLink" id="ctaSecondary"><span>Explore trainings</span> %s</a></div>
    </div>
    <div class="x_img x_corners f_regImg"><img src="%s" alt="Participants at an iO workshop" loading="lazy"></div>
  </div></section>
''' % (T('Whether you are a student exploring agriculture, a graduate looking for practical experience, a researcher developing specialist expertise or an institution seeking an industry-connected program, IO can help identify the right opportunity.'),
       btn(ENQ, '<span>Enquire</span>', ' id="ctaPrimary" data-platform="talent"'), ARR, im('fif_workshop')))

    # next
    a('''  <a class="x_next" href="ivp-hub.html"><div class="s_wrap x_nextIn"><div class="x_img x_nextPh"><img src="innovation-venture-platforms/img/hero_fif.webp" alt="" loading="lazy"></div><div class="x_nextText"><span class="x_label">Back to all platforms</span><strong>Innovation &amp; Venture Platforms</strong><p>Fund a farmer’s idea, incubate a lab prototype, accelerate a proven technology, or prove it in an open challenge.</p><span class="s_btn s_btnPrimary s_btnSm">Back to the overview %s</span></div></div></a>
</div>

</div></main>''' % ARR)
    return '\n'.join(h)


# ----------------------------------------------------------------------------------------------------------------
# extra CSS (the FIF CSS is reused as is; only what the new sections need)
# ----------------------------------------------------------------------------------------------------------------
def css_blocks(css):
    """split css into top-level blocks (rule or @media with its rules)"""
    out, depth, start = [], 0, 0
    for i, ch in enumerate(css):
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                out.append(css[start:i + 1]); start = i + 1
    return out


def clone_id_rules(css, mapping):
    """copy every rule that mentions one of the FIF section ids, for the new ids (keeps @media wrappers)"""
    res = []
    for blk in css_blocks(css):
        head = blk[:blk.find('{')].strip()
        if head.startswith('@media'):
            inner = blk[blk.find('{') + 1:blk.rfind('}')]
            keep = []
            for r in css_blocks(inner):
                if any(k in r for k in mapping):
                    for k, v in mapping.items():
                        r = r.replace(k, v)
                    keep.append(r)
            if keep:
                res.append(head + ' {' + ''.join(keep) + '}')
        elif any(k in blk for k in mapping) and not head.startswith('@'):
            for k, v in mapping.items():
                blk = blk.replace(k, v)
            res.append(blk)
    return '\n'.join(res)


EXTRA_CSS = '''
/* ===== Developing Local Talent: only what the new sections need on top of the Farm Innovation Fund layout ===== */
.lt_progs { margin-top: 18px; display: flex; flex-direction: column; gap: 10px; }
.lt_progs .x_label { color: var(--io-ink); }
.lt_progs ul { display: flex; flex-wrap: wrap; gap: 8px; }
.lt_progs li { font-size: var(--t-small); line-height: 1.3; padding: 7px 14px; border: 1px solid var(--line); border-radius: 999px; color: var(--charcoal); }
.lt_progs a { color: var(--io-ink); transition: color .3s var(--slow); }
.lt_progs li:has(a) { border-color: var(--io); }
.lt_progs li:has(a):hover { background: var(--io); border-color: var(--io); }
.lt_progs li:has(a):hover a { color: #fff; }
.lt_split { display: grid; grid-template-columns: repeat(12, minmax(0,1fr)); column-gap: var(--col-gap); align-items: start; margin-top: var(--head); padding-top: 28px; border-top: 1px solid var(--line); }
.lt_split > div:first-child { grid-column: 1 / span 5; display: flex; flex-direction: column; gap: 12px; }
.lt_split > .f_check { grid-column: 7 / span 6; }
.lt_split .x_label { color: var(--io-ink); }
.lt_cta { margin-top: var(--head); }
.lt_note { color: var(--grey-ink); margin-top: -4px; }
.lt_checks { margin-top: 4px; }
.f_shareYou .lt_checks { grid-template-columns: repeat(2, minmax(0,1fr)); }
.lt_pair { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: var(--col-gap); row-gap: var(--head); }
.lt_col { position: relative; display: flex; flex-direction: column; gap: 28px; padding-top: 28px; border-top: 1px solid var(--line); }
.lt_col::before { content: ""; position: absolute; left: 0; top: -2px; width: 48px; height: 3px; background: var(--io); }
.lt_col h3 { font-size: clamp(2rem, 3.2vw, 3rem); font-weight: 300; letter-spacing: -.03em; line-height: 1; color: var(--io-ink); }
.lt_col > div { display: flex; flex-direction: column; gap: 12px; }
.lt_col .x_label { color: var(--io-ink); }
.lt_col .f_check { grid-template-columns: minmax(0,1fr); }
.lt_story { display: grid; grid-template-columns: minmax(0,1fr); column-gap: var(--col-gap); row-gap: clamp(40px, 4.5vw, 72px); }
.lt_story > li { position: relative; display: flex; flex-direction: column; gap: 12px; padding-top: 24px; border-top: 1px solid var(--line); }
.lt_story > li::before { content: ""; position: absolute; left: 0; top: -2px; width: 48px; height: 3px; background: var(--io); }
.lt_story li > p { font-size: var(--fs-body); color: var(--grey-ink); }
.lt_story .f_measDots { margin-top: 4px; }
.lt_story > li > .x_label { color: var(--io-ink); }
.lt_story h3 { font-size: var(--t-h3, 1.5rem); font-weight: 300; letter-spacing: -.02em; }
.lt_news { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: var(--col-gap); row-gap: var(--head); }
.lt_card { display: flex; flex-direction: column; gap: 22px; color: inherit; }
.lt_cardImg { aspect-ratio: 3 / 2; }
.lt_cardImg img { transition: transform 1.2s var(--slow); }
.lt_card:hover .lt_cardImg img { transform: scale(1.04); }
.lt_cardTxt { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
.lt_cardTxt .x_label { color: var(--io-ink); }
.lt_cardTxt h3 { font-size: var(--t-h4); font-weight: 400; line-height: 1.3; color: var(--charcoal); max-width: 22em; }
.lt_cardTxt p { font-size: var(--fs-body); line-height: 1.65; color: var(--grey-ink); max-width: 34em; }
.lt_cardTxt .s_textLink { margin-top: 6px; }
.lt_types { margin-top: var(--head); display: flex; flex-direction: column; gap: 14px; padding-top: 24px; border-top: 1px solid var(--line); }
.lt_types ul { display: flex; flex-wrap: wrap; gap: 8px; }
.lt_types li { font-size: var(--t-small); padding: 7px 14px; border: 1px solid var(--line); border-radius: 999px; color: var(--charcoal); }
.f_areaDesc:empty { display: none; }
/* the hero photo is a bright laboratory: a deeper shade keeps the white text readable */
.lt_hero::after { background: linear-gradient(180deg, rgba(14,16,15,.5) 0%, rgba(14,16,15,.12) 24%), linear-gradient(0deg, rgba(14,16,15,.82) 0%, rgba(14,16,15,.58) 42%, rgba(14,16,15,.18) 72%), linear-gradient(90deg, rgba(14,16,15,.32) 0%, rgba(14,16,15,0) 62%); }
.lt_hero > .x_img img { object-position: 50% 45%; }
#lt-mustadeem .x_head, #lt-training .x_head, #lt-research .x_head, #lt-partners .x_head, #lt-cohort .x_head { align-items: start; }
#lt-cohort .x_head > :nth-child(2) { align-self: start; justify-self: stretch; }
.f_dayHead { align-items: start; }
@media (min-width: 901px) {
  #lt-mustadeem .x_head > div:first-child, #lt-training .x_head > div:first-child, #lt-research .x_head > div:first-child, #lt-partners .x_head > div:first-child, #lt-cohort .x_head > div:first-child { grid-column: 1 / span 6; }
  #lt-mustadeem .x_head > :nth-child(2), #lt-training .x_head > :nth-child(2), #lt-research .x_head > :nth-child(2), #lt-partners .x_head > :nth-child(2), #lt-cohort .x_head > :nth-child(2) { grid-column: 7 / span 6; max-width: 36em; }
  #lt-why .f_why .f_pillars { grid-template-columns: repeat(2, minmax(0,1fr)); row-gap: 40px; }
  .lt_story { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .lt_story > li { grid-column: span 2; }
  .lt_story > li:nth-child(n+4) { grid-column: span 3; }
  .lt_pGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
  #lt-school .f_whoSide { justify-content: flex-start; }
}
@media (min-width: 1101px) {
  #lt-why .f_why .f_pillars { grid-template-columns: repeat(4, minmax(0,1fr)); }
  .lt_pGrid { grid-template-columns: repeat(4, minmax(0,1fr)); }
}
@media (max-width: 900px) {
  .lt_split > div:first-child, .lt_split > .f_check { grid-column: 1 / -1; }
  .lt_split > .f_check { margin-top: 20px; }
  .lt_pair, .lt_news { grid-template-columns: 1fr; }
  .f_shareYou .lt_checks { grid-template-columns: 1fr; }
}
'''


# ----------------------------------------------------------------------------------------------------------------
# page script: FIF set-up, reduced to the parts this page uses
# ----------------------------------------------------------------------------------------------------------------
def init_js(fif_script):
    a = fif_script.index("  INIT['farm-innovation-fund'] = function (view) {")
    b = fif_script.index("  INIT.incubation = function (view) {")
    src = fif_script[a:b]

    def between(start, end):
        i = src.index(start)
        j = src.index(end, i) if end else len(src)
        return src[i:j]

    gates = between("    // gates: the rail fills", "    // selected project support")
    # the caption under the photo follows the stage, not "journey"
    g0 = gates.index("    // the caption under the photo names the journey")
    g1 = gates.index("    // the photo follows the furthest gate")
    gates = gates[:g0] + '''    // the caption under the photo names the stage of the lit gate
    var STAGES = %s;
    function gateJourney(k) {
      if (k === gJk) return; gJk = k;
      swap($('#gateJb', view), 'Stage ' + (k + 1)); swap($('#gateJs', view), STAGES[k]);
    }
''' % json.dumps([s[0] for s in STAGES], ensure_ascii=False) + gates[g1:]
    gates = gates.replace("$('#fif-process', view)", "$('#lt-pathway', view)")
    who = between("    // who can participate", "    // innovation day")
    tail = between("    // innovation day", None)   # day pin + registration band + closing "};"

    areas = '''    // placement areas: one photo at a time, wiped in from below; the activities follow the tab
    var AREA = %s;
    var faImgs = $$('#faStage > img', view), faT, chips = $('#faChips', view), faDesc = $('#faDesc', view);
    function drawChips(k) { chips.innerHTML = AREA[k][2].map(function (t) { return '<i>' + t + '</i>'; }).join(''); }
    drawChips(0);
    tabsHover($('#areaTabs', view), null, function (k) {
      faImgs.forEach(function (x) { x.style.zIndex = x.classList.contains('on') ? 1 : 0; }); var im = faImgs[k]; im.classList.remove('on'); im.style.zIndex = 2; void im.offsetWidth; im.classList.add('on');
      clearTimeout(faT); faT = setTimeout(function () { faImgs.forEach(function (x, i) { if (i !== k) x.classList.remove('on'); }); }, 1000);
      $('#faStage', view).setAttribute('aria-labelledby', 'fa-' + k);
      swap($('#faText', view), AREA[k][0]);
      if (AREA[k][1]) { faDesc.style.display = ''; swap(faDesc, AREA[k][1]); } else faDesc.style.display = 'none';
      drawChips(k);
      if (G) gsap.from(chips.children, { y: 12, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.2 });
    });
''' % json.dumps([[ar[0], ar[2], ar[3]] for ar in AREAS], ensure_ascii=False)
    head = '''  INIT['local-talent'] = function (view) {
    // layout changed: pinned sections below re-measure once it has finished moving
    var rT = 0; function refresh() { clearTimeout(rT); rT = setTimeout(function () { if (G) ScrollTrigger.refresh(); }, 750); }
    // narrow screens: the dock scrolls sideways, so start with this page's tab in view
    var dc = $('#dock a[aria-current="page"]'); if (dc && dockIn) dockIn.scrollLeft = dc.offsetLeft - 40;
'''
    return head + areas + gates + who + tail + '\n'


# ----------------------------------------------------------------------------------------------------------------
# build the page
# ----------------------------------------------------------------------------------------------------------------
def read(p):
    with open(os.path.join(BUNDLE, p), encoding='utf-8') as f:
        return f.read()


def write(p, s):
    with open(os.path.join(BUNDLE, p), 'w', encoding='utf-8') as f:
        f.write(s)


def build_page():
    fif = read('ivp-farm-innovation-fund.html')
    # 1. main
    i, j = fif.index('<main>'), fif.index('</main>') + len('</main>')
    page = fif[:i] + main_html() + fif[j:]
    # 2. title
    page = page.replace('<title>Farm Innovation Fund · Innovation Oasis</title>', '<title>%s · Innovation Oasis</title>' % NAME)
    # 3. extra css, right before the page script
    css_all = fif[fif.index('<style>', 1000):fif.index('<script>document.documentElement')]
    cloned = clone_id_rules(css_all, {'#fif-who': '#lt-school', '#fif-cycle': '#lt-cohort'})
    marker = '<script>document.documentElement.classList.add("rv")'
    page = page.replace(marker, '<style id="lt-css">' + cloned + EXTRA_CSS + '</style>\n' + marker, 1)
    # 4. script: add the view title + the new INIT
    page = page.replace("'farm-innovation-fund': 'Farm Innovation Fund',",
                        "'farm-innovation-fund': 'Farm Innovation Fund', 'local-talent': '" + NAME + "',", 1)
    k = page.index("  INIT.incubation = function (view) {")
    page = page[:k] + init_js(fif) + '\n' + page[k:]
    # 5. dock: the new page is the current one
    page = dock_add(page)
    if 'id="lt-dock"' not in page:
        page = page.replace('</head>', DOCK_CSS + '</head>', 1)
    page = page.replace('data-view="farm-innovation-fund"', 'data-view="local-talent"')
    # 6. the FIF cycle switch / docs script does not apply
    write(PAGE, page)
    return page


# ----------------------------------------------------------------------------------------------------------------
# menus on every page
# ----------------------------------------------------------------------------------------------------------------
NAV_LI = '<li><a href="ivp-agricultural-challenges.html">Agricultural Challenges</a></li>'
NAV_NEW = '<li><a href="%s">%s</a></li>' % (PAGE, NAME)
DOCK_RE = re.compile(r'(<a href="ivp-agricultural-challenges\.html" data-route="agricultural-challenges">.*?</a>)', re.S)
DOCK_NEW = '\n  <a href="%s" data-route="local-talent"><span><i class="x_long">Developing Local </i>Talent</span></a>' % PAGE


def dock_add(s):
    if 'data-route="local-talent"' in s:
        return s
    return DOCK_RE.sub(lambda m: m.group(1) + DOCK_NEW, s, count=1)


DOCK_CSS = ('<style id="lt-dock">/* five pages in the dock: it scrolls sideways on narrow screens instead of clipping */'
            '@media (max-width: 600px) { .x_dockIn { overflow-x: auto; scrollbar-width: none; max-width: calc(100vw - 32px); } '
            '.x_dockIn::-webkit-scrollbar { display: none; } .x_dock a { padding: 0 9px; } .x_dockHome { padding: 0 8px 0 6px !important; } }</style>')


def patch_page(path):
    s = read(path)
    o = s
    if 'x_dock' in s and 'id="lt-dock"' not in s:
        s = s.replace('</head>', DOCK_CSS + '</head>', 1)
    if NAV_NEW not in s:
        s = s.replace(NAV_LI, NAV_LI + NAV_NEW)
    s = dock_add(s)
    if '"Developing Local Talent"' not in s:
        s = s.replace('"Agricultural Challenges": "ivp-agricultural-challenges.html",',
                      '"Agricultural Challenges": "ivp-agricultural-challenges.html", "%s": "%s",' % (NAME, PAGE))
    if path == 'ivp-enquire.html' and 'id="p-talent"' not in s:
        s = s.replace('<label><input type="radio" name="platform" value="chal" id="p-chal"><span>Agricultural Challenges</span></label>',
                      '<label><input type="radio" name="platform" value="chal" id="p-chal"><span>Agricultural Challenges</span></label>\n        '
                      '<label><input type="radio" name="platform" value="talent" id="p-talent"><span>%s</span></label>' % NAME)
        s = s.replace("chal: 'Agricultural Challenges',", "chal: 'Agricultural Challenges', talent: '%s'," % NAME)
    if s != o:
        write(path, s)
        return True
    return False


def main():
    build_images()
    build_page()
    changed = []
    for p in sorted(glob.glob(os.path.join(BUNDLE, '*.html'))):
        name = os.path.basename(p)
        if name == PAGE:
            continue
        if patch_page(name):
            changed.append(name)
    print('page: %s (%d bytes)' % (PAGE, os.path.getsize(os.path.join(BUNDLE, PAGE))))
    print('patched %d pages:' % len(changed))
    print(' '.join(changed))


if __name__ == '__main__':
    main()
