import RuleType from '../RuleType';

const useXKCDRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('battery'),
  title: 'correct-horse-*****-staple',
  id: 'xkcd',
  never: ['not-same-char-contiguous'],
});

export default useXKCDRule;
