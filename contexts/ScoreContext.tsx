/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from 'react';
import LevelContext from './LevelContext';

type ContextType = {
  passwordVisible: boolean;
  togglePasswordVisible: () => void;
  confirmationVisible: boolean;
  toggleConfirmationVisible: () => void;
  setConfirmationVisible: (visible: boolean) => void;
  setPasswordVisible: (visible: boolean) => void;
  registerNewTime: (newTime: number) => void;
  bestTime?: number;
};

const defaultContext: ContextType = {
  passwordVisible: false,
  togglePasswordVisible: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  confirmationVisible: false,
  toggleConfirmationVisible: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  setConfirmationVisible: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  setPasswordVisible: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  bestTime: null,
  registerNewTime: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
};

const ScoreContext = createContext(defaultContext);

const lsBestScoreKey = 'passwordGame:best-score';

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [bestTime, setBestTime] = useState({});
  const { currentLevel } = useContext(LevelContext);
  const levelBestTime = bestTime[currentLevel.id];

  useEffect(() => {
    const lsBest = localStorage.getItem(lsBestScoreKey);
    if (lsBest && typeof JSON.parse(lsBest) !== 'number') {
      setBestTime(JSON.parse(lsBest));
    }
  }, []);

  const registerNewTime = (newTime: number) => {
    if (!levelBestTime || levelBestTime > newTime) {
      const newBest = { ...bestTime, [currentLevel.id]: newTime };
      setBestTime(newBest);
      localStorage.setItem(lsBestScoreKey, JSON.stringify(newBest));
    }
  };
  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmationVisible = () => {
    setConfirmationVisible(!confirmationVisible);
  };

  const context: ContextType = {
    confirmationVisible,
    passwordVisible,
    toggleConfirmationVisible,
    setConfirmationVisible,
    setPasswordVisible,
    togglePasswordVisible,
    bestTime: levelBestTime,
    registerNewTime,
  };

  return (
    <ScoreContext.Provider value={context}>{children}</ScoreContext.Provider>
  );
};

export default ScoreContext;
