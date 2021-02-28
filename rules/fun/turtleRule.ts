import RuleType from '../RuleType';

const useTurtleRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('🐢'),
  title: 'Must contain a turtle',
});

export default useTurtleRule;
