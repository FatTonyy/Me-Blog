import styled from "styled-components";
import { colors } from "../../styles/Globalstyles";

export const HeroWrapper = styled.div`
	margin: 2rem 0 0 0;
	display: none;

	@media screen and (min-width: 48em) {
		display: block;
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	height: 100%;

	h2 {
		color: ${colors.blueShade1};
		font-size: 1.5rem;
		text-align: center;
		margin: 2rem;

		@media screen and (min-width: 48em) {
			font-size: 3rem;
		}
	}

	button {
		color: ${colors.white};
		font-size: 1rem;
		font-family: "Inter", sans-serif;
		text-transform: uppercase;
		background: transparent;
		border: 0;
		border-bottom: 0.4rem solid ${colors.blueShade1};
		padding: 0.5rem 0;
		transition: all 0.5s ease;

		:hover {
			cursor: pointer;
			opacity: 0.7;
		}
	}
`;
