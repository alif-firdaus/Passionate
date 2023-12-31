import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Providers from "./providers";

const outfit = Outfit({ subsets: ["latin"] });

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
		<html lang="en">
			<body className={`bg-black ${outfit.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
