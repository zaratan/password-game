import RuleType from '../RuleType';

const useDHMORule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => /(dhmo)|(h2o)|(eau)|(water)/i.test(text),
  title: 'Must contain a simpler name for Dihydrogen monoxide',
  id: 'dhmo',
});

export default useDHMORule;
