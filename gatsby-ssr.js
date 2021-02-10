import React from "react";
import Theme from "./src/components/Theme";

export const wrapRootElement = ({ element, props }) => {
	return <Theme {...props}>{element}</Theme>;
};

export const wrapPageElement = ({ element, props }) => {
	return <Theme {...props}>{element}</Theme>;
};
