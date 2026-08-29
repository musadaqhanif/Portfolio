import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import Reviews from '@/components/views/reviews/Reviews';
import { PAGE_COPY } from '@/constants/copy';

export default function ReviewsPage() {
  const copy = PAGE_COPY.reviews;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/reviews" />
      <PageHeader eyebrow="Proof" title={copy.title} subtitle={copy.subtitle} />
      <Reviews />
    </>
  );
}
