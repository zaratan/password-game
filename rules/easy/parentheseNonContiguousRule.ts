import RuleType from '../RuleType';

const useParentheseNonContiguousRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => /[({[][^({[]+[({[]/.test(text),
  title: 'Must have at least 2 non-contiguous (, { or [',
});

export default useParentheseNonContiguousRule;
