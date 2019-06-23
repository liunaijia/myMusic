import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { StoreContext } from './context';
import { EmailInput, PasswordInput, Form } from './components';

function Login() {
  const { user } = useContext(StoreContext);
  if (user.selectors.isLoggedIn()) {
    return (<Redirect to="/" />);
  }

  const [state, setState] = useState({});

  function handleChange(field) {
    return (event) => {
      // it sets everything which is wrong
      setState({ [field]: event.target.value });
    };
  }

  function login() {
    console.log('login', state);
    // user.dispatch.login();
  }

  return (
    <>
      <h1>Log In</h1>
      <Form initialValue={{ email: 'me@gmail.com' }}>
        <EmailInput name="email" />
        <PasswordInput name="password" />
      </Form>
      <input type="submit" onClick={login} />
    </>
  );
}

export default Login;
