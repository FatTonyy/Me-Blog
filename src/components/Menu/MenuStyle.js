import styled from "styled-components";

export const Nav = styled.ul`
	display: none;
	list-style-type: none;
	padding: 0;
	font-size: 1.2rem;

	a {
		text-decoration: none;
		color: ${props => props.theme.colors.textDark};
	}

	li {
		display: inline-block;
		margin-right: 20px;
		transition: all 0.5s ease;
		cursor: pointer;

		.active {
			font-weight: 800;
		}

		:last-child {
			margin-right: 0;
		}

		:hover {
			opacity: 0.7;
		}
	}

	@media screen and (min-width: 48em) {
		display: block;
	}
`;
