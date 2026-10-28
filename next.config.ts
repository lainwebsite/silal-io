import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean client links (/Homepage-concept-1, /Homepage-concept-3, /New-Homepage/V1, /About/V1, /News/V1, /News-Detail) are rewrites onto the pages below; see docs/links.md.
  // Static homepage prototypes: public/homepage-concept-1/v2/index.html answers at /V2 (client link: new homepage, its inner pages are /V2/about and /V2/resources/news) and /homepage-concept-1/v2;
  // public/homepage-concept-1/v3/index.html (same homepage, V1-style directory menu) answers at /V3 (inner pages /V3/about and /V3/resources/news), /homepage-concept-1/v3 and, since 2026-10-13, /homepage-concept-1 (the client link);
  // public/homepage-concept-3/index.html (journey panel, curved curtains, smoother numbers, redesigned footer) answers at /homepage-concept-3; public/homepage-concept-3/v1/index.html (same page, client footer design) at /homepage-concept-3/V1
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
      // public/innovation-venture-platforms/, built by prototypes/innovation-venture-platforms/build.py (2026-10-28)
      { source: "/Innovation-Venture-Platforms", destination: "/innovation-venture-platforms/index.html" },
      { source: "/innovation-venture-platforms", destination: "/innovation-venture-platforms/index.html" },
      { source: "/Innovation-Venture-Platforms/Farm-Innovation-Fund", destination: "/innovation-venture-platforms/farm-innovation-fund.html" },
      { source: "/Innovation-Venture-Platforms/Incubation", destination: "/innovation-venture-platforms/incubation.html" },
      { source: "/Innovation-Venture-Platforms/Accelerator", destination: "/innovation-venture-platforms/accelerator.html" },
      { source: "/Innovation-Venture-Platforms/Agricultural-Challenges", destination: "/innovation-venture-platforms/agricultural-challenges.html" },
      { source: "/Innovation-Venture-Platforms/Enquire", destination: "/innovation-venture-platforms/enquire.html" },
    ];
  },
};

export default nextConfig;
