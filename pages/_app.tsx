import { useEffect } from 'react';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import { useRouter } from 'next/router';

import { Layout } from '../components';
import nextSeoConfig from '../next-seo.config';
import { gtmVirtualPageView } from '../lib/ga';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmVirtualPageView(mainDataLayer);
  }, [pageProps]);

  return (
    <>
      <NextSeo {...nextSeoConfig} />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-XG21G490C4');
      `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
