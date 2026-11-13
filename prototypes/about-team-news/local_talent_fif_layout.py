#!/usr/bin/env python3
"""Developing Local Talent: sections that still differed from the Farm Innovation Fund page now use the FIF patterns.

Usage:  python3 local_talent_fif_layout.py public/full-site/ivp-local-talent.html

  - Our Future Innovators      -> "at a glance" board (FIF "Cohort 1 at a glance") + tag lists
  - What Participants Gain     -> numbered list with a photo that follows the scroll (FIF "More than funding")
  - Developing talent together -> hub diagram + grouped partners (FIF "Our partner network")
  - Talent in action           -> project cards (FIF "Explore selected projects")
Copy comes from the client brief only (headings and lists unchanged); the five figures of the cohort board are
shown as "To be confirmed" until the first cohort is verified. Idempotent: it stops if the page was already patched.
"""
import re, sys

path = sys.argv[1]
s = open(path, encoding='utf-8').read()
if 'id="ltGain"' in s:
    sys.exit('already patched')

ARR = '<svg class="x_arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
IO = '<span class="x_iO">iO</span>'
IMG = '/innovation-venture-platforms/img/'
NEWS = '/full-site/news'


def section(sid):
    a = s.index('id="%s"' % sid)
    a = s.rindex('<section', 0, a)
    b = s.index('</section>', a) + len('</section>')
    return a, b


def replace_section(sid, new):
    global s
    a, b = section(sid)
    s = s[:a] + new + s[b:]


def chips(items):
    return '<ul class="lt_chips">' + ''.join('<li>%s</li>' % i for i in items) + '</ul>'


# ---- 1. Our Future Innovators: at a glance ------------------------------------------------------------
board = ''.join(
    '<li><strong>&mdash;</strong><h3>%s</h3><small>To be confirmed</small></li>' % t
    for t in ['Number of interns', 'Universities represented', 'Academic disciplines', 'Placement duration', IO + ' departments or research areas'])
quad = [
    ('The Experience', chips(['Laboratory analysis', 'Soil and water testing', 'Crop-health assessment', 'Field or greenhouse trials', 'Molecular work', 'Data collection', 'Research presentations'])),
    ('The Outputs', chips(['Technical presentations', 'Research summaries', 'Laboratory or field datasets', 'Project reports', 'Learning portfolios', 'Recommendations for future work'])),
    ('Recognition', chips(['Graduation or completion ceremony', 'Certificate presentation', 'Intern project presentations', 'Laboratory or field activity'])),
    ('Participant Perspectives', chips(['What did the participant work on?', 'What new capability did the participant develop?', 'How did the placement influence future study or career plans?'])),
]
quad_html = ''.join('<li><span class="x_label">%02d</span><h3>%s</h3>%s</li>' % (i + 1, t, c) for i, (t, c) in enumerate(quad))
cohort = ('<section class="x_sec x_grey" id="lt-cohort"><div class="s_wrap">\n'
          '    <div class="x_head"><div><h2 class="x_h2" data-reveal>Our Future Innovators</h2></div></div>\n'
          '    <ol class="f_board lt_board">%s</ol>\n'
          '    <ol class="lt_quad">%s</ol>\n'
          '  </div></section>') % (board, quad_html)
replace_section('lt-cohort', cohort)
s = s.replace('<section class="x_sec x_grey" id="lt-training">', '<section class="x_sec" id="lt-training">', 1)

