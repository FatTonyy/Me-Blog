import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

// styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/Globalstyles";

// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery";
import { ModeContext } from "../context/ModeProvider";

//? Components
import Header from "../Header/Header";

export default function Layout({ children }) {
	const data = useMetaDataQuery();
	const [darkMode] = useContext(ModeContext);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header siteTitle={data.title} />
			{children}
		</ThemeProvider>
	);
}
