import React from "react";
import { ThemeProvider } from "styled-components";

// styles
import { GlobalStyles, lightTheme, darkTheme } from "../../styles/Globalstyles";

export default function Layout({ children }) {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			layout styled-components
			{children}
		</ThemeProvider>
	);
}
