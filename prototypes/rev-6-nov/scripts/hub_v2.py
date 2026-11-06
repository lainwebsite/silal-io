# Executed inside hub.py (6 Nov, second round): the doc's sections 3-7 with more considered interaction.
I_ = IMG
# Copy stays the doc's; the deck (slides 4, 6, 14) is the visual reference. Overrides approach / ready / tech / featured
# and adds V2 (CSS + JS) that hub.py injects before </body>.

# ---------------- 3. Find your pathway: TRL rail + a form per route (Caitlin: separate forms per program/service) ----------------
RAIL = ''.join(f'<i data-n="{n}"><b>{n}</b></i>' for n in range(1, 10))
h = rep(h, '<a href="ivp-farm-innovation-fund.html" id="pickGo" class="s_btn s_btnPrimary s_btnSm" style="align-self:flex-start">',
        f'<div class="v2_rail" aria-hidden="true"><span class="v2_railK">Maturity</span><div class="v2_railBar">{RAIL}<em id="v2Range"></em></div><span class="v2_railV" id="v2RailV">TRL 1–8</span></div>'
        '<div class="v2_goRow"><a href="ivp-farm-innovation-fund.html" id="pickGo" class="s_btn s_btnPrimary s_btnSm">')
h = rep(h, '<span id="pickGoText">Go to Farm Innovation Fund</span> ' + A + '</a>',
        '<span id="pickGoText">Go to Farm Innovation Fund</span> ' + A + '</a><a href="ivp-enquire.html?platform=fif" id="v2Form" class="v2_form">Register interest ' + A + '</a></div>')

# ---------------- 4. From problem to scale: pinned horizontal journey, evidence accumulates ----------------
GATE = '<span class="v2_gate" aria-hidden="true"><i></i><em>Decision gate</em></span>'
apx_steps = ''.join(
    f'<li class="v2_step" data-i="{i}"><span class="v2_stepN">{i + 1:02d}</span><h3>{t}</h3><p>{d}</p>'
    f'<span class="v2_stepL">{"Potential pathways" if i == 5 else "Typical activities"}</span><ul>{"".join(f"<li>{a}</li>" for a in acts)}</ul></li>'
    + (GATE if i < 5 else '')
    for i, (t, d, acts) in enumerate(STEPS))
approach = f'''<section class="v2_apx" id="approach"><div class="v2_apxPin" id="v2ApxPin">
    <div class="s_wrap v2_apxHead">
      <div><span class="c_eyebrow" data-reveal>Our approach</span><h2 class="x_h2" data-reveal>From problem to scale</h2></div>
      <div><p class="x_lead">Every IO platform and program is supported by a structured process that reduces uncertainty and builds the evidence required for a clear next decision.</p>
      <p class="x_body">The precise journey varies according to the maturity of the idea or technology, but the underlying method remains consistent.</p></div>
      <div class="v2_meter" aria-hidden="true"><span>Evidence</span><div class="v2_meterBar"><b id="v2Meter"></b>{''.join('<i></i>' for _ in range(6))}</div><span class="v2_meterN" id="v2MeterN">Step 01 of 06</span></div>
    </div>
    <div class="v2_apxView"><ol class="v2_track" id="v2Track">{apx_steps}</ol>
      <svg class="v2_curve" id="v2Curve" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="v2g" x1="0" x2="1"><stop offset="0" stop-color="#3ca7d2" stop-opacity=".08"/><stop offset="1" stop-color="#3ca7d2" stop-opacity=".38"/></linearGradient></defs><path d="M0 118 C 250 116, 420 100, 560 76 S 860 18, 1000 4 L1000 120 L0 120 Z" fill="url(#v2g)"/><path class="v2_curveLine" d="M0 118 C 250 116, 420 100, 560 76 S 860 18, 1000 4" fill="none" stroke="#3ca7d2" stroke-width="2" vector-effect="non-scaling-stroke" pathLength="1"/></svg>
    </div>
  </div></section>
  <section class="x_sec v2_lb"><div class="s_wrap">
    <div class="v2_lbHead"><span class="c_eyebrow" data-reveal>Two routes to innovation</span><h2 class="x_h2" data-reveal>Localize the best. <span class="rv_blue">Build what is missing.</span></h2></div>
    <div class="v2_lbGrid">
      <article class="v2_lbCard" tabindex="0"><div class="v2_lbArt" aria-hidden="true"><svg viewBox="0 0 200 120"><circle cx="40" cy="60" r="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4"/><circle cx="160" cy="60" r="10" fill="currentColor"/><path d="M68 60 H140" stroke="currentColor" stroke-width="1.5"/><path d="M132 52 L142 60 L132 68" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="50" r="3" fill="currentColor"/><circle cx="48" cy="70" r="3" fill="currentColor"/><circle cx="44" cy="46" r="3" fill="currentColor"/></svg></div>
        <span class="v2_lbK">Localize</span><p class="x_lead">We identify strong solutions from the UAE and around the world, bring them into relevant operating environments and adapt them to local conditions and market requirements.</p><p class="x_body"><b>When:</b> a solution already has strong problem-solution fit and localization provides a faster or more efficient route than developing a new solution.</p></article>
      <article class="v2_lbCard v2_lbB" tabindex="0"><div class="v2_lbArt" aria-hidden="true"><svg viewBox="0 0 200 120"><rect x="40" y="74" width="34" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="83" y="74" width="34" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="61" y="46" width="34" height="22" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="46" width="34" height="22" fill="currentColor" opacity=".9"/><rect x="126" y="74" width="34" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/></svg></div>
        <span class="v2_lbK">Build</span><p class="x_lead">When the market does not offer an adequate solution, we work with researchers, technical teams and partners to develop and validate new approaches.</p><p class="x_body"><b>When:</b> there is a demonstrated market or capability gap, the right team is available and the potential value justifies the higher time, cost and technical risk.</p></article>
    </div>
  </div></section>'''

