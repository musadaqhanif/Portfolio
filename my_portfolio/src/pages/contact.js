import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import Contact from '@/components/views/contact/Contact';
import { PAGE_COPY } from '@/constants/copy';

export default function ContactPage() {
  const copy = PAGE_COPY.contact;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/contact" />
      <PageHeader eyebrow="Contact" title={copy.title} subtitle={copy.subtitle} />
      <Contact />
    </>
  );
}
