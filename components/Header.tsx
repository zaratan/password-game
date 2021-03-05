import React, { useContext } from 'react';
import StateContext from '../contexts/StateContext';
import Explanation from './Explanation';

const Header = () => {
  const { state } = useContext(StateContext);
  return (
    <header className="px-8 md:px-0 pb-5 border-b border-gray-200 w-full mt-8">
      <h3 className="text-2xl leading-6 font-medium text-gray-900">
        Password Game
      </h3>
      {state === 'start' ? null : <Explanation small />}
    </header>
  );
};

export default Header;
