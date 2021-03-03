/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';

/*
This state machine is for now very simple. If needed:
XState: https://github.com/davidkpiano/xstate with hooks seems to be a nice solution.
*/

type StateType = 'start' | 'end' | 'game';

type ContextType = {
  state: StateType;
  setState: (newState: StateType) => void;
};

const defaultContext: ContextType = {
  state: 'start',
  setState: () => {
    throw new Error('SHOULD BE OVERRIDEN');
  },
};

const StateContext = createContext(defaultContext);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<StateType>('start');

  const context: ContextType = { setState, state };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};

export default StateContext;
