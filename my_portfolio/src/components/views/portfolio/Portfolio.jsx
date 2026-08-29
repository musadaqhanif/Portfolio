import { useMemo, useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';

import { PORTFOLIO_CATEGORIES, PORTFOLIO_TYPES } from '@/constants/data/portfolio';
import { PAGE_COPY } from '@/constants/copy';

import PortfolioCategory from './PortfolioCategory';

const Thumb = ({ project, eager }) => {
  const cls = 'h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]';
  if (project.thumbnailType === 'video') {
    return (
      <video
        src={project.thumbnail}
        className={cls}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={project.name}
      />
    );
  }
  return (
    <NextImage
      src={project.thumbnail}
      alt={project.name}
      fill
      priority={eager}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
      className={cls}
    />
  );
};

const Portfolio = ({ portfolios }) => {
  const [active, setActive] = useState('all');

  const counts = useMemo(() => {
    const result = { all: portfolios.length };
    Object.keys(PORTFOLIO_CATEGORIES).forEach((key) => {
      if (key === 'all') return;
      result[key] = portfolios.filter((p) => p.category === key).length;
    });
    return result;
  }, [portfolios]);

  const items = useMemo(
    () => (active === 'all' ? portfolios : portfolios.filter((p) => p.category === active)),
    [active, portfolios]
  );

  return (
    <div className="shell py-14">
      <PortfolioCategory filter={setActive} active={active} counts={counts} />

      {items.length === 0 ? (
        <p className="mt-12 text-sm text-muted">{PAGE_COPY.portfolio.noPortfolio}</p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => {
            const type = PORTFOLIO_TYPES[project.type] || PORTFOLIO_TYPES.personal;
            return (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index, 6) * 0.04 }}
              >
                {/* Leading slash matters: a relative href resolves against the
                    current path and would produce /portfolio/portfolio/<slug>. */}
                <Link href={`/portfolio/${project.slug}`} className="group card card-hover flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                    <Thumb project={project} eager={index === 0} />
                    {project.isFeatured && (
                      <span className="absolute left-3 top-3 rounded-full bg-bg/90 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-accent backdrop-blur">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-xs text-faint">
                      <span className="text-accent">{type.icon}</span>
                      {type.en}
                    </p>
                    <h2 className="mt-2 font-semibold text-ink transition-colors group-hover:text-accent">
                      {project.name}
                    </h2>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                      {project.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                      {PAGE_COPY.portfolio.seePortfolio}
                      <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Portfolio;
