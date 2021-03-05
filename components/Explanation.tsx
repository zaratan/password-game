import React from 'react';

const Explanation = ({ small }: { small?: boolean }) => (
  <div
    className={
      small
        ? 'text-sm text-gray-500'
        : 'pb-4 solid border-b border-gray-300 md:border-0 md:mb-24'
    }
  >
    <p className="mt-3 max-w-4xl">
      Inspired by Joel Califa's original{' '}
      <a
        href="https://twitter.com/notdetails/status/1201015962398539777?s=21"
        className="text-blue-400 transition-colors hover:text-blue-500"
      >
        tweet
      </a>
      .
    </p>
    <p className="mt-2 max-w-4xl">
      The game is simple: find a valid password as fast as possible.
    </p>
  </div>
);

export default Explanation;
