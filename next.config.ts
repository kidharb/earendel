import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for development, add it back for production builds
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
