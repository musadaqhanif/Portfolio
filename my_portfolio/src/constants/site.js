/**
 * Single source of truth for this site's own identity.
 *
 * Never hard-code a domain anywhere else in the app. Every URL that represents
 * "this website" must be derived from SITE_URL so a fork/rename can never leave
 * behind a reference to a domain we do not control.
 *
 * History: this project was started from a public template that shipped with the
 * original author's domain hard-coded in ~8 files, including a <script> tag
 * pointing at their analytics server. When that host began serving ad/redirect
 * JavaScript, every visitor to this site was redirected. See SECURITY.md.
 */

const FALLBACK_SITE_URL = 'https://musadaq.live';

/** Strip any trailing slash so `${SITE_URL}/about` never becomes a double slash. */
const normalize = (url) => String(url || '').replace(/\/+$/, '');

export const SITE_URL = normalize(process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL);

export const SITE_NAME = 'Musadaq Hanif';
export const SITE_TITLE = 'Musadaq Hanif - Personal Website';
export const CONTACT_EMAIL = 'musadaqhanif678@gmail.com';

export const SOCIAL_LINKS = {
  github: 'https://github.com/musadaqhanif',
  linkedin: 'https://www.linkedin.com/in/musadaq-hanif/',
  instagram: 'https://www.instagram.com/_musadaqhanif_/',
  facebook: 'https://www.facebook.com/mianmusadaq.mianmusada',
  fiverr: 'https://www.fiverr.com/musadaq5',
};

/** Build an absolute URL on this site: url('/about') -> 'https://.../about' */
export const url = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
