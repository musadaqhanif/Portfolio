import { schemaMarkup } from "@/lib/schema-markup";
import { Html, Head, Main, NextScript } from "next/document";

/**
 * SECURITY: Do not add a <script src="..."> pointing at a host you do not own.
 *
 * A third-party script tag grants that host permission to run arbitrary
 * JavaScript for every visitor, forever. This site previously shipped a
 * hard-coded analytics script from a domain owned by the template author; when
 * that host started serving redirect malware, so did we. See SECURITY.md.
 *
 * Analytics is now opt-in via env var, and the Content-Security-Policy in
 * next.config.js is generated from the SAME variable, so a script can only load
 * if it has been deliberately allow-listed in both places.
 */
const ANALYTICS_SRC = process.env.NEXT_PUBLIC_ANALYTICS_SRC || "";
const ANALYTICS_WEBSITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID || "";

/** Only ever emit a script tag for an explicitly configured HTTPS origin. */
const analyticsEnabled =
  ANALYTICS_SRC.startsWith("https://") && ANALYTICS_WEBSITE_ID.length > 0;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/jpeg" href="/favicon/musadaq.jpg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/favicon/musadaq.jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/favicon/musadaq.jpg" />
        <link rel="icon" type="image/jpeg" sizes="48x48" href="/favicon/musadaq.jpg" />
        <link rel="apple-touch-icon" href="/favicon/musadaq.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/musadaq.jpg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon/musadaq.jpg" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon/musadaq.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        {analyticsEnabled && (
          <script
            defer
            src={ANALYTICS_SRC}
            data-website-id={ANALYTICS_WEBSITE_ID}
            crossOrigin="anonymous"
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
