import React from "react";
// style
import { HamburgerIcon } from "./HamburgerStyle";
export default function Hamburger({ menuOpen, setMenuOpen }) {
	return (
		<HamburgerIcon role="button" menuOpen={menuOpen} onClick={() => setMenuOpen(prev => !prev)}>
			<div />
		</HamburgerIcon>
	);
}
