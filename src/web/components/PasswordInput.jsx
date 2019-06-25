import React from 'react';
import Input from './Input';

function PasswordInput(props) {
  return (
    <Input type="password" label="Password" autoComplete="current-password" {...props} />
  );
}

export default PasswordInput;
