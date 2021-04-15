import React, { useState, useRef } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AuthApi from '../auth/AuthApi';
import helper from '../auth/helper';

const SignIn = ({ location: { state } }) => {

  const { from } = state || {
    from: {
      pathname: '/',
    },
  };

  const form = useRef(null);
  const authApi = new AuthApi();
  const [values, setValues] = useState({});

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const user = {
      password: formData.get('password'),
      email: formData.get('email'),
    };

    console.log(user);

    authApi.signIn(user).then((data) => {
      console.log(data);
      if (data.error || data === undefined) {
        setValues({ user, error: data.error });
      } else {
        helper().authenticate(data, () => {
          setValues({ user, error: '', redirect: true });
        });
      }
    });
  };

  if (values.redirect) {
    return (<Redirect to={from} />);
  }

  return (
    <>
      <div className='signup' onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <form ref={form}>
          <input type='text' name='email' placeholder='email' />
          <input type='text' name='password' placeholder='password' />
          <button className='button' type='button' onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
