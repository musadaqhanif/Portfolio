import { useState } from 'react';
import Link from 'next/link';

import { FAQ_DATA } from '@/constants/data/faq';
import { PAGE_COPY } from '@/constants/copy';

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  const faqs = FAQ_DATA.en || [];
  const copy = PAGE_COPY.services;

  if (!faqs.length) return null;

  return (
    <section className="border-t border-line bg-surface py-16">
      <div className="shell grid gap-12 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-title font-semibold">{copy.faqHeading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{copy.faqDescription}</p>
          <p className="mt-6 text-sm text-muted">
            {copy.contactText}{' '}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              {copy.contactLink}
            </Link>
          </p>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className={`text-base font-medium transition-colors ${isOpen ? 'text-accent' : 'text-ink'}`}>
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`mt-1 shrink-0 text-lg leading-none text-faint transition-transform duration-300 ease-out ${isOpen ? 'rotate-45' : ''}`}
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
                  }`}
                >
                  <p className="min-h-0 max-w-prose text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
