import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import ReactDOM from "react-dom";
import useDarkMode from "../../hooks/useDarkMode";

const Toggle = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return ReactDOM.createPortal(
		<div
			className="fixed z-30 flex right-[8px] bottom-[8px] items-center space-x-3 dark:text-white bottom-"
			onClick={toggleDarkMode}
		>
			<p>{isDarkMode ? "Light" : "Dark"}</p>
			{isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
		</div>,
		document.querySelector("#root")
	);
};

export default Toggle;
