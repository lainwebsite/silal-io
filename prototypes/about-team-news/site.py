"""Join every page of the review artifact into one website (comment 2026-10-30: "make it one site, like a normal website").

The artifact opens on the homepage and every page links to the others through the site's own navbar, mega menu,
mobile menu and footer; no review switcher. Links that have a page get it; links without a page yet stay "#".
  1. static links (href="#" whose text names a page) are rewritten in the HTML, before any page script runs
  2. a small click handler covers menus that pages build in script (IO Academy, Training Detail: href="#top"),
     "Overview" entries in the mobile menu (they open their group's page) and the logo
  3. the main-menu item of each page's section is the active one
Run: python3 site.py <bundle dir>
"""
import html, json, pathlib, re, sys

B = pathlib.Path(sys.argv[1])
HOME = "index.html"

# Every page is a page of the artifact itself, not a frame inside one, so comments anchor to the element clicked
# (comment 2026-10-30). The homepage becomes the artifact's own index.html: the publish wraps that file in its own
# document skeleton, so the copy keeps only what sits inside <body>.
hp = B / "new-homepage.html"
if hp.exists():
    t = hp.read_text(encoding="utf8")
    if "<body>" in t[:3000]:
        t = t[t.index("<body>", 0, 3000) + len("<body>"):]
    t = re.sub(r"</body>\s*</html>\s*$", "", t)
    (B / "index.html").write_text(t, encoding="utf8")
    hp.unlink()
for f in B.glob("*.html"):
    t = f.read_text(encoding="utf8")
    if "new-homepage.html" in t:
        f.write_text(t.replace('"new-homepage.html"', '"index.html"').replace("'new-homepage.html'", "'index.html'"), encoding="utf8")
LINKS = {
    "Home": HOME,
    "About IO": "about.html", "Our Story": "about.html", "Team & CEO Message": "team.html",
    "Innovation & Venture Platforms": "ivp-hub.html", "Farm Innovation Fund": "ivp-farm-innovation-fund.html",
    "Incubation": "ivp-incubation.html", "Accelerator": "ivp-accelerator.html", "Agricultural Challenges": "ivp-agricultural-challenges.html",
    "Talent & Training": "io-academy.html", "IO Academy Training": "io-academy.html", "Advanced Agritech Academy": "io-academy.html",
    "Resources": "news.html", "News & Media": "news.html", "Content Library": "news.html", "Press releases": "news.html", "Press Releases": "news.html",
    "Enquire": "ivp-enquire.html",
    # homepage "Latest release" block
    "Read the release": "news-foodtech-challenge-winners.html",
    "FoodTech Challenge winners recognised at Innovation Oasis": "news-foodtech-challenge-winners.html",
}
SECTION = {"about": "About IO", "team": "About IO", "ivp-": "Innovation & Venture Platforms", "io-academy": "Talent & Training", "training-detail": "Talent & Training"}

norm = lambda t: re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", t))).strip().rstrip("→↗ ").strip()

SCRIPT = """<script>
/* one site: menus built in script, mobile-menu "Overview" entries and the logo open their pages (site.py) */
(function () {
  var L = %s, HOME = %s;
  function target(a) {
    var t = (a.textContent || '').replace(/\\s+/g, ' ').replace(/[\\u2192\\u2197]/g, '').trim();
    if (L[t]) return L[t];
    if (t === 'Overview') { var d = a.closest('details'), s = d && d.querySelector('summary'); if (s) { var g = s.textContent.replace(/^\\s*\\d+/, '').trim(); if (L[g]) return L[g]; } }
    if (!t && a.querySelector('img') && a.closest('header')) return HOME;
    return null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a'); if (!a) return;
    var h = a.getAttribute('href') || '';
    if (h !== '#' && h !== '#top' && h !== '') return;
    var to = target(a); if (!to) return;
    e.preventDefault(); e.stopPropagation(); location.href = to;
  }, true);
})();
</script>
""" % (json.dumps(LINKS), json.dumps(HOME))

for f in sorted(B.glob("*.html")):
    s = f.read_text(encoding="utf8")
    n = 0

    def link(m):
        global n
        t = norm(m.group(3))
        to = LINKS.get(t)
        if not to and 's_logo' in m.group(1):
            to = HOME
        if not to:
            return m.group(0)
        n += 1
        return f'<a {m.group(1)}href="{to}"{m.group(2)}>{m.group(3)}</a>'
    s = re.sub(r'<a ([^>]*?)href="#"([^>]*)>(.*?)</a>', link, s, flags=re.S)
    # "Our Story" opened the same page as "About IO" right below it in the menu (comment 2026-10-30): one entry is enough
    s = s.replace('<li><a href="about.html">Our Story</a></li>', "")
    s = s.replace('["Our Story","Team & CEO Message","Virtual Tour \u2197"]', '["Team & CEO Message","Virtual Tour \u2197"]')
    # active main-menu item = the page's own section (none on the homepage and the news pages)
    sec = next((v for k, v in SECTION.items() if f.name.startswith(k)), None)
    # only in the links themselves: the CSS selectors that style the active item carry the same text
    s = re.sub(r'(<a\b[^>]*?)data-active="true"', r'\1data-active="false"', s)
    if sec:
        s = re.sub(r'(<li class="s_navItem"><a [^>]*?)data-active="false"([^>]*>' + re.escape(html.escape(sec, quote=False)) + "</a>)",
                   r'\1data-active="true"\2', s, count=1)
    if "one site: menus built in script" not in s:
        s = s.replace("</body>", SCRIPT + "</body>") if "</body>" in s else s + SCRIPT
    f.write_text(s, encoding="utf8")
    print(f.name, n, sec or "-")
