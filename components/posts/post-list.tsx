import { PostListClient } from "@/components/posts/post-list-client";
import type { PostListItem } from "@/lib/posts";
import { formatPostYear } from "@/lib/posts";

export function PostList({ posts }: { posts: PostListItem[] }) {
	const groups = posts.reduce<Array<{ year: string; items: PostListItem[] }>>(
		(accumulator, post) => {
			const year = formatPostYear(post.date);
			const existingGroup = accumulator[accumulator.length - 1];

			if (existingGroup?.year === year) {
				existingGroup.items.push(post);
				return accumulator;
			}

			accumulator.push({ year, items: [post] });
			return accumulator;
		},
		[],
	);

	return <PostListClient groups={groups} />;
}
