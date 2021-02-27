type RuleType = {
  valid: boolean;
  checkFn: (password: string, confirm?: string) => boolean;
  title: string;
};

export default RuleType;
