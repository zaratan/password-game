import React from 'react';

const Header = () => (
  <header className="px-8 md:px-0 pb-5 border-b border-gray-200 w-full mt-8">
    <h3 className="text-2xl leading-6 font-medium text-gray-900">
      Password Game
    </h3>
    <p className="mt-3 max-w-4xl text-sm text-gray-500">
      This is an idea from the original{' '}
      <a
        href="https://twitter.com/notdetails/status/1201015962398539777?s=21"
        className="text-blue-400 transition-colors hover:text-blue-500"
      >
        tweet
      </a>{' '}
      of Joel Califa.
    </p>
    <p className="mt-2 max-w-4xl text-sm text-gray-500">
      The game is simple: You must find a valid password in the least amount of
      time.
    </p>
  </header>
);

export default Header;
