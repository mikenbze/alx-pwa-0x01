import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

// Initialize next-pwa with options
const withPWA = withPWAInit({
  dest: "public", // where the service worker + manifest will be generated
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // add more domains as needed
  },
};

// Export combined config
export default withPWA({
  ...nextConfig,
});

