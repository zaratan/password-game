/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode, useEffect } from 'react';

type ContextType = {
  passwordVisible: boolean;
  togglePasswordVisible: () => void;
  confirmationVisible: boolean;
  toggleConfirmationVisible: () => void;
  setConfirmationVisible: (visible: boolean) => void;
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
  const [bestTime, setBestTime] = useState(null);

  useEffect(() => {
    const lsBest = localStorage.getItem(lsBestScoreKey);
    if (lsBest) {
      setBestTime(JSON.parse(lsBest));
    }
  }, []);

  const registerNewTime = (newTime: number) => {
    if (!bestTime || bestTime > newTime) {
      setBestTime(newTime);
      localStorage.setItem(lsBestScoreKey, JSON.stringify(newTime));
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
    togglePasswordVisible,
    bestTime,
    registerNewTime,
  };

  return (
    <ScoreContext.Provider value={context}>{children}</ScoreContext.Provider>
  );
};

export default ScoreContext;
