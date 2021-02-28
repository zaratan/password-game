import RuleType from '../RuleType';

const useNumberRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => {
    console.log(/\d/.test(text));
    return /\d/.test(text);
  },
  title: 'Your password must contain a number',
  id: 'number-simple',
});

export default useNumberRule;
