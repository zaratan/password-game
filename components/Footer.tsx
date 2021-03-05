import React from 'react';

const Footer = () => (
  <footer className="italic text-center">
    <span className="h-12 flex justify-center items-center">
      <span>
        Made with
        <span
          className="transition-colors hover:text-red-500 duration-5000 ease-in-out hover:duration-200 mx-1"
          style={{ cursor: 'grab' }}
        >
          ♥
        </span>
        by
      </span>
      <a
        className="pl-1 transition-colors text-blue-400 hover:text-blue-500"
        href="https://twitter.com/zaratan"
      >
        @zaratan
      </a>
      .
      <a
        className="pl-1 transition-colors text-blue-400 hover:text-blue-500"
        href="https://ko-fi.com/zaratan"
      >
        Buy me a tea
      </a>
      .
    </span>
  </footer>
);

export default Footer;
