import { createGlobalStyle } from "styled-components";
import Inter from "../fonts/Inter-VariableFont_slnt,wght.ttf";

export const colors = {
	white: "#fff",
	darkgrey: "#1a1c20",
	deepDarkGrey: "#404040",
	blueShade1: "#215973",
	blueShade2: "#6fadc6",
	blueShade3: "#d1e1e9",
};

// Define what props.theme will look like
export const darkTheme = {
	colors: {
		background: colors.darkgrey,
		menuBackground: colors.blueShade1,
		textDark: colors.blueShade3,
		textMain: colors.blueShade2,
		textSecondary: colors.blueShade3,
	},
};

export const lightTheme = {
	colors: {
		background: colors.white,
		menuBackground: colors.blueShade3,
		textDark: colors.blueShade1,
		textMain: colors.blueShade2,
		textSecondary: colors.deepDarkGrey,
	},
};

const GlobalStyles = createGlobalStyle`

*,*::before,*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 62.5%;
	font-family: 'Inter', sans-serif;
	box-sizing: border-box;
}
:root {
	--site-max-width: 120rem;
}

@font-face {
	font-family: 'inter' sans-serif;
	src:url(${Inter});
	font-weight: 300;
}

body {
	${"" /* background: ${props => props.theme.colors.background}; */}
	${"" /* color: ${props => props.theme.colors.textSecondary}; */}
	font-family: 'inter' sans-serif;
	padding: 0 2rem 8rem 2rem;
	transition: all .5s ease;
}

main {
	max-width: 96rem;
	margin: 4rem auto;
}

h1,h2,h3,h4,h5,h6 {
	${"" /* color: ${props => props.theme.colors.textMain}; */}
	font-family:"inter", sans-serif;
	transition: all .5s ease;
	letter-spacing: 1px;
}

p {
	font-size: .9rem;
	line-height:1.2;

	@media screen and (min-width: 47.813em) {
		font-size:2rem;
		line-height: 1.5rem;
	}
}

h2 {
	font-size: 1rem;
	letter-spacing:1.8px;
	text-transform: uppercase;

	@media screen and (min-width: 47.813em) {
		font-size:1.5rem;
	}
}
h3 {
	font-size: 0.8rem;
	letter-spacing:1.5px;
	margin:3rem 0 -.15rem 0;

	@media screen and (min-width: 47.813em) {
		font-size:1.2rem;
	}
}

a {
	text-decoration: none;
}
`;

export default GlobalStyles;
