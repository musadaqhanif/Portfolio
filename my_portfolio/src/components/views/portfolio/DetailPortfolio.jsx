import Image from 'next/image';
import dynamic from 'next/dynamic';
import { BsGithub } from 'react-icons/bs';
import { BiChevronRight, BiLinkExternal } from 'react-icons/bi';

import { PORTFOLIO_CATEGORIES, PORTFOLIO_TYPES } from '@/constants/data/portfolio';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditorPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((module) => module.default),
    { ssr: false }
);

const DetailPortfolio = ({ portfolio, locale }) => {
    return (
        <article className=''>
            {/* Large background image */}
            <div className="relative w-full h-64 sm:h-96 mb-6 rounded-xl overflow-hidden">
                <Image
                    alt={portfolio.name}
                    src={portfolio.thumbnail}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{portfolio.name}</h1>
                </div>
            </div>

            {/* Short summary */}
            <p className='text-lg text-subtext leading-6 mb-4'>{portfolio.excerpt}</p>

            {/* Tech stack with icons */}
            <div className='flex flex-wrap gap-3 items-center mb-6'>
                {portfolio.skill && portfolio.skill.map((skill, index) => (
                    <span className="badge text-base flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-neutral-800" key={index}>
                        <span dangerouslySetInnerHTML={{ __html: skill.icon }} /> {skill.name}
                    </span>
                ))}
            </div>

            {/* Demo and Source Code links */}
            <div className="flex item-center gap-2 mb-6">
                {portfolio.demoLink &&
                    <a data-umami-event={`Click Live Demo - ${portfolio.name}`} href={portfolio.demoLink} className="badge text-sm" target="_blank" rel="noopener noreferrer">
                        <BiLinkExternal /> {locale == 'en' ? 'Live Demo' : 'Demo Langsung'}
                    </a>
                }
                {portfolio.githubLink &&
                    <a data-umami-event={`Click Source Code - ${portfolio.name}`} href={portfolio.githubLink} className={`badge text-sm`} target="_blank" rel="noopener noreferrer">
                        <BsGithub /> {locale == 'en' ? 'Source Code' : 'Kode Sumber'}
                    </a>
                }
            </div>

            {/* Review section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Review</h2>
                {portfolio.review && portfolio.review.type === 'text' && (
                    <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg text-base italic">{portfolio.review.value}</div>
                )}
                {portfolio.review && portfolio.review.type === 'image' && (
                    <div className="flex justify-center">
                        <Image src={portfolio.review.value} alt="Review" width={400} height={250} className="rounded-lg" />
                    </div>
                )}
                {portfolio.review && portfolio.review.type === 'video' && (
                    <div className="flex justify-center">
                        <video controls width="400" className="rounded-lg">
                            <source src={portfolio.review.value} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>

            {/* Markdown content (optional) */}
            {portfolio.content && (
                <MDEditorPreview
                    source={portfolio.content}
                    className="md:p-4 rounded-lg mb-3"
                />
            )}

            {/* Category and Type */}
            <p className='text-sm text-subtext flex items-center gap-2'><BiChevronRight /> {locale == 'en' ? 'Category' : 'Kategori'}:  {PORTFOLIO_CATEGORIES[portfolio.category].reactIcon} {PORTFOLIO_CATEGORIES[portfolio.category].label[locale]}</p>
            <p className='text-sm text-subtext flex items-center gap-2'><BiChevronRight /> {locale == 'en' ? 'Type' : 'Jenis'}: {PORTFOLIO_TYPES[portfolio.type].icon} {PORTFOLIO_TYPES[portfolio.type][locale]} </p>
        </article>
    )
}

export default DetailPortfolio