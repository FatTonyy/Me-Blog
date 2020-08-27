import React, { useState, useContext } from "react";
import { Link } from "gatsby";

// component
import Menu from "../Menu/Menu";
import Hamburger from "../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";
import ModeButton from "../ModeButton/ModeButton";
//hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery";
import { ModeContext } from "../context/ModeProvider";

// styles
import { Wrapper, Logo } from "./HeaderStyles";

export default function Header({ siteTitle = `` }) {
	const siteConfig = useSiteConfigQuery();
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useContext(ModeContext);
	return (
		<Wrapper>
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
			<Menu items={siteConfig.menu} />
			<Link to="/">
				<Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
			</Link>
			<ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
		</Wrapper>
	);
}
