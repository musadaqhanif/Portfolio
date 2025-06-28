const metaDescription = 'Musadaq Hanif is a Full-Stack Developer, specializes in building efficient, scalable web & apps with seamless user experiences. Let\'s bring your vision to life!';
const metaImage = 'https://musadaqhanif.com/og-image.png';

const getDefaultSEOConfig = (locale) => ({
  title: 'Musadaq Hanif - Personal Website',
  defaultTitle: 'Musadaq Hanif - Personal Website',
  description: metaDescription,
  openGraph: {
    title: 'Musadaq Hanif - Personal Website',
    description: metaDescription,
    type: 'profile',
    siteName: 'Musadaq Hanif',
    locale: locale === 'id' ? 'id_ID' : 'en_US',
    profile: {
      first_name: 'Musadaq',
      last_name: 'Hanif',
      username: 'musadaqhanif',
    },
    images: [
      
      {
        url: metaImage,
        alt: 'Musadaq Hanif - og:image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'Musadaq Hanif - og:image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'Musadaq Hanif - og:image',
        width: 1600,
        height: 900,
      },
    ],
  },
  twitter: {
    handle: '@MusadaqHanif',
    site: '@musadaqhanif',
    title: 'Musadaq Hanif - Personal Website',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'keywords',
      content: 'programer, portfolio, web, developer, personal, design,Musadaq Hanif, musadaqhanif, developer, backend, fullstack, frontend, ui ux'
    },
    {
      name: 'author',
      content: 'Musadaq Hanif',
    },
    {
      name: 'theme-color',
      content: '#222831',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'application-name',
      content: 'Musadaq Hanif',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Musadaq Hanif',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'msapplication-TileColor',
      content: '#bdcee9',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/jpeg',
      sizes: '16x16',
      href: '/favicon/musadaq.jpg',
    },
    {
      rel: 'icon',
      type: 'image/jpeg',
      sizes: '32x32',
      href: '/favicon/musadaq.jpg',
    },
    {
      rel: 'icon',
      type: 'image/jpeg',
      sizes: '48x48',
      href: '/favicon/musadaq.jpg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/musadaq.jpg',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ]
});

export default getDefaultSEOConfig;
