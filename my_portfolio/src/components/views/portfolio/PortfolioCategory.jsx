import { PORTFOLIO_CATEGORIES } from '@/constants/data/portfolio';

const PortfolioCategory = ({ filter, active, counts }) => (
  <nav aria-label="Filter projects by category">
    <ul className="flex flex-wrap gap-2">
      {Object.entries(PORTFOLIO_CATEGORIES).map(([key, category]) => {
        const isActive = active === category.slug;
        const count = counts?.[category.slug] ?? 0;
        return (
          <li key={key}>
            <button
              type="button"
              onClick={() => filter(category.slug)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ease-out ${
                isActive
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-line bg-surface text-muted hover:border-accent/40 hover:text-ink'
              }`}
            >
              {category.label.en}
              <span className={`text-xs ${isActive ? 'text-accent' : 'text-faint'}`}>
                {count}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default PortfolioCategory;
