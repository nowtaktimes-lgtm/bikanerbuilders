import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.bikanerbuilders.in',
      },
      {
        protocol: 'http',
        hostname: 'bikaner-backend.local',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
