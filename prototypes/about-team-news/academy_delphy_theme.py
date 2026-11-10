"""Revision 9 November (client comment: "at course level, Delphy content on these pages like a co-branded activity"; owner: "make the
detail page of the Delphy courses in Delphy's style", with delphy.nl/en/services/trainings as the reference). The detail page of a
course delivered with Delphy takes Delphy's look as it shows on delphy.nl: white ground, dark slate text (#2e353e), semibold sans
headings, Delphy red (#a51140) for accents and buttons, the blue + yellow band under the hero picture, cards with a soft shadow and
8px corners, and Delphy's own line "We make growers better!" next to the real logo. Only the detail pages of Delphy courses change
(the CSS is scoped with :has() to the detail view that contains the co-brand logo). Idempotent.
Run after academy_delphy_track.py:  python3 academy_delphy_theme.py <bundle dir>
"""
import pathlib, sys
B = pathlib.Path(sys.argv[1])
RED, SLATE, BLUE, YELLOW = "#a51140", "#2e353e", "#29a7df", "#d9b800"
V = "#view:has(.cobrandBig)"
CSS = f"""<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"><style>/* rev. 9 Nov: Delphy course detail in Delphy's style */
{V}{{font-family:'Nunito Sans','Mulish',Arial,sans-serif;color:{SLATE}}}
{V} .dwrap h1,{V} .dwrap h2,{V} .dwrap h3,{V} .dClose h2,{V} .more h2{{font-family:'Nunito Sans',Arial,sans-serif;font-weight:600;color:{SLATE};letter-spacing:-.01em}}
{V} .dTitle{{font-size:clamp(2rem,3.2vw,2.75rem);line-height:1.12}}
{V} .dLead{{color:#515a64;font-weight:400}}
{V} .crumbs,{V} .crumbs button{{color:#6b737c}}
{V} .cobrandBig{{display:inline-flex;align-items:center;gap:14px;border:0;background:none;padding:0;margin:0 0 20px;color:{RED};font-size:11px;letter-spacing:.12em;text-transform:uppercase}}
{V} .cobrandBig>span,{V} .cobrandBig>i{{display:none}}
{V} .cobrandBig .cobrandLogo{{height:46px;width:auto}}
{V} .cobrandBig::after{{content:"We make growers better!";font-weight:700;letter-spacing:.08em;color:{RED};border-left:1px solid #d9c3cb;padding-left:14px}}
{V} .facts{{background:#f6f3f4;border-radius:8px}}
{V} .facts dt{{color:{RED};font-weight:700}}
{V} .dHero{{position:relative;border-radius:0;margin-bottom:26px}}
{V} .dHero::after{{content:"";position:absolute;left:0;right:0;bottom:-22px;height:14px;background:linear-gradient({BLUE} 0 6px,{YELLOW} 6px 14px)}}
{V} .pull{{border-left:4px solid {RED};padding-left:20px;color:{SLATE}}}
{V} .chips li{{background:#111;color:#fff;border-color:#111;border-radius:0;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:11px}}
{V} .chips.o li{{background:#fff;color:{SLATE};border:1px solid #cfc8d0;text-transform:none;letter-spacing:0;font-weight:600;font-size:13px;border-radius:4px}}
{V} .faq summary{{font-weight:600}}
{V} a,{V} .textLink{{color:#1b96c8}}
{V} .btn.btnPrimary{{background:{RED};border-color:{RED};color:#fff;border-radius:4px;font-weight:700}}
{V} .btn.btnPrimary:hover{{background:#7f0d32;border-color:#7f0d32}}
{V} .reqCard{{background:#fff;border:0;border-top:4px solid {RED};border-radius:8px;box-shadow:0 10px 30px -12px rgb(30 20 25/.28)}}
{V} .reqCard h3{{color:{RED}}}
{V} .reqCard input,{V} .reqCard textarea{{background:#fff;border:1px solid #cfc8d0;border-radius:4px}}
{V} .reqCard input:focus,{V} .reqCard textarea:focus{{outline:2px solid {RED}33;border-color:{RED}}}
{V} .reqCard .big{{color:{SLATE}}}
{V} .dClose{{background:{RED};color:#fff}}
{V} .dClose h2,{V} .dClose p{{color:#fff}}
{V} .dClose .btn.btnPrimary{{background:#fff;border-color:#fff;color:{RED}}}
{V} .cardLink,{V} .bigLink{{box-shadow:0 8px 24px -14px rgb(30 20 25/.3)}}
</style>"""
for name in ("io-academy.html", "training-detail.html"):
    f = B / name
    if not f.exists():
        continue
    s = f.read_text(encoding="utf8")
    if "rev. 9 Nov: Delphy course detail in Delphy" not in s:
        s = s.replace("<head>", "<head>" + CSS, 1) if "<head>" in s else CSS + s
        f.write_text(s, encoding="utf8"); print(name, "Delphy theme")

# the library cards of the Delphy courses follow the cards of delphy.nl/en/services/trainings: picture on top with a black label on its
# top-left corner ("English spoken", the language the course facts give), white card, soft shadow, 8px corners, semibold slate title
CARD = f"""<style>/* rev. 9 Nov: Delphy course cards in Delphy's card style */
#feedbody li[data-trk="Delphy"] .cardLink{{background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 8px 26px -12px rgb(30 20 25/.32);padding:0 0 18px;font-family:'Nunito Sans',Arial,sans-serif}}
#feedbody li[data-trk="Delphy"] .cardImg{{position:relative;border-radius:0;margin:0}}
#feedbody li[data-trk="Delphy"] .cardImg::after{{content:"English spoken";position:absolute;left:0;top:14px;background:#111;color:#fff;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:5px 12px}}
#feedbody li[data-trk="Delphy"] .meta,#feedbody li[data-trk="Delphy"] .cardHead,#feedbody li[data-trk="Delphy"] .cardSub{{padding-inline:18px}}
#feedbody li[data-trk="Delphy"] .meta{{margin-top:16px;color:#6b737c}}
#feedbody li[data-trk="Delphy"] .cardTitle{{font-family:'Nunito Sans',Arial,sans-serif;font-weight:600;color:{SLATE};font-size:1.1875rem;line-height:1.25}}
#feedbody li[data-trk="Delphy"] .cardSub{{color:#6b737c}}
#feedbody li[data-trk="Delphy"] .cardLink:hover .cardTitle{{color:{RED}}}
</style>"""
for name in ("io-academy.html",):
    f = B / name
    if f.exists():
        s = f.read_text(encoding="utf8")
        if "Delphy course cards in Delphy's card style" not in s:
            s = s.replace("<head>", "<head>" + CARD, 1) if "<head>" in s else CARD + s
            f.write_text(s, encoding="utf8"); print(name, "Delphy cards")
