import { useReducer } from 'react';

function useModel(model) {
  const [reducerState, dispatch] = useReducer((state, action) => {
    // it gets called twiced at the first time, because it returns a new function
    // console.log('useReducer');
    if (model.reducers.hasOwnProperty(action.type)) {
      return model.reducers[action.type](state, action.payload);
    }
    return state;
  }, model.state);

  const mapReducers = Object.entries(model.reducers)
    .reduce((memo, [reducerName]) => Object.assign(memo, {
      [reducerName]:
       payload => dispatch({ type: reducerName, payload }),
    }), {});

  const mapEffects = Object.entries(model.effects(dispatch))
    .reduce((memo, [effectName, effectHandler]) => Object.assign(memo, {
      [effectName]: effectHandler,
    }), {});

  return [
    reducerState,

    // extend dispatch function
    Object.assign(dispatch, mapReducers, mapEffects),

  ];
}

export default useModel;
