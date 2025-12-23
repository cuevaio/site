import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Caslon_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const libreCaslon = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anthony",
  description: "Making something people want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${libreCaslon.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
