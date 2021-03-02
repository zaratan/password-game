import useKanjiRule from '../../../rules/medium/kanjiRule';

const { checkFn } = useKanjiRule();

describe('Kanji rule', () => {
  test('works with Kanji', () => {
    expect(checkFn('a元.')).toBeTruthy();
  });

  test('fails without japanese char', () => {
    expect(checkFn('aA1!')).toBeFalsy();
  });

  test('works with hiragana', () => {
    expect(checkFn('aは1')).toBeTruthy();
  });

  test('works with katakana', () => {
    expect(checkFn('aヤ1')).toBeTruthy();
  });

  test('works with japanese punctiation', () => {
    expect(checkFn('a！1')).toBeTruthy();
  });

  test('works with easter egg', () => {
    expect(checkFn('Naruto')).toBeTruthy();
  });
});
