import { BiLoaderAlt, BiMailSend } from 'react-icons/bi';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react'

import useEmailService from '@/services/EmailService';
import { Socials } from '@/constants/data/socials';

const Contact = () => {
    const t = useTranslations();
    const formRef = useRef();
    const { sendEmail, loading } = useEmailService();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSuccess(false);
        const result = await sendEmail(formRef.current);
        if (result?.success) {
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 4000);
        }
    };

    return (
        <>
            <section className="contact__container">
                <div className="mb-8">
                    <p className="mb-4 font-semibold">
                        <i className="fa-sm fad fa-user-group mr-2"></i>
                        {t('Contact.findSocial')}
                    </p>
                    <ul className="flex md:flex-row gap-2 justify-center">
                        {Socials.map((social, index) => (
                            <li key={index} className='flex w-full'>
                                <button onClick={() => window.open(social.link, '_blank')} data-umami-event={social.eventName} title={social.label} className='w-full flex gap-2 justify-center items-center p-3 text-white rounded-md' style={{ backgroundColor: social.background }}>
                                    {social.reactIcon}
                                    <div className="hidden md:block">{social.label}</div>
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="relative">
                    <p className="mb-5 font-semibold">
                        <i className="fa-sm fad fa-envelope-open-text mr-2"></i>
                        {t('Contact.orsendMsg')}
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        autoComplete='off'
                        className="contact__form">
                        {isSuccess && (
                            <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-text">
                                <i className="fa-sm fad fa-circle-check mr-2 text-green-500"></i>
                                Message sent successfully. I’ll reply soon.
                            </div>
                        )}
                        <div className="flex-col flex md:flex-row md:gap-4 justify-evenly"
                        >
                            <div className="form-control">
                                <div className="form-label">{t('Contact.name')}</div>
                                <input
                                    type="text"
                                    autoComplete={"off"}
                                    className="form-input"
                                    placeholder={t('Contact.namePlaceholder')}
                                    name="name"
                                    required={true}
                                />
                            </div>
                            <div className="form-control">
                                <div className="form-label">{t('Contact.mail')}</div>
                                <input
                                    type="email"
                                    autoComplete={"off"}
                                    className="form-input"
                                    placeholder={t('Contact.mailPlaceholder')}
                                    name="email"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="form-control !h-40">
                            <div className="form-label">{t('Contact.projectDesc')}</div>
                            <textarea
                                name="message"
                                autoComplete={"off"}
                                cols="30"
                                rows="10"
                                required={true}
                                placeholder={t('Contact.descPlaceholder')}
                                className="form-input resize-none "
                            ></textarea>
                        </div>
                        <button data-data-umami-event='Send Contact Message' disabled={loading} className={`${loading ? 'cursor-not-allowed' : ''} btn !w-full md:!w-fit text-center justify-center`} >
                            {loading ? (
                                <BiLoaderAlt className='animate-spin' />
                            ) : (
                                <BiMailSend />
                            )}{" "}
                            {loading ? "Sending..." : t('Contact.sendMsg')}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact