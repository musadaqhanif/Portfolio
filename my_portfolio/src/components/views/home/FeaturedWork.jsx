import Link from 'next/link';
import NextImage from 'next/image';

import Reveal from '@/components/elements/Reveal';
import Spotlight from '@/components/elements/Spotlight';
import { portfolios } from '@/constants/data/portfolio.data';
import { PORTFOLIO_TYPES } from '@/constants/data/portfolio';

/** Lead with the strongest, most complex builds - they set the price anchor. */
const SHOWCASE_ORDER = [
  'contataxpay-platform',
  'oldham-chronicle-stack-migration',
  'aiyard-directory',
  'pasteview-hardening',
];

const bySlug = (slug) => portfolios.find((p) => p.slug === slug);

const getShowcase = () => {
  const picked = SHOWCASE_ORDER.map(bySlug).filter(Boolean);
  if (picked.length >= 4) return picked.slice(0, 4);
  // Fall back to whatever is flagged featured if a slug is ever renamed.
  const extra = portfolios.filter(
    (p) => p.isFeatured && !picked.some((q) => q.slug === p.slug)
  );
  return [...picked, ...extra].slice(0, 4);
};

const Thumb = ({ project, priority = false }) => {
  const common =
    'h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]';
  if (project.thumbnailType === 'video') {
    return (
      <video className={common} src={project.thumbnail} muted loop playsInline autoPlay aria-label={project.name} />
    );
  }
  return (
    <NextImage
      src={project.thumbnail}
      alt={project.name}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 620px"
      className={common}
    />
  );
};

const Card = ({ project, large = false }) => {
  const type = PORTFOLIO_TYPES[project.type] || PORTFOLIO_TYPES.personal;

  return (
    <Spotlight
      as="article"
      className={`card-lit group h-full overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1.5 ${
        large ? 'sm:col-span-2' : ''
      }`}
    >
      <Link href={`/portfolio/${project.slug}`} className="flex h-full flex-col">
        <div className={`relative overflow-hidden bg-elevated ${large ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
          <Thumb project={project} priority={large} />
          {/* Scrim keeps the chips readable over any screenshot. */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.7rem] font-medium text-white backdrop-blur-md">
              {type.en}
            </span>
            <span className="rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.7rem] text-white/85 backdrop-blur-md">
              {project.skill?.length || 0} technologies
            </span>
          </div>

          <span
            aria-hidden
            className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-accent text-accent-ink opacity-0 shadow-lift transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100"
          >
            &rarr;
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className={`font-semibold text-ink transition-colors duration-300 group-hover:text-accent ${large ? 'text-title' : 'text-lg'}`}>
            {project.name}
          </h3>
          <p className={`mt-2.5 flex-1 leading-relaxed text-muted ${large ? 'max-w-2xl text-[0.95rem]' : 'line-clamp-3 text-sm'}`}>
            {project.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Read the case study
            <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </Link>
    </Spotlight>
  );
};

const FeaturedWork = () => {
  const showcase = getShowcase();
  if (!showcase.length) return null;
  const [lead, ...rest] = showcase;

  return (
    <section className="section relative">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Selected work</span>
              <h2 className="mt-5 text-headline font-semibold">
                Real products, in production,{' '}
                <span className="text-muted">with real users.</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              All {portfolios.length} projects
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <Reveal className="sm:col-span-2">
            <Card project={lead} large />
          </Reveal>
          {rest.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Card project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
