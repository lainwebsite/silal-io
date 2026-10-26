#!/usr/bin/env python3
"""Assemble the 'About IO (update)' artifact from existing V1 + V2 code (CSS reused as-is, class names prefixed)."""
import re, pathlib, html

R = pathlib.Path("/home/user/silal-io/app")
OUT = pathlib.Path("/tmp/claude-0/-home-user-silal-io/5ef33fe3-df5f-5ab5-b4b8-1b4f1bc0870d/scratchpad/art")


def prefix(css, p):
    return re.sub(r'(?<![\w\-/"\'#%])\.([A-Za-z_][\w-]*)', lambda m: "." + p + m.group(1), css)


v1 = (R / "V1/v1.module.css").read_text()
ad = (R / "V1/_about/about-d.module.css").read_text()
v2 = (R / "V2/(about)/_about/about.module.css").read_text().splitlines()

# --- V2 journey css: lines 1359..(start of "08 Looking ahead") + object-fit + corners + responsive overrides
jstart = next(i for i, l in enumerate(v2) if "07 Journey" in l)
jend = next(i for i, l in enumerate(v2) if "08 Looking ahead" in l)
journey_css = "\n".join(v2[jstart:jend])
corners = "\n".join(v2[next(i for i, l in enumerate(v2) if "Four hairline crop marks" in l):][:22])
journey_css = journey_css.replace(".about .jourCrop", ".jourCrop")

# drop css we do not use / that points at repo paths
ad = re.sub(r"\.mapFallback \{[^}]*\}", "", ad)
v1 = v1.replace("/V1/brand/", "brand/")
v1 = v1.replace("var(--font-d1-brand), Arial, sans-serif", '"Readex Pro", Arial, sans-serif')

css = prefix(v1, "s_") + "\n" + prefix(ad, "c_") + "\n" + prefix(journey_css + "\n" + corners, "j_")

