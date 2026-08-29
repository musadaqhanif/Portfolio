import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MENU_ITEMS } from '@/constants/data/menu';
import ThemeToggle from '@/components/toggles/ThemeToggle';

const Navbar = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile sheet on navigation, and lock body scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-ink"
          aria-label="Musadaq Hanif - home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-[13px] font-bold text-accent-ink transition-transform duration-300 ease-out group-hover:-rotate-6">
            MH
          </span>
          <span className="hidden sm:inline">Musadaq Hanif</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {MENU_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden !py-2.5 !px-4 sm:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ease-out ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ease-out ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/*
        Mobile sheet. Animated with grid-template-rows 0fr -> 1fr rather than a
        hard-coded max-height: it expands to the real content height, so adding
        a nav item can never clip the menu. (`duration-400` is not a Tailwind
        step and silently fell back to 150ms - use a real one.)
      */}
      <div
        className={`grid overflow-hidden bg-bg transition-all duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr] border-t border-line' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="shell flex min-h-0 flex-col py-3">
          {MENU_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-between border-b border-line py-3.5 text-base ${
                  isActive(item.href) ? 'text-accent' : 'text-ink'
                }`}
              >
                {item.label}
                <span aria-hidden className="text-faint">&rarr;</span>
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link href="/contact" className="btn-primary w-full">
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
