/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { RulesProvider } from '../contexts/RulesContext';

const WrappedApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

function MyApp(appProps: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <RulesProvider>
        <WrappedApp {...appProps} />
      </RulesProvider>
    </>
  );
}

export default MyApp;
