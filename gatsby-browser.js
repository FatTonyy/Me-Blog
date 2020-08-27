/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import ModeProvider from "./src/components/context/ModeProvider";

export const wrapRootElement = ({ element }) => {
	return <ModeProvider>{element}</ModeProvider>;
};
