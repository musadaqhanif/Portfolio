import Link from 'next/link';

import Seo from '@/components/common/Seo';

export default function ServerError() {
  return (
    <>
      <Seo title="Something went wrong" description="An unexpected error occurred." path="/500" noindex />
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-mono text-sm text-accent">500</span>
        <h1 className="mt-4 text-headline font-semibold">Something went wrong.</h1>
        <p className="mt-4 max-w-prose text-base text-muted">
          An unexpected error occurred on my end. Try again in a moment.
        </p>
        <Link href="/" className="btn-primary mt-9">Back to home</Link>
      </div>
    </>
  );
}
