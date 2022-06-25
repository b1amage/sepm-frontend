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
				white: "#e6f1ff",
				navy: {
					200: "#233554",
					400: "#112240",
					600: "#0a192f",
					800: "#020c1b",
				},
				green: "#64ffda",
				greenTin: "rgba(100,255,218,0.1)",
				slate: {
					200: "#ccd6f6",
					400: "#a8b2d1",
					600: "#8892b0",
					800: "#495670",
				},
			},
		},

		fontFamily: {
			"sans-serif": ["Inter", "sans-serif"],
			monospace: ["Fira Code", "monospace"],
		},

		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
	},
	plugins: [require("daisyui")],
};
