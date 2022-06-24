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
				white: "#fff",
				darkPurple: "#0F103F",
				purple: "#1C1C65",
				lightPurple: "#2F2F8A",
				pink: "#C961DE",
				blue: "#2954A3",
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
