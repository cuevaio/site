export function GrainOverlay() {
	return (
		<>
			<svg
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full opacity-[0.2] md:block"
				focusable="false"
			>
				<filter id="noise">
					<feTurbulence
						baseFrequency="0.8"
						numOctaves="4"
						stitchTiles="stitch"
						type="fractalNoise"
					/>
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<rect width="100%" height="100%" filter="url(#noise)" />
			</svg>
			<div
				className="pointer-events-none absolute inset-0 z-[2] hidden opacity-[0.04] md:block"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
					mixBlendMode: "overlay",
				}}
			/>
		</>
	);
}
