import React, { useEffect, useState } from 'react';
import { bool, func } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { EmailInput, PasswordInput, Form } from './components';
import useForm from './useForm';

function Login({ isLoggedIn, status, login }) {
  const [state, setState] = useState('show_form');

  useEffect(() => {
    (async () => {
      if (document.cookie) {
        try {
          setState('fetching_status');
          await status();
        } catch (_) {
        // fail to fetch login status, need to login
          setState('show_form');
        }
      }
    })();
  }, []);

  const [formValue, handleFormChange] = useForm();

  async function handleSubmit() {
    await login(formValue);
  }

  // redirect to home page after log in
  if (isLoggedIn) {
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

Login.propTypes = {
  isLoggedIn: bool,
  status: func,
  login: func,
};

Login.defaultProps = {
  isLoggedIn: false,
  status: null,
  login: null,
};

const mapState = state => ({
  isLoggedIn: !!state.login.profile,
});

const mapDispatch = ({ login: { status, login } }) => ({
  status,
  login,
});

export default connect(mapState, mapDispatch)(Login);
