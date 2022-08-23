import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

import { Layout } from '../components';
import nextSeoConfig from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...nextSeoConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
