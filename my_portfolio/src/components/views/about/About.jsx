import { useTranslations } from 'next-intl';
import PageSubHeading from '../../common/PageSubHeading';

const About = () => {
  const t = useTranslations();
  const raw = typeof t.raw === 'function' ? t.raw : () => [];
  const whatIDoItems = raw('About.whatIDo.items');
  const achievementsItems = raw('About.achievements.items');
  const philosophyItems = raw('About.philosophy.items');

  // This helper ensures list rendering doesn't break if translations are missing.
  const toStringArray = (value) => (Array.isArray(value) ? value.filter(Boolean) : []);

  // This component renders a modern bullet list item with icon.
  const BulletItem = ({ children, icon = 'fa-check' }) => {
    return (
      <li className="flex gap-3">
        <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stroke bg-[var(--primary-bg)] text-primary">
          <i className={`fa-xs fad ${icon}`}></i>
        </span>
        <span className="text-text text-sm leading-relaxed">{children}</span>
      </li>
    );
  };

  return (
    <>
      <div className="about-page">
        <div className="grid gap-6 lg:grid-cols-12">
          <section className="card lg:col-span-5 !p-6">
            <PageSubHeading icon="fad fa-user" title={t('About.aboutMeTitle')} />
            <p className="text-text text-sm leading-relaxed">{t('About.aboutMeBody')}</p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="badge !justify-center !py-2">
                <i className="fad fa-diagram-project text-primary"></i>
                <span className="text-sm text-text">19</span>
                <span className="text-sm text-subtext">Projects</span>
              </div>
              <div className="badge !justify-center !py-2">
                <i className="fad fa-stars text-primary"></i>
                <span className="text-sm text-text">5★</span>
                <span className="text-sm text-subtext">Rating</span>
              </div>
              <div className="badge !justify-center !py-2">
                <i className="fad fa-badge-check text-primary"></i>
                <span className="text-sm text-text">99%</span>
                <span className="text-sm text-subtext">Success</span>
              </div>
              <div className="badge !justify-center !py-2">
                <i className="fad fa-handshake text-primary"></i>
                <span className="text-sm text-text">Fiverr</span>
                <span className="text-sm text-subtext">Level 1</span>
              </div>
            </div>
          </section>

          <div className="lg:col-span-7 grid gap-6">
            <section className="card !p-6">
              <PageSubHeading icon="fad fa-code" title={t('About.whatIDo.title')} />
              <ul className="mt-4 space-y-3">
                {toStringArray(whatIDoItems).map((item, index) => (
                  <BulletItem key={index} icon="fa-code">
                    {item}
                  </BulletItem>
                ))}
              </ul>
            </section>

            <section className="card !p-6">
              <PageSubHeading icon="fad fa-trophy" title={t('About.achievements.title')} />
              <ul className="mt-4 space-y-3">
                {toStringArray(achievementsItems).map((item, index) => (
                  <BulletItem key={index} icon="fa-trophy-star">
                    {item}
                  </BulletItem>
                ))}
              </ul>
            </section>

            <section className="card !p-6">
              <PageSubHeading icon="fad fa-lightbulb" title={t('About.philosophy.title')} />
              <p className="mt-2 text-text text-sm leading-relaxed">{t('About.philosophy.intro')}</p>
              <ul className="mt-4 space-y-3">
                {toStringArray(philosophyItems).map((item, index) => (
                  <BulletItem key={index} icon="fa-lightbulb-on">
                    {item}
                  </BulletItem>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
