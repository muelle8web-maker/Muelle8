import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Note: Security headers are configured via public/_headers for Cloudflare Pages static hosting.
};

export default nextConfig;
