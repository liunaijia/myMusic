import React from 'react';
import { node } from 'prop-types';
import { count, user } from './models';
import useModel from './useModel';

const StoreContext = React.createContext(null);

const ContextProvider = ({ children }) => (
  <StoreContext.Provider value={{
    count: useModel(count),
    user: useModel(user),
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
