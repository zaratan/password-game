import RuleType from '../RuleType';

const useCapRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => new RegExp('\\p{Lu}', 'u').test(text),
  title: 'Must contain at least one capitalized letter',
  id: 'capitalize-simple',
});

export default useCapRule;
