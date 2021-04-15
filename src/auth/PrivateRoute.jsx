import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import helper from './helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      helper().isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      ))}

  />
);

export default PrivateRoute;