extra = """

/* ---- journey pinned as a curtain (same mechanism as V1's curtain sticky) ---- */
.c_curtain[data-on="true"] > .j_journey { padding: 88px 0 26px; display: flex; flex-direction: column; overflow: hidden; }
.c_curtain[data-on="true"] .j_jour { flex: 1; min-height: 0; width: 100%; display: flex; flex-direction: column; }
.c_curtain[data-on="true"] .j_head { margin-bottom: clamp(14px, 2.4vh, 28px); }
.c_curtain[data-on="true"] .j_jourGrid { flex: 1; min-height: 0; }
.c_curtain[data-on="true"] .j_jourStage { height: 100%; }
.c_curtain[data-on="true"] .j_jourStick { position: static; height: 100%; gap: clamp(8px, 1.6vh, 18px); }
.c_curtain[data-on="true"] .j_odo { font-size: min(11vw, 17vh); }
.c_curtain[data-on="true"] .j_jourSteps { height: 100%; position: relative; overflow-y: clip; overflow-x: visible; -webkit-mask-image: linear-gradient(180deg, transparent 0, transparent 4%, #000 24%, #000 76%, transparent 96%, transparent 100%); mask-image: linear-gradient(180deg, transparent 0, transparent 4%, #000 24%, #000 76%, transparent 96%, transparent 100%); }
.c_curtain[data-on="true"] #jList { position: absolute; top: 0; inset-inline: 58px 0; will-change: transform; }
.c_curtain[data-on="true"] .j_jourSteps { margin-inline-start: -14px; }

.c_curtain[data-on="true"] .j_jourStep { min-height: 44svh; opacity: .28; }
.c_curtain[data-on="true"] .j_jourStep[data-on] { opacity: 1; }
.c_curtain[data-on="true"] .j_jourStep[data-far] { opacity: 0; }
.s_footer { position: relative; z-index: 2; }
/* tablet / small laptop: stack the footer earlier so the brand block never crowds the link columns */
@media (max-width: 1280px) {
  .s_footerGrid { grid-template-columns: 1fr; gap: 0; }
  .s_footer { --fm: 110px; }
  .s_footerCols { gap: 40px clamp(32px, 5vw, 72px); padding-bottom: 56px; }
  .s_footerBrand { min-height: 320px; }
}
/* spacing after the journey stays in the journey's own grey, footer size untouched */
.c_page { padding-bottom: clamp(80px, 9vw, 160px); }
/* footer follows the journey in normal flow: pin lasts exactly len + 2*sh, no bottom overlap */
.c_curtain[data-on="true"] { height: calc(var(--len, 0px) + 2 * var(--sh)); margin: calc(-1 * var(--sh)) 0 0; }


/* principles: no rule under the label, light IO-blue rule on top of each column */
.c_headRow.c_noRule { border-bottom: 0; padding-bottom: 0; margin-bottom: clamp(48px, 5vw, 88px); }
.c_headRow.c_noRule::after { display: none; }
.c_principles li { border-top-color: rgba(60, 167, 210, 0.6); }

.j_roll { display: inline-grid; clip-path: inset(0); }
.j_jourTag #jTag { color: var(--io-ink); }
.j_roll > span { grid-area: 1 / 1; white-space: nowrap; }

/* ---- artifact glue (not in the repo) ---- */
html { scroll-behavior: auto; }
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-stopped { overflow: hidden; }
body { margin: 0; background: #fff; color: #595453; }
.s_root { --max: 1920px; overflow-x: clip; }
.s_root[data-wide] .s_wrap { max-width: calc(var(--max) + 2 * var(--gutter)); }
.c_page { --wrap: 1560px; --hdr: 114px; }
.c_slide { visibility: visible; opacity: 0; transition: opacity 1.6s ease; }
.c_slide[data-on] { opacity: 1; }
/* the zoom is tied to .is-run, not to data-on: the outgoing slide keeps zooming while it fades, so nothing snaps back at the switch */
.c_slide.is-run img { animation: slideZoom 7.8s linear both; }
@keyframes slideZoom { from { transform: scale(1.12); } to { transform: scale(1); } }
.c_slide img, .c_photoInner img, .c_whySticky img, .c_jImg img, .j_jourFrame img, .j_jourMobileImg img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.c_photoInner { inset: -12% 0; will-change: transform; }
.c_photo[data-drift] { will-change: transform; }
.c_hero { margin-top: calc(var(--hdr) * -1); }
.c_heroSub span { display: block; }
.c_statement .c_blue { display: block; }
.c_storyBar { transform: scaleY(0); }
.j_jour { --wrap: 1560px; --slow: cubic-bezier(0.16, 1, 0.3, 1); --curtain: cubic-bezier(0.87, 0, 0.13, 1); --grey-ink: #6e7173; padding-inline: var(--gutter); max-width: var(--wrap); margin-inline: auto; }
.j_journey { padding-block: clamp(80px, 9vw, 150px) clamp(60px, 8vw, 120px); background: var(--light); }
.j_head { display: flex; justify-content: space-between; align-items: baseline; padding-block: 0; margin-bottom: clamp(32px, 4vw, 64px); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: var(--charcoal); }
.j_head b { font-weight: 500; color: var(--io-ink); margin-right: 14px; }
.j_head span:last-child { color: var(--grey); font-variant-numeric: tabular-nums; }
.j_jourFrame img { transform: scale(1.12); transition: transform 2.4s var(--slow); }
.j_jourFrame[data-on] img { transform: scale(1); }
.j_jourFrame[data-on] .j_jourCrop { transform: scale(1.12); }
#jList { position: relative; }
.j_jourLine { inset-inline-start: -44px; z-index: 0; }
.j_jourLine > i { transform: scaleY(0); inset: 0 -0.5px; }
.j_jourStep { z-index: 1; }
.c_curtain[data-on="true"] .j_jourLine > i { transition: transform .7s cubic-bezier(0.16, 1, 0.3, 1); }
.j_jourMobileImg { display: none; }
.s_newsletter { position: relative; }
.s_footerBottom a:hover { color: var(--io-ink); }
.s_extIcon { display: inline-block; vertical-align: -2px; margin-left: 6px; }
.s_menuClose { background: none; border: 0; cursor: pointer; }
@media (max-width: 1000px) {
  .j_jourStage { display: none; }
  .j_jourSteps { grid-column: 1 / -1; padding-inline-start: 32px; }
  .j_jourStep { min-height: 0; padding-block: 40px; opacity: 1; }
  .j_jourStep::before { top: 52px; inset-inline-start: -37px; }
  .j_jourMobileImg { display: block; }
  .c_hero { min-height: 620px; }
}
@media (prefers-reduced-motion: reduce) {
  .c_slide, .c_slide img, .j_jourFrame, .j_jourFrame img, .j_odoStrip { transition: none !important; animation: none !important; }
}
"""
css += extra

