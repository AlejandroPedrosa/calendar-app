import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isLogggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
