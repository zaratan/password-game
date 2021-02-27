/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';
import useConfirmRule from '../rules/confirmRule';
import useLengthRule from '../rules/lengthRule';
import useNumberRule from '../rules/numberRule';
import RuleType from '../rules/RuleType';

type ContextType = {
  activeRules: Array<RuleType>;
  checkNewPassword: (text: string, confirm?: string) => boolean;
  passwordConfirmText: string;
  setPasswordConfirmText: (newConfirm: string) => void;
  confirmable: boolean;
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
};

const RulesContext = createContext(defaultContext);

export const RulesProvider = ({ children }: { children: ReactNode }) => {
  const [passwordConfirmText, setPasswordConfirmText] = useState('');
  const lengthRule = useLengthRule();

  const confirmRule = useConfirmRule(passwordConfirmText);
  const [confirmable, setConfirmable] = useState(false);

  const numberRule = useNumberRule();
  const [activeRules, setActiveRules] = useState([lengthRule]);
  const [unusedRules, setUnusedRules] = useState([confirmRule, numberRule]);

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

      if (newRule.title === confirmRule.title) {
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
  };

  return (
    <RulesContext.Provider value={context}>{children}</RulesContext.Provider>
  );
};

export default RulesContext;
