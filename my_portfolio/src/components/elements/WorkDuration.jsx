import { useEffect, useState } from 'react';

/**
 * Renders how long a role lasted. Computed on the client only: the value
 * depends on today's date for ongoing roles, so rendering it on the server
 * would produce a hydration mismatch the moment the two disagree.
 */
const WorkDuration = ({ startMonth, endMonth }) => {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const start = new Date(startMonth);
    const end = endMonth ? new Date(endMonth) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

    if (years <= 0 && months <= 0) setDuration('Less than a month');
    else if (years <= 0) setDuration(plural(months, 'month'));
    else if (months === 0) setDuration(plural(years, 'year'));
    else setDuration(`${plural(years, 'year')} ${plural(months, 'month')}`);
  }, [startMonth, endMonth]);

  if (!duration) return null;

  return <span className="text-xs text-faint">{duration}</span>;
};

export default WorkDuration;
