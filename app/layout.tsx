import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const mainfont = Bricolage_Grotesque({ subsets: ["latin"] });

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
		<html lang="en" className={mainfont.className}>
			<body className="bg-bgbase">{children}</body>
		</html>
	);
}
