"""Incubation (rev 6 Nov 22, 23, 33-37): the general model first, KU highlighted lower down, no timeline, no success band."""
from common import *

h = load('ivp-incubation.html')
A = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
I = 'innovation-venture-platforms/img/'
li = lambda xs: ''.join(f'<li>{x}</li>' for x in xs)

# 33/34: hero copy that neither overpromises nor narrows the audience; KU no longer in the hero
h = rep(h, '<p class="x_lead" data-reveal>From lab research to market-ready. A platform for early-stage ventures.</p>\n        <div class="i_partner"><img src="innovation-venture-platforms/brand/silal.png" alt="Silal"><span aria-hidden="true">×</span><img src="innovation-venture-platforms/brand/khalifa-university.png" alt="Khalifa University"></div>',
        '<span class="rv_aud">For researchers and early-stage ventures · TRL 4–7</span>\n'
        '        <p class="x_lead" data-reveal>Translate promising research and early-stage technologies through focused technical, user, adoption and commercial validation.</p>\n'
        f'        <div class="x_row"><a href="ivp-enquire.html?platform=inc" class="s_btn s_btnPrimary s_btnSm">Express interest {A}</a><a href="#inc-model" class="s_textLink rv_jump">How it works {A}</a></div>')

# KU cohort intro (35): moved down, after the model
intro_old = between(h, '<section class="x_sec"><div class="s_wrap i_intro">', '</div></section>')
WHO = [('University research', 'Promising findings that need validation outside the lab.'), ('Intellectual property', 'Patents and protectable methods looking for a credible application.'),
       ('Internal projects', 'R&amp;D and innovation projects from across IO and Silal.'), ('Product concepts', 'Early prototypes and product ideas with an identified user.'),
       ('Strategic technologies', 'Technologies of strategic value that may never become a standalone venture.'), ('Early-stage ventures', 'Founding teams with a prototype and a problem worth solving.')]
CRIT = ['Technology maturity around TRL 4 to 7', 'A clearly defined problem and intended user', 'Critical technical, user, adoption or commercial assumptions that can be tested', 'A team able to run focused experiments with IO', 'Relevance to agrifood or an adjacent sector such as water, energy or circularity']
MODEL = [('Frame', 'Identify the critical assumptions', 'What must be true for this technology to create value: technical performance, user fit, adoption and commercial case.'),
         ('Design', 'Plan the smallest credible experiment', 'Experimental design with IO scientists: protocol, baseline, success measures and go, no-go or pivot criteria.'),
         ('Test', 'Validate in relevant conditions', 'Laboratory, growth-chamber, greenhouse, field or user testing, with the people who will use the solution.'),
         ('Decide', 'Pass a decision gate', 'Evidence is reviewed at each gate before more time and resources are committed.')]
GATES = [('Continue', 'The evidence supports the next experiment.'), ('Pivot', 'Change the application, user or approach.'), ('Stop', 'Close the project and keep the learning.'), ('Progress', 'Move to a commercialization pathway or to Acceleration.')]
SUP = ['Expert review', 'Experimental design', 'Facility access', 'Focused validation', 'Data and analysis', 'Guidance toward commercialization or further development']
PATH = ['Licensing', 'Co-development', 'Venture clienting', 'Strategic partnership', 'Venture creation', 'Investment', 'Further research or validation']

