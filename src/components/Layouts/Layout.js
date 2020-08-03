import React from "react";
import { ThemeProvider } from "styled-components";

// styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/Globalstyles";

// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery";

export default function Layout({ children }) {
	const data = useMetaDataQuery();
	console.log(data);

	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			layout styled-components
			{children}
		</ThemeProvider>
	);
}
