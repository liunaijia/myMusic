import React from 'react';
import { string } from 'prop-types';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Router from './Router';
import { ContextProvider } from './context';


function App({ className }) {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
}

App.propTypes = {
  className: string,
};

App.defaultProps = {
  className: null,
};

export default hot(styled(App)`
`);
