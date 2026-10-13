import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static homepage prototypes: public/homepage-concept-1/v2/index.html answers at /V2 (client link: new homepage, its inner pages are /V2/about and /V2/resources/news), /homepage-concept-1 and /homepage-concept-1/v2;
  // public/homepage-concept-3/index.html answers at /homepage-concept-3
  async rewrites() {
    return [
      { source: "/V2", destination: "/homepage-concept-1/v2/index.html" },
      { source: "/homepage-concept-1", destination: "/homepage-concept-1/v2/index.html" },
      { source: "/homepage-concept-1/v2", destination: "/homepage-concept-1/v2/index.html" },
      { source: "/homepage-concept-3", destination: "/homepage-concept-3/index.html" },
    ];
  },
};

export default nextConfig;
