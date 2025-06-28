const removeImports = require('next-remove-imports')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
  },
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      'react-slick'
    ]
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'musadaqhanif.com',
      'dwiwijaya.com' // Keep for backward compatibility
    ],
    unoptimized: true, // For static export compatibility
  },
  trailingSlash: true, // For better static hosting compatibility
  webpack(config, { isServer, dev }) {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // CSS chunk splitting
          styles: {
            name: 'styles',
            test: (module) =>
              module.type === 'css/mini-extract',
            chunks: 'all',
            enforce: true,
            maxSize: 50000, // 50KB
          },
        },
      };
    }

    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withBundleAnalyzer(withPWA(removeImports(nextConfig)));
