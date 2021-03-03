import React, { useEffect, useRef } from 'react';

const EyeOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeClosed = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    />
  </svg>
);

const Timer = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const PasswordInput = ({
  name,
  label,
  textVisible,
  toggleTextVisibility,
  value,
  changeValue,
  visibleMultiplicator,
  focusOnLoad,
  placeholder,
}: {
  name: string;
  label: string;
  textVisible: boolean;
  toggleTextVisibility: () => void;
  value: string;
  changeValue: (newValue: string) => void;
  visibleMultiplicator: number;
  focusOnLoad?: boolean;
  placeholder?: string;
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!focusOnLoad) return;
    inputRef.current.focus();
  }, [focusOnLoad]);

  return (
    <div className="grid grid-cols-last-grow gap-2 mb-2">
      <label
        className="pb-1 md:pb-0 md:pr-4 my-auto"
        htmlFor={`password-${name}`}
      >
        {label}
      </label>
      <div className="flex justify-between relative">
        {/* data-lpignore prevents lastpass icon */}
        <input
          type={textVisible ? 'text' : 'password'}
          value={value}
          onChange={(e) => changeValue(e.currentTarget.value)}
          // onPaste={(e) => e.preventDefault()}
          name={`password-${name}`}
          id={`password-${name}`}
          data-lpignore="true"
          ref={inputRef}
          placeholder={placeholder}
          className="flex-grow p-2 mr-2 shadow-sm rounded border-solid border-gray-300 border"
        />
        <button
          onClick={toggleTextVisibility}
          type="button"
          className="absolute flex justify-between items-center w-6 h-full right-14 focus:outline-none"
          tabIndex={-1}
        >
          {textVisible ? <EyeClosed /> : <EyeOpen />}
        </button>
        <span
          className={`${
            textVisible ? 'text-red-600' : ''
          } flex items-center justify-between w-11`}
        >
          <Timer />
          <span>{`x${textVisible ? visibleMultiplicator : 1}`}</span>
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