model = f'''<section class="x_sec rv_incWhat"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>What incubation is</span><h2 class="x_h2" data-reveal>A disciplined translation model.</h2></div>
    <div><p class="x_lead" data-reveal>Not early-stage venture capital. Not open-ended research funding. Incubation at IO is built to learn the fastest credible path to value.</p>
    <p class="x_body" data-reveal>Promising research, intellectual property, internal projects, product concepts and strategic technologies can all enter, including those that may never become standalone ventures.</p></div></div>
    <ul class="rv_who6">{''.join(f'<li><h3>{t}</h3><p>{d}</p></li>' for t, d in WHO)}</ul>
    <div class="rv_entry"><span class="x_label">Entry criteria</span><ul>{li(CRIT)}</ul></div>
  </div></section>
  <section class="x_sec x_grey" id="inc-model"><div class="s_wrap">
    <div class="rv_two"><div><span class="c_eyebrow" data-reveal>Experiment-led incubation</span><h2 class="x_h2" data-reveal>Every step earns the next one.</h2></div><div><p class="x_body" data-reveal>Projects move forward through focused experiments rather than fixed programme stages. Each one tests a critical assumption, and every decision gate is based on evidence.</p></div></div>
    <ol class="rv_model">{''.join(f'<li><span class="rv_mk">{i + 1:02d} · {k}</span><h3>{t}</h3><p>{d}</p></li>' for i, (k, t, d) in enumerate(MODEL))}</ol>
    <div class="rv_gates"><span class="x_label">Decision gates</span><ul>{''.join(f'<li><b>{t}</b><span>{d}</span></li>' for t, d in GATES)}</ul></div>
  </div></section>'''

# TRL band: incubation 4-7, acceleration 7+ (hub copy)
trl_old = between(h, '<div class="x_head"><div><span class="c_eyebrow" data-reveal>Where incubation sits</span>', '</div></div>\n  </div></section>')
trl = trl_old.replace('Nine steps of technology readiness. Incubation climbs from 3 to 6.', 'Nine steps of technology readiness. Incubation works from 4 to 7.')
trl = trl.replace('<div class="i_step" style="--n:3" data-band="inc">', '<div class="i_step" style="--n:3">')
trl = trl.replace('<div class="i_step" style="--n:7" data-band="acc">', '<div class="i_step" style="--n:7" data-band="inc">')
trl = trl.replace('Technology readiness levels 1 to 9. Incubation covers 3 to 6; the accelerator takes deployed technologies at 7 to 9.', 'Technology readiness levels 1 to 9. Incubation covers 4 to 7; Acceleration takes deployment-ready technologies from 7.')
trl = trl.replace('<div><b>Incubation</b>Lab research towards validation in real conditions, e.g. TRL 6 / CRL 5</div><div><b>Accelerator</b>Deployed technologies, TRL 7–8+ · <a href="ivp-accelerator.html" class="c_blue">Unbreakable Harvest</a></div>',
                  '<div><b>Incubation</b>Promising research and early-stage technologies, TRL 4–7</div><div><b>Acceleration</b>Deployment-ready technologies, TRL 7+ · <a href="ivp-accelerator.html" class="c_blue">Unbreakable Harvest</a></div>')
h = rep(h, trl_old, trl)

# support, facilities and pathways (why section reworked, timeline 36 removed)
why_old = between(h, '<section class="x_sec"><div class="s_wrap">\n    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Why incubate at Innovation Oasis</span>', '</div></section>\n')
why_new = f'''<section class="x_sec"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Scientific support and facilities</span><h2 class="x_h2" data-reveal>Built around the people who will use it.</h2></div></div>
    <ul class="i_why">
      <li><div class="x_img" data-img><img src="{I}inc_chamber.webp" alt="A researcher at a plant growth chamber" loading="lazy"></div><h3>Real testbeds</h3><p>Laboratories, growth chambers, greenhouses, open fields and real farm operations.</p></li>
      <li><div class="x_img" data-img><img src="{I}inc_people.webp" alt="A researcher showing an agri-robotics prototype to a visitor" loading="lazy"></div><h3>Users in the loop</h3><p>Project teams work directly with farmers and operators, so solutions are practical as well as scientifically rigorous.</p></li>
      <li><div class="x_img" data-img><img src="{I}fif_greenh.webp" alt="Greenhouses in the desert at Innovation Oasis" loading="lazy"></div><h3>Built for UAE conditions</h3><p>Designed around local regulatory, environmental and market realities, not adapted afterwards.</p></li>
    </ul>
    <div class="rv_supGrid"><div><span class="x_label">Support available</span><ul class="rv_chips2">{li(SUP)}</ul></div><div><span class="x_label">Potential commercialization pathways</span><ul class="rv_chips2">{li(PATH)}</ul></div></div>
  </div></section>
'''
h = rep(h, why_old, why_new)

