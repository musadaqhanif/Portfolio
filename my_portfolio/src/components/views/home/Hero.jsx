import Link from 'next/link';
import NextImage from 'next/image';

import Profile from '@/assets/mypic.jpg';
import AnimatedNumber from '@/components/elements/AnimatedNumber';
import Reveal from '@/components/elements/Reveal';
import { POSITIONING, STATS } from '@/constants/data/highlights';

const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Atmosphere: drifting colour fields, then a blueprint grid, both faded
        out toward the bottom so the type never sits on noise. */}
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Corner washes, mirroring the source scheme: a cool mint-cyan field on
          the left and a lavender/indigo one on the right, both blurred far past
          recognition so they read as light rather than as shapes. */}
      <div className="aurora aurora-drift -left-[18%] -top-[32%] h-[42rem] w-[42rem] bg-gradient-one/30" />
      <div
        className="aurora aurora-drift -right-[16%] -top-[26%] h-[40rem] w-[40rem] bg-secondary/25"
        style={{ animationDelay: '-8s' }}
      />
      <div
        className="aurora aurora-drift left-[26%] top-[42%] h-[28rem] w-[28rem] bg-accent/12"
        style={{ animationDelay: '-15s' }}
      />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_50%_10%,#000_30%,transparent_75%)]" />
    </div>

    <div className="shell relative pb-14 pt-16 sm:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-medium text-accent-text backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {POSITIONING.availability}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-display font-semibold">
              I build software
              <br className="hidden sm:block" /> that businesses{' '}
              <span className="relative inline-block">
                <span className="text-gradient">actually run on</span>
                <svg
                  aria-hidden
                  viewBox="0 0 320 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent/45"
                >
                  <path
                    d="M3 9.5c62-5.5 126-7 192-4.5s96 4.5 124 2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-9 max-w-xl text-base leading-relaxed text-muted sm:text-[1.0625rem]">
              {POSITIONING.subhead}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-text-ink shadow-lift transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Sheen that sweeps across on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                />
                <span className="relative">Start a project</span>
                <span aria-hidden className="relative transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                See the work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-8 flex items-center gap-2 text-sm text-faint">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
              {POSITIONING.location}
            </p>
          </Reveal>
        </div>

        {/* Portrait: offset accent frame, glow behind, floating proof chip. */}
        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[20rem] lg:max-w-none">
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl" />
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] border border-accent/35" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-elevated shadow-lift">
            <NextImage
              src={Profile}
              alt="Musadaq Hanif"
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 70vw, 400px"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-lift backdrop-blur-xl sm:-left-6">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/12 text-accent">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.4 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9z" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-ink">5.0 rating</span>
              <span className="block text-[0.7rem] text-faint">Fiverr Level 1 Seller</span>
            </span>
          </div>
        </Reveal>
      </div>

      {/* Proof bar */}
      <Reveal delay={0.1}>
        <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="group bg-surface/80 p-6 backdrop-blur transition-colors duration-300 hover:bg-surface sm:p-7">
              <dt className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem]">
                <AnimatedNumber value={stat.value} />
              </dt>
              <dd className="mt-2 text-sm font-medium text-ink">{stat.label}</dd>
              <dd className="mt-1 text-xs leading-relaxed text-faint">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export default Hero;
