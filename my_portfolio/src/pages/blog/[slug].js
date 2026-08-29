import NextImage from 'next/image';
import ReactMarkdown from 'react-markdown';

import Seo from '@/components/common/Seo';
import BackLink from '@/components/common/BackLink';
import { blogs } from '@/constants/data/blogs';

export default function BlogDetail({ blog }) {
  return (
    <>
      <Seo
        title={blog.title.en}
        description={blog.excerpt.en}
        path={`/blog/${blog.slug}`}
        image={blog.thumbnail}
      />

      <article className="shell py-12 sm:py-16">
        <BackLink href="/blog" label="All posts" />

        <header className="mx-auto mt-8 max-w-prose">
          <h1 className="text-headline font-semibold">{blog.title.en}</h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-faint">
            <span>{blog.author}</span>
            <span aria-hidden>&middot;</span>
            <span>{blog.publishedAt}</span>
            <span aria-hidden>&middot;</span>
            <span>{blog.readTime}</span>
          </p>
        </header>

        {blog.thumbnail && (
          <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-elevated">
            <NextImage
              src={blog.thumbnail}
              alt={blog.title.en}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="markdown-body mx-auto mt-12 max-w-prose">
          <ReactMarkdown>{blog.content.en}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug) || null;
  if (!blog) return { notFound: true };
  return { props: { blog } };
}
