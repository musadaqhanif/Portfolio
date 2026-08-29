import Reveal from '@/components/elements/Reveal';
import Spotlight from '@/components/elements/Spotlight';
import { VALUE_PROPS } from '@/constants/data/highlights';

// Bento rhythm: wide, narrow, narrow, wide - so the grid never reads as a
// plain four-up and the two strongest claims get the larger tiles.
const SPANS = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4'];

const ValueProps = () => (
  <section className="section relative">
    <div className="shell">
      <Reveal>
        <div className="max-w-2xl">
          <span className="eyebrow">What you get</span>
          <h2 className="mt-5 text-headline font-semibold">
            Hiring a developer is a risk.{' '}
            <span className="text-muted">Here is what removes it.</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {VALUE_PROPS.map((prop, index) => (
          <Reveal
            key={prop.title}
            delay={index * 0.07}
            className={`${SPANS[index] || 'lg:col-span-3'} h-full`}
          >
            <Spotlight
              as="article"
              className="card-lit group flex h-full flex-col p-7 transition-transform duration-500 ease-out hover:-translate-y-1 sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-elevated font-mono text-xs text-accent transition-colors duration-300 group-hover:border-accent/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-ink">{prop.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{prop.body}</p>

              <p className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 text-xs text-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" />
                {prop.proof}
              </p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
