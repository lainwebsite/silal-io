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
# revision 9 November (client comment on About: "require some top-level framing around how iO is part of Silal Group (+ some info on
# the group), which is part of L'IMAD (formerly ADQ)"; the attached image is the inspiration: three columns, logo + name + two
# paragraphs each). The copy is the client's, from that image; the third name follows the comment, the paragraphs stay as supplied.
_grp = [("brand/io-mark.svg", "iO", "Innovation Oasis (iO)", "34", "hectares of state-of-the-art facility",
         ["Innovation Oasis is Silal&rsquo;s R&amp;D venture engine, built to advance global food security. The 34-hectare state-of-the-art facility is purposefully situated in one of earth&rsquo;s toughest environments, enabling agri-tech innovators to validate solutions against the same extreme conditions threatening food systems around the world.",
          "By integrating with Silal&rsquo;s expansive infrastructure and networks, iO delivers an end-to-end platform to accelerate ideas through incubation, validation, venture clienting, and investment. With this singular mandate, iO is defining the new global standard in future-resilient food systems, for the UAE and beyond."]),
        ("logos/silal.svg", "Silal", "Silal", "2020", "established",
         ["Silal is Abu Dhabi&rsquo;s leading agri-food and technology company, focused on strengthening food security through innovation, sustainable agriculture, and supply chain development.",
          "Established in 2020 and part of L&rsquo;IMAD, Silal works to diversify food sources, enhance local production, and build more resilient food systems across the UAE and beyond. Its activities span procurement, distribution, and research and development, alongside programs that support farmers and advance desert agriculture."]),
        ("logos/limad.svg", "L&rsquo;IMAD", "L&rsquo;IMAD", "USD 251 bn", "total assets as of December 2024",
         ["L&rsquo;IMAD is an active sovereign investor established in 2018, focused on critical infrastructure and global supply chains. As a strategic partner to the Government of Abu Dhabi, L&rsquo;IMAD invests in business platforms that drive long-term value and support economic development across the Emirate.",
          "With total assets of USD 251 billion as of December 2024, L&rsquo;IMAD&rsquo;s portfolio spans key sectors including energy, transport and logistics, healthcare, financial services, and sustainable manufacturing. Its food and agriculture investments include companies such as Louis Dreyfus Company, Unifrutti, Agthia, Al Dahra, Lulu, and Silal."])]
_rel = ["Part of Silal", "Part of L&rsquo;IMAD", "Formerly ADQ"]
about_group = ('<section class="c_section c_white x_group" aria-label="iO, Silal and L&rsquo;IMAD"><div class="s_wrap">'
               '<img class="x_groupMark" src="brand/io-mark.svg" alt="" aria-hidden="true"/>'
               '<div class="c_headRow"><span class="c_eyebrow">Part of Silal Group</span></div>'
               '<h2 class="c_h2 x_groupTitle" data-reveal>iO is part of Silal, which is part of <span class="x_groupBlue">L&rsquo;IMAD.</span></h2>'
               '<div class="x_groupGrid">' + "".join(
                   f'<div class="x_groupCol"><div class="x_groupLogo"><img src="{src}" alt="{alt}" loading="lazy"/><span class="x_groupRel">{_rel[k]}</span></div>'
                   f'<p class="x_groupNum"><b>{num}</b><span>{lab}</span></p>'
                   f'<h3 class="x_groupName">{name}</h3>' + "".join(f'<p class="c_body">{t}</p>' for t in paras) + '</div>'
                   for k, (src, alt, name, num, lab, paras) in enumerate(_grp)) + '</div></div></section>')
