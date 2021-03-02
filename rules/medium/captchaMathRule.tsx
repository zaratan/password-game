import RuleType from '../RuleType';

const useCaptchaMathRule: () => Promise<RuleType> = async () => {
  const result = await fetch('/api/generateCaptcha?math=true');
  const newCaptcha = await result.json();

  return {
    valid: false,
    checkFn: (text: string) => text.includes(newCaptcha.text),
    title: 'Must contain the result of the equation',
    id: 'math-captcha',
    // eslint-disable-next-line react/no-danger
    component: <p dangerouslySetInnerHTML={{ __html: newCaptcha.data }} />,
  };
};

export default useCaptchaMathRule;
