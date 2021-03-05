/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { RuleDistributionType } from '../helpers/rulesMotor';

export const Levels: Array<LevelType> = [
  {
    id: 'easy',
    name: 'Normal',
    distribution: {
      standard: 4,
    },
    description:
      'Easy: I want a "standard" password experience. I don\'t get enough of those in my life already.',
  },
  {
    id: 'medium',
    name: 'Bank',
    distribution: {
      standard: 3,
      easy: 3,
      fun: 2,
      medium: 2,
    },
    description:
      'Medium: banks enjoy adding various weird password restrictions.',
  },
  {
    id: 'hard',
    name: 'Post',
    distribution: {
      standard: 2,
      easy: 4,
      fun: 2,
      medium: 2,
      hard: 1,
    },
    description:
      "Hard: post office websites don't always have the nicest UX. Expect trouble.",
  },
  {
    id: 'harder',
    name: 'Immigration',
    distribution: {
      standard: 2,
      easy: 3,
      fun: 2,
      medium: 3,
      backward: 1,
      hard: 1,
    },
    description:
      "Harder: immigration websites are an unavoidable part of the immigration process. If you can't fill out their forms, stop here.",
  },
  {
    id: 'hardest',
    name: 'Taxes',
    distribution: {
      standard: 2,
      easy: 2,
      fun: 2,
      medium: 3,
      backward: 2,
      hard: 2,
    },
    description: 'Hardest: filing taxes is always a "fun" process, isn\'t it?',
  },
  {
    id: 'hell',
    name: 'Unemployment',
    distribution: {
      standard: 100,
      easy: 100,
      medium: 100,
      backward: 100,
      fun: 100,
      hard: 100,
      options: {
        shuffle: false,
      },
    },
    description:
      "Hell: let's face it, those websites set you up to fail. Prepare to suffer.",
  },
];

export type LevelType = {
  id: string;
  name: string;
  distribution: RuleDistributionType;
  description: string;
  always?: Array<string>;
};

type ContextType = {
  currentLevel: LevelType;
  setCurrentLevel: (newLevelId: string) => void;
};

const defaultContext: ContextType = {
  currentLevel: Levels[0],
  setCurrentLevel: () => {
    throw new Error('OVERRIDE ME');
  },
};

const LevelContext = createContext(defaultContext);

const lsCurrentLevelKey = 'passwordGame:current-level-id';

export const LevelProvider = ({ children }: { children: ReactNode }) => {
  const [currentLevel, setCurrentLevel] = useState(Levels[0]);
  useEffect(() => {
    const lsCurrentLevelId = localStorage.getItem(lsCurrentLevelKey);
    if (lsCurrentLevelId) {
      setCurrentLevel(
        Levels.find((level) => level.id === lsCurrentLevelId) || Levels[0]
      );
    }
  }, []);

  const setLevel = (levelId: string) => {
    const nextLevel = Levels.find((level) => level.id === levelId);
    if (nextLevel) {
      localStorage.setItem(lsCurrentLevelKey, levelId);
      setCurrentLevel(nextLevel);
    }
  };

  const context: ContextType = {
    currentLevel,
    setCurrentLevel: setLevel,
  };
  return (
    <LevelContext.Provider value={context}>{children}</LevelContext.Provider>
  );
};

export default LevelContext;
