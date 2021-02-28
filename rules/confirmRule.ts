import RuleType from './RuleType';

const useConfirmRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string, confirm?: string) => text === confirm,
  title: 'Your password must match the confirm password',
});

export default useConfirmRule;
