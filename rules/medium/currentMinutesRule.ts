import RuleType from '../RuleType';

const useCurrentMinutesRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes(String(new Date().getMinutes())),
  title: 'Must have current minute count',
  id: 'current-min',
});

export default useCurrentMinutesRule;
