"""Pages without their own revision get the shared menu/nav patch."""
from common import *
DONE = {'index.html', 'about.html', 'our-ecosystem.html', 'team.html', 'io-academy.html', 'training-detail.html', 'ivp-hub.html', 'ivp-farm-innovation-fund.html', 'ivp-incubation.html'} | {f'team-{n}.html' for n in ['jude', 'francisco', 'sagar', 'ahmed', 'ali', 'nadia', 'caitlin', 'mohsin']}
for f in sorted(p.name for p in ORIG.glob('*.html')):
    if f in DONE: continue
    s = global_patch(load(f))
    s = s.replace('From lab research to market-ready, with Khalifa University.', 'Translate promising research and early-stage technologies through focused validation.')
    save(f, s)
