import React from "react";
import { Link } from "gatsby";

// components
import BGImage from "../BGImage/BGImage";
//hooks
import { useHeroQuery } from "hooks/useHeroQuery";
//styles

export default function Hero() {
	const { heroImage, heroImageText, heroImageBtnText, heroImageBtnLink } = useHeroQuery();
	console.log(heroImage);
	return (
		<div>
			<BGImage title="heroImage" fluid={heroImage.childImageSharp.fluid}>
				<div>
					<h2>{heroImageText}</h2>
					<Link to={heroImageBtnLink}>
						<button>{heroImageBtnText}</button>
					</Link>
				</div>
			</BGImage>
		</div>
	);
}
