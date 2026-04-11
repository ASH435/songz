/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/songz',
  assetPrefix: '/songz',
  images: {
    unoptimized: true,
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
