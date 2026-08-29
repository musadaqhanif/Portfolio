import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Onest } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Toaster } from 'react-hot-toast';
import { DefaultSeo } from 'next-seo';
import Aos from 'aos';

import Layout from '@/components/layouts/Layout';

import '@/styles/vendor/fa.min-1.css';
import '@/styles/vendor/fa.min-2.css';
import '@/styles/globals.css';
import 'aos/dist/aos.css';

import defaultSEOConfig from '../../next-seo.config';

// next/font self-hosts the font files at build time, so no request ever leaves
// the origin for typography. This also keeps font-src 'self' in the CSP.
const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const ProgressBar = dynamic(() => import('@/components/elements/ProgressBar'), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 500, delay: 0, once: true, easing: 'ease-out', offset: 60 });
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className={`${onest.variable} font-sans`}>
        <DefaultSeo {...defaultSEOConfig} />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--surface)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              fontSize: '14px',
            },
          }}
        />
        <ProgressBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
