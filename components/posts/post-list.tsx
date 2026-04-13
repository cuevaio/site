import type { PostListItem } from "@/lib/posts";
import { formatPostYear } from "@/lib/posts";

function SubstackIcon() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 448 511.471"
			className="size-2.5 shrink-0 fill-white"
		>
			<path d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z" />
		</svg>
	);
}

export function PostList({ posts }: { posts: PostListItem[] }) {
	const groups = posts.reduce<Array<{ year: string; items: PostListItem[] }>>((accumulator, post) => {
		const year = formatPostYear(post.date);
		const existingGroup = accumulator[accumulator.length - 1];

		if (existingGroup?.year === year) {
			existingGroup.items.push(post);
			return accumulator;
		}

		accumulator.push({ year, items: [post] });
		return accumulator;
	}, []);

	return (
		<div className="space-y-9">
			{groups.map((group) => (
				<section key={group.year} className="grid grid-cols-[64px_1fr] gap-4 md:grid-cols-[80px_1fr]">
					<h2 className="text-[13px] leading-9.5 text-white/34">{group.year}</h2>
					<ul className="space-y-2.5">
						{group.items.map((post) => (
							<li key={`${post.source}-${post.link}`} className="group">
								<a
									href={post.link}
									target={post.link.startsWith("/") ? undefined : "_blank"}
									rel={post.link.startsWith("/") ? undefined : "noopener noreferrer"}
									className="inline-flex w-full items-center rounded-full px-3 py-1 text-[15px] leading-8 text-white/88 transition-colors duration-180 group-hover:bg-white/8 group-hover:text-white group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
								>
									<span className="inline-flex items-center gap-2">
										{post.title}
										{post.source === "rss" ? <SubstackIcon /> : null}
									</span>
								</a>
							</li>
						))}
					</ul>
				</section>
			))}
		</div>
	);
}
