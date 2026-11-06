"""Team (rev 6 Nov 17): CEO, then Vertical Leads, then one block per team. Profiles get the confirmed roles."""
from common import *

PH = 'photos/iO%20Team%20Headshot%20%26%20Bios/'
IMG = {'Jude': PH + 'Jude/Jude-1.jpg', 'Francisco': PH + 'Francisco/Francisco-7.jpg', 'Sagar': PH + 'Sagar/Sagar-2.jpg',
       'Ahmed': PH + 'Ahmed/Ahmed-1.jpg', 'Ali': PH + 'Ali/Ali-4.jpg', 'Nadia': PH + 'Nadia/Nadia-10.jpg',
       'Caitlin': PH + 'Caitlin/Caitlin-4-2.jpg', 'Mohsin': PH + 'Mohsin/Mohsin-4.jpg'}
LEADS = [('Jude', 'Director of Science &amp; Research', 'Science'), ('Francisco', 'Head of Innovation', 'Innovation'),
         ('Shameer', 'Commercial Manager', 'Commercial'), ('Sagar', 'Operations Lead', 'Operations')]
# team membership of the other five is not confirmed yet (asked 6 Nov): one place to change it
TEAMS = [
    ('Science', 'Jude', 'Precision breeding and plant health, crop diversification, soil and water, food technology, analytical services and R&amp;D trialling.', ['Nadia', 'Mohsin']),
    ('Innovation', 'Francisco', 'Ventures, intelligent systems, applied technologies and innovation delivery: the bridge between science and commercial.', ['Caitlin']),
    ('Commercial', 'Shameer', 'Partnerships, services and the routes to market that take proven solutions to customers.', ['Ali']),
    ('Operations', 'Sagar', 'The laboratories, greenhouses, fields and facilities that keep every trial and programme running.', ['Ahmed']),
]
PLACE = '<span class="rv_ph" aria-hidden="true"><svg viewBox="0 0 80 100" width="44%" fill="none"><circle cx="40" cy="34" r="17" fill="#cfd3d5"/><path d="M8 100c2-22 16-34 32-34s30 12 32 34" fill="#cfd3d5"/></svg><em>Photo to follow</em></span>'

def portrait(name):
    return f'<img alt="" loading="lazy" src="{IMG[name]}">' if name in IMG else PLACE

def link(name, inner):
    return f'<a class="x_teamLink" href="team-{name.lower()}.html">{inner}</a>' if name in IMG else f'<div class="x_teamLink">{inner}</div>'

t = load('team.html')
old = between(t, '<div class="c_teamHead">', '</ul>')
leads = ''.join(f'<li>{link(n, f"<span class=\"c_teamImg\">{portrait(n)}</span><span class=\"rv_lName\">{n}</span><span class=\"rv_lRole\">{r}</span><span class=\"rv_lTeam\">{team}</span>")}</li>' for n, r, team in LEADS)
role = {n: r for n, r, _ in LEADS}
blocks = ''
for team, lead, desc, members in TEAMS:
    people = [lead] + members
    cards = ''.join(f'<li>{link(n, f"<span class=\"c_teamImg\">{portrait(n)}</span><span class=\"c_teamName\">{n}</span><span class=\"rv_mRole\">{role.get(n, team + " team")}</span>")}</li>' for n in people)
    blocks += (f'<div class="rv_teamBlock" id="team-{team.lower()}"><div class="rv_tbHead"><h4>{team}</h4><p>{desc}</p><span>Led by {lead}</span></div>'
               f'<ul class="c_team rv_tbList">{cards}</ul></div>')
new = (f'<div class="c_teamHead rv_leadsHead"><h3 class="c_h2" data-reveal>Vertical Leads</h3><p class="c_lead x_teamSub" data-reveal>Innovation Oasis is organised in four verticals, with innovation as the bridge between science and commercial.</p></div>'
       f'<ul class="rv_leads">{leads}</ul>'
       f'<div class="c_teamHead"><h3 class="c_h2" data-reveal>Our Teams</h3><p class="c_lead x_teamSub" data-reveal>Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown alongside the ecosystem itself.</p></div>'
       f'<nav class="rv_teamNav" aria-label="Teams">' + ''.join(f'<a href="#team-{x[0].lower()}">{x[0]}</a>' for x in TEAMS) + '</nav>'
       f'<div class="rv_teams">{blocks}</div>')
