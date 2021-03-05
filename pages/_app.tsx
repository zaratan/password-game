/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { LevelProvider } from '../contexts/LevelContext';
import { RulesProvider } from '../contexts/RulesContext';
import { ScoreProvider } from '../contexts/ScoreContext';
import { StateProvider } from '../contexts/StateContext';
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
      <StateProvider>
        <LevelProvider>
          <ScoreProvider>
            <RulesProvider>
              <TimeProvider>
                <Component {...pageProps} />
              </TimeProvider>
            </RulesProvider>
          </ScoreProvider>
        </LevelProvider>
      </StateProvider>
    </>
  );
}

export default MyApp;
