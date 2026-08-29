import Seo from '@/components/common/Seo';
import { PAGE_COPY } from '@/constants/copy';

export default function Offline() {
  const copy = PAGE_COPY.offline;
  return (
    <>
      <Seo title={copy.title} description={copy.metaDesc} path="/_offline" noindex />
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="text-headline font-semibold">{copy.title}</h1>
        <p className="mt-4 max-w-prose text-base text-muted">{copy.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn-primary mt-9"
        >
          {copy.retry}
        </button>
      </div>
    </>
  );
}
