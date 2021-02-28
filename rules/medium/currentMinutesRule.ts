import RuleType from '../RuleType';

const useCurrentMinutesRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string, confirm?: string) =>
    text.includes(String(new Date().getMinutes())),
  title: 'Must have current minute count',
});

export default useCurrentMinutesRule;
