import React from 'react';
import { node } from 'prop-types';
import count from './models/count';
import useModel from './useModel';

const StoreContext = React.createContext(null);

const ContextProvider = ({ children }) => (
  <StoreContext.Provider value={{ count: useModel(count) }}>
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
