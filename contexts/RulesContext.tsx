/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import RuleType from '../rules/RuleType';
import { fetchNewRules } from '../helpers/rulesMotor';

type ContextType = {
  activeRules: Array<RuleType>;
  checkNewPassword: (text: string, confirm?: string) => boolean;
  passwordConfirmText: string;
  setPasswordConfirmText: (newConfirm: string) => void;
  confirmable: boolean;
  resetRules: () => void;
};

const defaultContext: ContextType = {
  activeRules: [],
  checkNewPassword: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  passwordConfirmText: '',
  setPasswordConfirmText: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  confirmable: false,
  resetRules: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
};

const RulesContext = createContext(defaultContext);

export const RulesProvider = ({ children }: { children: ReactNode }) => {
  const [passwordConfirmText, setPasswordConfirmText] = useState('');
  const [confirmable, setConfirmable] = useState(false);
  const [activeRules, setActiveRules] = useState([]);
  const [unusedRules, setUnusedRules] = useState([]);

  const resetRules = useCallback(() => {
    const [act, ...unused] = fetchNewRules({
      standard: 3,
      easy: 2,
      fun: 3,
      medium: 2,
      hard: 1,
      options: { shuffle: true },
    });
    setActiveRules([act]);
    setUnusedRules(unused);
  }, []);

  useEffect(() => {
    resetRules();
  }, [resetRules]);

  const checkNewPassword = (text: string, confirm?: string) => {
    let result = true;

    for (const currentRule of activeRules) {
      const newValue = currentRule.checkFn(text, confirm);
      currentRule.valid = newValue;
      result = result && newValue;
    }

    let newActiveRules = [...activeRules];
    let newUnusedRules = [...unusedRules];

    while (result && newUnusedRules.length > 0) {
      const [newRule, ...rest] = newUnusedRules;
      newActiveRules = [...newActiveRules, newRule];

      if (newRule.id === 'confirm') {
        setConfirmable(true);
      }
      newUnusedRules = rest;

      for (const currentRule of newActiveRules) {
        const newValue = currentRule.checkFn(text, confirm);
        currentRule.valid = newValue;
        result = result && newValue;
      }
    }

    setActiveRules(newActiveRules);
    setUnusedRules(newUnusedRules);

    return result;
  };

  const context: ContextType = {
    activeRules,
    checkNewPassword,
    passwordConfirmText,
    setPasswordConfirmText,
    confirmable,
    resetRules,
  };

  return (
    <RulesContext.Provider value={context}>{children}</RulesContext.Provider>
  );
};

export default RulesContext;