# ---------------- data ----------------
nav = [
    ("About IO", "Silal's R&D and venture engine.", ["Our Story", "Team & CEO Message", "Virtual Tour ↗"]),
    ("Research & Science", "Plant science, soil, water and food technology, tested in real arid conditions.",
     ["Precision Breeding & Plant Health", "Crop Diversification Research", "Soil & Water Research", "Food Technology", "R&D Trialing"]),
    ("Innovation & Venture Platforms", "Funding, incubation and acceleration for agri-food startups.",
     ["Farm Innovation Fund", "Incubation", "Accelerator", "Agricultural Challenges"]),
    ("Technology & Services", "Sensing, desalination, analytics, trials and facilities for partners.",
     ["iO Sense", "Solar Desalination", "Analytical Services", "Paid Trials", "Program Management as a Service", "Facilities as a Service"]),
    ("Centres of Excellence", "Specialist hubs for robotics, crop genomics and controlled-environment agriculture.",
     ["Agri Robotics & AI", "Abiotic Resilience & Crop Genomics (ARC-GEN)", "Advanced Controlled Environment Ag (CEA)"]),
    ("Talent & Training", "Building the next generation of agri-food talent in the UAE.",
     ["Advanced Agritech Academy", "Student Sponsorship", "Mustadeem / School Programs", "IO Academy Training"]),
]
e = html.escape

ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'


def logo(h, rev=False):
    wm = round(h * 326 / 148)
    mk = round(h * 0.78)
    src = "brand/io-wordmark-endorsed-reversed.svg" if rev else "brand/io-wordmark-endorsed.svg"
    return (f'<span style="display:inline-flex;align-items:flex-start;gap:{round(h*.18)}px">'
            f'<img src="{src}" alt="Innovation Oasis — Part of Silal" width="{wm}" height="{h}">'
            f'<img src="brand/io-mark.svg" alt="" height="{mk}" width="{round(mk*255/188)}"></span>')


nav_html = "".join(
    f'<li class="s_navItem"><a href="#" data-active="{"true" if i == 0 else "false"}">{e(l)}</a>'
    f'<div class="s_dropdown"><div class="s_dropdownInner"><p>{e(b)}</p><ul>'
    + "".join(f'<li><a href="#">{e(x)}</a></li>' for x in subs)
    + f'</ul><a href="#" class="s_textLink">{e(l)} {ARROW}</a></div></div></li>'
    for i, (l, b, subs) in enumerate(nav)
)
mobile_html = "".join(
    f'<details class="s_mobileGroup"><summary><span class="s_mobileNum">{i+1:02d}</span>{e(l)}</summary><ul><li><a href="#">Overview</a></li>'
    + "".join(f'<li><a href="#">{e(x)}</a></li>' for x in subs) + "</ul></details>"
    for i, (l, b, subs) in enumerate(nav)
)

header = f"""
<header class="s_header" id="hdr" data-scrolled="false" data-overlay="true">
  <div class="s_utility"><div class="s_wrap s_utilityInner">
    <span>Advancing Agri-food Systems <span class="s_utilitySep">·</span> <span lang="ar">نحو أنظمة زراعة وغذاء متطورة</span></span>
    <span class="s_utilityLinks"><a href="#">Resources</a><a href="#">Contact</a><span lang="ar">عربي</span></span>
  </div></div>
  <div class="s_headerMain"><div class="s_wrap s_headerInner">
    <a href="#" class="s_logo" aria-label="Innovation Oasis — home">
      <span class="s_logoFull"><span class="s_logoOnLight">{logo(50)}</span><span class="s_logoOnDark">{logo(50, True)}</span></span>
      <span class="s_logoSmall"><img src="brand/io-mark.svg" alt="Innovation Oasis" height="36" width="49"></span>
    </a>
    <nav class="s_nav" aria-label="Main"><ul>{nav_html}</ul></nav>
    <div class="s_headerActions">
      <a href="#" class="s_btn s_btnPrimary s_btnSm">Enquire {ARROW}</a>
      <button class="s_menuToggle" id="menuOpen" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    </div>
  </div></div>
  <div class="s_mobileNav" id="mobileNav" data-open="false" aria-hidden="true">
    <div class="s_wrap s_mobileNavTop">{logo(42)}
      <button class="s_menuClose" id="menuClose" aria-label="Close menu"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M7 7l14 14M21 7 7 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
    </div>
    <div class="s_wrap">{mobile_html}
      <div class="s_mobileFoot"><a href="#" class="s_btn s_btnPrimary">Enquire {ARROW}</a><a href="#" class="s_btn s_btnGhostLight">Contact</a></div>
    </div>
  </div>
</header>"""

