import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const PrivateRoute = ({ element: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          navigate("/SignIn")
        )
      }
    />
  );
};

export default PrivateRoute;
