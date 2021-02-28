import RuleType from '../RuleType';

const useAnswerToLifeRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('42'),
  title: 'Must contain the answer to life, the universe, and everything',
  id: '42',
});

export default useAnswerToLifeRule;
