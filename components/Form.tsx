/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import RulesContext from '../contexts/RulesContext';
import PasswordInput from './PasswordInput';
import Submit from './Submit';

const Form = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [confirmTextVisible, setConfirmTextVisible] = useState(false);
  const [valid, setValid] = useState(false);
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
    <form className="">
      <PasswordInput
        changeValue={changePassword}
        label="Password"
        name="main"
        textVisible={textVisible}
        value={textValue}
        toggleTextVisibility={() => setTextVisible(!textVisible)}
      />
      {confirmable ? (
        <PasswordInput
          changeValue={changeConfirm}
          label="Confirmation"
          name="confirm"
          textVisible={confirmTextVisible}
          value={passwordConfirmText}
          toggleTextVisibility={() =>
            setConfirmTextVisible(!confirmTextVisible)
          }
        />
      ) : null}
      <Submit valid={valid} />
    </form>
  );
};

export default Form;