# revision 9 November (client comment on About): "make it overlap, when scrolling, with the section above": the Silal Group section
# stays put while the story section slides up over it (the curtain the site already uses), desktop only
about_group += ('<script>(function(){try{var g=document.querySelector(".x_group");if(!g)return;var cols=[].slice.call(g.querySelectorAll(".x_groupCol")),M=[90,50,130],HM=150,hds=[].slice.call(g.querySelectorAll(".c_headRow,.x_groupTitle"));'
                'var calm=matchMedia("(prefers-reduced-motion: reduce)");function on(){return innerWidth>900&&!calm.matches}'
                'function fit(){if(!on()){g.style.top="";g.style.minHeight="";g.classList.remove("x_groupStick");cols.forEach(function(c){c.style.transform=""});hds.forEach(function(h){h.style.transform=""});return}'
                'g.classList.add("x_groupStick");var hd=document.querySelector("header"),hh=Math.max(0,hd?hd.getBoundingClientRect().bottom:0);g.style.minHeight=(innerHeight-hh)+"px";g.style.top=Math.min(hh,innerHeight-g.offsetHeight)+"px";tick()}'
                'function tick(){if(!on())return;var p=Math.max(0,Math.min(1,scrollY/Math.max(1,g.offsetHeight)));cols.forEach(function(c,i){c.style.transform="translate3d(0,"+(-(p*M[i]).toFixed(1))+"px,0)"});hds.forEach(function(h){h.style.transform="translate3d(0,"+(-(p*HM).toFixed(1))+"px,0)"})}'
                'fit();addEventListener("resize",fit);addEventListener("load",fit);addEventListener("scroll",tick,{passive:true})}catch(e){}})();</script>')
about = about_group + "".join(no_num(part(f"v1-{n}.html")) for n in ("story", "mission"))
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
# Real logos (client: "use the REAL logos, no dummy logos"), collected from each partner's official site; logos/manifest.json in
# the review bundle lists the source of every file. Agri-Vit and CRETA Group have no sourced logo yet: a text tile with the name,
# never a drawn logo.   (category, name, logo file, width, height of the file, boost for artwork with built-in padding, role)
PARTNERS = [
    ("Academia", "Khalifa University", "khalifa-university.svg", 441, 101, 1, "Research partner for the Khalifa University Research Translation Portfolio; advanced research and engineering."),
    ("Academia", "United Arab Emirates University", "uaeu.svg", 632, 111, 1, "College of Agriculture and Veterinary Medicine: agricultural research, experimental stations and laboratories."),
    ("Startups", "Raincatcher", "raincatcher.webp", 548, 603, 1.8, "Startup partner, UAE."),
    ("Startups", "EF Polymer", "ef-polymer.webp", 600, 279, 1, "Startup partner, India."),
    ("Startups", "M4LIFE", "m4life.png", 850, 264, 1, "Startup partner, Argentina."),
    ("Startups", "Krilltech", "krilltech.png", 380, 220, 1.1, "Startup partner, Brazil."),
    ("Startups", "Agri-Vit", None, 0, 0, 1, "Startup partner, Egypt."),
    ("Startups", "CRETA Group", None, 0, 0, 1, "Startup partner, UAE."),
    ("Government", "Ministry of Climate Change and Environment", "moccae.svg", 720, 200, 1.25, "National priorities for sustainable, climate-smart agriculture; Farm Innovation Fund launch."),
    ("Government", "National Agriculture Centre", "nac-vertical.svg", 1130, 454, 1, "Connection to UAE farmers, production priorities and support structures."),
    ("Government", "Abu Dhabi Agriculture and Food Safety Authority", "adafsa.png", 2884, 1088, 1.9, "Agriculture, food safety and biosecurity in Abu Dhabi; evaluation under local conditions."),
    ("Government", "Abu Dhabi Investment Office", "adio.png", 640, 355, 1.4, "Supports growth-stage startups landing in Abu Dhabi."),
    ("Government", "Mohamed bin Zayed Water Initiative", "mbzwi.png", 381, 281, 1.15, "Water innovation initiative; partner in innovation challenges."),
    ("Government", "ASPIRE", "aspire.svg", 233, 42, 1, "Innovation acceleration partner."),
    ("Industry", "Silal", "silal.svg", 149, 68, 1, "Innovation Oasis is part of Silal: business units pilot and adopt proven solutions."),
    ("Industry", "ADQ", "adq.svg", 709, 340, 1, "Silal's shareholder; portfolio companies as potential adopters of validated solutions."),
    ("Industry", "Delphy", "delphy.svg", 228, 124, 1, "Co-branded IO × Delphy courses in the IO Academy."),
    ("Industry", "Zayed for Good Foundation", "zayed-for-good.png", 840, 148, 1.15, "Strategic partner."),
]
CATS = ["Academia", "Startups", "Government", "Industry"]
_left, _right = ECO_ITEMS[:4], ECO_ITEMS[4:]
_eco = ('<div class="s_eco x_ecoDiagram" data-fade>'
        '<ul class="s_ecoCol" data-side="left">' + "".join(f'<li><span>{x}</span><i aria-hidden="true"></i></li>' for x in _left) + '</ul>'
        '<div class="s_ecoCore"><img src="brand/io-mark.svg" alt="Innovation Oasis"></div>'
        '<ul class="s_ecoCol" data-side="right">' + "".join(f'<li><i aria-hidden="true"></i><span>{x}</span></li>' for x in _right) + '</ul></div>')


