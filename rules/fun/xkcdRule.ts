import RuleType from '../RuleType';

const useXKCDRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('battery'),
  title: 'correct-horse-*****-staple',
});

export default useXKCDRule;
