import React from 'react';
import { node } from 'prop-types';
import * as models from './models';
import useModel from './useModel';

const StoreContext = React.createContext(null);

// initialise root state
const rootState = Object.entries(models).reduce(
  (memo, [modelName, model]) => Object.assign(memo, { [modelName]: model.initState }),
  {},
);

const ContextProvider = ({ children }) => {
  console.log(rootState);
  const statefulModels = Object.entries(models)
    .reduce(
      (memo, [modelName, model]) => Object.assign(memo, { [modelName]: useModel(model, rootState, modelName) }),
      {},
    );
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
