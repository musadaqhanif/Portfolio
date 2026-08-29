const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://musadaq.live').replace(/\/+$/, '');

const description =
  'Musadaq Hanif is a software engineer and full-stack developer building production SaaS platforms, web applications and internal tools for founders and small teams.';

/** @type {import('next-seo').DefaultSeoProps} */
module.exports = {
  titleTemplate: '%s',
  defaultTitle: 'Musadaq Hanif - Software Engineer & Full-Stack Developer',
  description,
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: 'Musadaq Hanif',
    title: 'Musadaq Hanif - Software Engineer & Full-Stack Developer',
    description,
    profile: {
      firstName: 'Musadaq',
      lastName: 'Hanif',
      username: 'musadaqhanif',
    },
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Musadaq Hanif - Software Engineer & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    handle: '@MusadaqHanif',
    site: '@musadaqhanif',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Musadaq Hanif' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
    {
      name: 'keywords',
      content:
        'full-stack developer, software engineer, Next.js developer, React developer, SaaS development, web application development, Musadaq Hanif, hire developer Pakistan',
    },
  ],
};
