//@ts-nocheck
import React from "react";
import { Router } from "@reach/router";

import Page from "./SubPageExample";

const SubPageRouter = () => {
  return (
    <>
      <Router>
        <Page path="/page" />
      </Router>
    </>
  );
};

export default SubPageRouter;
