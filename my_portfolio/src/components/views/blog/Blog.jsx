import { useTranslations } from 'next-intl';
import { blogs } from '@/constants/data/blogs';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
    const t = useTranslations();
    return (
        <div className="blog__container grid gap-8">
            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow duration-300">
                    {blog.thumbnail && (
                        <div className="relative w-full h-48 sm:h-64">
                            <Image
                                src={blog.thumbnail}
                                alt={blog.title.en}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="p-6">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-primary transition-colors duration-200">
                            {blog.title.en}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {blog.excerpt.en}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                By <span className="font-semibold text-gray-700 dark:text-gray-300">{blog.author}</span> • {blog.publishedAt} • {blog.readTime}
                            </div>
                            <Link 
                                href={`/blog/${blog.slug}`} 
                                className="text-primary hover:text-primary-700 font-medium text-sm hover:underline transition-colors duration-200"
                            >
                                Read more →
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog;