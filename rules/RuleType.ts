type RuleType = {
  valid: boolean;
  checkFn: (password: string, confirm?: string) => boolean;
  title: string;
  id: string;
  // Array of forbidden rule ids
  never?: Array<string>;
  // Array of uninit rules that are needed
  always?: Array<() => RuleType>;
};

export default RuleType;
