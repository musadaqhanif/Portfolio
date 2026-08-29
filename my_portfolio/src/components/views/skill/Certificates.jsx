import NextImage from 'next/image';

import { certificates } from '@/constants/data/certificates';
import { PAGE_COPY } from '@/constants/copy';

const Certificates = () => {
  if (!certificates?.length) return null;

  return (
    <section className="border-t border-line bg-surface py-14">
      <div className="shell">
        <span className="eyebrow">{PAGE_COPY.skillset.certificateTitle}</span>
        <h2 className="mt-4 text-title font-semibold">
          {PAGE_COPY.skillset.certificateSubtitle}
        </h2>

        <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <li key={`${certificate.name}-${certificate.year}`} className="card card-hover overflow-hidden">
              <div className="relative aspect-[4/3] bg-elevated">
                <NextImage
                  src={certificate.image}
                  alt={certificate.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 370px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-medium text-ink">{certificate.name}</p>
                <p className="mt-1 text-sm text-faint">
                  {certificate.issuer} &middot; {certificate.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
