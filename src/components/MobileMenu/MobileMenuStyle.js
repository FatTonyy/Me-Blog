import styled, { createGlobalStyle } from "styled-components";

export const OverrideGlobalStyle = createGlobalStyle`
body {
	overflow : ${props => (props.menuOpen ? "hidden" : "auto")}
}
`;

export const Wrapper = styled.div`
	display: block;
	position: fixed;
	left: ${props => (props.menuOpen ? "0px" : "-32rem")};
	width: 32rem;
	height: 100%;
	background: ${props => props.theme.colors.menuBackground};
	top: 0;
	padding: 0 0 0 2rem;
	transition: all 0.3s ease;
	z-index: 10;
	box-shadow: 0.2rem 0 1rem 0 rgba(0, 0, 0, 0.3);
	box-sizing: border-box;

	@media screen and (min-width: 48em) {
		display: none;
	}
`;

export const Nav = styled.ul`
	position: absolute;
	width: 100%;
	top: 100px;
	list-style-type: none;
	padding: 0;
	font-family: "Inter", sans-serif;
	font-size: 1.2rem;

	a {
		text-decoration: none;
		color: ${props => props.theme.colors.textDark};
	}

	li {
		transition: all 0.5s ease;
		cursor: pointer;
		margin: 1rem 0;

		.active {
			font-weight: 800;
		}

		:hover {
			opacity: 0.7;
		}
	}
`;
