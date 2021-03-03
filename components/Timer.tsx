import React, { useContext } from 'react';
import ScoreContext from '../contexts/ScoreContext';
import TimeContext from '../contexts/TimeContext';
import { millisecToMinSec } from '../helpers/timeHelpers';

const Timer = () => {
  const { time } = useContext(TimeContext);
  const { bestTime } = useContext(ScoreContext);

  return (
    <div className="flex justify-between">
      <span>Current time: {millisecToMinSec(time)}</span>
      <span>Best: {bestTime ? millisecToMinSec(bestTime) : 'None yet :('}</span>
    </div>
  );
};

export default Timer;
