import { useState, useEffect } from "react";

const useDarkMode = () => {
	// State for controlling the dark mode
	const [isDarkMode, setIsDarkMode] = useState(
		// Get the current theme from local storage
		() => localStorage.getItem("theme") === "dark"
	);

	// Side effects for setting up the theme on html on component did mount state
	useEffect(() => {
		isDarkMode && document.querySelector("html").classList.add("dark");
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(() => !isDarkMode);
		document.querySelector("html").classList.toggle("dark");
		localStorage.setItem("theme", isDarkMode ? "light" : "dark");
	};

	// Return an object of boolean and function for usage
	return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
