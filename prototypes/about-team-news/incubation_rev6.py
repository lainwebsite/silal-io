"""Revision 6 November (client) on the Incubation page of the review site:
- hero: no "market-ready" promise, and not only "early-stage ventures" (university research, internal projects, IP,
  product concepts and strategic technologies count too); the Silal x Khalifa University lockup leaves the hero
- a "how incubation works" section explains the general model before any cohort detail
- the first cohort (Khalifa University) moves further down, next to its four technologies: KU is highlighted, not the page
- "Where the first cohort stands" timeline and the success band are removed
Run: python3 incubation_rev6.py <dir with ivp-incubation.html>"""
import pathlib, re, sys

p = pathlib.Path(sys.argv[1]) / "ivp-incubation.html"
s = p.read_text(encoding="utf8")
if "i6_model" in s:
    raise SystemExit("already done")


def cut(a, b):
    global s
    i = s.index(a); j = s.index(b, i) + len(b)
    blk = s[i:j]; s = s[:i] + s[j:]
    return blk


def sub(a, b):
    global s
    if a not in s:
        raise SystemExit("not found: " + a[:80])
    s = s.replace(a, b, 1)


sub('<p class="x_lead" data-reveal>From lab research to market-ready. A platform for early-stage ventures.</p>',
    '<p class="x_lead" data-reveal>Turning promising research and early-stage technologies into validated solutions. For researchers, internal projects and early-stage ventures.</p>')
logos = cut('<div class="i_partner">', '</div>')
intro = cut('<section class="x_sec"><div class="s_wrap i_intro">', '</div></section>')
intro = intro.replace('brings four agricultural technologies to commercial readiness with Khalifa University.',
                      'advances four agricultural technologies towards validation with Khalifa University.')
intro = intro.replace('<dd>Prototypes to market-ready</dd>', '<dd>Validated prototypes, e.g. TRL 6 / CRL 5</dd>')
intro = intro.replace('<p class="x_statement" data-scrub>', '<span class="c_eyebrow i6_eyebrow" data-reveal>Cohort 1 · Agri-Robotics 2026</span>' + logos.replace('class="i_partner"', 'class="i_partner i6_partner"') + '<p class="x_statement" data-scrub>', 1)
# the cohort timeline ("Where the first cohort stands"): its text, steps and photo, up to the end of its wrapper
i = s.index('<div class="i_time">'); j = s.index('<div class="x_img x_corners i_timeImg" data-img>', i)
j = s.index('</div>', s.index('</div>', j) + 6) + len('</div>')
s = s[:i] + s[j:]
cut('<section class="x_sec i_successSec">', '</section>')