# ---------------- 5. Readiness: four interlocking dimensions (deck slide 6: TRL is one of four) ----------------
CX = [(205, 205), (335, 205), (205, 335), (335, 335)]
LAB = [(118, 118, 'end'), (422, 118, 'start'), (118, 430, 'end'), (422, 430, 'start')]
circles = ''.join(f'<g class="v2_ring" data-q="{i}" tabindex="0" role="button" aria-pressed="{"true" if i == 0 else "false"}" aria-label="{k} readiness"><circle cx="{x}" cy="{y}" r="122"/></g>' for i, ((x, y), (k, _, _)) in enumerate(zip(CX, READY)))
labels = ''.join(f'<text class="v2_ringT" data-q="{i}" x="{lx}" y="{ly}" text-anchor="{an}">{k}</text>' for i, ((lx, ly, an), (k, _, _)) in enumerate(zip(LAB, READY)))
panels = ''.join(f'<div class="v2_rqPanel" data-q="{i}"{"" if i == 0 else " hidden"}><span class="v2_rqK">{k} readiness · key question</span><p class="v2_rqQ">{q}</p><span class="x_label">IO considers</span><ul>{"".join(f"<li>{x}</li>" for x in L)}</ul></div>' for i, (k, q, L) in enumerate(READY))
ready = f'''<section class="x_sec x_ink v2_ready"><div class="s_wrap">
    <div class="rv_twoCol"><div><span class="c_eyebrow c_eyebrowLight" data-reveal>What we evaluate</span><h2 class="x_h2" data-reveal>Technology readiness is only part of the picture</h2></div>
    <div><p class="x_lead" data-reveal>A solution can perform successfully in a controlled environment and still fail to achieve adoption.</p>
    <p class="x_body" data-reveal>IO evaluates opportunities across four connected dimensions to understand whether a solution is technically credible, commercially relevant, operationally feasible and ready for implementation.</p></div></div>
    <div class="v2_readyGrid">
      <div class="v2_venn"><svg viewBox="0 0 540 540" role="group" aria-label="Four readiness dimensions">{circles}<circle class="v2_core" cx="270" cy="270" r="54"/><text class="v2_coreT" x="270" y="264" text-anchor="middle">Ready to</text><text class="v2_coreT" x="270" y="284" text-anchor="middle">implement</text>{labels}</svg>
        <p class="v2_vennHint">Select a dimension. Strong technical performance cannot make up for a major commercial, operational or adoption gap.</p></div>
      <div class="v2_rqSide">{panels}<p class="rv_readyClose">By assessing all four dimensions together, IO can identify the most important barriers, design more relevant validation activities and help partners make better-informed investment and implementation decisions.</p></div>
    </div>
  </div></section>'''

# ---------------- 6. Technology areas: three colour-coded groups (deck slide 14), cards instead of accordions ----------------
TCOL = {'production': 'var(--green, #00a16b)', 'waste': '#E94492', 'supply': '#F08104'}
gtabs = ''.join(f'<button type="button" class="v2_gtab" data-t="{k}" style="--c:{TCOL[k]}" aria-pressed="{"true" if i == 0 else "false"}"><span>{i + 1:02d}</span><b>{n}</b><i>{len(S)} areas · {sum(len(x[2]) for x in S)} examples</i></button>' for i, (k, n, S) in enumerate(TECH))
gpanels = ''.join(f'<div class="v2_gpanel" data-t="{k}" style="--c:{TCOL[k]}"{"" if i == 0 else " hidden"}><ul class="v2_cards">' + ''.join(
    f'<li class="v2_card"><h3>{t}</h3><p>{d}</p><ul class="v2_ex">{"".join(f"<li>{x}</li>" for x in ex)}</ul></li>' for t, d, ex in S) + '</ul></div>' for i, (k, n, S) in enumerate(TECH))
