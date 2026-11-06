import sys, html.parser, glob, os
VOID={'area','base','br','col','embed','hr','img','input','link','meta','source','track','wbr','path','circle','rect','line','polyline','polygon','stop','use','ellipse'}
class P(html.parser.HTMLParser):
    def __init__(s): super().__init__(); s.st=[]; s.err=[]
    def handle_starttag(s,t,a):
        if t not in VOID and t not in ('svg',) : s.st.append((t,s.getpos()))
    def handle_startendtag(s,t,a): pass
    def handle_endtag(s,t):
        if t in VOID or t=='svg': return
        if s.st and s.st[-1][0]==t: s.st.pop(); return
        s.err.append((t,s.getpos(), s.st[-1] if s.st else None))
        for i in range(len(s.st)-1,-1,-1):
            if s.st[i][0]==t: del s.st[i:]; break
for f in sorted(glob.glob(sys.argv[1]+'/*.html')):
    t=open(f).read(); a=t.find('<main'); b=t.find('</main>')
    if a<0: continue
    import re
    m=re.sub(r'<script.*?</script>|<style.*?</style>|<svg.*?</svg>','',t[a:b+7],flags=re.S)
    p=P(); p.feed(m)
    if p.err or p.st: print(os.path.basename(f), 'errs', p.err[:3], 'open', p.st[-3:])
print('checked')
