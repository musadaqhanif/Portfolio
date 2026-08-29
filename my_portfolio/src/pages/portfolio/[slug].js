import Seo from '@/components/common/Seo';
import DetailPortfolio from '@/components/views/portfolio/DetailPortfolio';
import { portfolios } from '@/constants/data/portfolio.data';

export default function DetailPortfolioPage({ portfolio }) {
  return (
    <>
      <Seo
        title={portfolio.name}
        description={portfolio.excerpt}
        path={`/portfolio/${portfolio.slug}`}
        image={portfolio.thumbnailType === 'image' ? portfolio.thumbnail : undefined}
      />
      <DetailPortfolio portfolio={portfolio} />
    </>
  );
}

export async function getStaticPaths() {
  // i18n routing was removed, so there are no per-locale variants to expand.
  return {
    paths: portfolios.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = portfolios.find((p) => p.slug === params.slug) || null;
  if (!portfolio) return { notFound: true };
  return { props: { portfolio } };
}
