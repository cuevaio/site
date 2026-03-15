/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/betterwriter',
				destination: 'https://testflight.apple.com/join/EhmQk8U8',
				permanent: false,
			},
		];
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	experimental: {
		nextScriptWorkers: true,
	},
};

export default nextConfig;
