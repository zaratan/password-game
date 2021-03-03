import React from 'react';

const Explaination = () => (
  <div>
    <p className="mt-3 max-w-4xl text-sm text-gray-500">
      This is an idea from Joel Califa's original{' '}
      <a
        href="https://twitter.com/notdetails/status/1201015962398539777?s=21"
        className="text-blue-400 transition-colors hover:text-blue-500"
      >
        tweet
      </a>
      .
    </p>
    <p className="mt-2 max-w-4xl text-sm text-gray-500">
      The game is simple: You must find a valid password in the least amount of
      time.
    </p>
  </div>
);

export default Explaination;
