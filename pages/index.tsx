import Head from 'next/head';
import React, { useContext } from 'react';
import End from '../components/End';
import Footer from '../components/Footer';
import Game from '../components/Game';
import Header from '../components/Header';
import Start from '../components/Start';
import StateContext from '../contexts/StateContext';

export default function Home() {
  const { state } = useContext(StateContext);

  let MainComponent;
  switch (state) {
    case 'start':
      MainComponent = Start;
      break;
    case 'game':
      MainComponent = Game;
      break;
    case 'end':
      MainComponent = End;
      break;
    default:
      MainComponent = Start;
      break;
  }

  return (
    <div className="container mx-auto h-screen flex flex-col justify-between items-center">
      <Head>
        <title>Password Game</title>
        <meta
          name="description"
          content="Filling passwords with silly constraints."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}
