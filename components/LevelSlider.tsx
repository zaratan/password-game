import React, { useContext } from 'react';
import LevelContext, { Levels, LevelType } from '../contexts/LevelContext';
import {
  generateHandleClick,
  generateHandleKeypress,
} from '../helpers/handlers';

const LevelElement = ({ level }: { level: LevelType }) => {
  const { currentLevel, setCurrentLevel } = useContext(LevelContext);

  const action = () => {
    setCurrentLevel(level.id);
  };
  const clickAction = generateHandleClick(action);
  const keyAction = generateHandleKeypress(action);

  return (
    <li className="flex-row md:flex-col flex w-full items-center space-y-3 md:space-y-1 md:justify-between relative">
      <input
        id="level-{level.id}"
        type="radio"
        name="level-choice"
        className="hidden"
        onChange={() => setCurrentLevel(level.id)}
        checked={currentLevel.id === level.id}
      />
      <span
        className={`${
          currentLevel.id === level.id
            ? 'w-4 h-4 left-1 md:left-auto md:top-1'
            : 'w-0 h-0 left-3 md:left-auto md:top-3'
        } transition-all duration-200 bg-green-400 rounded-full absolute`}
      />
      <span
        className="w-6 h-6 rounded-full bg-gray-200 block  focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={clickAction}
        onKeyPress={keyAction}
        tabIndex={0}
        role="button"
        aria-label={`Select level ${level.name}`}
      />
      <label htmlFor={`level-${level.id}`} className="ml-3 md:ml-0">
        {level.name}
      </label>
    </li>
  );
};

const LevelSlider = () => {
  const { currentLevel } = useContext(LevelContext);

  return (
    <div className="h-80 md:h-40 mb-3">
      <p className=" font-medium pb-2 pt-5 md:text-center md:pb-4">
        Select your level
      </p>
      <ul className="flex flex-col md:flex-row pb-5 relative md:w-3/2 md:-left-1/4">
        {Levels.map((level) => (
          <LevelElement key={level.id} level={level} />
        ))}
      </ul>
      <p className="text-gray-500 text-sm">{currentLevel.description}</p>
    </div>
  );
};

export default LevelSlider;
