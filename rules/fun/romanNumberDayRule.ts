import RuleType from '../RuleType';

const RomanDays = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  11: 'XI',
  12: 'XII',
  13: 'XIII',
  14: 'XIV',
  15: 'XV',
  16: 'XVI',
  17: 'XVII',
  18: 'XVIII',
  19: 'XIX',
  20: 'XX',
  21: 'XXI',
  22: 'XXII',
  23: 'XXIII',
  24: 'XXIV',
  25: 'XXV',
  26: 'XXVI',
  27: 'XXVII',
  28: 'XXVIII',
  29: 'XXIX',
  30: 'XXX',
  31: 'XXXI',
};

const useRomanNumberDayRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes(RomanDays[new Date().getDate()]),
  title: 'Must contain current day of the month in Roman numbers',
  id: 'roman-numeral',
  never: ['not-same-char-contiguous'],
});

export default useRomanNumberDayRule;
