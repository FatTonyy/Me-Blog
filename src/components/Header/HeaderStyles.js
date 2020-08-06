import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 96rem;
	height: 7rem;
	margin: 2rem auto;

	@media screen and(min-width: 48em) {
		height: 12rem;
	}
`;

export const Logo = styled.img`
	max-width: 10rem;

	@media screen and (min-width: 48em) {
		max-width: 25rem;
	}
`;
