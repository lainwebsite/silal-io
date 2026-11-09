"""Build the About, Team, News and News Detail pages (client PDFs, 2026-10-30).

Shell (CSS, header, footer) comes from the latest homepage, public/new-homepage-v2/index.html, exactly as the
Innovation & Venture pages do; the sections come from parts/ (capture.py: V1 About-D, V2 archive, V3 media band
and press releases). Writes out/: about.html, team.html, news.html, news-<slug>.html and the images they use.
Run: python3 build.py
"""
import html, json, pathlib, re, shutil, urllib.parse

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
PARTS = HERE / "parts"
OUT = HERE / "out"
HOME = (ROOT / "public/new-homepage-v2/index.html").read_text(encoding="utf8")
DATA = json.loads((PARTS / "data.json").read_text(encoding="utf8"))
part = lambda name: (PARTS / name).read_text(encoding="utf8")

# page -> file (artifact: every page is a file next to the others)
URL = {"home": "index.html", "about": "about.html", "team": "team.html", "news": "news.html"}
detail_url = lambda slug: f"news-{slug}.html"

# ---------------------------------------------------------------- shell
i = HOME.index("<style>\n:root")
css = HOME[i + 7:HOME.index("</style>", i)]
header = HOME[HOME.index('<header class="s_header"'):HOME.index("</header>") + len("</header>")]
footer = HOME[HOME.index('<footer class="s_footer">'):HOME.index("</footer>") + len("</footer>")]
header = header.replace('data-overlay="true"', 'data-overlay="false"')
header = header.replace('<a href="#" class="s_logo"', f'<a href="{URL["home"]}" class="s_logo"')
header = header.replace('<a href="#" data-active="true">About IO</a>', f'<a href="{URL["about"]}" data-active="true">About IO</a>')
header = header.replace('<a href="#" class="s_textLink">About IO', f'<a href="{URL["about"]}" class="s_textLink">About IO')
header = header.replace('<li><a href="#">Our Story</a></li>', f'<li><a href="{URL["about"]}">Our Story</a></li>')
header = header.replace('<li><a href="#">Team &amp; CEO Message</a></li>', f'<li><a href="{URL["team"]}">Team &amp; CEO Message</a></li>')
header = header.replace('<li><a href="#">Overview</a></li><li><a href="{0}">Our Story</a></li>'.format(URL["about"]),
                        '<li><a href="{0}">Overview</a></li><li><a href="{0}">Our Story</a></li>'.format(URL["about"]), 1)
header = header.replace('<a href="#">Resources</a>', f'<a href="{URL["news"]}">Resources</a>')
footer = footer.replace('<a href="#"><span data-reveal>About IO</span></a>', f'<a href="{URL["about"]}"><span data-reveal>About IO</span></a>')
footer = footer.replace('<a href="#"><span data-reveal>Content Library</span></a>', f'<a href="{URL["news"]}"><span data-reveal>Content Library</span></a>')

TEMPLATE = (HERE / "page.html").read_text(encoding="utf8")
used = set()


def page(fname, title, body, page_css=""):
    out = TEMPLATE.replace("{{TITLE}}", title).replace("{{SHELL_CSS}}", css).replace("{{PAGE_CSS}}", page_css)
    out = out.replace("{{HEADER}}", header).replace("{{FOOTER}}", footer).replace("{{BODY}}", body)
    out = out.replace("/new-homepage-v2/brand/", "brand/")
    # client comment 2026-10-30: no numbers in section labels on any page (02 Our People, 03 Media enquiries, PR, +)
    out = re.sub(r'<span class="(c_eyebrowNum|s3_labelN|n2_rowNum)">[^<]*</span>', "", out)
    # every root-relative asset becomes relative to the page; remember it to copy
    for m in re.findall(r'(?:src|href)="/((?:photos|V1|V3|brand|new-homepage-v2)/[^"]+)"', out):
        used.add(html.unescape(m))
    out = re.sub(r'((?:src|href)=")/((?:photos|V1|V3|brand|new-homepage-v2/img)/)', r"\1\2", out)
    (OUT / fname).write_text(out, encoding="utf8")
    print(fname, len(out))


def no_num(s):
    """About: section labels without numbers (PDF)."""
    return re.sub(r'<span class="c_eyebrowNum">\d+</span>', "", s)


def v3_links(s):
    s = re.sub(r'href="/V3/resources/news/([a-z0-9-]+)"', lambda m: f'href="{detail_url(m.group(1))}"', s)
    s = re.sub(r'href="/V3/resources/news(room)?"', f'href="{URL["news"]}"', s)
    s = re.sub(r'href="/V3"', f'href="{URL["home"]}"', s)
    return re.sub(r'href="/V3/[^"]*"', 'href="#"', s)


OUT.mkdir(exist_ok=True)
v2wrap = lambda inner: f'<div class="{" ".join(c for c in DATA["root2"] if c.startswith("c2_"))} {" ".join(DATA["page2"])}">{inner}</div>'
v3wrap = lambda inner: f'<div class="{" ".join(c for c in DATA["root3"] if c.startswith("s3_"))} {" ".join(DATA["page3"])}">{inner}</div>'
media = v3_links(part("v3-media.html"))
v2css, v3css = part("v2.css"), part("v3.css")