# 35: the KU cohort after the general model, as one highlighted partnership
ku = f'''<section class="x_sec rv_ku"><div class="s_wrap i_intro">
    <div class="rv_kuHead"><span class="c_eyebrow" data-reveal>Partnership highlight</span><div class="i_partner"><img src="innovation-venture-platforms/brand/silal.png" alt="Silal"><span aria-hidden="true">×</span><img src="innovation-venture-platforms/brand/khalifa-university.png" alt="Khalifa University"></div></div>
    <p class="x_statement" data-scrub>The first incubation cohort takes four agricultural technologies from Khalifa University through validation at Innovation Oasis: <b>Agri-Robotics 2026.</b></p>
    <p class="x_body i_introBody" data-reveal>Teams refine prototypes with open access to greenhouses, open fields, labs and real farm operations, working directly with the farmers who will use them. Khalifa University is one of several partners: incubation also runs projects outside this partnership.</p>
    <dl class="i_facts" data-inview>
      <div style="--k:0"><dt class="x_label">Partner</dt><dd>Khalifa University</dd></div>
      <div style="--k:1"><dt class="x_label">Cohort</dt><dd>Agri-Robotics 2026</dd></div>
      <div style="--k:2"><dt class="x_label">Timeline</dt><dd>Nov 2025 – Nov 2026</dd></div>
      <div style="--k:3"><dt class="x_label">Focus</dt><dd>Validation in real conditions</dd></div>
    </dl>
  </div></section>
'''
cohort_old = between(h, '<section class="x_sec x_ink"><div class="s_wrap">\n    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Cohort 1</span>', '</div></section>\n')
h = rep(h, cohort_old, '')
h = rep(h, intro_old, model)
# intro_old was replaced in place by the model; now the KU block + the four technologies after the support section
h = rep(h, why_new, why_new + ku + cohort_old.replace('Four technologies, built with Khalifa University.', 'Four technologies in validation.'))
# the outer wrapper of intro_old was '<section class="x_sec"><div class="s_wrap i_intro"> ... </div></section>'; model brings its own sections
# 37: success band removed
h = cut(h, '<section class="x_sec i_successSec">', '</div></section>\n')
h = rep(h, '<span class="x_label">Next platform · For Series A+</span><strong>Accelerator</strong><p>Unbreakable Harvest. Stop pitching, start piloting.</p><span class="s_btn s_btnPrimary s_btnSm">Go to Accelerator',
        '<span class="x_label">Next platform · For later-stage ventures</span><strong>Acceleration</strong><p>Validate, localize and commercialize deployment-ready technologies.</p><span class="s_btn s_btnPrimary s_btnSm">Go to Acceleration')

# script: staircase (marker 4 -> 7) and the drifting tech column only
init_old = between(h, 'INIT.incubation = function (view) {', '\n  };\n')
h = rep(h, init_old, '''INIT.incubation = function (view) {
    var steps = $$('.i_step', view), stairs = $('#stairs'), marker = $('#trlMarker i');
    if (G && stairs) {
      gsap.from(steps, { scaleY: 0, duration: 1.4, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: stairs, start: 'top 80%', once: true } });
      ScrollTrigger.create({ trigger: stairs, start: 'top 70%', end: 'bottom 40%', scrub: true, onUpdate: function (s) {
        var w = stairs.clientWidth, col = w / 9, from = col * 3 + col / 2, to = col * 6 + col / 2; marker.parentElement.style.setProperty('--m', 0);
        gsap.set(marker, { x: from + (to - from) * s.progress - 6 });
      } });
    }
    if (G && !mobile() && $('#techs')) gsap.fromTo($('#techs [data-lag]', view), { y: 80 }, { y: -80, ease: 'none', scrollTrigger: { trigger: '#techs', start: 'top bottom', end: 'bottom top', scrub: true } });
  };''')

CSS = '''<style id="rev6-inc">
.rv_aud { display: block; font-size: .6875rem; letter-spacing: .16em; text-transform: uppercase; color: var(--io-ink); margin: 4px 0 2px; }
.rv_two { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: 20px; align-items: end; margin-bottom: clamp(32px, 4vw, 56px); }
.rv_two > div:first-child { grid-column: 1 / span 6; display: flex; flex-direction: column; gap: 16px; }
.rv_two > div:last-child { grid-column: 7 / span 6; display: flex; flex-direction: column; gap: 14px; }
.rv_who6 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.rv_who6 li { padding: 22px; background: var(--light); display: flex; flex-direction: column; gap: 8px; border-top: 2px solid var(--io); }
.rv_who6 h3 { font-size: 1.125rem; font-weight: 400; color: var(--charcoal); } .rv_who6 p { font-size: .875rem; color: var(--grey); line-height: 1.55; }
.rv_entry { margin-top: 20px; padding: 22px 24px; border: 1px solid var(--line); display: grid; grid-template-columns: 180px 1fr; gap: 20px; }
.rv_entry ul { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 28px; }
.rv_entry li { font-size: .9375rem; color: var(--charcoal); padding-left: 16px; position: relative; } .rv_entry li::before { content: ""; position: absolute; left: 0; top: .65em; width: 7px; height: 1px; background: var(--io); }
.rv_model { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
.rv_model li { padding: 24px; background: #fff; display: flex; flex-direction: column; gap: 10px; position: relative; }
.rv_model li:not(:last-child)::after { content: "\\2192"; position: absolute; right: -14px; top: 22px; width: 18px; height: 18px; border-radius: 50%; background: var(--io); color: #fff; font-size: 11px; display: flex; align-items: center; justify-content: center; z-index: 1; }
.rv_mk { font-size: .6875rem; letter-spacing: .14em; text-transform: uppercase; color: var(--io-ink); }
.rv_model h3 { font-size: 1.125rem; font-weight: 400; color: var(--charcoal); } .rv_model p { font-size: .875rem; color: var(--grey); line-height: 1.6; }
.rv_gates { margin-top: 10px; padding: 22px 24px; background: var(--io-ink); color: #fff; display: grid; grid-template-columns: 180px 1fr; gap: 20px; align-items: center; }
.rv_gates .x_label { color: #9fd2e8; }
.rv_gates ul { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
.rv_gates li { display: flex; flex-direction: column; gap: 4px; padding-left: 12px; border-left: 1px solid rgba(255,255,255,.3); }
.rv_gates b { font-weight: 500; } .rv_gates span { font-size: .8125rem; color: rgba(255,255,255,.75); }
.rv_supGrid { margin-top: clamp(32px, 4vw, 56px); display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.rv_supGrid > div { padding: 22px 24px; background: var(--light); display: flex; flex-direction: column; gap: 14px; }
.rv_chips2 { display: flex; flex-wrap: wrap; gap: 8px; } .rv_chips2 li { padding: 7px 12px; background: #fff; border-radius: 999px; font-size: .8125rem; color: var(--charcoal); }
.rv_kuHead { grid-column: 1 / -1; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px; padding-bottom: 18px; border-bottom: 1px solid var(--line); }
.rv_kuHead .i_partner { margin: 0; }
@media (max-width: 899px) {
  .rv_two > div:first-child, .rv_two > div:last-child { grid-column: 1 / -1; }
  .rv_who6, .rv_model, .rv_supGrid { grid-template-columns: 1fr; } .rv_model li::after { display: none; }
  .rv_entry, .rv_gates { grid-template-columns: 1fr; } .rv_entry ul { grid-template-columns: 1fr; } .rv_gates ul { grid-template-columns: 1fr 1fr; }
}
</style>
<script>
(function () { [].slice.call(document.querySelectorAll('.rv_jump')).forEach(function (a) { a.addEventListener('click', function (e) { var t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); if (window.__lenis) window.__lenis.scrollTo(t, { offset: -90, duration: 1.4 }); else t.scrollIntoView({ behavior: 'smooth' }); }); }); })();
</script>'''
h = h.replace('</body>', CSS + '</body>')
save('ivp-incubation.html', global_patch(h))
