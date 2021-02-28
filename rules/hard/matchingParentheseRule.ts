import useParentheseManyTypesRule from '../easy/parentheseManyTypesRule';
import useParentheseNonContiguousRule from '../easy/parentheseNonContiguousRule';
import RuleType from '../RuleType';

const useMatchingParentheseRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => {
    const splitedText = text.split('');
    const resArray = splitedText.reduce<Array<string>>((res, e) => {
      if (e === '(' || e === '[' || e === '{') {
        return [...res, e];
      }

      if (
        (e === ')' && res.slice(-1)[0] === '(') ||
        (e === '}' && res.slice(-1)[0] === '{') ||
        (e === ']' && res.slice(-1)[0] === '[')
      ) {
        return res.slice(0, -1);
      }
      if (e === ')' || e === '}' || e === ']') {
        return [...res, e];
      }
      return res;
    }, []);
    return resArray.length === 0;
  },
  title: 'Need to have balanced }, ] and )',
  id: 'matching-para',
  always: [useParentheseManyTypesRule, useParentheseNonContiguousRule],
});

export default useMatchingParentheseRule;
