import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Background //
				primary: "var(--primary)",
				orange: "var(--orange)",
				black: "var(--black)",
				darkgrey: "var(--darkgrey)",
				grey: "var(--grey)",
				softgrey: "var(--softgrey)",
				lightgrey: "var(--lightgrey)",
				smoke: "var(--smoke)",
				sand: "var(--sand)",

				// Hover //
				primaryhover: "var(--primaryhover)",
			},
			padding: {
				// :sm //
				sectionpxsm: "var(--sectionpxsm)",
				// :lg //
				sectionpxlg: "var(--sectionpxlg)",
			},
			animation: {
				marquee: "marquee 30s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX (0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