# ---------------------------------------------------------------- About: Our Story, Our Mission, Principles, Our Journey (V1 About-D)
# Journey (moved here from the homepage, comments 2026-10-30): the homepage's own journey (milestone tag + counter,
# odometer year, one photo per milestone, step list) laid out left to right as in the client's frame; each milestone
# and its dot is clickable so a reader can jump along the timeline.
i0 = HOME.index('<section class="j_journey'); journey = HOME[i0:HOME.index("</section>", i0) + len("</section>")]
journey = re.sub(r'<span id="jHead">.*?</span></span></p>', "</p>", journey, count=1, flags=re.S)
journey = journey.replace('<span id="jTag">Milestone</span></p>', '<span id="jTag">Milestone</span><span id="jCount">01 / 08</span></p>', 1)
journey = journey.replace('<li class="j_jourStep" data-step', '<li class="j_jourStep" tabindex="0" role="button" data-step')
journey = journey.replace(' c_curtainStick" id="journey"', '" id="journey"', 1)
# visible controls to jump along the timeline (comment 2026-10-30): one button per milestone + previous / next
years = re.findall(r'<p class="j_jourWhen">(.*?)</p>', journey)
arrow = lambda d, path: (f'<button type="button" class="x_jArrow" data-dir="{d}" aria-label="{"Previous" if d < 0 else "Next"} milestone">'
                         f'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="{path}" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>')
jnav = ('<span class="x_jNav" role="group" aria-label="Jump to a milestone"><span class="x_jYears">'
        + "".join(f'<button type="button" class="x_jYear">{y}</button>' for y in years) + "</span>"
        + arrow(-1, "M12 8H4M7.5 4.5L4 8l3.5 3.5") + arrow(1, "M4 8h8M8.5 4.5L12 8l-3.5 3.5") + "</span>")
journey = re.sub(r'(<p class="j_head">.*?</span>)(</p>)', lambda m: m.group(1) + jnav + m.group(2), journey, count=1, flags=re.S)
about = "".join(no_num(part(f"v1-{n}.html")) for n in ("story", "mission"))
# revision 6 November: vision and mission as in the Strategy Overview deck (client: "reflect the materials shared")
about = re.sub(r'<span class="c_eyebrow c_eyebrowLight">Our Mission</span><p class="c_missionText" data-reveal>.*?</p>',
               '<div class="x_vm"><div><span class="c_eyebrow c_eyebrowLight">Our Vision</span><p class="c_missionText x_vmText" data-reveal>'
               'To be the UAE&rsquo;s leading agriculture innovation engine, delivering innovative solutions that strengthen national food security '
               'and become a global leader for hot arid agriculture innovation.</p></div>'
               '<div><span class="c_eyebrow c_eyebrowLight">Our Mission</span><p class="c_missionText x_vmText" data-reveal>'
               'To develop and validate arid-adapted agricultural innovations, enable farmer adoption, and commercialize proven solutions.</p></div></div>',
               about, count=1, flags=re.S)
# Principles: no underline below its label (comment 2026-10-30) = the homepage's own Principles variant, c_noRule
about += no_num(part("v1-principles.html")).replace('<div class="c_headRow">', '<div class="c_headRow c_noRule">', 1)
about += f'<div class="x_jour" id="xJour" data-on="false">{journey}</div>'
arrow_svg_a = re.search(r'<a href="#" class="s_btn s_btnPrimary s_btnSm">Enquire (<svg.*?</svg>)', header, re.S).group(1)
# revision 6 November: About gets a sub-page "Our Ecosystem" (Shamal's request): key partners by category
about += ('<section class="c_section c_white x_ecoTeaser"><div class="s_wrap"><div class="x_ecoTeaserIn">'
          '<div><span class="c_eyebrow">Our Ecosystem</span><h2 class="x_ecoTeaserTitle" data-reveal>Food security cannot be solved in silos.</h2>'
          '<p class="c_lead" data-reveal>Meet the universities, startups, government entities and industry partners that make up the Innovation Oasis ecosystem.</p></div>'
          f'<a class="s_btn s_btnPrimary x_bioBtn" href="ecosystem.html">Explore our ecosystem {arrow_svg_a}</a></div></div></section>')
page(URL["about"], "About IO · Innovation Oasis", f'<div class="c_page x_about">{about}</div>')

ECO_ITEMS = ["World-class research facilities", "Commercial testbeds", "Venture development programs", "Industry partnerships",
             "Farmer networks", "Academic collaborators", "Investment pathways", "Food security stakeholders"]
