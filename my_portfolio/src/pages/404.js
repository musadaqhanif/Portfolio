import Link from 'next/link';

import Seo from '@/components/common/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist." path="/404" noindex />
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-mono text-sm text-accent">404</span>
        <h1 className="mt-4 text-headline font-semibold">This page does not exist.</h1>
        <p className="mt-4 max-w-prose text-base text-muted">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/portfolio" className="btn-ghost">See the work</Link>
        </div>
      </div>
    </>
  );
}
