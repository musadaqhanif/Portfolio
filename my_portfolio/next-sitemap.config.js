/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || 'https://musadaq.live').replace(/\/+$/, ''),
  generateRobotsTxt: true,
  trailingSlash: true,
  // The site is English-only now, so there are no alternate language variants
  // to advertise. The previous config emitted hreflang tags for an `id` locale
  // that no longer exists and for a domain this site does not serve.
  exclude: ['/500', '/404', '/_offline'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