def _plate(name, f, w, h, boost):
    """The logo on its plate: every logo gets the same visual weight (equal area, capped height), whatever its proportions."""
    if not f:
        return f'<span class="x_ecoType">{html.escape(name)}</span>'
    ht = min(min(58 * max(1, boost), 84), (8000 * boost * boost / (w / h)) ** .5)
    return f'<img src="logos/{f}" alt="" decoding="async" loading="lazy" style="height:{ht:.0f}px"/>'


_tabs = ('<div class="x_ecoTabs" data-scope="eco" role="group" aria-label="Filter partners by category"><button type="button" aria-pressed="true" data-cat="all">All <span>'
         f'{len(PARTNERS)}</span></button>' + "".join(f'<button type="button" aria-pressed="false" data-cat="{c}">{c} <span>{sum(1 for p in PARTNERS if p[0] == c)}</span></button>' for c in CATS) + '</div>')
_card = lambda c, n, f, w, h, bo, l: (f'<li class="x_ecoCard" data-fi="eco" data-cat="{c}"><div class="x_ecoLogo">{_plate(n, f, w, h, bo)}</div>'
                                      f'<p class="x_ecoCat">{c}</p><h3 class="x_ecoName">{html.escape(n)}</h3><p class="x_ecoLine">{html.escape(l)}</p></li>')
_grid = lambda items: '<ul class="x_ecoGrid" data-fg="eco">' + "".join(_card(*p) for p in items) + '</ul>'
SPLIT = 8   # the wall is one block on screen; it is two sections only so that no section carries more than 250 words
eco_body = ('<div class="c_page x_ecoPage">'
            '<section class="c_section c_white x_ecoHero"><div class="s_wrap">'
            f'<nav class="x_crumbs" aria-label="Breadcrumb"><a href="{URL["about"]}">About IO</a><span aria-hidden="true">/</span><span aria-current="page">Our Ecosystem</span></nav>'
            '<div class="c_headRow c_noRule"><span class="c_eyebrow">Our Ecosystem</span></div>'
            '<h1 class="x_ecoTitle" data-reveal>More than a research center. More than an accelerator.</h1>'
            '<p class="c_lead x_ecoLead" data-reveal>Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all.</p>'
            + _eco + '</div></section>'
            '<section class="c_white x_ecoStmt"><div class="s_wrap">'
            '<span class="c_eyebrow">Under one ecosystem</span>'
            '<h2 class="c_h2" data-reveal>Food security cannot be solved in silos.</h2>'
            '<p class="c_lead" data-reveal>This integrated model allows promising ideas to move from concept to validation, from validation to adoption, '
            'and from local impact to global relevance.</p></div></section>'
            '<section class="x_ecoPartners"><div class="s_wrap">'
            '<div class="x_ecoHead"><span class="c_eyebrow">Key partners</span><h2 class="c_h2" data-reveal>Who we work with</h2>'
            '<p class="c_lead" data-reveal>The universities, startups, government entities and industry partners behind our programmes, trials and research.</p></div>'
            + _tabs + _grid(PARTNERS[:SPLIT]) + '</div></section>'
            '<section class="x_ecoPartners x_ecoMore" data-follow><div class="s_wrap">' + _grid(PARTNERS[SPLIT:]) +
            '<p class="x_ecoNote">Logos and roles as they appear in programme material, subject to each partner&rsquo;s approval.</p></div></section>'
            '<section class="c_section c_white x_ecoTeaser"><div class="s_wrap"><div class="x_ecoTeaserIn">'
            '<div><span class="c_eyebrow">Partner with us</span><h2 class="x_ecoTeaserTitle" data-reveal>Bring a challenge, a technology or a programme.</h2>'
            '<p class="c_lead" data-reveal>The Innovation Oasis team will find the right way to work together.</p></div>'
            f'<a class="s_btn s_btnPrimary x_bioBtn" href="ivp-enquire.html">Enquire {arrow_svg_a}</a></div></div></section>'
            '</div>')