slides = [("hero1", "Entrance"), ("hero2", "Greenhouses"), ("hero3", "Laboratories"), ("hero4", "Controlled environment")]
stats = [(2020, "Silal was established"), (34, "hectare parcel of land|adjacent to Al Foah Farm"), (2024, "iO Official Inauguration"), (2030, "Vision")]
pressures = ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"]
principles = [
    ("We Build for the Real World", "Innovation only matters when it can survive outside the lab."),
    ("We Connect Ecosystems", "Researchers, farmers, startups, industry, and government all have a role to play."),
    ("We Learn by Doing", "Progress comes through action, adaptation, and continuous improvement."),
    ("We Think Beyond Borders", "The UAE is our testbed. The world is our opportunity."),
    ("We Build Resilience", "Not just for today’s food systems, but for tomorrow’s."),
]
journey = [
    ("2021", 2021, None, "The Search Begins", "Following the creation of Silal, a dedicated innovation function begins taking shape. Extensive engagement across farms, universities, government entities, and industry reveals a clear gap between research, technology, and practical implementation.", "j1", False),
    ("Late 2021", 2021, "Late", "An Opportunity in the Desert", "An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born.", "j2", True),
    ("2022", 2022, None, "Building the Blueprint", "A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation.", "j3", False),
    ("2022", 2022, None, "First Innovation Partners Arrive", "Early collaborations begin with pioneering agritech companies, demonstrating a new model where innovators can validate technologies directly within the UAE’s agricultural environment.", "j4", False),
    ("2023", 2023, None, "From Vision to Reality", "Construction, equipment installation, and ecosystem activation advance rapidly. Research capabilities, specialized laboratories, greenhouse infrastructure, and field-testing assets come online.", "j5", False),
    ("2024", 2024, None, "Official Inauguration", "Innovation Oasis officially opens as a state-of-the-art center for agricultural research, innovation, validation, and commercialization. Global partners begin using the facility as a launchpad for collaboration and growth.", "j6", False),
    ("2025", 2025, None, "Building the Ecosystem", "The focus expands from infrastructure to people. Research teams grow, partnerships mature, venture programs launch, and Innovation Oasis strengthens its role as a connector across the regional and global agrifood ecosystem.", "j7", False),
    ("2030 Vision", 2030, "Vision", "Global Leadership in Desert Agriculture", "Innovation Oasis aims to become the global reference point for arid-climate agriculture, food system resilience, and agritech deployment, helping shape research, investment, commercialization, and policy for the future of food security.", "j8", False),
]

hero = f"""
<section class="c_hero">
  <div class="c_heroMedia">{"".join(f'<div class="c_slide{" is-run" if i == 0 else ""}"{" data-on" if i == 0 else ""}><img src="img/{k}.jpg" alt="{c}"{"" if i == 0 else " loading=lazy"}></div>' for i, (k, c) in enumerate(slides))}</div>
  <div class="c_heroShade"></div>
  <div class="s_wrap c_heroInner">
    <div class="c_heroMain">
      <span class="c_eyebrow c_eyebrowLight">About Innovation Oasis</span>
      <h1 class="c_heroTitle">Accelerating the Future of Food Security</h1>
      <p class="c_heroSub"><span>The future of food security is being built in the desert.</span><span>Toward Advanced Agricultural and Food Systems</span></p>
    </div>
    <div class="c_heroAside"><div class="c_slideNav" id="slideNav">{"".join(f'<span data-on="{"true" if i == 0 else "false"}"><i></i><b>{i+1:02d}</b>{c}</span>' for i, (k, c) in enumerate(slides))}</div></div>
  </div>
</section>"""

intro = f"""
<section class="c_section"><div class="s_wrap c_grid">
  <p class="c_statement" data-lit>The conditions challenging agriculture in the UAE today will be faced by much of the world tomorrow.</p>
  <div class="c_introCols">
    <p class="c_body">In one of the planet’s most demanding growing environments, we bring together researchers, farmers, startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies needed for a more resilient food system.</p>
    <p class="c_lead">If solutions can succeed here, they can succeed almost anywhere.</p>
  </div>
  <ul class="c_stats">{"".join(f'<li><span class="c_statNum" data-count="{n}">{n}</span><span class="c_statLabel">{e(l).replace("|", "<br>")}</span></li>' for n, l in stats)}</ul>
</div></section>"""

