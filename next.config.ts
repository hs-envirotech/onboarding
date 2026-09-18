import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — export plain HTML/CSS/JS to `out/` for Cloudflare Pages.
  // No server runtime, no adapter. Redirects live in public/_redirects (config
  // redirects are unsupported with output: 'export').
  output: "export",
  images: {
    // Static export can't use the default Image Optimization API; brand assets
    // are small pre-sized PNGs, so serve them as-is.
    unoptimized: true,
  },
};

export default nextConfig;
