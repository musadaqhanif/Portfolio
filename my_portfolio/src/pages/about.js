import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import About from '@/components/views/about/About';
import { PAGE_COPY } from '@/constants/copy';

export default function AboutPage() {
  const copy = PAGE_COPY.about;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/about" />
      <PageHeader eyebrow="About" title="Who you would be working with" subtitle={copy.subtitle} />
      <About />
    </>
  );
}
