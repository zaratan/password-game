import React, { useContext } from 'react';
import RulesContext from '../contexts/RulesContext';
import StateContext from '../contexts/StateContext';
import TimeContext from '../contexts/TimeContext';
import Explaination from './Explaination';

const Start = () => {
  const { setState } = useContext(StateContext);
  const { resetTime } = useContext(TimeContext);
  const { resetRules } = useContext(RulesContext);

  const clickAction = async () => {
    await resetRules();
    resetTime();
    setState('game');
  };

  return (
    <div className="space-y-6">
      <Explaination />
      <button
        type="button"
        onClick={clickAction}
        className="w-full justify-center flex items-center px-4 py-2 bg-green-300 hover:bg-green-400  border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        START THE GAME
      </button>
    </div>
  );
};

export default Start;
