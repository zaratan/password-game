/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-empty-function */
import { sampleSize, shuffle } from 'lodash';
import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import useCapRule from '../rules/standard/capRule';
import useConfirmRule from '../rules/confirmRule';
import useLengthRule from '../rules/standard/lengthRule';
import useLowcaseRule from '../rules/standard/lowcaseRule';
import useNumberRule from '../rules/standard/numberRule';
import usePunctuationRule from '../rules/standard/punctuationRule';
import RuleType from '../rules/RuleType';
import useRespectRule from '../rules/fun/respectRule';
import usePalindromeRule from '../rules/hard/palindromeRule';
import useAnswerToLifeRule from '../rules/fun/answerToLifeRule';
import useMatchingParentheseRule from '../rules/hard/matchingParentheseRule';
import useParentheseManyTypesRule from '../rules/easy/parentheseManyTypesRule';
import useParentheseNonContiguousRule from '../rules/easy/parentheseNonContiguousRule';
import useNotTwoIdenticalCharsRule from '../rules/easy/notTwoIdenticalCharsRule';
import useCurrentYearRule from '../rules/easy/currentYearRule';
import useCurrentMinutesRule from '../rules/medium/currentMinutesRule';
import useKanjiRule from '../rules/medium/kanjiRule';
import usePiDecimalRule from '../rules/medium/piDecimalRule';
import useDHMORule from '../rules/fun/dhmoRule';
import useRomanNumberDayRule from '../rules/fun/romanNumberDayRule';
import useTurtleRule from '../rules/fun/turtleRule';
import useXKCDRule from '../rules/fun/xkcdRule';

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
const StandardRules = [
  useNumberRule,
  useCapRule,
  useLengthRule,
  useLowcaseRule,
  usePunctuationRule,
];
const FunRules = [
  useRespectRule,
  useAnswerToLifeRule,
  useDHMORule,
  useRomanNumberDayRule,
  useTurtleRule,
  useXKCDRule,
];
const EasyRules = [
  useParentheseManyTypesRule,
  useParentheseNonContiguousRule,
  useNotTwoIdenticalCharsRule,
  useCurrentYearRule,
];
const HardRules = [useMatchingParentheseRule, usePalindromeRule];
const MediumRules = [useCurrentMinutesRule, useKanjiRule, usePiDecimalRule];

export const RulesProvider = ({ children }: { children: ReactNode }) => {
  const [passwordConfirmText, setPasswordConfirmText] = useState('');

  const confirmRule = useConfirmRule();
  const [confirmable, setConfirmable] = useState(false);

  const [activeRules, setActiveRules] = useState([]);
  const [unusedRules, setUnusedRules] = useState([]);

  const resetRules = useCallback(() => {
    const [act, ...unused] = [
      ...sampleSize(StandardRules, 3).map((e) => e()),
      ...shuffle([
        ...sampleSize(EasyRules, 2).map((e) => e()),
        ...sampleSize(FunRules, 3).map((e) => e()),
        ...sampleSize(MediumRules, 2).map((e) => e()),
        ...sampleSize([...HardRules, () => confirmRule], 1).map((e) => e()),
      ]),
    ];
    setActiveRules([act]);
    setUnusedRules(unused);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    resetRules,
  };

  return (
    <RulesContext.Provider value={context}>{children}</RulesContext.Provider>
  );
};

export default RulesContext;
