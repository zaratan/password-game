import useNumberMustEndByRule from '../../../rules/backward/numberMustEndByRule';

const { checkFn } = useNumberMustEndByRule();

describe('All numbers must end by 0 rule', () => {
  test('works with one number', () => {
    expect(checkFn('aaa120aaa')).toBeTruthy();
    expect(checkFn('aaa120')).toBeTruthy();
    expect(checkFn('120aaa')).toBeTruthy();
  });

  test('fails with one number', () => {
    expect(checkFn('aaaa12aaaa')).toBeFalsy();
  });

  test('fails with multiple number', () => {
    expect(checkFn('aaaa120aaaa12')).toBeFalsy();
    expect(checkFn('aaaa120aa12aa')).toBeFalsy();
    expect(checkFn('aa112aa120aaaa')).toBeFalsy();
    expect(checkFn('1aaaa120aaaa')).toBeFalsy();
  });

  test('work with multiple number', () => {
    expect(checkFn('aaa120a30aa')).toBeTruthy();
  });
});
