import RuleType from '../RuleType';

const FirstFourCreditRegex = /(4\d{3})|((5[1-5]\d{2})|(222[1-9])|(22[3-9]\d)|(2[3-6]\d{2})|(27[01]\d)|2720)|(3[47]\d{2})|(3((0[0-5])|([68]\d))\d)|(2131|1800|35\d{2})|(6011|(65\d{2}))/;

const useFirstFourCreditCardRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => FirstFourCreditRegex.test(text),
  title: 'Must enter the first 4 digits of your credit card',
  id: 'first-four-credit',
});

export default useFirstFourCreditCardRule;
