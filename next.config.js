/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/tutorials',
				permanent: true,
			},
			{
				source: '/html',
				destination: '/html/introduction',
				permanent: true,
			},
		]
	},
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/tutorials'
			},
			{
				source: '/html',
				destination: '/html/introduction'
			},
		]
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'storage.cloud.google.com',
				pathname: '/picallens/**',
			},
		],
	}
}

module.exports = nextConfig