# revision 9 November (owner: "use the REAL logos, no dummy logos"): every partner shows its own logo, collected from
# the partner's official site (logos/manifest.json in the review bundle lists the source of each file). Agri-Vit and
# CRETA Group have no logo that could be sourced: they keep a typographic tile until the client supplies one.
# (category, name, logo file in logos/ or None, visual scale of the artwork inside its tile, one-line role)
PARTNERS = [
    ("Academia", "Khalifa University", "khalifa-university.svg", 1.15, "Incubation partner for the Agri-Robotics 2026 cohort; advanced research and engineering."),
    ("Academia", "United Arab Emirates University", "uaeu.svg", 1.3, "College of Agriculture and Veterinary Medicine: agricultural research, experimental stations and laboratories."),
    ("Startups", "Raincatcher", "raincatcher.webp", 1.5, "Al Miyah Challenge finalist (UAE), tested in the field pilots at Innovation Oasis."),
    ("Startups", "EF Polymer", "ef-polymer.webp", 1, "Al Miyah Challenge finalist (India): a biodegradable superabsorbent made from fruit waste."),
    ("Startups", "M4LIFE", "m4life.png", 1, "Al Miyah Challenge finalist (Argentina): microbes that help soil hold water."),
    ("Startups", "Krilltech", "krilltech.png", 1.1, "Al Miyah Challenge finalist (Brazil): a bio-stimulant for water-use efficiency."),
    ("Startups", "Agri-Vit", None, 1, "Al Miyah Challenge finalist (Egypt): a foliar biostimulant for heat and salinity."),
    ("Startups", "CRETA Group", None, 1, "Al Miyah Challenge finalist (UAE): a greenhouse cooled by the ground."),
    ("Government", "Ministry of Climate Change and Environment", "moccae.svg", 1.3, "National priorities for sustainable, climate-smart agriculture; Farm Innovation Fund launch."),
    ("Government", "National Agriculture Centre", "nac-vertical.svg", 1.2, "Connection to UAE farmers, production priorities and support structures."),
    ("Government", "Abu Dhabi Agriculture and Food Safety Authority", "adafsa.png", 1.7, "Agriculture, food safety and biosecurity in Abu Dhabi; evaluation under local conditions."),
    ("Government", "Abu Dhabi Investment Office", "adio.png", 1.1, "Supports growth-stage startups landing in Abu Dhabi."),
    ("Government", "Mohamed bin Zayed Water Initiative", "mbzwi.png", 1.1, "Organiser of the Al Miyah Challenge for Agriculture."),
    ("Government", "ASPIRE", "aspire.svg", 1.1, "Innovation acceleration partner on the Al Miyah Challenge."),
    ("Industry", "Silal", "silal.svg", 1, "Innovation Oasis is part of Silal: business units pilot and adopt proven solutions."),
    ("Industry", "ADQ", "adq.svg", .95, "Silal's shareholder; portfolio companies as potential adopters of validated solutions."),
    ("Industry", "Delphy", "delphy.svg", 1, "Co-branded IO × Delphy courses in the IO Academy."),
    ("Industry", "Zayed for Good Foundation", "zayed-for-good.png", 1.35, "Strategic partner on the Al Miyah Challenge."),
]
CATS = ["Academia", "Startups", "Government", "Industry"]   # from the centre out: where an idea starts, to who adopts it
_left, _right = ECO_ITEMS[:4], ECO_ITEMS[4:]
_eco = ('<div class="s_eco x_ecoDiagram">'
        '<ul class="s_ecoCol" data-side="left" data-stagger="true">' + "".join(f'<li><span>{x}</span><i aria-hidden="true"></i></li>' for x in _left) + '</ul>'
        '<div class="s_ecoCore" data-reveal><img src="brand/io-mark.svg" alt="Innovation Oasis"></div>'
        '<ul class="s_ecoCol" data-side="right" data-stagger="true">' + "".join(f'<li><i aria-hidden="true"></i><span>{x}</span></li>' for x in _right) + '</ul></div>')


def _logo(name, file, scale, cls="eo_logo"):
    if not file:   # no logo could be sourced yet: the name, set as type (flagged in the report), never a drawn logo
        return f'<span class="{cls} eo_type">{html.escape(name)}</span>'
    return f'<img class="{cls}" src="logos/{file}" alt="{html.escape(name)}" style="--s:{scale}" decoding="async"/>'


_count = {c: sum(1 for p_ in PARTNERS if p_[0] == c) for c in CATS}
SHORT = {"United Arab Emirates University": "UAEU", "Ministry of Climate Change and Environment": "MOCCAE", "National Agriculture Centre": "NAC",
         "Abu Dhabi Agriculture and Food Safety Authority": "ADAFSA", "Abu Dhabi Investment Office": "ADIO", "Mohamed bin Zayed Water Initiative": "MBZWI"}
_etabs = ('<div class="eo_tabs" role="group" aria-label="Show partners by circle">'
          f'<button type="button" data-cat="all" aria-pressed="true">All<sup>{len(PARTNERS)}</sup></button>'
          + "".join(f'<button type="button" data-cat="{c}" aria-pressed="false">{c}<sup>{_count[c]:02d}</sup></button>' for c in CATS) + '</div>')
_panels = ('<div class="eo_panels">'
           '<div class="eo_panel" data-cat="all" data-on><p class="eo_hint">Four circles, from where an idea starts to who adopts it. Select one to see the part each partner plays.</p>'
           '<ul class="eo_legend">' + "".join(f'<li><button type="button" data-cat="{c}"><b>{c}<sup>{_count[c]:02d}</sup></b><span>'
               + ", ".join(SHORT.get(n, n) for c2, n, f, s, l in PARTNERS if c2 == c) + '</span></button></li>' for c in CATS) + '</ul></div>'
           + "".join(f'<div class="eo_panel" data-cat="{c}"><ul>' + "".join(
               f'<li data-n="{k}"><b>{html.escape(n)}</b><span>{html.escape(l)}</span></li>'
               for k, (c2, n, f, s, l) in enumerate(PARTNERS) if c2 == c) + '</ul></div>' for c in CATS) + '</div>')
_nodes = '<ul class="eo_nodes">' + "".join(
    f'<li class="eo_node" data-cat="{c}" data-n="{k}" tabindex="0" aria-label="{html.escape(n)}, {c}">{_logo(n, f, s)}'
    f'<span class="eo_nm" aria-hidden="true">{html.escape(n)}</span></li>' for k, (c, n, f, s, l) in enumerate(PARTNERS)) + '</ul>'
