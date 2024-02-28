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
				black: "var(--black)",
				primary: "var(--primary)",
				akarmula: "var(--akarmula)",
				sand: "var(--sand)",
				softgrey: "var(--softgrey)",
				lightgrey: "var(--lightgrey)",
				grey: "var(--grey)",
				darkgrey: "var(--darkgrey)",
				bgbase: "var(--bgbase)",
			},
			padding: {
				// :sm //
				sectionpxsm: "var(--sectionpxsm)",
				// :lg //
				sectionpxlg: "var(--sectionpxlg)",
			},
			backgroundImage: {
				fixitmockup: "url('../assets/images/fixitmockup.png')",
				// Gradient //
				primarygradient: "var(--primarygradient)",
				textgradient: "var(--textgradient)",
			},
		},
	},
	plugins: [],
};
export default config;
