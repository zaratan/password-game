import Head from 'next/head';
import React, { useContext } from 'react';
import Form from '../components/Form';
import Timer from '../components/Timer';
import RulesContext from '../contexts/RulesContext';

export default function Home() {
  const { activeRules } = useContext(RulesContext);
  return (
    <div className="container mx-auto h-screen flex flex-col justify-between items-center">
      <Head>
        <title>Password Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header />

      <main className="flex w-full flex-col-reverse md:flex-row px-8 md:px-0">
        <section className="md:w-2/3 lg:w-1/2 md:max-w-lg md:p-4 md:pr-5 border-t pt-5 md:pt-0 md:border-t-0 md:border-r border-solid">
          <Form />
        </section>
        <aside className="pb-5 md:pb-0 md:pl-5">
          <Timer />
          <ul>
            {activeRules.map((activeRule) => (
              <li>
                {activeRule.title}:{activeRule.valid ? 'OK' : 'NOK'}
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <footer />
    </div>
  );
}
