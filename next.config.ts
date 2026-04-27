import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/solutions',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/process',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
