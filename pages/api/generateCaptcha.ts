import { NextApiRequest, NextApiResponse } from 'next';
import svgCaptcha from 'svg-captcha';

const generateCaptcha = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let newCaptcha;
    if (req.query.math) {
      newCaptcha = svgCaptcha.createMathExpr({
        mathMin: 1,
        mathMax: 100,
        mathOperator: '+/-',
        color: true,
        background: '#cc9966',
        noise: 2,
      });
    } else {
      newCaptcha = svgCaptcha.create({
        size: 6,
        noise: 2,
        color: true,
        background: '#cc9966',
        ignoreChars: '0o1i',
      });
    }
    res.status(200).json(newCaptcha);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
};

export default generateCaptcha;
