import React from 'react';
import Input from './Input';

function EmailInput(props) {
  return (
    <Input type="email" label="Email" autoComplete="email" {...props} />
  );
}

export default EmailInput;
