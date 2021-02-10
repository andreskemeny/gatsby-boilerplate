import React from "react";

// @ts-nocheck
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add authentication check here 

  return <Component {...rest} />
}

export default PrivateRoute;