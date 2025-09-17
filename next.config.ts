import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cosmosparks.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tristateec.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'goodwill-electrical.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'resource-erectors.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'magnifyelectric.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'passionelectric.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vectorstock.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uxwing.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
