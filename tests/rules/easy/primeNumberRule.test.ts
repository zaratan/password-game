import usePrimeNumberRule from '../../../rules/easy/primeNumberRule';

const { checkFn } = usePrimeNumberRule();

describe('Must have a 2 digit prime number', () => {
  test('works with only a prime', () => {
    expect(checkFn('31')).toBeTruthy();
  });

  test('fails with a non-prime', () => {
    expect(checkFn('66')).toBeFalsy();
  });

  test('works with a prime in the middle of the word', () => {
    expect(checkFn('aaa41aaaa')).toBeTruthy();
  });
});
