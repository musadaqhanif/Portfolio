import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import Services from '@/components/views/service/Services';
import FAQSection from '@/components/views/service/FAQSection';
import { PAGE_COPY } from '@/constants/copy';

export default function ServicesPage() {
  const copy = PAGE_COPY.services;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/services" />
      <PageHeader eyebrow="Services" title="What you can hand over" subtitle={copy.subtitle} />
      <Services />
      <FAQSection />
    </>
  );
}
