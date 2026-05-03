import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { GrainOverlay } from "@/components/grain-overlay";
import { ShaderBackground } from "@/components/shader-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import aboutMarkdown from "./about.md";

export const metadata: Metadata = {
	title: "About | anthony",
	description: "About Anthony Cueva.",
};

export default function AboutPage() {
	return (
		<main className="page-shell">
			<ShaderBackground />
			<GrainOverlay />

			<div className="page-shell-inner">
				<SiteNav currentPath="/about" />

				<section className="mx-auto flex w-full max-w-[44rem] flex-1 px-5 pb-20 pt-8 md:px-6 md:pt-12">
					<div className="w-full">
						<h1 className="font-serif text-lg leading-none text-text-primary md:text-xl">
							About
						</h1>
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
