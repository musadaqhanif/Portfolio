import Reveal from '@/components/elements/Reveal';
import { PROCESS } from '@/constants/data/highlights';

const Process = () => (
  <section className="section relative overflow-hidden bg-surface">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="aurora aurora-drift -right-[10%] top-[10%] h-[26rem] w-[26rem] bg-accent/12" />
    </div>

    <div className="shell relative">
      <Reveal>
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-headline font-semibold">
            Four steps, <span className="text-muted">no surprises.</span>
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
            You always know what is being built, what it costs and when it lands.
          </p>
        </div>
      </Reveal>

      <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Connecting rail behind the step markers on wide screens. */}
        <span
          aria-hidden
          className="absolute left-0 right-0 top-[13px] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
        />
        {PROCESS.map((item, index) => (
          <Reveal as="li" key={item.step} delay={index * 0.08} className="relative">
            <span className="relative z-10 grid h-7 w-7 place-items-center rounded-full border border-accent/40 bg-bg font-mono text-[0.65rem] text-accent shadow-[0_0_0_5px_rgb(var(--bg))]">
              {item.step}
            </span>
            <h3 className="mt-5 text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
