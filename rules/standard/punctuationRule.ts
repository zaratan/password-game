import RuleType from '../RuleType';

const usePunctuationRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => new RegExp('\\p{P}', 'u').test(text),
  title: 'Must contains one punctuation',
  id: 'punctuation-simple',
});

export default usePunctuationRule;
