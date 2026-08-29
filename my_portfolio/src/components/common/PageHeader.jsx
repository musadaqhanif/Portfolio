/**
 * Standard heading block for interior pages: eyebrow, title, supporting line.
 */
const PageHeader = ({ eyebrow, title, subtitle, children }) => (
  <header className="border-b border-line">
    <div className="shell py-14 sm:py-20">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="mt-5 text-headline font-semibold">{title}</h1>
      {subtitle && (
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </header>
);

export default PageHeader;
