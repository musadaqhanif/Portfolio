import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import Blog from '@/components/views/blog/Blog';
import { PAGE_COPY } from '@/constants/copy';

export default function BlogPage() {
  const copy = PAGE_COPY.blog;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/blog" />
      <PageHeader eyebrow="Writing" title={copy.title} subtitle={copy.subtitle} />
      <Blog />
    </>
  );
}
