#!/usr/bin/env python3
"""Local Talent: rename "Developing Local Talent" to "Local Talent Development" on every full-site page and add the new
"Local Talent (CMS)" page next to it (desktop + mobile menu, IVP dock, link map), then build the new page.

Usage:  python3 local_talent_cms_site.py public/full-site

  1. every page: menu entries, dock entry, link map, enquiry option names
  2. ivp-local-talent-cms.html: the Local Talent page rebuilt in the order of the Farm Innovation Fund page
     (hero with facts, why, who, criteria, focus areas, process, at a glance, gallery, partners, benefits, pathways,
     stories, register). Same shell, css and scripts as the Local Talent page; copy from the client brief only.
"""
import glob, os, re, sys

D = sys.argv[1]
OLD, NEW, CMS = 'Developing Local Talent', 'Local Talent Development', 'Local Talent (CMS)'
URL, URL_CMS = '/full-site/ivp-local-talent', '/full-site/ivp-local-talent-cms'

# ---------------------------------------------------------------- 1. every page
for f in sorted(glob.glob(os.path.join(D, '*.html'))):
    s = open(f, encoding='utf-8').read()
    o = s
    if 'ivp-local-talent-cms' in s:
        continue
    # menus (desktop + mobile): rename, then the new entry right after it
    s = s.replace('<li><a href="%s">%s</a></li>' % (URL, OLD), '<li><a href="%s">%s</a></li><li><a href="%s">%s</a></li>' % (URL, NEW, URL_CMS, CMS))
    # link map used to wire the menu links
    s = s.replace('"%s": "%s"' % (OLD, URL), '"%s": "%s", "%s": "%s"' % (NEW, URL, CMS, URL_CMS))
    # IVP dock
    dock_old = '<a href="%s" data-route="local-talent"><span><i class="x_long">Developing Local </i>Talent</span></a>' % URL
    dock_new = ('<a href="%s" data-route="local-talent"><span>Local Talent<i class="x_long"> Development</i></span></a>'
                '\n  <a href="%s" data-route="local-talent-cms"><span>Local Talent<i class="x_long"> (CMS)</i></span></a>') % (URL, URL_CMS)
    s = s.replace(dock_old, dock_new)
    # everything else that carried the old name (enquiry option, titles, breadcrumb, hub copy)
    s = s.replace(OLD, NEW)
    if s != o:
        open(f, 'w', encoding='utf-8').write(s)

# ---------------------------------------------------------------- 2. the new page
src = open(os.path.join(D, 'ivp-local-talent.html'), encoding='utf-8').read()


def section(s, sid):
    a = s.index('id="%s"' % sid)
    a = s.rindex('<section', 0, a)
    b = s.index('</section>', a) + len('</section>')
    return a, b


parts = {}
for sid in ['lt-why', 'lt-pathway', 'lt-school', 'lt-mustadeem', 'lt-interns', 'lt-cohort', 'lt-training', 'lt-research', 'lt-learning', 'lt-partners', 'lt-stories', 'lt-register']:
    a, b = section(src, sid)
    parts[sid] = (a, b, src[a:b])
ha = src.index('<section class="f_hero')
hb = src.index('</section>', ha) + len('</section>')
hero = src[ha:hb]

# benefits: out of the Internships section into a section of their own (as "More than funding" on the FIF page)
interns = parts['lt-interns'][2]
g0 = interns.index('<div class="lt_gainBlock">')
g1 = interns.rindex('\n    </div>\n  </div>')
gain_inner = interns[g0 + len('<div class="lt_gainBlock">'):g1].strip()
interns_areas = interns[:g0].rstrip() + '\n  </div></section>'
gain = ('<section class="x_sec x_grey" id="lt-gain"><div class="s_wrap">\n    ' + gain_inner.replace('<h2 class="x_h2" data-reveal>What Participants Gain</h2>', '<h2 class="x_h2" data-reveal>What Participants Gain</h2>') + '\n  </div></section>')
gain = gain.replace('<div class="x_head"><div><h2', '<div class="x_head"><div><span class="c_eyebrow" data-reveal>Learn by doing</span><h2', 1)


def colour(sec, grey):
    return re.sub(r'<section class="[^"]*"', lambda m: '<section class="x_sec%s"' % (' x_grey' if grey else ''), sec, count=1)