MODEL = """
  <section class="x_sec i6_model"><div class="s_wrap">
    <div class="x_head"><div><span class="c_eyebrow" data-reveal>The incubation model</span><h2 class="x_h2" data-reveal>Experiment-led, from research to evidence.</h2></div><p class="x_body" data-reveal>Incubation tests the critical technical, user, adoption and commercial assumptions behind promising research and early-stage technologies, one focused experiment at a time, with a clear decision at every gate.</p></div>
    <div class="i6_grid">
      <div class="i6_who"><span class="x_label">Who it is for</span>
        <ul><li>University research and intellectual property</li><li>Internal research and development projects</li><li>Early-stage ventures and spin-outs</li><li>Product concepts and strategic technologies that may not become standalone ventures</li></ul>
        <span class="x_label">Typical starting point</span><p>TRL 3 to 4: a proof of concept or lab prototype with a clear problem and an identified user.</p>
      </div>
      <ol class="i6_steps">
        <li><b>01</b><div><h3>Entry review</h3><p>Experts review the problem, the technology, the evidence so far and the team.</p></div></li>
        <li><b>02</b><div><h3>Experiment design</h3><p>The riskiest assumptions, the smallest credible test, the KPIs and the go, pivot or stop criteria.</p></div></li>
        <li><b>03</b><div><h3>Focused validation</h3><p>Lab, greenhouse, field and user testing in Innovation Oasis facilities or on partner sites.</p></div></li>
        <li><b>04</b><div><h3>Decision gate</h3><p>Continue, pivot or stop, on evidence rather than enthusiasm.</p></div></li>
        <li><b>05</b><div><h3>Next pathway</h3><p>Licensing, co-development, venture creation, further research, or the Accelerator.</p></div></li>
      </ol>
    </div>
    <ul class="i6_support" aria-label="Support available"><li>Expert review</li><li>Experimental design</li><li>Facility access</li><li>Scientific and technical support</li><li>Guidance toward commercialization</li></ul>
  </div></section>
"""
# order: hero, technology readiness, the model (new), why incubate here, then the first cohort and its technologies
k = s.index('<section class="x_sec x_grey">'); k = s.index('</section>', k) + len('</section>')
s = s[:k] + MODEL + s[k:]
k = s.index('<section class="x_sec x_ink">')
s = s[:k] + intro + "\n  " + s[k:]
CSS = """<style>/* rev. 6 Nov: incubation model */
.i6_grid{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);margin-top:clamp(32px,4vw,56px)}
.i6_who ul{list-style:none;margin:12px 0 32px;padding:0}.i6_who li{padding:12px 0;border-bottom:1px solid var(--line);font-size:15px;color:var(--charcoal)}
.i6_who p{margin:10px 0 0;font-size:15px;line-height:1.6;color:var(--grey-ink)}
.i6_steps{list-style:none;margin:0;padding:0;display:grid;gap:0;counter-reset:s}.i6_steps li{display:grid;grid-template-columns:56px 1fr;gap:16px;padding:20px 0;border-top:1px solid var(--line)}
.i6_steps li:last-child{border-bottom:1px solid var(--line)}.i6_steps b{font-weight:400;font-size:13px;letter-spacing:.08em;color:var(--io-ink);padding-top:4px}
.i6_steps h3{margin:0 0 6px;font-weight:400;font-size:clamp(18px,1.5vw,22px);color:var(--charcoal)}.i6_steps p{margin:0;font-size:15px;line-height:1.6;color:var(--grey-ink)}
.i6_support{list-style:none;margin:clamp(32px,4vw,56px) 0 0;padding:0;display:flex;flex-wrap:wrap;gap:8px}.i6_support li{padding:9px 14px;border:1px solid var(--line);border-radius:999px;font-size:13px;color:var(--charcoal);background:#fff}
.i6_eyebrow{display:flex;grid-column:1/-1;margin-bottom:4px}.i6_partner{grid-column:1/-1;margin:0 0 20px;justify-content:flex-start}
@media (max-width:900px){.i6_grid{grid-template-columns:1fr}}
</style>"""
s = s.replace("<head>", "<head>" + CSS, 1)
p.write_text(s, encoding="utf8")
print("incubation rev6 ok", len(s))

# --- second pass: "why incubate here" belongs to the general model, before the cohort; inert stubs keep the page script
# (it still looks up the removed timeline and success band) from failing
s = p.read_text(encoding="utf8")
if "i6_stub" not in s:
    w0 = s.index('<section class="x_sec"><div class="s_wrap">\n    <div class="x_head"><div><span class="c_eyebrow" data-reveal>Why incubate at Innovation Oasis')
    w1 = s.index('</section>', w0) + len('</section>')
    why = s[w0:w1]; s = s[:w0] + s[w1:]
    c0 = s.index('<section class="x_sec"><div class="s_wrap i_intro">')
    s = s[:c0] + why + "\n  " + s[c0:]
    stub = ('<div class="i6_stub" hidden aria-hidden="true"><ol id="kd"><li><h4 id="kdToday"></h4></li></ol><b id="kdDays"></b>'
            '<section class="i_successSec"><div id="succHelix"></div><span class="i_successMark"></span><a id="succBtn" href="#"></a></section></div>')
    k = s.index('<a class="x_next"'); s = s[:k] + stub + s[k:]  # inside the page's view, where its script looks
    p.write_text(s, encoding="utf8")
    print("incubation rev6: why moved up, stubs added")
