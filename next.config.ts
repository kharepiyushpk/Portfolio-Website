import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Home folder me ek aur package-lock.json pada hai — root yahi folder hai
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
};

export default nextConfig;
