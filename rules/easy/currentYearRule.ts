import RuleType from '../RuleType';

const useCurrentYearRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes(String(new Date().getFullYear())),
  title: 'Must contains current year',
  id: 'current-year',
});

export default useCurrentYearRule;
