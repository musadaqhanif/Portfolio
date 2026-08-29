import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import Portfolio from '@/components/views/portfolio/Portfolio';
import { PAGE_COPY } from '@/constants/copy';
import { portfolios } from '@/constants/data/portfolio.data';

export default function PortfolioPage() {
  const copy = PAGE_COPY.portfolio;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/portfolio" />
      <PageHeader
        eyebrow="Selected work"
        title="Things I have built"
        subtitle={copy.subtitle}
      />
      <Portfolio portfolios={portfolios} />
    </>
  );
}
