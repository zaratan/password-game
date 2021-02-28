/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';

type ContextType = {
  passwordVisible: boolean;
  togglePasswordVisible: () => void;
  confirmationVisible: boolean;
  toggleConfirmationVisible: () => void;
};

const defaultContext: ContextType = {
  passwordVisible: false,
  togglePasswordVisible: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
  confirmationVisible: false,
  toggleConfirmationVisible: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
};
const VisibilityContext = createContext(defaultContext);

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmationVisible = () => {
    setConfirmationVisible(!confirmationVisible);
  };

  const context: ContextType = {
    confirmationVisible,
    passwordVisible,
    toggleConfirmationVisible,
    togglePasswordVisible,
  };

  return (
    <VisibilityContext.Provider value={context}>
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityContext;
