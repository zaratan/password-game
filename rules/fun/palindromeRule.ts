import { reverse } from 'lodash';
import RuleType from '../RuleType';

const usePalindromeRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => reverse(text) === text,
  title: 'Must be a palindrome',
});

export default usePalindromeRule;
