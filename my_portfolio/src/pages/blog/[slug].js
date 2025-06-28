import { useRouter } from 'next/router';
import { blogs } from '@/constants/data/blogs';
import { NextSeo } from 'next-seo';
import Container from '@/components/layouts/partials/Container';
import PageHeading from '@/components/common/PageHeading';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function BlogDetail({ blog }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!blog) {
    return <div>Blog not found.</div>;
  }
  return (
    <>
      <NextSeo title={blog.title.en} description={blog.excerpt.en} />
      <Container>
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden mb-10 border border-neutral-200 dark:border-neutral-800">
          {blog.thumbnail && (
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src={blog.thumbnail}
                alt={blog.title.en}
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}
          <div className="p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight text-primary dark:text-primary">
              {blog.title.en}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>By <span className="font-semibold text-black dark:text-white">{blog.author}</span></span>
              <span className="hidden sm:inline">•</span>
              <span>{blog.publishedAt}</span>
              <span className="hidden sm:inline">•</span>
              <span>{blog.readTime}</span>
            </div>
            <div className="border-b border-neutral-200 dark:border-neutral-700 mb-8"></div>
            <article className="prose prose-lg max-w-none dark:prose-invert 
              prose-headings:mb-6 prose-headings:mt-8 
              prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-10
              prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
              prose-p:mb-6 prose-p:leading-relaxed prose-p:text-base
              prose-ul:mb-6 prose-ol:mb-6
              prose-li:mb-2 prose-li:leading-relaxed
              prose-blockquote:mb-6 prose-blockquote:pl-4 prose-blockquote:border-l-4
              prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:mb-6 prose-pre:p-4 prose-pre:bg-gray-100 prose-pre:dark:bg-gray-800 prose-pre:rounded-lg
              prose-img:rounded-xl prose-img:mx-auto prose-img:my-8 prose-img:max-h-96 prose-img:object-contain
              prose-a:text-primary prose-a:underline hover:prose-a:text-primary-700
              prose-strong:font-semibold prose-strong:text-gray-900 prose-strong:dark:text-white
              prose-em:italic prose-em:text-gray-700 prose-em:dark:text-gray-300">
              <ReactMarkdown
                components={{
                  img: ({node, ...props}) => (
                    <img {...props} className="rounded-xl mx-auto my-8 max-h-96 object-contain shadow-lg" />
                  ),
                  p: ({node, ...props}) => (
                    <p {...props} className="mb-6 leading-relaxed text-base text-gray-700 dark:text-gray-300" />
                  ),
                  h1: ({node, ...props}) => (
                    <h1 {...props} className="text-3xl font-bold mb-6 mt-10 text-gray-900 dark:text-white" />
                  ),
                  h2: ({node, ...props}) => (
                    <h2 {...props} className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white" />
                  ),
                  h3: ({node, ...props}) => (
                    <h3 {...props} className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-white" />
                  ),
                  ul: ({node, ...props}) => (
                    <ul {...props} className="mb-6 pl-6 space-y-2" />
                  ),
                  ol: ({node, ...props}) => (
                    <ol {...props} className="mb-6 pl-6 space-y-2" />
                  ),
                  li: ({node, ...props}) => (
                    <li {...props} className="mb-2 leading-relaxed text-gray-700 dark:text-gray-300" />
                  ),
                  blockquote: ({node, ...props}) => (
                    <blockquote {...props} className="mb-6 pl-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800 py-2 italic" />
                  )
                }}
              >
                {blog.content.en}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug) || null;
  return {
    props: {
      blog,
    },
    revalidate: 3600,
  };
} 