_cards = '<ul class="eo_cards">' + "".join(
    f'<li class="eo_card" data-cat="{c}"><div class="eo_cardLogo">{_logo(n, f, s)}</div><p class="eo_cardCat">{c}</p>'
    f'<h3 class="eo_cardName">{html.escape(n)}</h3><p class="eo_cardLine">{html.escape(l)}</p></li>' for c, n, f, s, l in PARTNERS) + '</ul>'
eco_body = ('<div class="c_page x_ecoPage">'
            # E1 · hero: the iO-mark diagram (kept), copy cut to a headline and one line
            '<section class="c_section c_white x_ecoHero"><div class="s_wrap">'
            f'<nav class="x_crumbs" aria-label="Breadcrumb"><a href="{URL["about"]}">About IO</a><span aria-hidden="true">/</span><span aria-current="page">Our Ecosystem</span></nav>'
            '<div class="c_headRow c_noRule"><span class="c_eyebrow">Our Ecosystem</span></div>'
            '<h1 class="x_ecoTitle" data-reveal>More than a research center. <span class="tm_blue">More than an accelerator.</span></h1>'
            '<p class="c_lead x_ecoLead" data-reveal>Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all.</p>'
            + _eco + '</div></section>'
            # E2 · the doc's outro as one statement on the deep-green chapter; the orbit lifts over it (curtain)
            '<section class="eo_silo" id="eoSilo" data-on="false"><div class="eo_siloStick"><div class="s_wrap">'
            '<span class="c_eyebrow c_eyebrowLight">Under one ecosystem</span>'
            '<p class="eo_siloBig" data-reveal>Food security cannot be solved <span class="eo_lime">in silos.</span></p>'
            '<p class="eo_siloLine" data-reveal>This integrated model allows promising ideas to move from concept to validation, from validation to adoption, '
            'and from local impact to global relevance.</p></div></div></section>'
            # E3 · signature: the partner ORBIT. Four rings around the iO mark, from the centre out: Academia, Startups,
            # Government, Industry; real logos orbit on them. Scroll (pinned) or the tabs light one ring at a time and list
            # its partners with their one-line roles. Phones: tabs + a logo grid.
            '<section class="eo_orbit" id="eoOrbit" data-mode="static"><div class="eo_stick"><div class="s_wrap eo_in">'
            '<div class="eo_copy"><span class="c_eyebrow">Key partners</span>'
            '<h2 class="tm_h2 tm_h2Dark" data-reveal>Who we <span class="tm_blue">work with.</span></h2>'
            '<p class="eo_lead" data-reveal>The universities, startups, government entities and industry partners behind our programmes, trials and research.</p>'
            + _etabs + _panels +
            '<p class="eo_note">Logos and roles as they appear in partner and programme material, subject to each partner&rsquo;s approval.</p></div>'
            '<div class="eo_stage" aria-hidden="false"><svg class="eo_rings" aria-hidden="true"></svg>'
            '<img class="eo_core" src="brand/io-mark.svg" alt="Innovation Oasis" />' + _nodes + '</div>'
            + _cards +
            '</div></div></section>'
            '<section class="c_section c_white x_ecoTeaser"><div class="s_wrap"><div class="x_ecoTeaserIn">'
            '<div><span class="c_eyebrow">Partner with us</span><h2 class="x_ecoTeaserTitle" data-reveal>Bring a challenge, a technology or a programme.</h2>'
            '<p class="c_lead" data-reveal>The Innovation Oasis team will find the right way to work together.</p></div>'
            f'<a class="s_btn s_btnPrimary x_bioBtn" href="ivp-enquire.html">Enquire {arrow_svg_a}</a></div></div></section>'
            '</div>')
page("ecosystem.html", "Our Ecosystem · About IO · Innovation Oasis", eco_body)


# ---------------------------------------------------------------- Team: Our People (V1 About-D) + media band (V3)
people = (part("v1-people.html").replace("Dr. Mohammed joined Silal", "Dr. Shamal joined Silal")  # PDF + comment 2026-10-30
          .replace(" — described above — ", " "))  # on its own page the story it pointed to is not above
m =re.search(r'<div class="c_teamHead">(.*?)</div>\s*<ul class="c_team"', people, re.S)
head = m.group(1)
title = re.search(r"<h3[^>]*>.*?</h3>", head, re.S).group(0)
intro = re.search(r'<p class="c_lead"[^>]*>(.*?)</p>', head, re.S).group(1)
label = re.search(r'<span class="c_mini">.*?</span>', head, re.S).group(0)
text = re.search(r'<p class="c_body">(.*?)</p>', head, re.S).group(1)
# client comment: the "Team members" text was odd as a label + two columns; keep one brief subtitle under "Our Team"
new_head = f'{title}<p class="c_lead x_teamSub" data-reveal>{intro.rstrip(".")}.</p>'
people = people[:m.start(1)] + new_head + people[m.end(1):]

# ---- every person gets a profile page (client comment), cross-linked from the team grid, the leadership block and each other
slugify = lambda name: re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
CEO = "Dr. Shamal Mohammed"
leader_text = re.search(r'<div class="c_leaderText">.*?<p class="c_body"[^>]*>(.*?)</p>', people, re.S).group(1)
leader_src = re.search(r'<div class="c_leaderImg">.*?src="([^"]+)"', people, re.S).group(1)
members = [{"name": CEO, "src": leader_src, "role": "Chief Executive Officer"}]
members += [{"name": n, "src": s, "role": None} for s, n in re.findall(r'<li><span class="c_teamImg"><img[^>]*src="([^"]+)"[^>]*/></span><span class="c_teamName">([^<]+)</span></li>', people)]
for p in members:
    p["slug"] = slugify(p["name"])
