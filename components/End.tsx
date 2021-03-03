import React, { useContext, useEffect } from 'react';
import RulesContext from '../contexts/RulesContext';
import ScoreContext from '../contexts/ScoreContext';
import StateContext from '../contexts/StateContext';
import TimeContext from '../contexts/TimeContext';
import { millisecToMinSec } from '../helpers/timeHelpers';
import Timer from './Timer';

const End = () => {
  const { setState } = useContext(StateContext);
  const { resetTime, time } = useContext(TimeContext);
  const { bestTime } = useContext(ScoreContext);
  const { resetRules } = useContext(RulesContext);

  const clickAction = async () => {
    await resetRules();
    resetTime();
    setState('game');
  };

  return (
    <div className="space-y-6 max-w-4xl w-2/3 md:w-1/2 xl:w-1/3">
      <div>
        <p className="text-3xl text-center">🎉 You won the game 🎉</p>
        <ul className="mt-10 text-center">
          <li>Your time: {millisecToMinSec(time)}</li>
          <li>Your best time: {millisecToMinSec(bestTime)}</li>
        </ul>
      </div>
      <button
        onClick={clickAction}
        type="button"
        className="w-full justify-center flex items-center px-4 py-2 bg-green-300 hover:bg-green-400  border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        RESTART
      </button>
    </div>
  );
};

export default End;
