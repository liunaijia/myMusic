import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { StoreContext } from './context';
import { EmailInput, PasswordInput, Form } from './components';
import useForm from './useForm';

function Login() {
  const { user } = useContext(StoreContext);
  if (user.selectors.isLoggedIn()) {
    return (<Redirect to="/" />);
  }

  const [formValue, handleFormChange] = useForm({ email: 'me@gmail.com' });

  async function login() {
    await user.dispatch.login(formValue.email, formValue.password);
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
