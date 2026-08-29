import Link from 'next/link';

const BackLink = ({ href = '/', label = 'Back' }) => (
  <Link
    href={href}
    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
  >
    <span aria-hidden className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
      &larr;
    </span>
    {label}
  </Link>
);

export default BackLink;