people = re.sub(r'<li><span class="c_teamImg">(.*?)</span><span class="c_teamName">([^<]+)</span></li>',
                lambda m: f'<li><a class="x_teamLink" href="team-{slugify(m.group(2))}.html"><span class="c_teamImg">{m.group(1)}</span><span class="c_teamName">{m.group(2)}</span></a></li>', people)
# ---- revision 9 November (owner: the Team page was "too safe, too newspaper, too static"; client comment #41: the
# four Vertical Leads first under Dr. Shamal, then the team by vertical: Science, Innovation, Commercial, Operations).
# Five chapters: T1 a living portrait mosaic, T2 Dr. Shamal with his scroll-lit quote, T3 the org helix (four strands
# from Dr. Shamal braid down into the four Vertical Leads, pinned, iO-blue chapter), T4 the team by vertical (tabs,
# FLIP), T5 the media band. Shameer has no photo yet: a monogram tile in iO blue, never a grey silhouette.
LEADS = [("Jude", "Director of Science & Research", "Science"), ("Francisco", "Head of Innovation", "Innovation"),
         ("Shameer", "Commercial Manager", "Commercial"), ("Sagar", "Operations Lead", "Operations")]
# the same monogram as an image (profile pages, related cards): ring of the iO "O" + initial, Arial = the brand's substitute
NO_PHOTO = ("data:image/svg+xml;utf8," + urllib.parse.quote(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="#3ca7d2"/>'
    '<circle cx="200" cy="235" r="118" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>'
    '<text x="200" y="235" dy=".35em" text-anchor="middle" font-family="Readex Pro, Arial, sans-serif" font-weight="300" '
    'font-size="150" fill="#fff">S</text>'
    '<text x="200" y="452" text-anchor="middle" font-family="Readex Pro, Arial, sans-serif" font-size="17" letter-spacing="3" '
    'fill="#fff" fill-opacity=".8">PORTRAIT TO FOLLOW</text></svg>'))
members.append({"name": "Shameer", "src": NO_PHOTO, "role": None, "slug": "shameer"})
for p_ in members:
    for n_, r_, t_ in LEADS:
        if p_["name"] == n_:
            p_["role"], p_["team"] = r_, t_
members[0]["team"] = "Leadership"
_by = {p_["name"]: p_ for p_ in members}
esc = html.escape
HS = "/photos/iO%20Team%20Headshot%20%26%20Bios/"
MONO = ('<span class="tm_mono" aria-hidden="true"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="38"/></svg>'
        '<b>S</b><small>Portrait to follow</small></span>')
role_of = lambda p_: p_.get("role") or "Role to be confirmed"


def _img(src, cls="", alt="", lazy=True):
    return f'<img class="{cls}" alt="{esc(alt)}" decoding="async"{" loading=\"lazy\"" if lazy else ""} src="{src}"/>'


# T1 · hero: the whole team as a living mosaic, five columns at different speeds; a portrait comes into colour as it
# crosses the middle of the screen. Every real headshot (two shots per person from the photo shoot), Shameer's monogram.
ALT = {"Dr. Shamal Mohammed": "Shamal/Shamal-10.jpg", "Ahmed": "Ahmed/Ahmed-4.jpg", "Ali": "Ali/Ali-2.jpg",
       "Nadia": "Nadia/Nadia-12.jpg", "Sagar": "Sagar/Sagar-12.jpg", "Caitlin": "Caitlin/Caitlin-2.jpg",
       "Francisco": "Francisco/Francisco-4.jpg", "Jude": "Jude/Jude-2.jpg", "Mohsin": "Mohsin/Mohsin-2.jpg"}
COLS = [[("Dr. Shamal Mohammed", 0), ("Nadia", 1), ("Francisco", 1), ("Ahmed", 0)],
        [("Jude", 0), ("Ali", 1), ("Sagar", 1), ("Caitlin", 0)],
        [("Mohsin", 0), ("Shameer", 0), ("Ahmed", 1), ("Nadia", 0)],
        [("Francisco", 0), ("Caitlin", 1), ("Dr. Shamal Mohammed", 1), ("Jude", 1)],
        [("Sagar", 0), ("Mohsin", 1), ("Ali", 0)]]


def _tile(name, alt):
    p_ = _by[name]
    face = MONO if name == "Shameer" else _img(p_["src"] if not alt else HS + ALT[name], lazy=False)
    return (f'<a class="tm_tile{" tm_tileMono" if name == "Shameer" else ""}" href="team-{p_["slug"]}.html">{face}'
            f'<span class="tm_cap"><b>{esc(name)}</b><i>{esc(role_of(p_))}</i></span></a>')


_mosaic = ('<div class="tm_mosaic" aria-label="The Innovation Oasis team">'
           + "".join(f'<div class="tm_col" data-col="{k}"><div class="tm_colIn">{"".join(_tile(*t) for t in col)}</div></div>'
                     for k, col in enumerate(COLS)) + '</div>')
