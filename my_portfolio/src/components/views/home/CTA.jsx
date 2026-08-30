import Link from 'next/link';

import Reveal from '@/components/elements/Reveal';
import { whatsappLink } from '@/constants/data/socials';
import { CONTACT_EMAIL } from '@/constants/site';

const CTA = () => (
  <section className="section">
    <div className="shell">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-7 py-16 text-center sm:px-14 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="aurora aurora-drift left-1/2 top-[-40%] h-[30rem] w-[30rem] -translate-x-1/2 bg-accent/20" />
            <div
              className="aurora aurora-drift left-[15%] bottom-[-40%] h-[22rem] w-[22rem] bg-secondary/15"
              style={{ animationDelay: '-11s' }}
            />
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_50%_50%,#000_5%,transparent_65%)]" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-medium text-accent-text backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" />
              Taking on new work
            </span>

            <h2 className="mx-auto mt-7 max-w-2xl text-headline font-semibold">
              Tell me what you are <span className="text-gradient">trying to build.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-muted">
              A paragraph is enough to start. I&apos;ll come back with what I would
              build, how long it takes and what it costs &mdash; usually within a day.
            </p>

            <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-text-ink shadow-lift transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                />
                <span className="relative">Start a project</span>
                <span aria-hidden className="relative transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/70 px-7 py-4 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                Message on WhatsApp
              </a>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-9 inline-block text-sm text-faint transition-colors hover:text-accent-text"
            >
              or email {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTA;
