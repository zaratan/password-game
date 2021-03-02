import RuleType from '../RuleType';

const useNumberPlanetRule: () => RuleType = () => ({
  valid: false,
  checkFn: (text: string) => text.includes('8'),
  title:
    'Must contain the number of planets in the solar system (including Pluto)',
  id: 'solar-planets',
});

export default useNumberPlanetRule;
