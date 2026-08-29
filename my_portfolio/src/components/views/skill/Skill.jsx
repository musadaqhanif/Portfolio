import { skills } from '@/constants/data/skills';

import SkillItem from './SkillItem';

// Ordered the way a client reads a stack, not the way the data happens to sit.
const GROUPS = [
  { type: 'frontend', label: 'Frontend' },
  { type: 'backend', label: 'Backend & data stores' },
  { type: 'language', label: 'Languages' },
  { type: 'data', label: 'Data science & ML' },
  { type: 'utility', label: 'Tooling & deployment' },
];

const Skill = () => (
  <section className="shell py-14">
    <div className="space-y-12">
      {GROUPS.map((group) => {
        const items = skills.filter((s) => s.type === group.type);
        if (!items.length) return null;
        return (
          <div key={group.type}>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                {group.label}
              </h2>
              <span className="text-xs text-faint">{items.length}</span>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);

export default Skill;
