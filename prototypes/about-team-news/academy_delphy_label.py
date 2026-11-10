"""Delphy co-brand label on cards: bigger logos, hairline divider instead of the tiny x. Idempotent.
usage: academy_delphy_label.py <bundle dir>   (patches io-academy.html only; card pill lives in #feedbody)"""
import sys, os

P = os.path.join(sys.argv[1], "io-academy.html")
MARK = "/* rev. 10 Nov: Delphy card label v2 */"
F = '#feedbody li[data-trk="Delphy"] .cobrand'
CSS = (
    "<style>" + MARK +
    f"{F}{{gap:11px!important;padding:7px 15px 7px 13px!important;border:1px solid #e3dce0!important;"
    "border-radius:999px;background:#fff!important;box-shadow:none}"
    f"{F} .cobrandIo{{height:22px!important}}"
    f"{F} .cobrandLogo{{height:24px!important}}"
    f"{F} i{{font-size:0!important;width:1px;height:20px;background:#d9c3cb;opacity:1!important;display:block}}"
    "</style>"
)
s = open(P).read()
if MARK in s:
    print("already patched")
else:
    open(P, "w").write(s + CSS)
    print("patched")
