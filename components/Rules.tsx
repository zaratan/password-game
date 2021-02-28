import React, { useContext } from 'react';
import RulesContext from '../contexts/RulesContext';
import RuleType from '../rules/RuleType';

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="text-green-500 w-4 h-4 mr-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Cross = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="text-red-500 w-4 h-4 mr-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Rule = ({ rule }: { rule: RuleType }) => (
  <li className="flex items-center">
    {rule.valid ? <Check /> : <Cross />}
    {rule.title}
  </li>
);

const Rules = () => {
  const { activeRules } = useContext(RulesContext);
  return (
    <ul className="border-t pt-3 mt-3">
      {activeRules.map((rule) => (
        <Rule rule={rule} />
      ))}
    </ul>
  );
};

export default Rules;
