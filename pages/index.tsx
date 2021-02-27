import Head from 'next/head';
import { useContext } from 'react';
import Form from '../components/Form';
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

      <main className="flex w-full">
        <section className="w-2/3 p-4">
          <Form />
        </section>
        <aside className="w-1/3">
          Rules + Timer
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
