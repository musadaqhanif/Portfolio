import { CONTACT_EMAIL, SITE_NAME, SITE_URL, SOCIAL_LINKS, url } from '@/constants/site';

/**
 * Structured data for search engines.
 *
 * Every URL is derived from SITE_URL. Previously these were hard-coded to the
 * template author's domain, which told Google this site's canonical identity
 * belonged to someone else.
 */
const PAGES = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skillset', path: '/skillset' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: url('/'),
      email: `mailto:${CONTACT_EMAIL}`,
      jobTitle: 'Software Engineer & Full-Stack Developer',
      description:
        'Full-stack engineer building production SaaS platforms, web applications, desktop tools and browser extensions for founders and small teams.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      knowsAbout: [
        'Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL',
        'MongoDB', 'SaaS architecture', 'Machine Learning',
      ],
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.instagram],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: `${SITE_NAME} - Full-Stack Development`,
      url: url('/services'),
      provider: { '@id': `${SITE_URL}/#person` },
      areaServed: 'Worldwide',
      serviceType: [
        'Web Application Development',
        'SaaS Product Development',
        'Web Design',
        'Machine Learning Integration',
        'Browser Extension Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: `${SITE_NAME} - Software Engineer`,
      url: url('/'),
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumbs`,
      itemListElement: PAGES.map((page, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: page.name,
        item: url(page.path),
      })),
    },
  ],
};
