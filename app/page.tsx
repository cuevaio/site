import { GrainOverlay } from "@/components/grain-overlay";
import { PostList } from "@/components/posts/post-list";
import { ShaderBackground } from "@/components/shader-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { getPosts } from "@/lib/posts";

export const revalidate = 86400;

export default async function Home() {
	const posts = await getPosts();

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
				<SiteNav />

				<section className="mx-auto flex w-full max-w-[44rem] flex-1 px-5 pb-20 pt-8 md:px-6 md:pt-12">
					<div className="w-full">
						<PostList posts={posts} />
					</div>
				</section>

				<SiteFooter />
			</div>
		</main>
	);
}
