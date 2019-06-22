import React from 'react';
import { string } from 'prop-types';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
// import GlobalStyle from './App.css';
// import { ContextProvider } from './contexts';

const App = ({ className }) => (
  <h1>Nothing yet.</h1>
);

App.propTypes = {
  className: string,
};

App.defaultProps = {
  className: null,
};

export default hot(styled(App)`
`);