t1 = ('<section class="tm_hero" id="tmHero"><div class="tm_heroText">'
      f'<nav class="x_crumbs" aria-label="Breadcrumb"><a href="{URL["about"]}">About IO</a><span aria-hidden="true">/</span><span aria-current="page">Team</span></nav>'
      '<span class="c_eyebrow">Our People</span>'
      '<h1 class="tm_h1" data-reveal>The people behind <span class="tm_blue">every&nbsp;trial.</span></h1>'
      f'<p class="tm_heroLead" data-reveal>{intro.rstrip(".").replace("Behind every laboratory, trial and partnership at Innovation Oasis is", "Behind every laboratory, trial and partnership is")}.</p>'
      '<a class="tm_down" href="#tmLeader"><span>Meet the team</span><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>'
      f'</div>{_mosaic}</section>')

# T2 · leadership: Dr. Shamal, portrait whole, the quote lit word by word with the scroll; the rest of his story is on
# his profile (one click), so this chapter keeps to label + quote + two lines + button
arrow_svg = re.search(r'<a href="#" class="s_btn s_btnPrimary s_btnSm">Enquire (<svg.*?</svg>)', header, re.S).group(1)
_q = "If it works here, it can work anywhere."
_qw = _q.split(" ")
t2 = ('<section class="tm_leader" id="tmLeader"><div class="s_wrap tm_leaderIn">'
      f'<a class="tm_leaderImg" href="team-{slugify(CEO)}.html" aria-label="{CEO}, profile"><div class="c_photo" data-img="true"><div class="c_photoInner" data-parallax="5">'
      f'{_img(leader_src, alt=CEO + ", CEO, Innovation Oasis")}</div></div></a>'
      '<div class="tm_leaderText"><span class="c_eyebrow">Leadership</span>'
      '<blockquote class="tm_quote"><p aria-label="' + esc(_q) + '">'
      + " ".join(f'<span class="tm_w{" tm_wLast" if k == len(_qw) - 1 else ""}" aria-hidden="true">{esc(w)}</span>' for k, w in enumerate(_qw))
      + '</p></blockquote>'
      '<p class="tm_who"><b>Dr. Shamal Mohammed</b><span>Chief Executive Officer</span></p>'
      '<p class="tm_leaderLead" data-reveal>Joined Silal in 2021 to build its innovation and R&amp;D function from the ground up, '
      'after more than two decades running agricultural research facilities in the UK.</p>'
      f'<a class="s_btn s_btnPrimary tm_btn" href="team-{slugify(CEO)}.html">Read Dr. Shamal&rsquo;s profile {arrow_svg}</a>'
      '</div></div></section>')

# T3 · signature: the org helix. Four strands leave Dr. Shamal and braid down like the helix inside the iO mark (rungs
# with a dot at each end); each strand lands on its Vertical Lead. Scroll draws it (pinned, desktop); on phones the
# helix runs down the left edge and peels off into each lead as you pass. Hover a lead: its strand lights.
def _lead(k, n_, r_, t_):
    p_ = _by[n_]
    face = MONO if n_ == "Shameer" else _img(p_["src"], alt=n_)
    return (f'<li class="tm_lead" data-k="{k}"><a href="team-{p_["slug"]}.html"><span class="tm_leadImg">{face}</span>'
            f'<span class="tm_leadTxt"><span class="tm_leadV">{t_}</span><b>{esc(n_)}</b><i>{esc(r_)}</i></span></a></li>')


t3 = ('<section class="tm_org" id="tmOrg" data-on="false"><div class="tm_orgStick">'
      '<svg class="tm_orgSvg" aria-hidden="true"><g class="tm_rungs"></g><g class="tm_strands"></g><g class="tm_heads"></g></svg>'
      '<div class="s_wrap tm_orgIn"><div class="tm_orgCopy"><span class="c_eyebrow c_eyebrowLight">Structure</span>'
      '<h2 class="tm_h2" data-reveal>One team, <span class="tm_lightBlue">four verticals.</span></h2>'
      '<p class="tm_orgLead" data-reveal>Each of Innovation Oasis&rsquo;s four verticals is led by a member of the leadership team.</p>'
      '<ol class="tm_orgKey" aria-hidden="true">' + "".join(f'<li data-k="{k}"><span>{k + 1:02d}</span>{t_}</li>' for k, (n_, r_, t_) in enumerate(LEADS)) + '</ol></div>'
      '<div class="tm_orgDia">'
      f'<a class="tm_node" href="team-{slugify(CEO)}.html"><span class="tm_nodeImg">{_img(HS + ALT[CEO], alt="")}</span>'
      '<span class="tm_nodeTxt"><b>Dr. Shamal Mohammed</b><i>Chief Executive Officer</i></span></a>'
      '<div class="tm_orgGap"></div>'
      '<ol class="tm_leads" aria-label="Vertical Leads">' + "".join(_lead(k, *l) for k, l in enumerate(LEADS)) + '</ol>'
      '</div></div></div></section>')

# T4 · the team by vertical: tabs (Science, Innovation, Commercial, Operations, Everyone); the grid re-flows (FLIP).
# Only the leads have a confirmed vertical so far: everyone else is in "Everyone" with a quiet "Placement to be confirmed".
ORDER = [CEO] + [n_ for n_, r_, t_ in LEADS] + [p_["name"] for p_ in members if p_["name"] != CEO and not p_.get("team")]


