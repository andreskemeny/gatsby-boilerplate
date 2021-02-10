import { Redirect, Router } from "@reach/router";
import React from "react";

import PrivateRoute from "../components/Navigation/PrivateRoute";

import SubPageRouter from "../components/PageExample/SubPageRouter";

const App = () => {
  return (
    <>
      <Router basepath="/app">  
        <PrivateRoute path="/finances/*" component={SubPageRouter} />
        <Redirect from="*" to="/" />
      </Router>
    </>
  )
}

export default App;