import React from 'react';
import { node } from 'prop-types';
import * as models from './models';
import useModel from './useModel';

const StoreContext = React.createContext(null);

const ContextProvider = ({ children }) => {
  const statefulModels = Object.entries(models)
    .reduce((memo, [modelName, model]) => Object.assign(memo, { [modelName]: useModel(model) }), {});
  return (
    <StoreContext.Provider value={statefulModels}>
      {children}
    </StoreContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: node,
};

ContextProvider.defaultProps = {
  children: null,
};

export { StoreContext, ContextProvider };
