import RuleType from '../RuleType';

const useNotTwoIdenticalCharsRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => {
    const splitedText = text.split('');
    return splitedText.every(
      (e, i) => new RegExp('[^\\p{L}]', 'u').test(e) || e !== splitedText[i - 1]
    );
  },
  title: 'Must not contains two contiguous identical letters',
});

export default useNotTwoIdenticalCharsRule;
