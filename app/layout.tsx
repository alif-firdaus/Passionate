import type { Metadata } from "next";
import { Bricolage_Grotesque, Glegoo } from "next/font/google";
import "./globals.css";

const mainfont = Bricolage_Grotesque({
	subsets: ["latin"],
	variable: "--mainfont",
	display: "swap",
});

const indicator = Glegoo({
	weight: "400",
	subsets: ["latin"],
	variable: "--indicator",
});

export const metadata: Metadata = {
	title: "Passionate",
	description: "Personal Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${mainfont.variable} ${indicator.variable}`}
		>
			<body className="bg-black">{children}</body>
		</html>
	);
}
