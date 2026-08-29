import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import Experience from '@/components/views/experience/Experience';
import { PAGE_COPY } from '@/constants/copy';

export default function ExperiencePage() {
  const copy = PAGE_COPY.experience;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/experience" />
      <PageHeader eyebrow="Background" title={copy.title} subtitle={copy.subtitle} />
      <Experience />
    </>
  );
}
