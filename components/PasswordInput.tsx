import React from 'react';

const PasswordInput = ({
  name,
  label,
  textVisible,
  toggleTextVisibility,
  value,
  changeValue,
}: {
  name: string;
  label: string;
  textVisible: boolean;
  toggleTextVisibility: () => void;
  value: string;
  changeValue: (newValue: string) => void;
}) => (
  <div className="grid grid-cols-last-grow gap-2 mb-2">
    <label
      className="pb-1 md:pb-0 md:pr-4 my-auto"
      htmlFor={`password-${name}`}
    >
      {label}
    </label>
    <div className="flex justify-between">
      <input
        type={textVisible ? 'text' : 'password'}
        value={value}
        onChange={(e) => changeValue(e.currentTarget.value)}
        name={`password-${name}`}
        id={`password-${name}`}
        className="flex-grow mr-3 p-2 shadow-sm rounded border-solid border-gray-300 border"
      />
      <button onClick={toggleTextVisibility} type="button">
        {textVisible ? 'X' : 'O'}
      </button>
    </div>
  </div>
);

export default PasswordInput;
