import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { StoreContext } from './context';
import { EmailInput, PasswordInput, Form } from './components';
import useForm from './useForm';

function Login() {
  const { login } = useContext(StoreContext);
  const [state, setState] = useState('show_form');

  useEffect(() => {
    (async () => {
      if (login.selectors.hasSessionInCookie()) {
        try {
          setState('fetching_status');
          await login.dispatch.status();
        } catch (_) {
          // fail to fetch login status, need to login
          setState('show_form');
        }
      }
    })();
  }, []);

  const [formValue, handleFormChange] = useForm();

  async function handleSubmit() {
    await login.dispatch.login(formValue.email, formValue.password);
  }

  // redirect to home page after log in
  if (login.selectors.isLoggedIn()) {
    return (<Redirect to="/" />);
  }

  if (state === 'fetching_status') {
    return 'Fetch log in status...';
  }

  return (
    <>
      <h1>Log In</h1>
      <Form value={formValue} onChange={handleFormChange}>
        <EmailInput name="email" />
        <PasswordInput name="password" />
        <input type="submit" onClick={handleSubmit} />
      </Form>
    </>
  );
}

export default Login;
