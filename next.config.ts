import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/get-involved', destination: '/partner', permanent: true }];
  },
};

export default nextConfig;
