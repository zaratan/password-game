import RuleType from '../RuleType';

// From https://gist.github.com/ryanmcgrath/982242
const Japanese = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/;

const useKanjiRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => Japanese.test(text) || text.includes('Naruto'),
  title: 'Must contain a japanese character',
  id: 'japanese-char',
});

export default useKanjiRule;
