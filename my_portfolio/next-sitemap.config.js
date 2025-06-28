module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://musadaqhanif.com',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://musadaqhanif.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://musadaqhanif.com',
      hreflang: 'id',
    },
  ],
};
