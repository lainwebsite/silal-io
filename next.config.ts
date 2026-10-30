import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean client links (/Homepage-concept-1, /Homepage-concept-3, /New-Homepage/V1, /About/V1, /News/V1, /News-Detail) are rewrites onto the pages below; see docs/links.md.
  // Static homepage prototypes: public/homepage-concept-1/v2/index.html answers at /V2 (client link: new homepage, its inner pages are /V2/about and /V2/resources/news) and /homepage-concept-1/v2;
  // public/homepage-concept-1/v3/index.html (same homepage, V1-style directory menu) answers at /V3 (inner pages /V3/about and /V3/resources/news), /homepage-concept-1/v3 and, since 2026-10-13, /homepage-concept-1 (the client link);
  // public/homepage-concept-3/index.html (journey panel, curved curtains, smoother numbers, redesigned footer) answers at /homepage-concept-3; public/homepage-concept-3/v1/index.html (same page, client footer design) at /homepage-concept-3/V1
  async redirects() {
    return [
      // some apps send the "&" encoded; send those to the plain URL
      // the whole review site as one website (homepage, About, Team + profiles, News + releases, IVP, IO Academy, Training
      // Detail; 2026-10-30): static files in public/full-site/, made by prototypes/about-team-news/publish.py. A redirect,
      // not a rewrite, so the pages' relative links (about.html, team-ali.html, ...) resolve inside the folder
      { source: "/full-site", destination: "/full-site/index.html", permanent: false },
      { source: "/innovation%26venture", destination: "/innovation&venture", permanent: false },
      { source: "/innovation%26venture/:sub", destination: "/innovation&venture/:sub", permanent: false },
      { source: "/innovation%26venture-v2", destination: "/innovation&venture-v2", permanent: false },
      { source: "/innovation%26venture-v2/:sub", destination: "/innovation&venture-v2/:sub", permanent: false },
      { source: "/Innovation-Venture-Platforms", destination: "/innovation&venture", permanent: false },
      { source: "/innovation-venture-platforms", destination: "/innovation&venture", permanent: false },
      { source: "/Innovation-Venture-Platforms/Farm-Innovation-Fund", destination: "/innovation&venture/farm-innovation-fund", permanent: false },
      { source: "/Innovation-Venture-Platforms/Incubation", destination: "/innovation&venture/incubation", permanent: false },
      { source: "/Innovation-Venture-Platforms/Accelerator", destination: "/innovation&venture/accelerator", permanent: false },
      { source: "/Innovation-Venture-Platforms/Agricultural-Challenges", destination: "/innovation&venture/agricultural-challenges", permanent: false },
      { source: "/Innovation-Venture-Platforms/Enquire", destination: "/innovation&venture/enquire", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/V2", destination: "/homepage-concept-1/v2/index.html" },
      { source: "/homepage-concept-1", destination: "/homepage-concept-1/v3/index.html" },   // client link: the latest Concept 1 (same page as /V3)
      { source: "/homepage-concept-1/v2", destination: "/homepage-concept-1/v2/index.html" },
      { source: "/V3", destination: "/homepage-concept-1/v3/index.html" },
      { source: "/homepage-concept-1/v3", destination: "/homepage-concept-1/v3/index.html" },
      { source: "/homepage-concept-3", destination: "/homepage-concept-3/index.html" },
      { source: "/homepage-concept-3/V1", destination: "/homepage-concept-3/v1/index.html" },
      // Client links, "Silal Links Tidy Up" (2026-10-23). Team/V1 is not built yet, so it has no rewrite.
      { source: "/Homepage-concept-1", destination: "/homepage-concept-1/v3/index.html" },
      { source: "/Homepage-concept-3", destination: "/homepage-concept-3/index.html" },
      { source: "/New-Homepage/V1", destination: "/new-homepage/index.html" },
      { source: "/new-homepage", destination: "/new-homepage/index.html" },
      { source: "/new-homepage-v2", destination: "/new-homepage-v2/index.html" },                 // team link: newer version (helix rows 3-7, centred helix)
      { source: "/Training-Detail", destination: "/training-detail/index.html" },                // IO Academy training detail page (copy of New Update 23 Oct/Training-Detail/index.html)                       // team link
      { source: "/About/V1", destination: "/V3/about" },
      { source: "/News/V1", destination: "/V3/resources/news" },
      { source: "/News-Detail", destination: "/V3/resources/news/innovation-oasis-officially-opens" },
      { source: "/News-Detail/:slug", destination: "/V3/resources/news/:slug" },
      // IO Academy (library + course detail, static page in public/io-academy/, 2026-10-26)
      { source: "/io-academy", destination: "/io-academy/index.html" },
      { source: "/IO-Academy", destination: "/io-academy/index.html" },
      // Innovation & Venture Platforms (sitemap category 3): primary category page + 4 sub pages + enquiry form, static files in
      // public/innovation-venture-platforms/, built by prototypes/innovation-venture-platforms/build.py (2026-10-28).
      // Live URLs since 2026-10-28: /innovation&venture and /innovation&venture/<sub page>; the older /Innovation-Venture-Platforms links redirect there.
      { source: "/innovation&venture", destination: "/innovation-venture-platforms/index.html" },
      { source: "/innovation&venture/farm-innovation-fund", destination: "/innovation-venture-platforms/farm-innovation-fund.html" },
      { source: "/innovation&venture/incubation", destination: "/innovation-venture-platforms/incubation.html" },
      { source: "/innovation&venture/accelerator", destination: "/innovation-venture-platforms/accelerator.html" },
      { source: "/innovation&venture/agricultural-challenges", destination: "/innovation-venture-platforms/agricultural-challenges.html" },
      { source: "/innovation&venture/enquire", destination: "/innovation-venture-platforms/enquire.html" },
      // v2 (2026-10-29): the reworked pages, side by side with the 2026-10-28 version above; files in public/innovation-venture-platforms-v2/
      { source: "/innovation&venture-v2", destination: "/innovation-venture-platforms-v2/index.html" },
      { source: "/innovation&venture-v2/farm-innovation-fund", destination: "/innovation-venture-platforms-v2/farm-innovation-fund.html" },
      { source: "/innovation&venture-v2/incubation", destination: "/innovation-venture-platforms-v2/incubation.html" },
      { source: "/innovation&venture-v2/accelerator", destination: "/innovation-venture-platforms-v2/accelerator.html" },
      { source: "/innovation&venture-v2/agricultural-challenges", destination: "/innovation-venture-platforms-v2/agricultural-challenges.html" },
      { source: "/innovation&venture-v2/enquire", destination: "/innovation-venture-platforms-v2/enquire.html" },
    ];
  },
};

export default nextConfig;
