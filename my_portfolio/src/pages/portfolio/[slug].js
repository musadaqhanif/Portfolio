import PageHeading from '@/components/common/PageHeading'
import Container from '@/components/layouts/partials/Container'
import BackToggle from '@/components/toggles/BackToggle'
import DetailPortfolio from '@/components/views/portfolio/DetailPortfolio'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'
import { portfolios } from './portfolio.data';

const DetailPortfolioPage = ({ portfolio }) => {
    const { locale, pathname, query } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''
    
    const slug = query.slug || '';
    const currentPath = pathname.replace('[slug]', slug);
    const currentPageURL = `${SITE_URL}${lang}${currentPath}`;
    
    return (
        <>
            <NextSeo
                title={`${portfolio.name} -Musadaq Hanif`}
                description={portfolio.excerpt}
                additionalLinkTags={[
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${currentPath}` },
                    { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${currentPath}` },
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${currentPath}` },
                ]}
                canonical={currentPageURL}
                openGraph={{
                    url: currentPageURL,
                }}
            />
            <BackToggle />
            <Container data-aos='fade-up'>
                <DetailPortfolio portfolio={portfolio} locale={locale} />
            </Container>
        </>
    )
}

export default DetailPortfolioPage

export async function getStaticPaths(context) {
    const { locales } = context;
    const paths = [];
    for (const locale of locales) {
        for (const p of portfolios) {
            paths.push({ params: { slug: p.slug }, locale });
        }
    }
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const portfolio = portfolios.find((p) => p.slug === params.slug) || null;
    if (!portfolio) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            portfolio,
        },
    };
}
