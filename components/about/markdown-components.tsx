import type { Components } from "react-markdown";

function normalizeHref(href?: string) {
	if (!href) return "#";
	if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
	if (href.startsWith("www.")) return `https://${href}`;
	return href;
}

export const aboutMarkdownComponents: Components = {
	p: ({ children }) => <p className="mb-6 font-serif text-[15px] leading-8 text-white/84">{children}</p>,
	em: ({ children }) => <em className="text-white italic">{children}</em>,
	strong: ({ children }) => <strong className="font-medium text-white">{children}</strong>,
	a: ({ href, children }) => (
		<a
			href={normalizeHref(href)}
			target="_blank"
			rel="noopener noreferrer"
			className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-white/72"
		>
			{children}
		</a>
	),
};
