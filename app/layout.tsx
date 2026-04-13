import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import type React from "react";
import "./globals.css";
import Script from "next/script";

const _geistMono = Geist_Mono({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "anthony",
	description: "Making something people want.",
	generator: "v0.app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.className} font-sans antialiased`}>
				<svg
					aria-hidden="true"
					className="app-texture"
					focusable="false"
					id="texture"
				>
					<filter id="noise">
						<feTurbulence
							baseFrequency="0.8"
							numOctaves="4"
							stitchTiles="stitch"
							type="fractalNoise"
						/>
						<feColorMatrix type="saturate" values="0" />
					</filter>
					<rect width="100%" height="100%" filter="url(#noise)" />
				</svg>
				<div aria-hidden="true" className="app-grain" />
				{children}
				<Analytics />
				<Script>
					{`
					(function(w,d,s,o,f,js,fjs){
					  w.CollectyWidget = o;
					  w[o] = w[o] || function(){ (w[o].q = w[o].q || []).push(arguments); };
					  js = d.createElement(s);
					  fjs = d.getElementsByTagName(s)[0];
					  js.id = o;
					  js.src = f;
					  js.async = true;
					  fjs.parentNode.insertBefore(js, fjs);
					}(window, document, "script", "collecty", "https://collecty-production.up.railway.app/widget/4d2926f9-7035-49c6-9630-3e3e04f68dfd/widget.js"));
					window.collecty("init", "4d2926f9-7035-49c6-9630-3e3e04f68dfd");
				`}
				</Script>
			</body>
		</html>
	);
}
