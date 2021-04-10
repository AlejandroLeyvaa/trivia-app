import React, { useState, useRef } from 'react';
import UsersApi from '../user/UsersApi';

const Signup = () => {
  const form = useRef(null);
  const usersApi = new UsersApi();
  const [values, setValues] = useState({});

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const user = {
      name: formData.get('name'),
      password: formData.get('password'),
      email: formData.get('email'),
    };

    console.log('handleSubmit', user);
    setValues({ user, error: '', open: true });
    // usersApi.createUser(user).then((data) => {
    //   console.log('userData', data);
    //   if (data.error) {
    //     setValues({ user, error: data.error });
    //   } else {
    //     setValues({ user, error: '', open: true });
    //   }
    // });
  };

  console.log(values);

  return (
    <>
      <div className="signup" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <form ref={form}>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="password" placeholder="password" />
          <input type="text" name="email" placeholder="email" />
          <button className="button" type="button" onClick={handleSubmit}>
            Sign up
          </button>
        </form>
        {values.open > 0 && (
          <div className="modal">
            <h2>Hello world</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
