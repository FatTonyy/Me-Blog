import React from "react";
import { Link } from "gatsby";

//hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery";

export default function Header({ siteTitle = `` }) {
	const siteConfig = useSiteConfigQuery();

	return (
		<div>
			<Link to="/">
				<img src={siteConfig.logo.publicURL} alt={siteTitle} />
			</Link>
		</div>
	);
}
