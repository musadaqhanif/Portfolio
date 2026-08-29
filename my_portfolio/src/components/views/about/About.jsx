import Link from 'next/link';

import { PAGE_COPY } from '@/constants/copy';
import { STATS } from '@/constants/data/highlights';

const List = ({ items }) => (
  <ul className="mt-5 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
        <span className="text-sm leading-relaxed text-muted">{item}</span>
      </li>
    ))}
  </ul>
);

const About = () => {
  const copy = PAGE_COPY.about;

  return (
    <>
      <section className="shell py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="max-w-prose">
            <p className="text-lg leading-relaxed text-ink">{copy.intro}</p>

            <h2 className="mt-12 text-title font-semibold">{copy.journeyTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{copy.journey}</p>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-surface p-5">
                  <dt className="text-2xl font-semibold text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-faint">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className="btn-primary mt-6 w-full">
              Start a project
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16">
        <div className="shell grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-title font-semibold">{copy.whatIDoTitle}</h2>
            <List items={copy.whatIDo} />
          </div>
          <div>
            <h2 className="text-title font-semibold">{copy.achievementsTitle}</h2>
            <List items={copy.achievements} />
          </div>
          <div>
            <h2 className="text-title font-semibold">{copy.philosophyTitle}</h2>
            <List items={copy.philosophy} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
