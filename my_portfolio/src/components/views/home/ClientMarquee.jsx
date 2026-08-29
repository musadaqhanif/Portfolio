import { CLIENT_NAMES } from '@/constants/data/highlights';

/**
 * Client names as a continuous marquee. The list is rendered twice so the
 * -50% keyframe lands exactly where the first copy ends, giving a seamless loop.
 */
const ClientMarquee = () => (
  <section className="relative border-y border-line bg-surface/60 py-12 backdrop-blur">
    <div className="shell">
      <p className="mb-8 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-faint">
        Trusted to build and ship for
      </p>
    </div>

    <div className="marquee-track mask-edges relative flex overflow-hidden" style={{ '--time': '40s' }}>
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 animate-marquee items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
        >
          {CLIENT_NAMES.map((name) => (
            <li
              key={`${copy}-${name}`}
              className="group flex items-center gap-3 whitespace-nowrap text-lg font-medium tracking-tight text-faint transition-colors duration-300 hover:text-ink sm:text-xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-line transition-colors duration-300 group-hover:bg-accent" />
              {name}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default ClientMarquee;