t = rep(t, old, new)
CSS = '''<style id="rev6-team">
.rv_leadsHead { margin-top: clamp(80px, 8vw, 140px) !important; }
.rv_leads { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 40px var(--col-gap); }
.rv_leads li, .rv_tbList li { display: flex; flex-direction: column; }
.rv_lName { font-size: 1.25rem; padding-top: 14px; border-top: 1px solid var(--io); }
.rv_lRole { font-size: .9375rem; color: var(--charcoal); margin-top: -6px; }
.rv_lTeam { font-size: .6875rem; letter-spacing: .14em; text-transform: uppercase; color: var(--io-ink); }
.rv_mRole { font-size: .8125rem; color: var(--grey); margin-top: -8px; }
.rv_ph { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; background: #e9ebec; }
.rv_ph em { position: absolute; top: 14px; left: 14px; font-style: normal; font-size: .6875rem; letter-spacing: .08em; color: var(--grey); }
.rv_teamNav { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 8px; margin: -8px 0 clamp(24px, 3vw, 40px); }
.rv_teamNav a { padding: 9px 16px; border: 1px solid var(--line); border-radius: 999px; font-size: .875rem; color: var(--charcoal); transition: border-color .25s, color .25s; }
.rv_teamNav a:hover { border-color: var(--io-ink); color: var(--io-ink); }
.rv_teams { grid-column: 1 / -1; display: flex; flex-direction: column; }
.rv_teamBlock { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 3fr); gap: 32px var(--col-gap); padding: clamp(32px, 4vw, 56px) 0; border-top: 1px solid var(--line); scroll-margin-top: 90px; }
.rv_tbHead { display: flex; flex-direction: column; gap: 12px; }
.rv_tbHead h4 { font-size: var(--fs-h3, 1.6rem); font-weight: 400; color: var(--charcoal); }
.rv_tbHead p { font-size: .9375rem; line-height: 1.6; color: var(--grey); }
.rv_tbHead span { font-size: .6875rem; letter-spacing: .14em; text-transform: uppercase; color: var(--io-ink); }
.rv_tbList { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; gap: 28px 20px !important; }
@media (max-width: 899px) {
  .rv_leads { grid-template-columns: 1fr 1fr; }
  .rv_teamBlock { grid-template-columns: 1fr; }
  .rv_tbList { grid-template-columns: 1fr 1fr !important; }
}
</style>'''
t = t.replace('</body>', CSS + '</body>')
save('team.html', global_patch(t))

# profile pages: confirmed roles for the leads; the others keep "to be confirmed" but name their team
TEAM_OF = {m: tm for tm, _, _, ms in TEAMS for m in ms}
for n in ['Jude', 'Francisco', 'Sagar', 'Ahmed', 'Ali', 'Nadia', 'Caitlin', 'Mohsin']:
    f = f'team-{n.lower()}.html'
    p = load(f)
    if n in role:
        r = role[n]; team = next(x[2] for x in LEADS if x[0] == n)
        p = rep(p, '<p class="n3_articleLead">Role to be confirmed, Innovation Oasis</p>', f'<p class="n3_articleLead">{r}, Innovation Oasis</p>')
        p = rep(p, '<dt>Role</dt><dd>Role to be confirmed</dd>', f'<dt>Role</dt><dd>{r}</dd>')
        p = rep(p, '<dt>Team</dt><dd>Innovation Oasis</dd>', f'<dt>Team</dt><dd>{team} · Vertical Lead</dd>')
        p = p.replace(f'{n} is part of the small, hands-on team behind every laboratory, trial and partnership at Innovation Oasis.',
                      f'{n} leads the {team} vertical at Innovation Oasis, one of four teams behind every laboratory, trial and partnership on site.')
    else:
        p = rep(p, '<dt>Team</dt><dd>Innovation Oasis</dd>', f'<dt>Team</dt><dd>{TEAM_OF[n]}</dd>')
    save(f, global_patch(p))
