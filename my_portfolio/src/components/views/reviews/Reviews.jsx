import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { BiUser, BiCalendar } from 'react-icons/bi';
import Image from 'next/image';

const Reviews = ({ reviews }) => {
    const renderReviewContent = (review) => {
        switch (review.reviewType) {
            case 'text':
                return (
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        {/* <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                            "{review.reviewContent}"
                        </p> */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                            &quot;{review.reviewContent}&quot;
                        </p>

                    </div>
                );
            case 'image':
                return (
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={review.reviewContent}
                                alt={`Review for ${review.projectTitle}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="w-full h-full"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />
                        </div>
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
        <div className="grid gap-8">
            {reviews.map((review) => (
                <div key={review.id} className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
                    <div className="p-6">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {review.projectTitle}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                                    {review.projectSummary}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
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
                                        className="flex items-center gap-1 text-primary hover:text-primary-700 text-sm font-medium transition-colors duration-200"
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
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {review.clientName}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {review.clientRole}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 mb-1">
                                        {renderStars(review.rating)}
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {review.rating}/5 rating
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews; 