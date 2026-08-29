import Link from 'next/link';

import Reveal from '@/components/elements/Reveal';
import Spotlight from '@/components/elements/Spotlight';
import { reviews } from '@/constants/data/reviews';

const Stars = ({ rating = 5 }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className={`h-3.5 w-3.5 ${i < rating ? 'text-accent' : 'text-line'}`}
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.4 6.1 20.5l1.2-6.7L2.5 9.1l6.6-.9z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  if (!reviews?.length) return null;

  return (
    <section className="section relative">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Client feedback</span>
              <h2 className="mt-5 text-headline font-semibold">
                What the people <span className="text-muted">who paid for it said.</span>
              </h2>
            </div>
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              All reviews
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, index) => (
            <Reveal key={review.id} delay={index * 0.08} className="h-full">
              <Spotlight
                as="figure"
                className="card-lit flex h-full flex-col p-7 transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <Stars rating={review.rating} />
                  <span aria-hidden className="font-serif text-4xl leading-none text-accent/25">&rdquo;</span>
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {review.reviewType === 'text' ? (
                    <>&ldquo;{review.reviewContent}&rdquo;</>
                  ) : (
                    review.projectSummary
                  )}
                </blockquote>

                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-semibold text-ink">{review.clientName}</p>
                  <p className="mt-0.5 text-xs text-faint">
                    {review.clientRole} &middot; {review.projectTitle}
                  </p>
                  {review.projectLink && review.projectLink !== '#' && (
                    <a
                      href={review.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-transform duration-300 hover:translate-x-0.5"
                    >
                      Visit the live site
                      <span aria-hidden>&rarr;</span>
                    </a>
                  )}
                </figcaption>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