def _person(name):
    p_ = _by[name]
    v = p_.get("team", "")
    face = MONO if name == "Shameer" else _img(p_["src"], alt=name)
    tag = ("Vertical Lead" if v in [t_ for _, _, t_ in LEADS] else "CEO" if name == CEO else "Placement to be confirmed")
    return (f'<li class="tm_p" data-v="{v.lower()}"><a href="team-{p_["slug"]}.html"><span class="tm_pImg">{face}'
            f'<span class="tm_pMore">View profile {arrow_svg}</span></span>'
            f'<span class="tm_pName">{esc(name)}</span><span class="tm_pRole">{esc(role_of(p_))}</span>'
            f'<span class="tm_pTag" data-t="{"tbc" if tag.startswith("Placement") else "on"}">{tag}{" · " + v if v and v != "Leadership" else ""}</span></a></li>')


_tabs = [(t_.lower(), t_, 1) for _, _, t_ in LEADS] + [("all", "Everyone", len(ORDER))]
t4 = ('<section class="tm_teams" id="tmTeams"><div class="s_wrap">'
      '<div class="tm_teamsHead"><div><span class="c_eyebrow">Our Teams</span>'
      '<h2 class="tm_h2 tm_h2Dark" data-reveal>Different disciplines. <span class="tm_blue">One mandate.</span></h2>'
      f'<p class="tm_teamsLead" data-reveal>{text.split("one mandate: ")[1][0].upper() + text.split("one mandate: ")[1][1:]}</p></div>'
      '<div class="tm_tabs" role="group" aria-label="Show a team">'
      + "".join(f'<button type="button" data-f="{k}" aria-pressed="{"true" if k == "all" else "false"}">{lab}<sup>{c:02d}</sup></button>' for k, lab, c in _tabs)
      + '</div></div>'
      '<ul class="tm_grid">' + "".join(_person(n_) for n_ in ORDER)
      # a vertical's tab: its lead, and beside it what is known so far (never an empty "added from the CMS" box)
      + "".join(f'<li class="tm_vNote" data-v="{t_.lower()}" hidden><span class="c_eyebrow">{t_}</span>'
                f'<p class="tm_vLed">Led by <a href="team-{_by[n_]["slug"]}.html">{n_}</a>, {esc(r_)}.</p>'
                f'<p class="tm_vMore">More of the {t_} team will be listed here once placements are confirmed.</p></li>' for n_, r_, t_ in LEADS)
      + '</ul>'
      '</div></section>')
team_body = f'<div class="c_page x_team tm_page">{t1}{t2}{t3}{t4}</div>{v3wrap(media)}'
page(URL["team"], "Team &amp; CEO Message · Innovation Oasis", team_body, v3css)

# the profile uses the press-release template (V3 detail): label, breadcrumb, title + lead, facts card in the aside,
# text column with the About box, previous / next, then three more people as related cards
d0 = json.loads((PARTS / "detail" / f"{DATA['slugs'][0]}.html").read_text(encoding="utf8"))["html"]
boiler = re.search(r'<div class="n3_boiler">.*?</div>', d0, re.S).group(0)
share = re.search(r'<p class="n3_shareLabel">.*?</ul>', d0, re.S).group(0)
go_svg = re.search(r'<span aria-hidden="true" class="s3_goO">.*?</span>', d0, re.S).group(0)
for i, p in enumerate(members):
    first = p["name"].replace("Dr. ", "Dr ").split(" ")[0] if p["name"] != CEO else "Dr. Shamal"
    url = f'https://silal-io.vercel.app/team/{p["slug"]}'
    sh = re.sub(r'https%3A%2F%2Fsilal-io\.vercel\.app%2F[^"&]*', urllib.parse.quote(url, safe=""), share)
    sh = re.sub(r'(subject=|text=)[^"&]*', lambda m: m.group(1) + urllib.parse.quote(p["name"] + " · Innovation Oasis"), sh)
    # revision 9 November: no "About Innovation Oasis" box on a person's page (client: "makes no sense to explain about iO
    # here"); a short description, then the long one, then credentials (degrees, certifications, awards, publications)
    if p["name"] == CEO:
        short = "Leads Innovation Oasis, Silal&rsquo;s R&amp;D and venture engine in Al Ain."
        long = (f'<p>{leader_text.replace(" — described above — ", " ")}</p><p class="n3_bioQuote">&ldquo;If it works here, it can work anywhere.&rdquo;</p>')
        note = "Profile text from the About page. Full bio and credentials to be supplied by Innovation Oasis."
    else:
        short = f'{first} is part of the small, hands-on team behind every laboratory, trial and partnership at Innovation Oasis.'
        long = (f'<p class="x_bioTbc">Long description: background, expertise and current focus at Innovation Oasis, in two or three short paragraphs.</p>')
        note = "Sample profile shown for layout. Role, bio and credentials to be supplied by Innovation Oasis."
    creds = "".join(f'<div class="x_credRow"><h2 class="x_credH">{h}</h2><ul class="x_credList"><li class="x_bioTbc">{t}</li></ul></div>' for h, t in (
        ("Education", "Degree, institution, year"), ("Certifications", "Certification, issuing body, year"),
        ("Awards", "Award, organisation, year"), ("Publications", "Title, journal or publisher, year")))
    text = (f'<p class="x_bioShort">{short}</p><div class="x_bioLong">{long}</div>'
            f'<section class="x_creds" aria-label="Credentials">{creds}</section>')
    role = p["role"] or "Role to be confirmed"
    others = [members[(i + k) % len(members)] for k in (1, 2, 3)]
    cards = "".join(f'<li><a class="n3_card" href="team-{o["slug"]}.html"><div class="n3_cardImg"><img alt="{html.escape(o["name"])}" decoding="async" loading="lazy" src="{o["src"]}" '
                    'style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:cover;object-position:50% 50%"/>'
                    f'</div><p class="n3_cardDate">{o["role"] or "Innovation Oasis"}</p><h3 class="n3_cardTitle">{o["name"]}</h3></a></li>' for o in others)
    body = (f'<article class="x_bio"><header class="n3_head"><div class="n3_wrap"><p class="s3_label"><span class="s3_labelN">02</span><span>Our People</span><i aria-hidden="true" class="s3_labelRule"></i></p>'
            f'<nav aria-label="Breadcrumb" class="n3_crumbs"><a href="{URL["about"]}">About IO</a><span aria-hidden="true">/</span><a href="{URL["team"]}">Team</a><span aria-hidden="true">/</span><span aria-current="page">{p["name"]}</span></nav>'
            f'<h1 class="n3_articleTitle" data-reveal>{p["name"]}</h1><p class="n3_articleLead">{role}, Innovation Oasis</p></div></header>'
            f'<div class="n3_wrap"><div class="n3_articleGrid"><aside class="n3_aside"><div class="x_bioImg"><img alt="{html.escape(p["name"])}" src="{p["src"]}"/></div>'
            f'<dl class="n3_metaCard"><div><dt>Role</dt><dd>{role}</dd></div><div><dt>Team</dt><dd>{p.get("team", "Innovation Oasis")}</dd></div></dl></aside>'
            f'<div class="n3_article">{text}<p class="n3_note">{note}</p></div></div>'
            f'</div></article>'  # no previous / next row (comment 2026-10-30); "More of the team" below links on
            f'<section aria-labelledby="rel-h" class="n3_sec"><div class="n3_wrap"><p class="s3_label"><span class="s3_labelN">+</span><span>Our People</span><i aria-hidden="true" class="s3_labelRule"></i></p>'
            f'<div class="n3_relHead"><h2 class="n3_h2" data-reveal id="rel-h">More of the team</h2><a class="s3_go" href="{URL["team"]}"><span class="s3_goText">The whole team</span>{go_svg}</a></div>'
            f'<ul class="n3_grid x_relTeam">{cards}</ul></div></section>')
    page(f'team-{p["slug"]}.html', f'{html.escape(p["name"])} · Our People · Innovation Oasis', v3wrap(body + media), v3css)

