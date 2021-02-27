import { useState } from 'react';
import RuleType from './RuleType';

const useConfirmRule: (confirmPassword: string) => RuleType = (
  confirmPassword
) => ({
  valid: false,
  checkFn: (text: string, confirm?: string) =>
    text === (confirm || confirmPassword),
  title: 'Your password must match the confirm password',
});

export default useConfirmRule;