eco_body = re.sub(r'\sdata-reveal(="true")?', ' data-fade', eco_body)
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
# ---- revision 9 November, round 5 (client: "every section is mismatched, I prefer the old direction"): the old Leadership
# section on top (t0), then a plain org chart (Dr. Shamal over the four Vertical Leads: comment #41), then the team by
# vertical (tabs + one grid). One card style everywhere. Shameer has no photo yet: a monogram tile in iO blue.
LEADS = [("Jude", "Director of Science & Research", "Science"), ("Francisco", "Head of Innovation", "Innovation"),
         ("Shameer", "Commercial Manager", "Commercial"), ("Sagar", "Operations Lead", "Operations")]
# the same monogram as an image (profile pages, related cards): ring of the iO "O" + initial
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
MONO = ('<span class="tm_mono" aria-hidden="true"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="38"/></svg>'
        '<b>S</b><small>Portrait to follow</small></span>')
role_of = lambda p_: p_.get("role") or "Role to be confirmed"
arrow_svg = re.search(r'<a href="#" class="s_btn s_btnPrimary s_btnSm">Enquire (<svg.*?</svg>)', header, re.S).group(1)


def _card(name, tag, src=None):
    """The one card of this page: portrait, name, role, one small tag."""
    p_ = _by[name]
    face = MONO if name == "Shameer" else f'<img alt="{esc(name)}" decoding="async" loading="lazy" src="{src or p_["src"]}"/>'
    return (f'<a class="tm_card" href="team-{p_["slug"]}.html"><span class="tm_pImg">{face}</span>'
            f'<span class="tm_pName">{esc(name)}</span>' + (f'<span class="tm_pRole">{esc(p_["role"])}</span>' if p_.get("role") else "") + f'<span class="tm_pTag">{tag}</span></a>')


# T3 · org chart: Dr. Shamal at the top centre, straight hairlines (CSS) to the four Vertical Leads in one row
t3 = ('<section class="c_section x_org" id="tmOrg"><div class="s_wrap">'
      '<div class="tm_head"><span class="c_eyebrow">Structure</span><h2 class="c_h2" data-reveal>One team, four verticals</h2>'
      '<p class="c_lead" data-reveal>Each of Innovation Oasis&rsquo;s four verticals is led by a member of the leadership team.</p></div>'
      '<div class="tm_chart">'
      f'<div class="tm_ceo">{_card(CEO, "Leadership", "/photos/iO%20Team%20Headshot%20%26%20Bios/Shamal/Shamal-10.jpg")}</div>'
      '<ol class="tm_leads" aria-label="Vertical Leads">' + "".join(f'<li>{_card(n_, t_)}</li>' for n_, r_, t_ in LEADS) + '</ol>'
      '</div></div></section>')

