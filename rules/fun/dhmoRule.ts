import RuleType from '../RuleType';

const useDHMORule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => /(dhmo)|(h2o)/i.test(text),
  title: 'must contain a simpler name for Dihydrogen monoxide',
});

export default useDHMORule;
