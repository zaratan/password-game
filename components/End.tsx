import React, { useContext } from 'react';
import LevelContext from '../contexts/LevelContext';
import RulesContext from '../contexts/RulesContext';
import ScoreContext from '../contexts/ScoreContext';
import StateContext from '../contexts/StateContext';
import TimeContext from '../contexts/TimeContext';
import { millisecToMinSec } from '../helpers/timeHelpers';

const End = () => {
  const { setState } = useContext(StateContext);
  const { resetTime, time } = useContext(TimeContext);
  const { bestTime } = useContext(ScoreContext);
  const { resetRules } = useContext(RulesContext);
  const { currentLevel } = useContext(LevelContext);

  const clickAction = async () => {
    await resetRules();
    resetTime();
    setState('game');
  };

  const clickChangeLevel = () => {
    resetTime();
    setState('start');
  };

  return (
    <div className="space-y-6 max-w-4xl w-2/3 md:w-1/2 xl:w-1/3 text-center">
      <div>
        <p className="text-3xl">🎉 You won the game 🎉</p>
        <p className="text-lg text-gray-900 mt-5">
          Current level: {currentLevel.name}
        </p>
        <ul className="mt-5">
          <li>Your time: {millisecToMinSec(time)}</li>
          <li>Your best time: {millisecToMinSec(bestTime)}</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          onClick={clickAction}
          type="button"
          className="w-full justify-center flex items-center px-4 py-2 bg-green-300 hover:bg-green-400  border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          RESTART
        </button>
        <button
          onClick={clickChangeLevel}
          type="button"
          className="w-full justify-center flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300  border border-transparent text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          Change level
        </button>
      </div>
    </div>
  );
};

export default End;
