import { useState } from 'react';
import RuleType from './RuleType';

const useLengthRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.length >= 6,
  title: 'Your password must have at least 6 characters',
});

export default useLengthRule;
