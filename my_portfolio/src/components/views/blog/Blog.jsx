import Link from 'next/link';
import NextImage from 'next/image';

import { blogs } from '@/constants/data/blogs';

const Blog = () => {
  if (!blogs?.length) return null;

  return (
    <section className="shell py-14">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <li key={blog.id ?? blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="group card card-hover flex h-full flex-col overflow-hidden">
              {blog.thumbnail && (
                <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                  <NextImage
                    src={blog.thumbnail}
                    alt={blog.title.en}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-faint">
                  {blog.publishedAt} &middot; {blog.readTime}
                </p>
                <h2 className="mt-2 font-semibold text-ink transition-colors group-hover:text-accent">
                  {blog.title.en}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                  {blog.excerpt.en}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-text">
                  Read post
                  <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
