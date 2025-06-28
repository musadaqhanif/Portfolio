import { schemaMarkup } from "@/lib/schema-markup";
import { Html, Head, Main, NextScript } from "next/document";

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
        <script defer src="https://analytics.dwiwijaya.com/script.js" data-website-id="7e71a6f6-f863-400e-806f-1af37e845ad1"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
