import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack due to stability issues
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
