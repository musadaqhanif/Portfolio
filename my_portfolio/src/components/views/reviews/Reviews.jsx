import { useState } from 'react';
import NextImage from 'next/image';

import { reviews } from '@/constants/data/reviews';

const Stars = ({ rating = 5 }) => (
  <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
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

const hasLink = (value) => Boolean(value) && value !== '#';

const ReviewBody = ({ review, onExpand }) => {
  if (review.reviewType === 'text') {
    return (
      <blockquote className="text-sm leading-relaxed text-muted">
        &ldquo;{review.reviewContent}&rdquo;
      </blockquote>
    );
  }

  if (review.reviewType === 'video') {
    return (
      <div className="overflow-hidden rounded-xl border border-line">
        <iframe
          src={review.reviewContent}
          title={`Video review for ${review.projectTitle}`}
          className="aspect-video w-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Image: a screenshot of the original review. Click to view it full size.
  return (
    <button
      type="button"
      onClick={onExpand}
      className="group relative block w-full overflow-hidden rounded-xl border border-line bg-elevated"
      aria-label="View full-size review screenshot"
    >
      <NextImage
        src={review.reviewContent}
        alt={`Review from ${review.clientName}`}
        width={800}
        height={500}
        className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
      <span className="absolute bottom-2 right-2 rounded-full bg-bg/90 px-2.5 py-1 text-[0.65rem] text-muted backdrop-blur">
        Click to enlarge
      </span>
    </button>
  );
};

const Reviews = () => {
  const [lightbox, setLightbox] = useState(null);

  if (!reviews?.length) return null;

  return (
    <>
      <section className="shell py-14">
        <ul className="grid gap-6 lg:grid-cols-2">
          {reviews.map((review) => (
            <li key={review.id} className="card flex flex-col p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold text-ink">{review.projectTitle}</h2>
                  <p className="mt-1 text-xs text-faint">
                    {review.clientName} &middot; {review.clientRole}
                  </p>
                </div>
                <Stars rating={review.rating} />
              </div>

              {review.projectSummary && (
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {review.projectSummary}
                </p>
              )}

              <div className="mt-5 flex-1">
                <ReviewBody review={review} onExpand={() => setLightbox(review)} />
              </div>

              {review.skill?.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {review.skill.map((skill) => (
                    <li key={skill.name} className="pill">
                      {/* Icon markup comes from our own constants file, never user input. */}
                      <span dangerouslySetInnerHTML={{ __html: skill.icon }} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              )}

              {hasLink(review.projectLink) && (
                <a
                  href={review.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-sm font-medium text-accent"
                >
                  Visit the live project
                  <span aria-hidden>&rarr;</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Review from ${lightbox.clientName}`}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/25 text-xl text-white"
          >
            &times;
          </button>
          <NextImage
            src={lightbox.reviewContent}
            alt={`Review from ${lightbox.clientName}`}
            width={1400}
            height={900}
            className="max-h-[85vh] w-auto rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Reviews;
