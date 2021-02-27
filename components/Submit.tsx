import React from 'react';

const Submit = ({ valid }: { valid: boolean }) => {
  const color = valid ? 'bg-green-300 hover:bg-green-400' : 'bg-gray-300';
  const cursor = valid ? '' : 'cursor-not-allowed';
  return (
    <div className="mt-5">
      <div className="flex justify-center w-full">
        <button
          type="submit"
          disabled={!valid}
          className={`w-full justify-center flex items-center px-4 py-2 ${color} ${cursor} cu border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600`}
        >
          {valid ? 'Submit' : 'Constraints not respected 😱'}
        </button>
      </div>
    </div>
  );
};

export default Submit;