# ---- 2. What Participants Gain: numbered list + photo -------------------------------------------------
a, b = section('lt-interns')
sec = s[a:b]
g0 = sec.index('<div class="lt_split lt_gain">')
g1 = sec.index('</ul></div>', g0) + len('</ul></div>')
sec = sec[:g0] + sec[g1:]
s = s[:a] + sec + s[b:]
gain = [
    ('Real research environments', 'p_uni', 'Practical experience in real research environments'),
    ('Laboratory, greenhouse and field methods', 'l_green', 'Exposure to laboratory, greenhouse and field methods'),
    ('Supervision and mentorship', 's_io', 'Structured supervision and mentorship from relevant specialists'),
    ('Scientific procedures', 'l_mol', 'Experience working within scientific procedures'),
    ('Quality, safety and documentation', 'l_post', 'Understanding of research quality, safety and documentation'),
    ('Agrifood career pathways', 'p_pro', 'Stronger awareness of agrifood career pathways'),
]
imgs = ''.join('<img src="%slt_%s.webp" alt="%s"%s loading="lazy">' % (IMG, im, t, ' class="on"' if i == 0 else '') for i, (t, im, _) in enumerate(gain))
items = ''.join('<li class="a_item"%s><span class="x_label">%02d</span><h3>%s</h3><p class="f_supLead">%s</p></li>' % (' data-on' if i == 0 else '', i + 1, t, d) for i, (t, _, d) in enumerate(gain))
gain_sec = ('<section class="x_sec" id="lt-gain"><div class="s_wrap">\n'
            '    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Learn by doing</span><h2 class="x_h2" data-reveal>What Participants Gain</h2></div></div>\n'
            '    <div class="a_gain">\n'
            '      <div class="x_img x_corners a_gainMedia" id="ltGainMedia" data-img>%s</div>\n'
            '      <ol class="a_list" id="ltGain">%s</ol>\n'
            '    </div>\n'
            '  </div></section>') % (imgs, items)
a, b = section('lt-interns')
s = s[:b] + '\n\n  ' + gain_sec + s[b:]

# ---- 3. Developing talent together: hub diagram + groups ----------------------------------------------
groups = [
    ('Schools', ['Guided educational visits', 'Sustainability activities', 'Agritech demonstrations', 'Career-awareness sessions']),
    ('Universities', ['Internships and placements', 'Graduation projects', 'Joint supervision', 'Research collaboration', 'Doctoral and postdoctoral pathways', 'Laboratory and field exposure']),
    ('Government and Youth Organizations', ['National talent initiatives', 'Youth sustainability programs', 'Emerging-skills programs', 'Food-security and environmental education']),
    ('Industry Partners', ['Guest specialists', 'Technology demonstrations', 'Project sponsorship', 'Practical training', 'Career exposure', 'Research and challenge projects']),
]
a, b = section('lt-partners')
old = s[a:b]
head = old[:old.index('<div class="f_pGrid')]
cta = old[old.index('<div class="x_row lt_cta">'):]
eco = ('<div class="f_eco" role="img" aria-label="Developing Local Talent at the centre, with four partner groups around it: schools, universities, government and youth organizations, industry partners">'
       '<span class="f_ecoRole">Schools</span><span class="f_ecoRole">Universities</span>'
       '<span class="f_ecoCore">Developing Local Talent</span>'
       '<span class="f_ecoRole">Government and youth organizations</span><span class="f_ecoRole">Industry partners</span></div>')
grid = '<div class="f_pGrid lt_pGrid">' + ''.join(
    '<div class="f_pGroup"><div class="f_pGroupHead"><span class="x_label">%02d</span><h3>%s</h3></div>%s</div>' % (i + 1, t, chips(l))
    for i, (t, l) in enumerate(groups)) + '</div>\n    '
s = s[:a] + head + eco + '\n    ' + grid + cta + s[b:]

# ---- 4. Talent in action: project cards ---------------------------------------------------------------
stories = [('Intern profiles', 'i_mol'), ('Cohort graduations', 'p_uni'), ('Student project highlights', 'i_trial'),
           ('MUSTADEEM activities', 'p_youth'), ('School visits', 'p_school'), ('Training milestones', 'p_pro'),
           ('Researcher profiles', 'p_phd'), ('University partnerships', 'l_post'), ('New course or placement announcements', 'i_data')]
cards = ''.join(
    '<li class="f_projCard"><div class="x_img f_projImg"><img src="%slt_%s.webp" alt="" loading="lazy"></div>'
    '<div class="f_projBody"><span class="x_label">Story %02d</span><h3>%s</h3>'
    '<a href="%s" class="s_textLink f_projLink">View in the content library %s</a></div></li>' % (IMG, im, i + 1, t, NEWS, ARR)
    for i, (t, im) in enumerate(stories))
