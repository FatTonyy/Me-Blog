import React, { useState } from "react";
import { Link } from "gatsby";

// component
import Menu from "../Menu/Menu";
import Hamburger from "../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";
//hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery";

// styles
import { Wrapper, Logo } from "./HeaderStyles";

export default function Header({ siteTitle = `` }) {
	const siteConfig = useSiteConfigQuery();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Wrapper>
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
			<Menu items={siteConfig.menu} />
			<Link to="/">
				<Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
			</Link>
		</Wrapper>
	);
}
