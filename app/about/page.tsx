import type { Metadata } from "next";

import aboutMarkdown from "./about.md";
import { AboutContent } from "@/components/about/about-content";
import { GrainOverlay } from "@/components/grain-overlay";
import { ShaderBackground } from "@/components/shader-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
	title: "About | anthony",
	description: "About Anthony Cueva.",
};

export default function AboutPage() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<ShaderBackground
				colorA="#080808"
				colorB="#0a0a0a"
				baseColor="#1a1a1a"
				upColor="#0d0d0d"
				downColor="#050505"
				leftColor="#080808"
				rightColor="#060606"
				intensity={0.8}
				overlayOpacity={0.2}
			/>
			<GrainOverlay />

			<div className="relative z-10 flex min-h-screen flex-col">
				<SiteNav currentPath="/about" />

				<section className="mx-auto flex w-full max-w-[44rem] flex-1 px-5 pb-20 pt-8 md:px-6 md:pt-12">
					<div className="w-full">
						<h1 className="font-serif text-lg leading-none text-white md:text-xl">About</h1>
						<div className="mt-10">
							<AboutContent markdown={aboutMarkdown} />
						</div>
					</div>
				</section>

				<SiteFooter />
			</div>
		</main>
	);
}
