import 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import './init';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
