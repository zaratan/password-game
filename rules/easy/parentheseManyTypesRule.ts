import RuleType from '../RuleType';

const useParentheseManyTypesRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) =>
    text.includes('(') && text.includes('[') && text.includes('{'),
  title: 'Must contain a (,a [ and a {',
});

export default useParentheseManyTypesRule;
