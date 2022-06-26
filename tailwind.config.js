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
				black: {
					400: "#1B1B1B",
					600: "#141414",
					800: "#000",
				},
				white: {
					200: "#fff",
					400: "#F3F3F3",
					800: "#E1E1E1",
				},
			},
		},

		fontFamily: {
			"dm-sans": ["DM Sans", "sans-serif"],
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
