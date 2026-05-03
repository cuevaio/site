import Parser from "rss-parser";

import localPosts from "@/data/posts.json";

type RawLocalPost = {
	date: string;
	title: string;
	link: string;
	description?: string;
};

export type PostListItem = {
	date: string;
	title: string;
	link: string;
	source: "rss" | "local";
	dateValue: number;
	description?: string;
};

const FEED_URL = "https://cuevaio.substack.com/feed";
const parser = new Parser();

function normalizeLink(link?: string) {
	if (!link) return "#";
	return link;
}

function normalizeDate(date?: string) {
	const parsed = date ? new Date(date) : new Date(0);
	return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function normalizeLocalPost(post: RawLocalPost): PostListItem {
	const parsedDate = normalizeDate(post.date);

	return {
		date: parsedDate.toISOString(),
		title: post.title,
		link: post.link,
		source: "local",
		dateValue: parsedDate.getTime(),
		description: post.description,
	};
}

async function getRssPosts() {
	const response = await fetch(FEED_URL, {
		next: { revalidate: 86400 },
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch Substack feed: ${response.status}`);
	}

	const xml = await response.text();
	const feed = await parser.parseString(xml);

	return (feed.items ?? [])
		.filter((item) => item.title && item.link)
		.map((item) => {
			const parsedDate = normalizeDate(item.isoDate ?? item.pubDate);
			const title = item.title?.trim() ?? "Untitled";

			return {
				date: parsedDate.toISOString(),
				title,
				link: normalizeLink(item.link),
				source: "rss" as const,
				dateValue: parsedDate.getTime(),
			};
		});
}

export function formatPostYear(date: string) {
	return new Intl.DateTimeFormat("en", { year: "numeric" }).format(
		new Date(date),
	);
}

export async function getPosts() {
	const rssPosts = await getRssPosts();
	const manualPosts = (localPosts as RawLocalPost[]).map(normalizeLocalPost);

	return [...rssPosts, ...manualPosts].sort((left, right) => {
		if (right.dateValue !== left.dateValue)
			return right.dateValue - left.dateValue;
		return left.title.localeCompare(right.title);
	});
}