# T4 · the team by vertical: tabs (Everyone, Science, Innovation, Commercial, Operations) and one grid. Only the leads have a
# confirmed vertical so far: everyone else is under Everyone, tagged "Placement to be confirmed" (never an empty box).
ORDER = [n_ for n_, r_, t_ in LEADS] + [p_["name"] for p_ in members if p_["name"] != CEO and not p_.get("team")]   # Dr. Shamal is the chart above


def _person(name):
    p_ = _by[name]
    v = p_.get("team", "")
    tag = f"Vertical Lead · {v}" if v in [t_ for _, _, t_ in LEADS] else "Placement to be confirmed"
    return f'<li class="tm_p" data-fi="team" data-cat="{v.lower()}">{_card(name, tag)}</li>'


_ttabs = ('<div class="x_ecoTabs" data-scope="team" role="group" aria-label="Show a team"><button type="button" aria-pressed="true" data-cat="all">Everyone <span>'
          f'{len(ORDER)}</span></button>' + "".join(f'<button type="button" aria-pressed="false" data-cat="{t_.lower()}">{t_} <span>1</span></button>' for _, _, t_ in LEADS) + '</div>')
t4 = ('<section class="c_section tm_teams" id="tmTeams"><div class="s_wrap">'
      '<div class="tm_teamsHead"><div class="tm_head"><span class="c_eyebrow">Our Teams</span>'
      '<h2 class="c_h2" data-reveal>Different disciplines. One mandate.</h2>'
      f'<p class="c_lead" data-reveal>{text.split("one mandate: ")[1][0].upper() + text.split("one mandate: ")[1][1:]}</p></div>'
      + _ttabs + '</div>'
      '<ul class="tm_grid" data-fg="team">' + "".join(_person(n_) for n_ in ORDER)
      + "".join(f'<li class="tm_vNote" data-fi="team" data-note data-cat="{t_.lower()}" hidden>'
                f'<p>More of the {t_} team will be listed here once placements are confirmed.</p></li>' for n_, r_, t_ in LEADS)
      + '</ul></div></section>')
# enter reveals on inner pages: one quiet fade (data-fade), not line-splitting (data-reveal)
_calm = lambda s: re.sub(r'\sdata-reveal(="true")?', ' data-fade', s)
# the old top of the page (client comment): the Leadership block (label, text, quote, portrait)
t0 = people[:people.index('<div class="c_teamHead">')] + '</div></section>'
t0 = t0.replace("</blockquote>", f'</blockquote><a class="s_btn s_btnPrimary x_bioBtn" href="team-{slugify(CEO)}.html">Read Dr. Shamal&rsquo;s profile {arrow_svg}</a>', 1)
t0 = re.sub(r'\sdata-parallax="[^"]*"', '', t0)  # no parallax on inner pages
# revision 9 November, later the same day (client: "if the document gives a direction, follow it; do not invent"): the Team
# page follows comment #41 literally, as built on 6 November: Leadership, then the four Vertical Leads, then one block per
# team (Science, Innovation, Commercial, Operations), then the other members. No placeholder strings for visitors. The
# org chart (t3) and the tabs (t4) above are kept in the code for reference only.
def _oc(p_, sub=None):
    img = (f'<img alt="" decoding="async" loading="lazy" src="{p_["src"]}" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"/>')
    return (f'<li><a class="x_teamLink" href="team-{p_["slug"]}.html"><span class="c_teamImg">{img}</span>'
            f'<span class="c_teamName">{p_["name"]}</span>' + (f'<span class="x_teamRole">{sub}</span>' if sub else "") + '</a></li>')


