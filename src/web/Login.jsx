import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { StoreContext } from './context';
import { EmailInput, PasswordInput, Form } from './components';

function Login() {
  const { user } = useContext(StoreContext);
  if (user.selectors.isLoggedIn()) {
    return (<Redirect to="/" />);
  }

  const [formValue, setFormValue] = useState({ email: 'me@gmail.com' });

  function handleFormChange(event) {
    setFormValue(event.target.value);
  }

  function login() {
    console.log('login', formValue);
  }


  return (
    <>
      <h1>Log In</h1>
      <Form value={formValue} onChange={handleFormChange}>
        <EmailInput name="email" />
        <PasswordInput name="password" />
      </Form>
      <input type="submit" onClick={login} />
    </>
  );
}

export default Login;