# ---------------------------------------------------------------- News: the archive (V2) with all its releases + media band
MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split()
fmt = lambda iso: f"{iso[8:10]} {MONTHS[int(iso[5:7]) - 1]} {iso[:4]}"
items = sorted(DATA["v2"], key=lambda r: r["date"], reverse=True)
cards = []
for n, r in enumerate(items, 1):
    words = html.escape(f'{r["title"]} {r["excerpt"]}'.lower())
    cards.append(
        f'<li class="n2_card" data-cat="{r["category"]}" data-year="{r["date"][:4]}" data-text="{words}">'
        f'<a class="n2_cardLink" href="{detail_url(r["slug"])}"><div class="n2_cardImg"><img alt="{html.escape(r.get("alt", ""))}" decoding="async" loading="lazy" src="{r["src"]}" '
        'style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:cover"/><span aria-hidden="true" class="n2_corners"></span></div>'
        f'<p class="n2_meta"><time datetime="{r["date"]}">{fmt(r["date"])}</time><span class="n2_metaCat">{r["category"]}</span></p>'
        f'<h3 class="n2_cardTitle">{r["title"]}</h3><p class="n2_cardExcerpt">{r["excerpt"]}</p><span class="n2_more">Read more</span></a></li>')
arc = part("v2-archive.html")
arc = re.sub(r'<ul class="n2_grid">.*?</ul>', '<ul class="n2_grid">' + "".join(cards) + "</ul>"
             '<div class="n2_empty" hidden><p>No releases match these filters.</p><button type="button" class="n2_reset">Clear filters</button></div>', arc, flags=re.S)
arc = re.sub(r'<button aria-pressed="(\w+)" class="n2_chip" type="button">([^<]+)<sup>', r'<button aria-pressed="\1" class="n2_chip" type="button" data-cat="\2">\2<sup>', arc)
arc = arc.replace('<div><div class="n2_filters">', '<div data-archive><div class="n2_filters">', 1)
page(URL["news"], "Press Releases · News &amp; Media · Innovation Oasis", f'<div class="x_news">{v2wrap(arc)}</div>{v3wrap(media)}', v2css + v3css)

# ---------------------------------------------------------------- News detail: the V3 press release, every release
for slug in DATA["slugs"]:
    d = json.loads((PARTS / "detail" / f"{slug}.html").read_text(encoding="utf8"))
    # client comment: the "Media enquiries" strip inside the article repeated the band at the end of the page
    art = re.sub(r'<div class="n3_enquiry">.*?</a></div>', "", d["html"], count=1, flags=re.S)
    page(detail_url(slug), f'{html.escape(d["title"])} · Innovation Oasis', v3wrap(v3_links(art) + media), v3css)

# ---------------------------------------------------------------- images
n = 0
for rel in sorted(used):
    src = ROOT / "public" / urllib.parse.unquote(rel)
    if src.is_file():
        dst = OUT / urllib.parse.unquote(rel)
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dst)
        n += 1
    else:
        print("missing", rel)
print("assets", n)
