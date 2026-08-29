import { NextSeo } from 'next-seo';

import { SITE_NAME, SITE_URL } from '@/constants/site';

/**
 * One place that builds canonical + Open Graph URLs from SITE_URL.
 *
 * Previously every page hand-assembled these from a raw env var and injected
 * hreflang tags for a locale that no longer exists.
 */
const Seo = ({ title, description, path = '/', image, noindex = false }) => {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  // Only append the site name when the title does not already carry it,
  // otherwise pages end up titled "X - Musadaq Hanif - Musadaq Hanif".
  const fullTitle = !title
    ? `${SITE_NAME} - Software Engineer & Full-Stack Developer`
    : title.includes(SITE_NAME)
      ? title
      : `${title} - ${SITE_NAME}`;

  return (
    <NextSeo
      title={fullTitle}
      description={description}
      canonical={canonical}
      noindex={noindex}
      nofollow={noindex}
      openGraph={{
        url: canonical,
        title: fullTitle,
        description,
        ...(image ? { images: [{ url: image, alt: fullTitle }] } : {}),
      }}
    />
  );
};

export default Seo;