order = [
    colour(parts['lt-why'][2], False) if False else parts['lt-why'][2],
    colour(parts['lt-school'][2], True),
    colour(parts['lt-mustadeem'][2], False),
    colour(interns_areas, True),
    colour(parts['lt-pathway'][2], False) if False else parts['lt-pathway'][2],
    colour(parts['lt-cohort'][2], False),
    parts['lt-learning'][2],
    colour(parts['lt-partners'][2], False),
    gain,
    colour(parts['lt-training'][2], False),
    parts['lt-research'][2],
    colour(parts['lt-stories'][2], False),
    parts['lt-register'][2],
]

# whatever sits between the sections must be white space only
rest = src[ha:parts['lt-register'][1]]
for sid in parts:
    rest = rest.replace(parts[sid][2], '')
rest = rest.replace(hero, '')
assert not rest.strip(), rest.strip()[:200]

# hero: the heading and the two bodies of the brief, as on the Local Talent page (body 1 under the heading, body 2 beside it)
h = re.sub(r'<span>Local Talent Development</span></nav>', '<span>%s</span></nav>' % CMS, hero)
new = src[:ha] + h + '\n\n  ' + '\n\n  '.join(order) + src[parts['lt-register'][1]:]

# page identity
new = new.replace('data-view="local-talent"', 'data-view="local-talent-cms"')
new = re.sub(r'<title>.*?</title>', '<title>%s · Innovation Oasis</title>' % CMS, new, count=1)
assert "'local-talent': '%s'" % NEW in new
new = new.replace("'local-talent': '%s'" % NEW, "'local-talent': '%s', 'local-talent-cms': '%s'" % (NEW, CMS), 1)
k = '  INIT.incubation = function'
assert new.count(k) == 1
new = new.replace(k, "  INIT['local-talent-cms'] = INIT['local-talent'];\n" + k, 1)
# ---- docs only: nothing on this page that is not in the client brief (Google Doc "Local Talent Development")
# hero: the eyebrow of the brief, no extra facts
new = new.replace('Innovation &amp; Venture Platforms – Local Talent Development</span>', 'Local Talent Development</span>', 1)
new = re.sub(r'\s*<dl class="f_heroFacts">.*?</dl>', '', new, count=1, flags=re.S)
# What Participants Gain: the brief's sentence is the item (no extra titles)
new = re.sub(r'(<li class="a_item"[^>]*><span class="x_label">\d+</span>)<h3>[^<]*</h3><p class="f_supLead">([^<]*)</p></li>', r'\1<h3>\2</h3></li>', new)
# partner hub: the brief's capitalisation
new = new.replace('<span class="f_ecoRole">Government and youth organizations</span><span class="f_ecoRole">Industry partners</span>', '<span class="f_ecoRole">Government and Youth Organizations</span><span class="f_ecoRole">Industry Partners</span>')
# stories: editorial cards for the nine types (photo + type), then the story format of the brief
sa = new.index('id="lt-stories"')
sa = new.rindex('<section', 0, sa)
sb = new.index('</section>', sa)
sec = new[sa:sb]
ga = sec.index('<ol class="f_projGrid lt_projGrid">')
gb = sec.index('</ol>', ga) + len('</ol>')
cards = ''
for m in re.finditer(r'<li class="f_projCard">.*?</li>', sec[ga:gb], re.S):
    c = m.group(0)
    img = re.search(r'<img src="([^"]+)"', c).group(1)
    title = re.search(r'<h3>([^<]+)</h3>', c).group(1)
    cards += '<li class="f_projCard"><div class="x_img f_projImg"><img src="%s" alt="" loading="lazy"></div><div class="f_projBody"><h3>%s</h3></div></li>' % (img, title)
fmt = ''.join('<li>%s</li>' % x for x in ['Program', 'Participant or team', 'Practical activity', 'Skills developed', 'Output or achievement', 'Next step'])
grid = '<ol class="f_projGrid lt_projGrid">%s</ol>\n    <div class="lt_split lt_format"><div><span class="x_label">Story Format</span><p class="x_body">Every story should include:</p></div><ul class="lt_chips">%s</ul></div>' % (cards, fmt)
sec = sec[:ga] + grid + sec[gb:]
new = new[:sa] + sec + new[sb:]
# the dock marks the page it is on
open(os.path.join(D, 'ivp-local-talent-cms.html'), 'w', encoding='utf-8').write(new)
print('built ivp-local-talent-cms.html', len(new) // 1024, 'KB')
