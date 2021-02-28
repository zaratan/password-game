import RuleType from '../RuleType';

const useTurtleRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('🐢'),
  title: 'Must contain a turtle',
  id: 'turtle',
  never: ['not-same-char-contiguous', 'palindrome'],
});

export default useTurtleRule;
