import RuleType from '../RuleType';

const usePiDecimalRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('5') && text.includes('8'),
  title: 'Must contain the 8th and 11th decimal of π',
  id: 'pi-8-11',
});

export default usePiDecimalRule;
