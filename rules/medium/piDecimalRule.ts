import RuleType from '../RuleType';

const usePiDecimalRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('5') && text.includes('8'),
  title: 'Must contains the 8th and 11th decimal of π',
});

export default usePiDecimalRule;
