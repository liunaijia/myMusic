import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';
import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import { Provider } from 'react-redux';
import './init';
import * as models from './models';
import App from './App';

const store = init({
  models,
  plugins: [selectPlugin()],
});

const Root = hot(() => (
  <Provider store={store}>
    <App />
  </Provider>
));

document.addEventListener('DOMContentLoaded', () => {
  render(<Root />, document.getElementById('root'));
});
