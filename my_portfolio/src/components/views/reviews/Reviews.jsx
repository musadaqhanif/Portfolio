import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { BiUser, BiCalendar } from 'react-icons/bi';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Reviews = ({ reviews }) => {
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (!activeImage) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setActiveImage(null);
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeImage]);

    const renderReviewContent = (review) => {
        switch (review.reviewType) {
            case 'text':
                return (
                    <div className="bg-background border border-stroke p-4 rounded-xl">
                        <p className="text-text leading-relaxed italic">
                            &quot;{review.reviewContent}&quot;
                        </p>

                    </div>
                );
            case 'image':
                return (
                    <div className="w-full">
                        <a
                            href={review.reviewContent}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveImage({ src: review.reviewContent, title: review.projectTitle });
                            }}
                            aria-label={`Zoom review image for ${review.projectTitle}`}
                            className="group block w-full"
                        >
                            <div className="relative overflow-hidden rounded-xl border border-stroke bg-background">
                                <div className="relative h-[360px] sm:h-[480px] lg:h-[560px]">
                                    <Image
                                        src={review.reviewContent}
                                        alt={`Review for ${review.projectTitle}`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="cursor-zoom-in p-3"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px"
                                        priority={false}
                                    />
                                </div>

                                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/40 to-transparent p-3 opacity-100">
                                    <span className="text-xs text-white/90">
                                        Click to zoom
                                    </span>
                                    <span className="rounded-md bg-black/30 px-2 py-1 text-xs text-white/90">
                                        Zoom
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                );
            case 'video':
                return (
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src={review.reviewContent}
                                title={`Review video for ${review.projectTitle}`}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`w-4 h-4 ${index < rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
            />
        ));
    };

    return (
        <>
            {activeImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Review image preview"
                    onClick={() => setActiveImage(null)}
                >
                    <div
                        className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-stroke bg-container shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-3 border-b border-stroke px-4 py-3">
                            <p className="text-title font-semibold truncate">{activeImage.title}</p>
                            <div className="flex items-center gap-2">
                                <a
                                    href={activeImage.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="badge !py-2 !px-3 hover:opacity-80"
                                >
                                    <FaExternalLinkAlt className="w-3 h-3 text-primary" />
                                    <span className="text-sm">Open</span>
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setActiveImage(null)}
                                    className="badge !py-2 !px-3 hover:opacity-80"
                                    aria-label="Close preview"
                                >
                                    <span className="text-sm">Close</span>
                                    <i className="fa-sm fad fa-xmark text-primary"></i>
                                </button>
                            </div>
                        </div>

                        <div className="relative h-[70vh] bg-background">
                            <Image
                                src={activeImage.src}
                                alt={`Review for ${activeImage.title}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="p-4"
                                sizes="100vw"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="grid gap-8">
            {reviews.map((review) => (
                <div key={review.id} className="bg-container rounded-xl shadow-lg overflow-hidden border border-stroke">
                    <div className="p-6">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-title mb-2">
                                    {review.projectTitle}
                                </h3>
                                <p className="text-text text-sm leading-relaxed mb-3">
                                    {review.projectSummary}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-subtext">
                                    <div className="flex items-center gap-1">
                                        <BiCalendar className="w-4 h-4" />
                                        <span>{review.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BiUser className="w-4 h-4" />
                                        <span>{review.clientName} - {review.clientRole}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <div className="flex items-center gap-1">
                                    {renderStars(review.rating)}
                                </div>
                                {review.projectLink && review.projectLink !== '#' && (
                                    <a
                                        href={review.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-primary hover:opacity-80 text-sm font-medium transition-colors duration-200"
                                    >
                                        <span>View Project</span>
                                        <FaExternalLinkAlt className="w-3 h-3" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Review Content */}
                        <div className="mt-6">
                            {renderReviewContent(review)}
                        </div>

                        {/* Client Info */}
                        <div className="mt-4 pt-4 border-t border-stroke">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-title">
                                        {review.clientName}
                                    </p>
                                    <p className="text-sm text-subtext">
                                        {review.clientRole}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 mb-1">
                                        {renderStars(review.rating)}
                                    </div>
                                    <p className="text-xs text-subtext">
                                        {review.rating}/5 rating
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default Reviews; 