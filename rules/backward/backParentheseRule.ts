import RuleType from '../RuleType';

const useBackParentheseRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => /[\]})]/.test(text[2]),
  title: 'The 3rd charactere must be a }, ] or )',
  id: 'back-parenthese',
});

export default useBackParentheseRule;
