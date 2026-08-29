import Link from 'next/link';

import { FOOTER_ITEMS, MENU_ITEMS } from '@/constants/data/menu';
import { Socials } from '@/constants/data/socials';
import { CONTACT_EMAIL, SITE_NAME } from '@/constants/site';

const Footer = () => (
  <footer className="mt-8 border-t border-line bg-surface">
    <div className="shell py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-title font-semibold">Have something to build?</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            I take on a small number of projects at a time so each one gets real
            attention. Tell me what you need and I&apos;ll reply within a day.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-transform duration-300 ease-out hover:translate-x-1"
          >
            {CONTACT_EMAIL}
            <span aria-hidden>&rarr;</span>
          </a>
        </div>

        <nav aria-label="Main">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-faint">
            Explore
          </p>
          <ul className="space-y-2.5">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="More">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-faint">
            More
          </p>
          <ul className="space-y-2.5">
            {FOOTER_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
        <p className="text-xs text-faint">
          &copy; {new Date().getFullYear()} {SITE_NAME}. Built and maintained by hand.
        </p>
        <ul className="flex flex-wrap items-center gap-2">
          {Socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {social.reactIcon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
