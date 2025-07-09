import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SecNex",
	description:
		"SecNex is a platform for security and automation and provides SaaS solutions for cyber security and identity management.",
	keywords: [
		"Security",
		"Backup",
		"Notion",
		"Webhook",
		"Teams",
		"SaaS",
		"Cyber Security",
		"Identity Management",
		"Identity Provider",
	],
	openGraph: {
		title: "SecNex",
		description:
			"SecNex is a platform for security and automation and provides SaaS solutions for cyber security and identity management.",
		url: "https://secnex.io",
		siteName: "SecNex",
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overscroll-none`}
			>
				{children}
			</body>
			<head>
				<script
					defer
					src="https://analytics.secnex.io/script.js"
					data-website-id="0ba8f09e-ccec-4506-8655-443762a505aa"
					data-do-not-track="true"
				></script>
			</head>
			<SpeedInsights />
		</html>
	);
}
