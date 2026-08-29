import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Arms the CSS scroll-reveal.
 *
 * Adds `.js-reveal` to <html> (which is what makes `.reveal` start hidden) and
 * runs a single shared IntersectionObserver for every `.reveal` on the page -
 * one observer for the whole document rather than one per element.
 *
 * Re-scans after each route change, because Next swaps page content without a
 * full reload and the new nodes would otherwise never be observed.
 */
const RevealProvider = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    const root = document.documentElement;

    if (!('IntersectionObserver' in window)) {
      // No observer support: leave everything visible rather than hiding it.
      return undefined;
    }

    root.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
    nodes.forEach((node) => observer.observe(node));

    // Anything already on screen at mount should not wait for a scroll event.
    requestAnimationFrame(() => {
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      });
    });

    return () => observer.disconnect();
  }, [asPath]);

  return null;
};

export default RevealProvider;
