/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { RulesProvider } from '../contexts/RulesContext';
import { ScoreProvider } from '../contexts/ScoreContext';
import { TimeProvider } from '../contexts/TimeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ScoreProvider>
        <RulesProvider>
          <TimeProvider>
            <Component {...pageProps} />
          </TimeProvider>
        </RulesProvider>
      </ScoreProvider>
    </>
  );
}

export default MyApp;
