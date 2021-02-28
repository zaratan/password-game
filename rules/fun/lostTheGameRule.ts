import RuleType from '../RuleType';

const useLostTheGameRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => /((J'ai\s*)?perdu)|((I\s*)?lost)/i.test(text),
  title: 'You just lost "The Game"',
  id: 'lost-the-game',
});

export default useLostTheGameRule;
