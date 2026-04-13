import Link from "next/link";

const links = [
	{ href: "/about", label: "About" },
	{ href: "https://x.com/cuevaio", label: "X" },
];

export function SiteNav({ currentPath }: { currentPath?: string }) {
	return (
		<header className="relative z-10 w-full">
			<div className="mx-auto flex w-full max-w-[44rem] items-center justify-between px-5 py-5 md:px-6 md:py-6">
				<Link
					href="/"
					className="font-serif text-lg leading-none text-white transition-colors hover:text-white/80 md:text-xl"
				>
					Anthony Cueva
				</Link>
				<nav className="flex items-center gap-5 text-[13px] text-white/62">
					{links.map((link) => {
						const isInternal = link.href.startsWith("/");
						const isActive = currentPath === link.href;

						if (isInternal) {
							return (
								<Link
									key={link.href}
									href={link.href}
									prefetch={link.href === "/about"}
									className={
										isActive ? "minimal-hover active" : "minimal-hover"
									}
								>
									{link.label}
								</Link>
							);
						}

						return (
							<a
								key={link.href}
								href={link.href}
								target={link.href.startsWith("mailto:") ? undefined : "_blank"}
								rel={
									link.href.startsWith("mailto:")
										? undefined
										: "noopener noreferrer"
								}
								className="minimal-hover"
							>
								{link.label}
							</a>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