fmt = chips(['Program', 'Participant or team', 'Practical activity', 'Skills developed', 'Output or achievement', 'Next step'])
a, b = section('lt-stories')
old = s[a:b]
head = old[:old.index('<ol class="f_tenets')]
s = s[:a] + head + ('<ol class="f_projGrid lt_projGrid">%s</ol>\n    <div class="f_projLegend lt_format"><span class="x_label">Story Format</span>%s</div>\n  </div></section>' % (cards, fmt)) + s[b:]

# ---- css ------------------------------------------------------------------------------------------------
css = '''
/* Developing Local Talent: FIF patterns (chips, glance board, quad, benefits list) */
.lt_chips { display: flex; flex-wrap: wrap; gap: 6px; max-width: 38em; }
.lt_chips li { font-size: var(--t-small); line-height: 1.3; padding: 5px 12px; border: 1px solid var(--line); border-radius: 999px; background: #fff; color: var(--charcoal); }
.lt_board strong { color: #c4c6c7; }
.lt_board small { color: var(--grey); }
.lt_quad { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: var(--col-gap); row-gap: clamp(36px, 4vw, 64px); margin-top: var(--head); }
.lt_quad > li { position: relative; display: flex; flex-direction: column; gap: 12px; padding-top: 24px; border-top: 1px solid var(--line); }
.lt_quad > li::before { content: ""; position: absolute; left: 0; top: -2px; width: 48px; height: 3px; background: var(--io); }
.lt_quad > li > .x_label { color: var(--io-ink); }
.lt_quad h3 { font-size: var(--t-h4); font-weight: 400; color: var(--charcoal); }
#ltGain .a_item { gap: 8px; }
#ltGain .f_supLead { font-size: var(--fs-lead, 1.125rem); font-weight: 300; line-height: 1.4; color: var(--charcoal); max-width: 28em; margin-top: 4px; }
.lt_projGrid .f_projBody { gap: 12px; }
.lt_format { align-items: flex-start; }
@media (max-width: 760px) { .lt_quad { grid-template-columns: minmax(0,1fr); } }
'''
s = s.replace('.lt_story { display: grid;', css + '.lt_story { display: grid;', 1)

# ---- js: the photo follows the benefit in the middle of the screen (same as the FIF list) ------------------
js = '''    // what participants gain: the item crossing the middle of the screen is highlighted and its photo slides in
    var gItems = $$('#ltGain .a_item', view), gImgs = $$('#ltGainMedia img', view), gNow = 0, gZ = 1;
    function gPick(k) {
      if (k === gNow) return; var dir = k > gNow ? 1 : -1, prev = gImgs[gNow], im = gImgs[k]; gNow = k;
      gItems.forEach(function (it, i) { i === k ? it.setAttribute('data-on', '') : it.removeAttribute('data-on'); });
      im.style.zIndex = ++gZ;
      if (!G) { gImgs.forEach(function (x, i) { x.classList.toggle('on', i === k); }); return; }
      gsap.killTweensOf([im, prev], 'clipPath,xPercent,scale');
      gsap.fromTo(im, { clipPath: dir > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)', xPercent: 24 * dir, scale: 1.08 }, { clipPath: 'inset(0% 0% 0% 0%)', xPercent: 0, scale: 1, duration: 1.2, ease: 'expo.out' });
      gsap.fromTo(prev, { xPercent: 0 }, { xPercent: -16 * dir, duration: 1.2, ease: 'expo.out', onComplete: function () { gsap.set(prev, { xPercent: 0 }); } });
    }
    if (G && gImgs.length) {
      gImgs.forEach(function (im, i) { im.style.transition = 'none'; gsap.set(im, { clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)' }); });
      gItems.forEach(function (it, i) { ScrollTrigger.create({ trigger: it, start: 'top 62%', end: 'bottom 62%', onToggle: function (st) { if (st.isActive) gPick(i); } }); });
    }
'''
mark = '    // placement areas: one photo at a time'
assert s.count(mark) == 1
s = s.replace(mark, js + mark, 1)
open(path, 'w', encoding='utf-8').write(s)
print('patched', path)
