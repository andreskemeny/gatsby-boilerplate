import React from "react";
import SEO from "../SEO";

const Page = () => {
  return (
    <React.Fragment>
      <SEO
        title="Page title | Example Site"
        description="Page description"
        image={null} // Image null to keep the default site image (logo.svg)
      />
      <p>Sub Page</p>
    </React.Fragment>
  );
}

export default Page;
