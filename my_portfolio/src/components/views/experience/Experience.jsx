import dayjs from 'dayjs';
import { SlGraduation, SlBriefcase } from 'react-icons/sl';
import { BiMapPin } from 'react-icons/bi';

import WorkDuration from '@/components/elements/WorkDuration';
import { experience } from '@/constants/data/experience';

const formatDate = (date) => dayjs(date).format('MMM YYYY');

// A hash means "no public page for this organisation" in the experience data.
const hasLink = (value) => Boolean(value) && value !== '#';

const TimelineItem = ({ entry, isLast, icon: Icon }) => {
  const start = formatDate(entry.startMonth);
  const end = entry.endMonth ? formatDate(entry.endMonth) : 'Present';

  return (
    <li className={`relative pl-9 ${isLast ? '' : 'pb-9'} ${isLast ? '' : 'timeline'}`}>
      <span className="absolute left-0 top-0 grid h-[26px] w-[26px] -translate-x-[6px] place-items-center rounded-full border border-line bg-surface text-accent">
        <Icon size={13} aria-hidden />
      </span>

      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-faint">
        <time>{start}</time>
        <span aria-hidden>&ndash;</span>
        <time>{end}</time>
        {entry.type === 'work' && (
          <>
            <span aria-hidden>&middot;</span>
            <WorkDuration startMonth={entry.startMonth} endMonth={entry.endMonth} />
          </>
        )}
      </div>

      <h3 className="mt-2 font-semibold text-ink">
        {entry.type === 'education' ? entry.major : entry.position}
      </h3>

      <p className="mt-1 text-sm text-muted">
        {hasLink(entry.link) ? (
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-line transition-colors hover:border-accent hover:text-accent"
          >
            {entry.institution}
          </a>
        ) : (
          entry.institution
        )}
      </p>

      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
        <span className="inline-flex items-center gap-1">
          <BiMapPin aria-hidden className="text-accent" />
          {entry.location}
        </span>
        {entry.degree && <span>{entry.degree}</span>}
      </p>
    </li>
  );
};

const Experience = () => {
  const educations = experience.filter((e) => e.type === 'education');
  const works = experience.filter((e) => e.type === 'work');

  return (
    <section className="shell py-14">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-8 border-b border-line pb-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Work &amp; projects
          </h2>
          <ol>
            {works.map((entry, index) => (
              <TimelineItem
                key={`${entry.institution}-${entry.position}-${entry.startMonth}`}
                entry={entry}
                isLast={index === works.length - 1}
                icon={SlBriefcase}
              />
            ))}
          </ol>
        </div>

        <div>
          <h2 className="mb-8 border-b border-line pb-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Education
          </h2>
          <ol>
            {educations.map((entry, index) => (
              <TimelineItem
                key={`${entry.institution}-${entry.major}-${entry.startMonth}`}
                entry={entry}
                isLast={index === educations.length - 1}
                icon={SlGraduation}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
