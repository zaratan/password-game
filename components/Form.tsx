/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactNode, useContext, useState } from 'react';
import RulesContext from '../contexts/RulesContext';
import ScoreContext from '../contexts/ScoreContext';
import TimeContext from '../contexts/TimeContext';
import PasswordInput from './PasswordInput';
import Submit from './Submit';

// Time context change VERY often so we can't re-render the whole form
const FromWrap = ({
  valid,
  children,
  changeConfirm,
  changePassword,
}: {
  valid: boolean;
  changePassword: (text: string) => void;
  changeConfirm: (text: string) => void;
  children: ReactNode;
}) => {
  const { registerNewTime, setConfirmationVisible } = useContext(ScoreContext);
  const { time, resetTime } = useContext(TimeContext);
  const { resetRules } = useContext(RulesContext);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (valid) {
      registerNewTime(time);
      resetTime();
      changePassword('');
      changeConfirm('');
      setConfirmationVisible(false);
      resetRules();
    }
  };
  return <form onSubmit={submit}>{children}</form>;
};

const Form = () => {
  const [textValue, setTextValue] = useState('');
  const [valid, setValid] = useState(false);

  const {
    passwordVisible,
    confirmationVisible,
    toggleConfirmationVisible,
    togglePasswordVisible,
  } = useContext(ScoreContext);
  const {
    checkNewPassword,
    passwordConfirmText,
    setPasswordConfirmText,
    confirmable,
  } = useContext(RulesContext);

  const changePassword = (newValue) => {
    setTextValue(newValue);
    setValid(checkNewPassword(newValue, passwordConfirmText));
  };

  const changeConfirm = (newValue) => {
    setPasswordConfirmText(newValue);
    setValid(checkNewPassword(textValue, newValue));
  };

  return (
    <FromWrap
      valid={valid}
      changeConfirm={changeConfirm}
      changePassword={changePassword}
    >
      {/* Prevents browser autofill */}
      <input type="text" className="w-0 h-0 absolute left-0 top-0 invisible" />
      <input
        type="password"
        className="w-0 h-0 absolute left-0 top-0 invisible"
      />
      <PasswordInput
        changeValue={changePassword}
        label="Password"
        name="main"
        textVisible={passwordVisible}
        value={textValue}
        toggleTextVisibility={togglePasswordVisible}
        visibleMultiplicator={4}
      />
      {confirmable ? (
        <PasswordInput
          changeValue={changeConfirm}
          label="Confirmation"
          name="confirm"
          textVisible={confirmationVisible}
          value={passwordConfirmText}
          toggleTextVisibility={toggleConfirmationVisible}
          visibleMultiplicator={2}
        />
      ) : null}
      <Submit valid={valid} />
    </FromWrap>
  );
};

export default Form;
