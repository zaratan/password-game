import React, { useContext, useEffect, useState } from 'react';
import ScoreContext from '../contexts/ScoreContext';
import TimeContext from '../contexts/TimeContext';

const Timer = () => {
  const { time } = useContext(TimeContext);
  const { bestTime } = useContext(ScoreContext);

  const sec = String(Math.floor(time / 1000) % 60).padStart(2, '0');
  const min = Math.floor(time / 60 / 1000);
  let bestMin: number;
  let bestSec: string;
  if (bestTime) {
    bestSec = String(Math.floor(bestTime / 1000) % 60).padStart(2, '0');
    bestMin = Math.floor(bestTime / 60 / 1000);
  }
  return (
    <div className="flex justify-between">
      <span>
        Current time: {min}:{sec}
      </span>
      <span>Best: {bestTime ? `${bestMin}:${bestSec}` : 'None yet :('}</span>
    </div>
  );
};

export default Timer;
