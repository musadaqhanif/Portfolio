import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import Skill from '@/components/views/skill/Skill';
import Certificates from '@/components/views/skill/Certificates';
import { PAGE_COPY } from '@/constants/copy';

export default function SkillsetPage() {
  const copy = PAGE_COPY.skillset;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/skillset" />
      <PageHeader eyebrow="Toolkit" title={copy.title} subtitle={copy.subtitle} />
      <Skill />
      <Certificates />
    </>
  );
}
