/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			red: {
				100: "#ff0000",
				200: "#110000",
			},
			green: {
				100: "#002200",
				200: "#007700",
				300: "#00ff00",
				400: "#11a500",
			},
		},

	},
	fontFamily: {
		teko: ["Teko", "serif"]
	},

	fontSize: {
		small: "10px",
		med: "15px",
		lrg: "30px",
	},
}

	
	extend: {}
	plugins: []