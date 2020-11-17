import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth";

function VerifyAdmiRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.ruc === "20603261900" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/iniciarSesionAdmi" />
        )
      }
    />
  );
}

export default VerifyAdmiRoute;
