import RuleType from '../RuleType';

const useLowcaseRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => new RegExp('\\p{Ll}', 'u').test(text),
  title: 'Must contain a lowercase letter',
  id: 'lowercase-simple',
});

export default useLowcaseRule;
