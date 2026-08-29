const isDev = process.env.NODE_ENV === 'development';

/**
 * Optional, self-owned analytics. Read from the same env var that _document.js
 * uses, so the script tag and the CSP allow-list can never drift apart: if the
 * variable is unset, no script is emitted AND no external origin is allowed.
 */
const analyticsSrc = process.env.NEXT_PUBLIC_ANALYTICS_SRC || '';
const analyticsOrigin = analyticsSrc.startsWith('https://')
  ? new URL(analyticsSrc).origin
  : '';

/**
 * Content-Security-Policy.
 *
 * The directive that matters most here is `script-src`. Restricting it to
 * 'self' means the browser will REFUSE to execute JavaScript served from any
 * other origin, even if a <script src="https://evil.example/x.js"> tag somehow
 * makes it into the HTML again. That is the exact attack this site suffered.
 *
 * 'unsafe-inline' is still required for script-src because the Pages Router
 * emits inline bootstrap scripts (next-themes, __NEXT_DATA__ hydration) that
 * have no nonce. It permits inline code but NOT remote code, so the
 * remote-script vector stays closed.
 */
const csp = [
  "default-src 'self'",
  // Blocks <base href="https://evil.example/"> hijacking of every relative URL.
  "base-uri 'self'",
  // Legacy plugin vectors.
  "object-src 'none'",
  // Clickjacking protection; replaces X-Frame-Options.
  "frame-ancestors 'none'",
  // A stolen form cannot POST your visitors' data to another origin.
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}${analyticsOrigin ? ` ${analyticsOrigin}` : ''}`,
  // styled-jsx, Tailwind and AOS inject inline <style> blocks.
  "style-src 'self' 'unsafe-inline'",
  // Images cannot execute, so a permissive https: keeps remote thumbnails working.
  "img-src 'self' data: blob: https:",
  // next/font/google self-hosts at build time, so no external font origin is needed.
  "font-src 'self' data:",
  `connect-src 'self' https://api.emailjs.com${analyticsOrigin ? ` ${analyticsOrigin}` : ''}${isDev ? ' ws: http://localhost:*' : ''}`,
  // Review videos are embedded from these providers only.
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://drive.google.com",
  "media-src 'self' https:",
  "manifest-src 'self'",
  // The PWA service worker must come from our own origin.
  "worker-src 'self' blob:",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  // Deliberately NOT setting X-XSS-Protection: the legacy auditor it enables is
  // removed from modern browsers and has itself introduced vulnerabilities.
  // CSP above is its replacement.
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  // Do not advertise the framework version to attackers scanning for CVEs.
  poweredByHeader: false,
  // i18n removed: the template shipped with Indonesian as the DEFAULT locale,
  // so every visitor who did not explicitly request English was served a
  // half-translated site. English-only, with legacy /en/* URLs redirected below.
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
      'musadaq.live'
    ],
    unoptimized: true, // For static export compatibility
  },
  trailingSlash: true, // For better static hosting compatibility
  async redirects() {
    return [
      // Preserve any /en/* links that were indexed while i18n routing was on.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // HTML must always be revalidated. If a bad page ever ships again, a
        // stale copy cannot keep serving it from cache after the fix is live.
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
      {
        // Fingerprinted build output is safe to cache forever.
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // The service worker itself must never be cached, or a compromised
        // worker could outlive its own fix.
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
        ],
      },
    ];
  },
  // NOTE: this project previously overrode webpack's splitChunks to cap CSS
  // chunks at 50 KB. Splitting an extracted stylesheet by byte size silently
  // DROPS rules: `.relative`, `aspect-[16/9]` and other utilities were missing
  // from every emitted chunk, so image containers collapsed to zero height.
  // Next.js already optimises CSS output - do not reintroduce this.
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Bumping cacheId orphans every cache created by the compromised build, so
  // returning visitors cannot be served a poisoned page from their own disk.
  cacheId: 'musadaq-portfolio-v2',
  cleanupOutdatedCaches: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withBundleAnalyzer(withPWA(nextConfig));