story = """
<section class="c_section c_white c_story"><div class="s_wrap c_grid">
  <aside class="c_storySide">
    <span class="c_eyebrow"><span class="c_eyebrowNum">01</span>Our Story</span>
    <h2 class="c_h2">An Oasis Built for What’s Next</h2>
    <span class="c_storyTrack"><span class="c_storyBar" id="storyBar"></span></span>
  </aside>
  <div class="c_storyMain">
    <p class="c_storyLead">Innovation Oasis did not begin with a building. It began with a question.</p>
    <p class="c_body">When Silal was established in 2020, food security and agricultural development were at the heart of its mission. Yet one important piece of the puzzle was missing: a place where research, technology, entrepreneurship, and real-world farming could come together to solve practical challenges facing agriculture.</p>
    <p class="c_body">When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government entities, researchers, and technology companies across the UAE. A pattern quickly emerged. Research existed. Commercial technologies existed. Farmers faced urgent challenges. But there was no ecosystem connecting them together.</p>
    <div class="c_photo" style="aspect-ratio:16/10"><div class="c_photoInner" data-parallax="6"><img src="img/atrium.jpg" alt="The IO atrium" loading="lazy"></div></div>
    <blockquote class="c_pull"><p>The world had innovation.</p><p>What it lacked was implementat<span style="color:var(--io)">io</span>n.</p></blockquote>
    <p class="c_body">The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side of Al Foah Farm, largely overlooked and unused. Where others saw empty desert, the team saw an opportunity to create a living ecosystem designed around collaboration, experimentation, and impact.</p>
    <div class="c_pair">
      <div class="c_photo" style="aspect-ratio:4/5"><div class="c_photoInner" data-parallax="9"><img src="img/labseed.jpg" alt="Seed development laboratory" loading="lazy"></div></div>
      <div class="c_photo" data-drift="18" style="aspect-ratio:4/5"><div class="c_photoInner" data-parallax="5"><img src="img/flask.jpg" alt="A scientist at work" loading="lazy"></div></div>
    </div>
    <p class="c_body">What followed was not the creation of another research center.</p>
    <p class="c_h3">It was the creation of Innovation Oasis.</p>
    <p class="c_body">A place where startups can test technologies in real-world conditions. Where researchers and farmers collaborate side-by-side. Where commercial partners help scale solutions. And where the UAE’s toughest growing conditions become the ultimate proving ground for the future of food.</p>
    <p class="c_lead">Today, Innovation Oasis serves as Silal’s R&amp;D and venture engine, helping bridge the gap between breakthrough ideas and meaningful impact across agriculture and food systems.</p>
  </div>
</div></section>"""

why = f"""
<section class="c_why c_chapter" data-pbox>
  <div class="c_whyMedia"><div class="c_whySticky"><img src="img/blueberry.jpg" alt="Blueberry crop trial at Innovation Oasis" loading="lazy" data-pimg="6"></div></div>
  <div class="c_whyText">
    <span class="c_eyebrow c_eyebrowLight"><span class="c_eyebrowNum">01</span>Why Here?</span>
    <h2 class="c_h2">The Arid Advantage</h2>
    <p class="c_statement">Many see the desert as a constraint. <span class="c_blue">We see it as the world’s most important testbed.</span></p>
    <p class="c_body">Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will reshape agriculture around the world. Conditions once considered unique to the UAE are becoming increasingly common elsewhere.</p>
    <p class="c_body">That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the pressures that define tomorrow’s food system today.</p>
    <ol class="c_pressures">{"".join(f'<li><span>{i+1:02d}</span>{p}</li>' for i, p in enumerate(pressures))}</ol>
    <p class="c_lead">These are not barriers to innovation. They are the benchmark.</p>
    <p class="c_quoteBlue">“If it works here, it can work anywhere.”</p>
  </div>
</section>"""

princ = f"""
<section class="c_section c_white"><div class="s_wrap c_grid">
  <div class="c_headRow c_noRule"><span class="c_eyebrow"><span class="c_eyebrowNum">02</span>The Principles That Guide Us</span></div>
  <ol class="c_principles">{"".join(f'<li><span>{i+1:02d}</span><h3>{e(t)}</h3><p>{e(x)}</p></li>' for i, (t, x) in enumerate(principles))}</ol>
</div></section>"""

