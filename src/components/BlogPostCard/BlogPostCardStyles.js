import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
	display: flex;
	min-height: 15rem;
	margin-bottom: 4rem;
`;

export const ImgWrapper = styled.div`
	display: none;
	width: 15rem;
	margin: 0 2rem 0 0;

	img {
		border-radius: 10px;
	}

	@media screen and (min-width: 48em) {
		display: block;
	}
`;

export const TextWrapper = styled.div`
	max-width: 80rem;

	h2 {
		margin: 0;
	}
`;

export const StatWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 2rem 0;
`;

/*#region [main]
With the imported named css from styled-components , you use it when you want to share  styles with other components
 #endregion */

const sharedStyled = css`
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
	font-family: "Inter", sans-serif;
	font-size: 0.8rem;

	img {
		margin: 0 0.5rem 0 0;
	}
`;

export const DateWrapper = styled.div`
	/* using css from sharedStyles */
	${sharedStyled}

	img {
		height: 3.25rem;
		width: 3.25rem;
	}
`;

export const ReadingTimeWrapper = styled.div`
	/* using css from sharedStyles */
	${sharedStyled}
`;
