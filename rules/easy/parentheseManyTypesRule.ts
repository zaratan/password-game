import RuleType from '../RuleType';

const useParentheseManyTypesRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) =>
    text.includes('(') && text.includes('[') && text.includes('{'),
  title: 'Must contain a (,a [ and a {',
  id: 'all-kind-para',
});

export default useParentheseManyTypesRule;
