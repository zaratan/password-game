import { sampleSize, shuffle, uniq } from 'lodash';
import useConfirmRule from '../rules/confirmRule';
import useCurrentYearRule from '../rules/easy/currentYearRule';
import useNotTwoIdenticalCharsRule from '../rules/easy/notTwoIdenticalCharsRule';
import useParentheseManyTypesRule from '../rules/easy/parentheseManyTypesRule';
import useParentheseNonContiguousRule from '../rules/easy/parentheseNonContiguousRule';
import useAnswerToLifeRule from '../rules/fun/answerToLifeRule';
import useDHMORule from '../rules/fun/dhmoRule';
import useRespectRule from '../rules/fun/respectRule';
import useRomanNumberDayRule from '../rules/fun/romanNumberDayRule';
import useTurtleRule from '../rules/fun/turtleRule';
import useXKCDRule from '../rules/fun/xkcdRule';
import useMatchingParentheseRule from '../rules/hard/matchingParentheseRule';
import usePalindromeRule from '../rules/hard/palindromeRule';
import useCurrentMinutesRule from '../rules/medium/currentMinutesRule';
import useKanjiRule from '../rules/medium/kanjiRule';
import usePiDecimalRule from '../rules/medium/piDecimalRule';
import RuleType from '../rules/RuleType';
import useCapRule from '../rules/standard/capRule';
import useLengthRule from '../rules/standard/lengthRule';
import useLowcaseRule from '../rules/standard/lowcaseRule';
import useNumberRule from '../rules/standard/numberRule';
import usePunctuationRule from '../rules/standard/punctuationRule';

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

const HardRules = [
  useMatchingParentheseRule,
  usePalindromeRule,
  useConfirmRule,
];

const MediumRules = [useCurrentMinutesRule, useKanjiRule, usePiDecimalRule];

const computeNevers = (rules: Array<RuleType>) =>
  uniq(
    rules.reduce<Array<string>>((prev, e) => [...prev, ...(e.never || [])], [])
  );

const removeNevers = (rules: Array<RuleType>, nevers: Array<string>) =>
  rules.filter((rule) => !nevers.includes(rule.id));

const addAlways = (rules: Array<RuleType>) => {
  const alwaysRules = rules.reduce<Array<RuleType>>(
    (prev, rule) => [...prev, ...((rule.always || []).map((e) => e()) || [])],
    []
  );
  const presentRuleIds = rules.map((r) => r.id);

  return [
    ...rules,
    ...alwaysRules.filter((rule) => !presentRuleIds.includes(rule.id)),
  ];
};

export const fetchNewRules = (
  {
    standard,
    easy,
    fun,
    hard,
    medium,
    options = { shuffle: true },
  }: {
    standard?: number;
    fun?: number;
    easy?: number;
    medium?: number;
    hard?: number;
    options?: { shuffle?: boolean };
  } = { standard: 3, options: { shuffle: true } }
) => {
  let nevers: Array<string> = [];
  let finalRules: Array<RuleType> = [];
  let standardRules: Array<RuleType> = [];
  if (Number(standard) > 0) {
    standardRules = sampleSize(
      StandardRules.map((e) => e()),
      standard
    );
    nevers = computeNevers(finalRules);
  }
  if (Number(easy) > 0) {
    finalRules = [
      ...finalRules,
      ...sampleSize(
        removeNevers(
          EasyRules.map((e) => e()),
          nevers
        ),
        easy
      ),
    ];
    nevers = computeNevers(finalRules);
  }
  if (Number(fun) > 0) {
    finalRules = [
      ...finalRules,
      ...sampleSize(
        removeNevers(
          FunRules.map((e) => e()),
          nevers
        ),
        fun
      ),
    ];
    nevers = computeNevers(finalRules);
  }
  if (Number(medium) > 0) {
    finalRules = [
      ...finalRules,
      ...sampleSize(
        removeNevers(
          MediumRules.map((e) => e()),
          nevers
        ),
        medium
      ),
    ];
    nevers = computeNevers(finalRules);
  }
  if (Number(hard) > 0) {
    finalRules = [
      ...finalRules,
      ...sampleSize(
        removeNevers(
          HardRules.map((e) => e()),
          nevers
        ),
        hard
      ),
    ];
    nevers = computeNevers(finalRules);
  }

  finalRules = removeNevers(finalRules, nevers);
  finalRules = addAlways(finalRules);

  return options.shuffle
    ? [...standardRules, ...shuffle(finalRules)]
    : [...standardRules, ...finalRules];
};