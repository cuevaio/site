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
		<main className="page-shell">
			<ShaderBackground />

			<GrainOverlay />

			<div className="page-shell-inner">
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
