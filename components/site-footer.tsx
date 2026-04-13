export function SiteFooter() {
	return (
		<footer className="relative z-10 w-full">
			<div className="mx-auto flex w-full max-w-[44rem] flex-col gap-4 px-5 py-6 text-[13px] text-white/42 md:flex-row md:items-center md:justify-between md:px-6">
				<p>cueva.io</p>
				<div className="flex flex-wrap items-center gap-4">
					<a
						href="https://instagram.com/cueva.io"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-white"
					>
						Instagram
					</a>
					<a
						href="https://github.com/cuevaio"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-white"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/cuevaio"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-white"
					>
						LinkedIn
					</a>

					<a
						href="mailto:hi@cueva.io"
						className="transition-colors hover:text-white"
					>
						Email
					</a>
					<a
						href="https://cal.com/cuevaio"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-white"
					>
						Cal
					</a>
				</div>
			</div>
		</footer>
	);
}
