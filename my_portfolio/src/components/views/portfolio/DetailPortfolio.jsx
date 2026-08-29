import NextImage from 'next/image';
import ReactMarkdown from 'react-markdown';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

import BackLink from '@/components/common/BackLink';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_TYPES } from '@/constants/data/portfolio';

// A hash is used throughout the portfolio data to mean "no link available"
// (private repository, NDA, or a demo that is not public).
const hasLink = (value) => Boolean(value) && value !== '#';

const DetailPortfolio = ({ portfolio }) => {
  const category = PORTFOLIO_CATEGORIES[portfolio.category];
  const type = PORTFOLIO_TYPES[portfolio.type];

  return (
    <article>
      <div className="shell pt-10">
        <BackLink href="/portfolio" label="All work" />
      </div>

      <header className="shell mt-8">
        <div className="flex flex-wrap items-center gap-2">
          {type && (
            <span className="pill">
              {type.icon}
              {type.en}
            </span>
          )}
          {category && <span className="pill">{category.label.en}</span>}
        </div>

        <h1 className="mt-5 max-w-4xl text-headline font-semibold">{portfolio.name}</h1>
        <p className="mt-5 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
          {portfolio.excerpt}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hasLink(portfolio.demoLink) && (
            <a
              href={portfolio.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <BiLinkExternal aria-hidden />
              Visit live site
            </a>
          )}
          {hasLink(portfolio.githubLink) && (
            <a
              href={portfolio.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <BsGithub aria-hidden />
              Source code
            </a>
          )}
        </div>
      </header>

      <div className="shell mt-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-elevated">
          {portfolio.thumbnailType === 'video' ? (
            <video
              src={portfolio.thumbnail}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              aria-label={portfolio.name}
            />
          ) : (
            <NextImage
              alt={portfolio.name}
              src={portfolio.thumbnail}
              fill
              priority
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="object-cover"
            />
          )}
        </div>
      </div>

      <div className="shell mt-14 grid gap-12 pb-4 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <div className="markdown-body min-w-0">
          {portfolio.content && <ReactMarkdown>{portfolio.content}</ReactMarkdown>}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          {portfolio.skill?.length > 0 && (
            <section>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
                Built with
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {portfolio.skill.map((skill) => (
                  <li key={skill.name} className="pill">
                    {/* Icon markup comes from our own constants file, never user input. */}
                    <span dangerouslySetInnerHTML={{ __html: skill.icon }} />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {portfolio.review && (
            <section className="mt-10">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
                Client review
              </h2>
              <div className="mt-4">
                {portfolio.review.type === 'text' && (
                  <blockquote className="card p-5 text-sm italic leading-relaxed text-muted">
                    {portfolio.review.value}
                  </blockquote>
                )}
                {portfolio.review.type === 'image' && (
                  <NextImage
                    src={portfolio.review.value}
                    alt="Client review"
                    width={400}
                    height={250}
                    className="rounded-xl border border-line"
                  />
                )}
                {portfolio.review.type === 'video' && (
                  <video controls className="w-full rounded-xl border border-line">
                    <source src={portfolio.review.value} type="video/mp4" />
                  </video>
                )}
              </div>
            </section>
          )}
        </aside>
      </div>
    </article>
  );
};

export default DetailPortfolio;
