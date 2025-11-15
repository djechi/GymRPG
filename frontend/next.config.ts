import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next.js automatically detects the src folder, but you can be explicit:
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
