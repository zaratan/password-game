import RuleType from '../RuleType';

const useCaptchaRule: () => Promise<RuleType> = async () => {
  const result = await fetch('/api/generateCaptcha');
  const newCaptcha = await result.json();

  return {
    valid: false,
    checkFn: (text: string) => text.includes(newCaptcha.text),
    title: 'Must contain the Captcha value',
    id: 'captcha',
    // eslint-disable-next-line react/no-danger
    component: <p dangerouslySetInnerHTML={{ __html: newCaptcha.data }} />,
  };
};

export default useCaptchaRule;
