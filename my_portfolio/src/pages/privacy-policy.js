import Seo from '@/components/common/Seo';
import PageHeader from '@/components/common/PageHeader';
import { PAGE_COPY } from '@/constants/copy';
import { CONTACT_EMAIL } from '@/constants/site';

const SECTIONS = [
  {
    title: 'What I collect',
    body: 'Only what you type into the contact form: your name, your email address and your message. Nothing else is collected, and there is no account system, no advertising and no tracking pixels.',
  },
  {
    title: 'How it is used',
    body: 'Your message is delivered to my inbox through EmailJS so I can reply to you. It is not sold, shared or added to any mailing list.',
  },
  {
    title: 'Third-party scripts',
    body: 'This site loads no third-party JavaScript. A Content-Security-Policy blocks scripts from any origin other than this one, so no external service can execute code in your browser while you are here.',
  },
  {
    title: 'Cookies',
    body: 'No tracking cookies are set. Your light or dark theme preference is stored locally in your own browser and never leaves your device.',
  },
];

export default function PrivacyPolicyPage() {
  const copy = PAGE_COPY.privacy;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/privacy-policy" />
      <PageHeader eyebrow="Legal" title={copy.title} subtitle={copy.subtitle} />

      <div className="shell py-14">
        <div className="max-w-prose space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-lg font-semibold text-ink">Questions</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Email me at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="link">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