# who sits in which team, and their titles: from the client's own "Our Team" slides (Innovation & Venture Platforms deck, "OUR TEAM":
# Innovation Manager Caitlin Vickers and Project Manager Nadia Tavafi under Francisco; Sr. Scientist Dr. Ahmed Elnaggar under Dr. Jude
# Wilson; Operations Manager Mohsin Syed Albar). Ali is not named in the deck, so he has no team yet.
_TEAM_OF = {"Ahmed": ("Science", "Senior Scientist"), "Caitlin": ("Innovation", "Innovation Manager"),
            "Nadia": ("Innovation", "Project Manager"), "Mohsin": ("Operations", "Operations Manager")}
for _n, (_t, _r) in _TEAM_OF.items():
    _by[_n]["team"], _by[_n]["role"] = _t, _r
_oleads = "".join(_oc(_by[n_], r_) for n_, r_, t_ in LEADS)
_orest = [p_ for p_ in members if p_["name"] != CEO and not p_.get("team")]
_TC = {"Science": "#1a6f96", "Innovation": "#14684a", "Commercial": "#595453", "Operations": "#3ca7d2"}   # brand tones, one per team


def _mcard(p_, t_):
    return (f'<li><a class="x_tcCard" href="team-{p_["slug"]}.html"><span class="x_tcAv"><img alt="" decoding="async" loading="lazy" src="{p_["src"]}"/></span>'
            f'<span class="x_tcTxt"><strong>{esc(p_["name"])}</strong><i>{esc(p_["role"])}</i></span></a></li>')


def _rcard(p_):
    return (f'<li><a class="x_tcCard" href="team-{p_["slug"]}.html"><span class="x_tcAv"><img alt="" decoding="async" loading="lazy" src="{p_["src"]}"/></span>'
            f'<span class="x_tcTxt"><strong>{esc(p_["name"])}</strong>' + (f'<i>{esc(p_["role"])}</i>' if p_.get("role") else "") + '</span></a></li>')


_oteams = "".join(
    f'<div class="x_tc"><div class="x_tcHead" style="background:{_TC[t_]}"><h4>{t_}</h4><p>Led by <a href="team-{_by[n_]["slug"]}.html">{n_}</a></p></div>'
    f'<ul class="x_tcList">' + "".join(_mcard(p_, t_) for p_ in members if p_.get("team") == t_ and p_["name"] != n_) + '</ul></div>'
    for n_, r_, t_ in LEADS)
_ogrid = (f'<div class="x_leads"><div class="x_secHead"><h3 class="c_h2" data-reveal>Vertical Leads</h3>'
          f'<p class="c_lead x_teamSub" data-reveal>Each of Innovation Oasis&rsquo;s four verticals is led by a member of the leadership team.</p></div>'
          f'<ul class="c_team x_leadGrid" data-stagger="true">{_oleads}</ul></div>'
          f'<div class="x_teamsWrap"><div class="x_secHead"><h3 class="c_h2" data-reveal>Our Teams</h3>'
          f'<p class="c_lead x_teamSub" data-reveal>Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown alongside the ecosystem itself.</p></div>'
          f'<div class="x_tcGrid">{_oteams}'
          + (f'<div class="x_tc"><div class="x_tcHead" style="background:#8a9499"><h4>Team members</h4></div>'
             f'<ul class="x_tcList">{"".join(_rcard(p_) for p_ in _orest)}</ul></div>' if _orest else "") + '</div></div>')
_ppl = re.sub(r'<div class="c_teamHead">.*?</div>\s*<ul class="c_team"[^>]*>.*?</ul>', lambda m: _ogrid, people, count=1, flags=re.S)
_ppl = _ppl.replace("</blockquote>", f'</blockquote><a class="s_btn s_btnPrimary x_bioBtn" href="team-{slugify(CEO)}.html">Read Dr. Shamal&rsquo;s profile {arrow_svg}</a>', 1)
_ppl = re.sub(r'\sdata-parallax="[^"]*"', '', _ppl)
team_body = f'<div class="c_page x_team">{_ppl}</div>{v3wrap(media)}'
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
