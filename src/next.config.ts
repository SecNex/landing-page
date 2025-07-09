import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Image Hosts: https://*.notion-static.com https://*.amazonaws.com
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.notion-static.com",
			},
			{
				protocol: "https",
				hostname: "*.amazonaws.com",
			},
		],
	},
};

export default nextConfig;
