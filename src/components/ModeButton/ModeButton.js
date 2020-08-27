import React from "react";

// img
import DayIcon from "../../images/daymode.svg";
import NightIcon from "../../images/nightmode.svg";

// styles
import { ImgButton } from "./ModeButtonStyles";

export default function ModeButton({ darkMode, setDarkMode }) {
	return (
		<ImgButton
			src={darkMode ? NightIcon : DayIcon}
			alt="mode"
			onClick={() => setDarkMode(prev => !prev)}
		/>
	);
}
