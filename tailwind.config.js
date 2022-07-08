/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",

	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	daisyui: {
		themes: [],
	},

	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				gray: "#F5F5F5",
				white: "#fff",
				red: "#BB2400",
				darkRed: "#9D1E00",
				black: "#242424",
			},
		},

		fontFamily: {
			sans: ["Josefin Sans", "sans-serif"],
		},

		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
	},
	plugins: [require("daisyui")],
};
