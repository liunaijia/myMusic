import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyle from '../src/web/App.css';

addDecorator(function(decorator) {
  return (
    <>
      <GlobalStyle />
      {decorator()}
    </>
  );
});

configure(require.context('../src/web', true, /\.stories\.jsx$/), module);
