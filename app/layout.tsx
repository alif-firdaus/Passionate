import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";

const mainfont = Nunito_Sans({
	subsets: ["latin"],
	variable: "--mainfont",
	display: "swap",
});

const head = Poppins({
	weight: "500",
	subsets: ["latin"],
	variable: "--head",
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
		<html lang="en" className={`${mainfont.variable} ${head.variable}`}>
			<body className="bg-bgbase">{children}</body>
		</html>
	);
}
