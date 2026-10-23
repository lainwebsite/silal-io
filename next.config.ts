import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static homepage prototypes: public/homepage-concept-1/v2/index.html answers at /V2 (client link: new homepage, its inner pages are /V2/about and /V2/resources/news) and /homepage-concept-1/v2;
  // public/homepage-concept-1/v3/index.html (same homepage, V1-style directory menu) answers at /V3 (inner pages /V3/about and /V3/resources/news), /homepage-concept-1/v3 and, since 2026-10-13, /homepage-concept-1 (the client link);
  // public/homepage-concept-3/index.html (journey panel, curved curtains, smoother numbers, redesigned footer) answers at /homepage-concept-3; public/homepage-concept-3/v1/index.html (same page, client footer design) at /homepage-concept-3/V1
  // public/new-homepage/index.html (new homepage from the About page, 2026-10-23, branch 23-oct/new-homepage) answers at /new-homepage; team link only, noindex
  async rewrites() {
    return [
      { source: "/V2", destination: "/homepage-concept-1/v2/index.html" },
      { source: "/homepage-concept-1", destination: "/homepage-concept-1/v3/index.html" },   // client link: the latest Concept 1 (same page as /V3)
      { source: "/homepage-concept-1/v2", destination: "/homepage-concept-1/v2/index.html" },
      { source: "/V3", destination: "/homepage-concept-1/v3/index.html" },
      { source: "/homepage-concept-1/v3", destination: "/homepage-concept-1/v3/index.html" },
      { source: "/homepage-concept-3", destination: "/homepage-concept-3/index.html" },
      { source: "/homepage-concept-3/V1", destination: "/homepage-concept-3/v1/index.html" },
      { source: "/new-homepage", destination: "/new-homepage/index.html" },
    ];
  },
};

export default nextConfig;
