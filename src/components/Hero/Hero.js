import React from "react";
import { Link } from "gatsby";

// components
import BGImage from "../BGImage/BGImage";
//hooks
import { useHeroQuery } from "hooks/useHeroQuery";

//styles
import { HeroWrapper, TextWrapper } from "./HeroStyle";

export default function Hero() {
	const { heroImage, heroImageText, heroImageBtnText, heroImageBtnLink } = useHeroQuery();

	return (
		<HeroWrapper>
			<BGImage title="heroImage" fluid={heroImage.childImageSharp.fluid}>
				<TextWrapper>
					<h2>{heroImageText}</h2>
					<Link to={heroImageBtnLink}>
						<button>{heroImageBtnText}</button>
					</Link>
				</TextWrapper>
			</BGImage>
		</HeroWrapper>
	);
}
