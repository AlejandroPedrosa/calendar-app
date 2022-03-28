import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ component: Component, isLogggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogggedIn === true ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
