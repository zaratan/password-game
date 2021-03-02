import RuleType from '../RuleType';

const TwoDigitsPrimeNumbers = [
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];

const usePrimeNumberRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) =>
    TwoDigitsPrimeNumbers.some((prime) => text.includes(String(prime))),
  title: 'Must have a prime number with 2 digits',
  id: 'prime-number-2-digits',
});

export default usePrimeNumberRule;
