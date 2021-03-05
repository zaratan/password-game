import React from 'react';

const Explaination = ({ small }: { small?: boolean }) => (
  <div
    className={
      small
        ? 'text-sm text-gray-500'
        : 'pb-4 solid border-b border-gray-300 md:border-0 md:mb-24'
    }
  >
    <p className="mt-3 max-w-4xl">
      This is an idea from Joel Califa's original{' '}
      <a
        href="https://twitter.com/notdetails/status/1201015962398539777?s=21"
        className="text-blue-400 transition-colors hover:text-blue-500"
      >
        tweet
      </a>
      .
    </p>
    <p className="mt-2 max-w-4xl">
      The game is simple: You must find a valid password in the least amount of
      time.
    </p>
  </div>
);

export default Explaination;
