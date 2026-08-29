/**
 * Primary navigation.
 *
 * Deliberately short. A visitor evaluating whether to hire someone needs the
 * work, the offer, the proof and a way to make contact - everything else is a
 * secondary page and lives in the footer instead.
 */
export const MENU_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
];

/** Secondary pages: reachable, but not competing for attention in the header. */
export const FOOTER_ITEMS = [
  { href: '/experience', label: 'Experience' },
  { href: '/skillset', label: 'Skillset' },
  { href: '/blog', label: 'Blog' },
  { href: '/privacy-policy', label: 'Privacy' },
];
