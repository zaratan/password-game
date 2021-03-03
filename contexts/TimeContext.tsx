/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import ScoreContext from './ScoreContext';

type ContextType = {
  time: number;
  resetTime: () => void;
  stopTime: () => void;
};

const defaultContext: ContextType = {
  time: 0,
  resetTime: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  stopTime: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
};
const TimeContext = createContext(defaultContext);
export const TimeProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState(0);
  const [paused, setPause] = useState(false);
  const resetTime = () => {
    setTime(0);
    setPause(false);
  };
  const { passwordVisible, confirmationVisible } = useContext(ScoreContext);

  useEffect(() => {
    const updateTime = () => {
      if (paused) return;
      setTime(
        (prev) =>
          prev + 100 * (passwordVisible ? 4 : 1) * (confirmationVisible ? 2 : 1)
      );
    };
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, [passwordVisible, confirmationVisible, paused]);

  const context: ContextType = {
    time,
    resetTime,
    stopTime: () => setPause(true),
  };
  return (
    <TimeContext.Provider value={context}>{children}</TimeContext.Provider>
  );
};

export default TimeContext;