adj = ''.join(f'<li>{x}</li>' for x in ADJ)
tech = f'''<section class="x_sec v2_tech"><div class="s_wrap">
    <div class="rv_twoCol"><div><span class="c_eyebrow" data-reveal>Our focus areas</span><h2 class="x_h2" data-reveal>Technologies shaping the future of agrifood</h2></div>
    <div><p class="x_lead" data-reveal>IO works across the agrifood value chain, from production and resource efficiency to supply-chain intelligence, waste prevention and circularity.</p>
    <p class="x_body" data-reveal>Our areas of focus evolve in response to strategic priorities, partner needs and emerging technologies. We also consider innovations from adjacent industries where they can create meaningful value for agriculture, food production or resource resilience.</p></div></div>
    <div class="v2_gtabs" role="group" aria-label="Technology groups">{gtabs}</div>
    {gpanels}
  </div>
  <div class="v2_adj"><div class="s_wrap v2_adjHead"><span class="x_label">Adjacent sectors</span><h3>Agrifood specialization with adjacent-sector reach</h3><p class="x_body">IO’s core focus is agrifood innovation. Many of agriculture’s most important challenges intersect with other sectors, so we consider adjacent technologies where there is a clear application, and validate whether they create meaningful operational or commercial value in agricultural environments.</p></div>
    <div class="v2_marq" aria-label="Adjacent sectors"><ul>{adj}</ul><ul aria-hidden="true">{adj}</ul></div></div>
  </section>'''

# ---------------- 7. Featured work: one story told in six beats (doc design guidance) ----------------
BEATS = [('The challenge', 'Compare finalist water technologies for the Al Miyah Challenge under real-world conditions.', I_ + 'chal_line.webp'),
         ('The partner', 'Mohamed bin Zayed Water Initiative.', I_ + 'chal_stage.webp'),
         ('IO’s role', 'Real-world technology validation: IO designed and delivered the validation activities.', I_ + 'chal_jury.webp'),
         ('The approach', 'Validation in relevant agricultural operating conditions.', I_ + 'chal_seed.webp'),
         ('The evidence', 'Technical and operational evidence to help compare the technologies.', I_ + 'chal_pitch.webp'),
         ('The outcome', 'Evidence to support the final winner evaluation and selection process.', I_ + 'chal_winners.webp')]
beats = ''.join(f'<li class="v2_beat" data-i="{i}"><span>{i + 1:02d}</span><h4>{t}</h4><p>{d}</p></li>' for i, (t, d, _) in enumerate(BEATS))
bimgs = ''.join(f'<img src="{im}" alt="" loading="lazy" data-i="{i}"{" data-on" if i == 0 else ""}>' for i, (_, _, im) in enumerate(BEATS))
featured = f'''<section class="x_sec x_secTop0 v2_feat"><div class="s_wrap">
    <div class="v2_featHead"><div><span class="c_eyebrow" data-reveal>Featured work</span><h2 class="x_h2" data-reveal>Innovation in action</h2></div><p class="x_body">How IO’s approach is applied in practice. The featured story changes with current priorities.</p></div>
    <div class="v2_case">
      <div class="v2_caseMedia"><div class="v2_caseStick"><div class="v2_caseImgs">{bimgs}</div>
        <div class="v2_caseCard"><span class="rv_caseCat">Agricultural Challenges</span><h3>Validating water technologies under real-world conditions</h3>
        <dl><div><dt>Partner</dt><dd>Mohamed bin Zayed Water Initiative</dd></div><div><dt>IO role</dt><dd>Real-world technology validation</dd></div></dl>
        <a class="s_btn s_btnPrimary s_btnSm" href="ivp-agricultural-challenges.html">Read the case study {A}</a></div></div></div>
      <div class="v2_caseStory"><p class="v2_caseLead">IO supported the evaluation of finalist technologies for the Al Miyah Challenge by designing and delivering real-world validation activities. The work generated technical and operational evidence to help compare technologies and inform the final winner evaluation and selection process.</p><ol class="v2_beats">{beats}</ol></div>
    </div>
  </div></section>'''

V2 = (S / 'scripts' / 'hub_v2.css').read_text() + (S / 'scripts' / 'hub_v2.js').read_text()
