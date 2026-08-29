import { useRef, useState } from 'react';
import { BiLoaderAlt, BiMailSend } from 'react-icons/bi';

import useEmailService from '@/services/EmailService';
import { Socials } from '@/constants/data/socials';
import { PAGE_COPY } from '@/constants/copy';

const Contact = () => {
  const copy = PAGE_COPY.contact;
  const formRef = useRef();
  const { sendEmail, loading } = useEmailService();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSuccess(false);

    // Honeypot: a real person never sees or fills this field, so anything in it
    // is a bot. Fail silently rather than telling the bot it was detected.
    if (formRef.current?.company?.value) return;

    const result = await sendEmail(formRef.current);
    if (result?.success) {
      setIsSuccess(true);
      formRef.current.reset();
      setTimeout(() => setIsSuccess(false), 6000);
    }
  };

  return (
    <section className="shell py-14">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            {copy.orsendMsg}
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} autoComplete="off" className="mt-7">
            {isSuccess && (
              <p
                role="status"
                className="mb-6 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-ink"
              >
                Message sent. I will get back to you shortly.
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label">{copy.name}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={copy.namePlaceholder}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="email" className="field-label">{copy.mail}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={copy.mailPlaceholder}
                  className="field"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="field-label">{copy.projectDesc}</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                placeholder={copy.descPlaceholder}
                className="field resize-none"
              />
            </div>

            {/* Honeypot - hidden from people and from assistive technology. */}
            <div aria-hidden className="hidden">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" disabled={loading} className="btn-primary mt-7 !px-6 !py-3.5 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? <BiLoaderAlt className="animate-spin" aria-hidden /> : <BiMailSend aria-hidden />}
              {loading ? 'Sending...' : copy.sendMsg}
            </button>
          </form>
        </div>

        <aside>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            {copy.findSocial}
          </h2>
          <ul className="mt-7 space-y-2.5">
            {Socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-white"
                    style={{ backgroundColor: social.background }}
                    aria-hidden
                  >
                    {social.reactIcon}
                  </span>
                  <span className="flex-1 text-sm text-ink">{social.label}</span>
                  <span aria-hidden className="text-faint transition-transform duration-300 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