n = len(journey)
jour = f"""
<div class="c_curtain" id="jCurtain" data-on="false">
<section class="j_journey c_curtainStick" id="journey">
  <div class="j_jour">
    <p class="j_head"><span><b>03</b>Our Journey</span><span id="jHead"><span class="j_roll"><span>0</span></span><span class="j_roll"><span>1</span></span><span> / {n:02d}</span></span></p>
    <div class="j_jourGrid">
      <div class="j_jourStage"><div class="j_jourStick">
        <p class="j_jourTag" aria-hidden="true"><span id="jTag">Milestone</span></p>
        <p class="j_odo" aria-hidden="true"><span>2</span><span>0</span>
          <span class="j_odoDigit"><span class="j_odoStrip" id="odoT">{"".join(f"<span>{d}</span>" for d in range(10))}</span></span>
          <span class="j_odoDigit"><span class="j_odoStrip" id="odoO">{"".join(f"<span>{d}</span>" for d in range(10))}</span></span></p>
        <div class="j_jourFrames">{"".join(f'<div class="j_jourFrame" style="z-index:{i}"{" data-on" if i == 0 else ""}><img src="img/{j[5]}.jpg" alt="" class="{"j_jourCrop" if j[6] else ""}"{"" if i == 0 else " loading=lazy"}></div>' for i, j in enumerate(journey))}</div>
        <ol class="j_jourTicks" aria-hidden="true">{"".join(f'<li{" data-on" if i == 0 else ""}><span>{e(j[0].replace(" Vision", ""))}</span></li>' for i, j in enumerate(journey))}</ol>
      </div></div>
      <div class="j_jourSteps" id="jSteps"><div id="jList"><i class="j_jourLine" aria-hidden="true"><i id="jLine"></i></i><ol>
        {"".join(f'<li class="j_jourStep" data-step data-year="{j[1]}" data-tag="{j[2] or "Milestone"}"{" data-on" if i == 0 else ""}><p class="j_jourWhen">{e(j[0] if j[2] != "Vision" else "2030 Vision")}</p><h3 class="j_jourTitle">{e(j[3])}</h3><p class="j_jourText">{e(j[4])}</p><div class="j_jourMobileImg" style="position:relative"><img src="img/{j[5]}.jpg" alt="" loading="lazy" data-pimg="5"></div></li>' for i, j in enumerate(journey))}
      </ol></div></div>
    </div>
  </div>
</section>
</div>"""

ext = '<svg class="s_extIcon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect width="16" height="16" rx="2" fill="#7f8284"/><path d="M5 11l6-6M6.5 5H11v4.5" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
footer = f"""
<footer class="s_footer">
  <div class="s_wrap s_footerGrid">
    <div class="s_footerCols">
      <div class="s_footerNews"><h4>Stay close to the work</h4><p>Research, programmes and calls for innovators, a few times a year.</p>
        <form class="s_newsletter" id="nl" aria-label="Newsletter"><input type="email" id="nlEmail" placeholder="Email address" aria-label="Email address"><button type="submit" class="s_btn s_btnPrimary s_btnSm" aria-label="Subscribe">{ARROW}</button></form></div>
      <div><h4>Explore</h4><ul>{"".join(f'<li><a href="#">{e(l)}</a></li>' for l, b, s in nav)}</ul></div>
      <div><h4>Resources</h4><ul><li><a href="#">News &amp; Media</a></li><li><a href="#">Publications &amp; Case Studies</a></li><li><a href="#">FAQs</a></li></ul>
        <h4 style="margin-top:32px">Connect</h4><ul><li><a href="#">Contact</a></li><li><a href="#">Enquire</a></li><li><a href="#">LinkedIn{ext}</a></li></ul></div>
    </div>
    <div class="s_footerBrand">
      <img class="s_footerMark" src="brand/io-mark.svg" alt="" height="150" width="203">
      <div class="s_footerRule" aria-hidden="true"></div>
      <div class="s_footerId">
        <img src="brand/io-wordmark-endorsed.svg" alt="Innovation Oasis — Part of Silal" width="240" height="109">
        <a href="#" class="s_footerUrl">io-silal.ae</a>
        <address><span lang="ar">واحة الابتكار – سلال، العين، الإمارات العربية المتحدة</span><br>Innovation Oasis – Silal, Al Ain, UAE</address>
      </div>
    </div>
  </div>
  <div class="s_wrap s_footerBottom"><span>© 2026 Silal. All rights reserved.</span><nav aria-label="Legal"><a href="#">Terms of Use</a><a href="#">Privacy</a><a href="#">Design system</a></nav></div>
</footer>"""

js = r"""
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  $$('a[href="#"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // inertial smooth scroll (same Lenis settings as V1's SmoothScroll.tsx); off for reduced motion
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return 1 - Math.pow(1 - t, 4); }, touchMultiplier: 1.4 });
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
  }

  // header: transparent over the hero until the page scrolls (same rule as V1)
  var hdr = $('#hdr'), open = false;
  function hs() { var sc = scrollY > 40; hdr.dataset.scrolled = sc; hdr.dataset.overlay = !sc && !open; }
  addEventListener('scroll', hs, { passive: true }); hs();
  var mn = $('#mobileNav');
  function setOpen(v) { open = v; if (lenis) { v ? lenis.stop() : lenis.start(); } mn.dataset.open = v; mn.setAttribute('aria-hidden', !v); $('#menuOpen').setAttribute('aria-expanded', v); hs(); }
  $('#menuOpen').addEventListener('click', function () { setOpen(true); });
  $('#menuClose').addEventListener('click', function () { setOpen(false); });
  $('#nl').addEventListener('submit', function (e) { e.preventDefault(); });

  // hero slideshow
  var slides = $$('.c_slide'), nav = $$('#slideNav span'), idx = 0;
  function show(i) {
    var prev = idx; idx = i;
    slides.forEach(function (s, k) {
      if (k === i) { s.classList.remove('is-run'); void s.offsetWidth; s.classList.add('is-run'); s.setAttribute('data-on', ''); }
      else { s.removeAttribute('data-on'); if (k === prev) setTimeout(function () { if (!s.hasAttribute('data-on')) s.classList.remove('is-run'); }, 1900); }
    });
    nav.forEach(function (n, k) { n.dataset.on = k === i; });
  }
  setInterval(function () { show((idx + 1) % slides.length); }, 6000);

  // stat counters
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return; io.unobserve(en.target);
        var to = +en.target.dataset.count, t0 = performance.now();
        (function tick(t) { var p = Math.min(1, (t - t0) / 1800); en.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); })(t0);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { io.observe(el); });
  }

  // story reading progress + journey line
  var story = $('.c_story'), bar = $('#storyBar'), steps = $$('[data-step]'), jl = $('#jLine'), js = $('#jSteps'), jsvp = $('#jSteps');
  function prog(el, from, to) { var r = el.getBoundingClientRect(), vh = innerHeight; var a = vh * from, b = vh * to; return Math.max(0, Math.min(1, (a - r.top) / (r.height - (b - a) + (a - 0) * 0 || 1))); }
  var cw = $('#jCurtain'), jsec = $('#journey'), jlist = $('#jList'), pinMQ = matchMedia('(min-width: 1000px) and (min-height: 700px)');
  function sh() { return Math.max(innerHeight, 680); }
  function setPin() {
    var on = !reduce && pinMQ.matches;
    cw.dataset.on = on; $('.s_root').dataset.pin = on;
    cw.style.setProperty('--len', on ? Math.round(steps.length * 0.6 * innerHeight) + 'px' : '0px');
    if (!on) jlist.style.transform = '';
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  // subtle parallax: photos drift inside their frame; the second card in the pair drifts a little against the first
  var par = $$('[data-parallax]'), drift = $$('[data-drift]'), pimg = $$('[data-pimg]'), heroM = $('.c_heroMedia'), hero = $('.c_hero'), fimgs = $$('.j_jourFrame img'), jp = 0.5;
  pimg.forEach(function (im) { im.style.scale = innerWidth < 760 ? '1.24' : '1.14'; }); fimgs.forEach(function (im) { im.style.scale = '1.08'; });
  function parallax() {
    if (reduce) return; var vh = innerHeight;
    par.forEach(function (el) { var r = el.parentElement.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return; var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2))); el.style.transform = 'translate3d(0,' + (-p * el.dataset.parallax * (innerWidth < 760 ? 1.5 : 1)).toFixed(2) + '%,0)'; });
    // hero photo trails the scroll; sticky/pinned photos drift with their section's progress
    var hr = hero.getBoundingClientRect(); if (hr.bottom > 0) heroM.style.transform = 'translate3d(0,' + (Math.max(0, Math.min(1, -hr.top / hr.height)) * 12).toFixed(2) + '%,0)';
    pimg.forEach(function (im) { var box = im.closest('[data-pbox]') || im.parentElement, r = box.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return; var q = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height))) - 0.5; im.style.translate = '0 ' + (-q * 2 * im.dataset.pimg * (innerWidth < 760 ? 1.7 : 1)).toFixed(2) + '%'; });
    fimgs.forEach(function (im) { im.style.translate = '0 ' + ((0.5 - jp) * 6).toFixed(2) + '%'; });
    drift.forEach(function (el) { var r = el.getBoundingClientRect(); var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2))); el.style.transform = 'translate3d(0,' + (p * el.dataset.drift).toFixed(1) + 'px,0)'; });
  }
  function onScroll() {
    parallax();
    var vh = innerHeight;
    if (cw.dataset.on === 'true') {
      // pinned: scroll progress through the curtain drives the milestone
      var len = parseFloat(cw.style.getPropertyValue('--len')) || 1;
      var p = Math.max(0, Math.min(1, (-cw.getBoundingClientRect().top - sh()) / len));
      var n = steps.length, f = Math.max(0, Math.min(n - 1, p * n - 0.5));
      var i0 = Math.floor(f), i1 = Math.min(n - 1, i0 + 1), t = f - i0;
      var c = function (el) { return el.offsetTop + el.offsetHeight / 2; };
      var center = lerp(c(steps[i0]), c(steps[i1]), t);
      jlist.style.transform = 'translateY(' + (jsvp.clientHeight / 2 - center) + 'px)';
      // the line lives inside the moving list: it runs from the first dot to the last and fills up to the current one
      var c0 = c(steps[0]); jl.parentElement.style.top = c0 + 'px'; jl.parentElement.style.bottom = 'auto'; jl.parentElement.style.height = (c(steps[n - 1]) - c0) + 'px';
      var ai = Math.min(n - 1, Math.floor(p * n)); jl.style.transform = 'scaleY(' + ((c(steps[ai]) - c0) / ((c(steps[n - 1]) - c0) || 1)) + ')';
      jp = p; fimgs.forEach(function (im) { im.style.translate = '0 ' + ((0.5 - jp) * 6).toFixed(2) + '%'; });
      setStep(Math.min(n - 1, Math.floor(p * n)));
      return;
    }
    jl.parentElement.style.top = ''; jl.parentElement.style.bottom = ''; jl.parentElement.style.height = '';
    var q = js.getBoundingClientRect();
    jl.style.transform = 'scaleY(' + Math.max(0, Math.min(1, (vh * 0.55 - q.top) / q.height)) + ')';
    var best = 0, bd = 1e9;
    steps.forEach(function (s, i) { var b = s.getBoundingClientRect(), d = Math.abs((b.top + b.height / 2) - vh * 0.55); if (d < bd) { bd = d; best = i; } });
    setStep(best);
  }
  // counters roll like an odometer: the old value leaves, the new one slides in from the scroll direction
  function roll(el, text, dir) {
    var old = el.lastElementChild;
    if (!old || old.textContent === text) return;
    var nu = document.createElement('span'); nu.textContent = text;
    if (reduce || !old.animate) { old.textContent = text; return; }
    el.appendChild(nu);
    var o = { duration: 650, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' };
    old.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(' + (-dir * 110) + '%)', opacity: 0 }], o).onfinish = function () { old.remove(); };
    nu.animate([{ transform: 'translateY(' + (dir * 110) + '%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], o);
  }
  var cur = -1, frames = $$('.j_jourFrame'), ticks = $$('.j_jourTicks li');
  function setStep(i) {
    if (i === cur) return; var prev = cur; cur = i;
    var yr = +steps[i].dataset.year, t = Math.floor((yr % 100) / 10), o = yr % 10;
    $('#odoT').style.transform = 'translateY(' + (-t * 10) + '%)'; $('#odoO').style.transform = 'translateY(' + (-o * 10) + '%)';
    var tag = $('#jTag'); tag.textContent = steps[i].dataset.tag; tag.style.animation = 'none'; void tag.offsetWidth; tag.style.animation = '';
    var label = String(i + 1).padStart(2, '0') + ' / ' + String(steps.length).padStart(2, '0');
    // only the digit that changes rolls; the rest of "03 / 08" stays put
    ['#jHead'].forEach(function (id) { var cells = $$('.j_roll', $(id)), d = label.slice(0, 2); roll(cells[0], d[0], i > prev ? 1 : -1); roll(cells[1], d[1], i > prev ? 1 : -1); });
    steps.forEach(function (s, k) { k === i ? s.setAttribute('data-on', '') : s.removeAttribute('data-on'); Math.abs(k - i) > 1 ? s.setAttribute('data-far', '') : s.removeAttribute('data-far'); });
    frames.forEach(function (f, k) { k === i ? f.setAttribute('data-on', '') : f.removeAttribute('data-on'); k < i ? f.setAttribute('data-past', '') : f.removeAttribute('data-past'); });
    ticks.forEach(function (t2, k) { k <= i ? t2.setAttribute('data-on', '') : t2.removeAttribute('data-on'); });
  }
  pinMQ.addEventListener('change', function () { setPin(); onScroll(); });
  setPin(); addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', function () { setPin(); onScroll(); }); onScroll();
})();
"""

page = f"""<meta charset="utf-8">
<title>About IO Update</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600&display=swap">
<style>
:root {{ color-scheme: light; }}
{css}
</style>
<div class="s_root" data-wide data-blue="false">
{header}
<main><div class="c_page">
{hero}{intro}{why}{princ}{jour}
</div></main>
{footer}
</div>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
<script>{js}</script>
"""
(OUT / "about.html").write_text(page)
print(len(page) // 1024, "KB")
