import React from "react";
import Theme from "./src/components/Theme";

// Create a component here to then hold <Theme>, use this component
// to set last paths and check for auth sessions, etc.

export const wrapRootElement = ({ element, props }) => {
	return <Theme {...props}>{element}</Theme>;
};

export const wrapPageElement = ({ element, props }) => {
	return <Theme {...props}>{element}</Theme>;
};
