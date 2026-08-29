import Link from 'next/link';

import Reveal from '@/components/elements/Reveal';
import Spotlight from '@/components/elements/Spotlight';
import { ServicesData } from '@/constants/data/services';

const ServicesGrid = () => (
  <section className="section relative overflow-hidden bg-surface">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="aurora aurora-drift -left-[8%] bottom-[5%] h-[28rem] w-[28rem] bg-[#7c5cff]/12" />
    </div>

    <div className="shell relative">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Services</span>
            <h2 className="mt-5 text-headline font-semibold">
              What you can <span className="text-muted">hand over to me.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-bg px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
          >
            Services and FAQ
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ServicesData.slice(0, 6).map((service, index) => (
          <Reveal key={service.id} delay={index * 0.06} className="h-full">
            <Spotlight
              as="article"
              className="card-lit group h-full p-7 transition-transform duration-500 ease-out hover:-translate-y-1"
              style={{ background: 'rgb(var(--bg))' }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface text-lg text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/[0.08]">
                <i className={`fad fa-${service.icon}`} aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">{service.title.en}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description.en}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
