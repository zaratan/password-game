import React from 'react';
import Form from './Form';
import Rules from './Rules';
import Timer from './Timer';

const Game = () => (
  <main className="flex w-full flex-col-reverse md:flex-row px-8 md:px-0">
    <section className="md:w-2/3 lg:w-1/2 md:max-w-lg md:p-4 md:pr-5 border-t pt-5 md:pt-0 md:border-t-0 md:border-r border-solid">
      <Form />
    </section>
    <aside className="pb-5 md:pb-0 md:pl-5">
      <Timer />
      <Rules />
    </aside>
  </main>
);

export default Game;
