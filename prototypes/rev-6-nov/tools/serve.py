import http.server, os, sys
ROOT=sys.argv[1]
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(s,*a,**k): super().__init__(*a,directory=ROOT,**k)
    def log_message(s,*a): pass
    def do_GET(s):
        p=s.path.split('?')[0].split('#')[0]
        if p in ('/','/index.html'):
            b=open(os.path.join(ROOT,'index.html'),encoding='utf8').read()
            if not b.lstrip().lower().startswith('<!doctype'):
                b='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Innovation Oasis</title></head><body>'+b+'</body></html>'
            d=b.encode(); s.send_response(200); s.send_header('Content-Type','text/html; charset=utf-8'); s.send_header('Content-Length',str(len(d))); s.end_headers(); s.wfile.write(d); return
        return super().do_GET()
http.server.ThreadingHTTPServer(('127.0.0.1',8765),H).serve_forever()
