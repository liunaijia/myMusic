import React from 'react';
import { node } from 'prop-types';
import { login, user, playlist } from './models';
import useModel from './useModel';

const StoreContext = React.createContext(null);

const ContextProvider = ({ children }) => (
  <StoreContext.Provider value={{
    login: useModel(login),
    user: useModel(user),
    playlist: useModel(playlist),
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
