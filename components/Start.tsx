import React, { useContext } from 'react';
import RulesContext from '../contexts/RulesContext';
import StateContext from '../contexts/StateContext';
import TimeContext from '../contexts/TimeContext';
import Explanation from './Explanation';
import LevelSlider from './LevelSlider';

const StartButton = () => {
  const { setState } = useContext(StateContext);
  const { resetTime } = useContext(TimeContext);
  const { resetRules } = useContext(RulesContext);

  const clickAction = async () => {
    await resetRules();
    resetTime();
    setState('game');
  };
  return (
    <button
      type="button"
      onClick={clickAction}
      className="w-full justify-center flex items-center px-4 py-2 bg-green-300 hover:bg-green-400  border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
    >
      START THE GAME
    </button>
  );
};

const Start = () => (
  <div className="space-y-6 px-4 md:px-0 md:w-130 max-w-lg">
    <div className="flex flex-col">
      <Explanation />
      <LevelSlider />
    </div>
    <StartButton />
  </div>
);

export default Start;
