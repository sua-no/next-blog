import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

import { Layout } from '../components';
import nextSeoConfig from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
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
