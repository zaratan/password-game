import RuleType from '../RuleType';

const useNumberMustEndByRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => !/[1-9](\D|$)/.test(text),
  title: 'Each number group must end with a 0',
  id: 'number-group-0',
  never: ['captcha'],
});

export default useNumberMustEndByRule;
