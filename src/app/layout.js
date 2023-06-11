import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
	title: "Cuse Code",
	description:
		"Dev shop powered by junior developers fulfilling the entire SDLC.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}
