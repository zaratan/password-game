import RuleType from '../RuleType';

const useRespectRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('f'),
  title: 'Press f to pay respect',
});

export default useRespectRule;
