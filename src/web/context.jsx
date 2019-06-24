import React from 'react';
import { node } from 'prop-types';
import { login } from './models';
import useModel from './useModel';

const StoreContext = React.createContext(null);

const ContextProvider = ({ children }) => (
  <StoreContext.Provider value={{
    login: useModel(login),
  }}
  >
    {children}
  </StoreContext.Provider>
);

ContextProvider.propTypes = {
  children: node,
};

ContextProvider.defaultProps = {
  children: null,
};

export { StoreContext, ContextProvider };
