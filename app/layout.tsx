import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Caslon_Display } from "next/font/google";
import type React from "react";
import "./globals.css";
import Script from "next/script";
import { CollectyWidget } from "@/components/collecty-widget";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const libreCaslon = Libre_Caslon_Display({
	weight: "400",
	subsets: ["latin"],
});

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
			<body className={`${libreCaslon.className} font-sans antialiased`}>
				{children}
				<Analytics />
				<Script>
					{`
					(function(w,d,s,osda,f,js,fjs){
    w['CollectyWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','collecty','https://collecty-production.up.railway.app/widget/4d2926f9-7035-49c6-9630-3e3e04f68dfd/widget.js'));
  collecty('init', '4d2926f9-7035-49c6-9630-3e3e04f68dfd');
`}
				</Script>
			</body>
		</html>
	);
}
