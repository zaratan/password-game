import useBackParentheseRule from '../../../rules/backward/backParentheseRule';

const { checkFn } = useBackParentheseRule();

describe('Rule: The 3rd char must be ), ] or }', () => {
  test('fails with default value', () => {
    expect(checkFn('aaaaaa')).toBeFalsy();
  });
  test('fails with short password', () => {
    expect(checkFn('a)')).toBeFalsy();
    expect(checkFn(')')).toBeFalsy();
    expect(checkFn('')).toBeFalsy();
  });
  test('works with )', () => {
    expect(checkFn('aa)aa')).toBeTruthy();
  });
  test('works with }', () => {
    expect(checkFn('aa}aa')).toBeTruthy();
  });
  test('works with ]', () => {
    expect(checkFn('aa]aa')).toBeTruthy();
  });
});
