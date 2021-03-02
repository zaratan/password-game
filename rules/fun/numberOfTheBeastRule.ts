import RuleType from '../RuleType';

const useNumberOfTheBeastRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('666'),
  title: 'Must contain the number of the beast',
  id: 'number-of-beast',
});

export default useNumberOfTheBeastRule;
