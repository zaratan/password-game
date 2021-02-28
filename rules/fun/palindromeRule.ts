import { reverse } from 'lodash';
import RuleType from '../RuleType';

const usePalindromeRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) =>
    reverse(text.split('')).join() === text.split('').join(),
  title: 'Must be a palindrome',
});

export default usePalindromeRule;
