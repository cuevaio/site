/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack: {
		rules: {
			"*.md": {
				loaders: ["raw-loader"],
				as: "*.js",
			},
		},
	},
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
	webpack(config) {
		config.module.rules.push({
			test: /\.md$/i,
			type: "asset/source",
		});

		return config;
	},
	experimental: {
		nextScriptWorkers: true,
	},
};

export default nextConfig;
