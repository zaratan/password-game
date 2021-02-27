/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import RulesContext from '../contexts/RulesContext';

const Form = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [confirmTextVisible, setConfirmTextVisible] = useState(false);
  const {
    checkNewPassword,
    passwordConfirmText,
    setPasswordConfirmText,
    confirmable,
  } = useContext(RulesContext);

  const changePassword = (e) => {
    setTextValue(e.currentTarget.value);
    checkNewPassword(e.currentTarget.value);
  };

  const changeConfirm = (e) => {
    setPasswordConfirmText(e.currentTarget.value);
    checkNewPassword(textValue, e.currentTarget.value);
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Password
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type={textVisible ? 'text' : 'password'}
                  value={textValue}
                  onChange={changePassword}
                  name="password"
                  id="password"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
                <button
                  onClick={() => setTextVisible(!textVisible)}
                  type="button"
                >
                  O
                </button>
              </div>
            </div>
            {confirmable ? (
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="confirm"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Confirmation
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type={confirmTextVisible ? 'text' : 'password'}
                    name="confirm"
                    id="confirm"
                    value={passwordConfirmText}
                    onChange={changeConfirm}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />

                  <button
                    onClick={() => setConfirmTextVisible(!confirmTextVisible)}
                    type="button"
                  >
                    O
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-start">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Try
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
