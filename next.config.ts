import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static homepage prototype: public/homepage-concept-1/v2/index.html answers at /homepage-concept-1/v2
  async rewrites() {
    return [{ source: "/homepage-concept-1/v2", destination: "/homepage-concept-1/v2/index.html" }];
  },
};

export default nextConfig;
