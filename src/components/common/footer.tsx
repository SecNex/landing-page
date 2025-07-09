import Link from "next/link";

import {
	IconBrandGithub,
	IconBrandDiscord,
	IconBrandInstagram,
	IconBrandX,
} from "@tabler/icons-react";

import { Shield } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="relative bg-black pt-16 pb-8">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-8">
					<div className="col-span-2 md:col-span-1">
						<Link
							href="/"
							className="flex items-center"
						>
							<Shield className="h-8 w-8 text-purple-500" />
							<span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
								SecNex
							</span>
						</Link>
						<p className="mt-2 text-sm text-gray-400 max-w-xs">
							The future of technology is coming soon.
						</p>
						<div className="mt-4 flex space-x-4">
							<Link
								href="https://github.com/secnex"
								className="text-gray-400 hover:text-gray-300 transition-colors"
							>
								<IconBrandGithub className="h-5 w-5" />
							</Link>
							<Link
								href="https://instagram.com/secnex.io"
								className="text-gray-400 hover:text-gray-300 transition-colors"
							>
								<IconBrandInstagram className="h-5 w-5" />
							</Link>
							<Link
								href="https://x.com/secnex_io"
								className="text-gray-400 hover:text-gray-300 transition-colors"
							>
								<IconBrandX className="h-5 w-5" />
							</Link>
							<Link
								href="https://discord.gg/BXkY4Yt5TW"
								className="text-gray-400 hover:text-gray-300 transition-colors"
							>
								<IconBrandDiscord className="h-5 w-5" />
							</Link>
						</div>
					</div>
					<div>
						<h3 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-lg pb-2">
							Resources
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/blog"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="https://docs.secnex.io"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Documentation
								</Link>
							</li>
							{/* <li>
								<Link
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Privacy
								</Link>
							</li> */}
						</ul>
					</div>
					<div>
						<h3 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-lg pb-2">
							Connect
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="https://github.com/secnex"
									className="text-gray-400 hover:text-white transition-colors"
								>
									GitHub
								</Link>
							</li>
							<li>
								<Link
									href="https://instagram.com/secnex.io"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Instagram
								</Link>
							</li>
							<li>
								<Link
									href="https://x.com/secnex_io"
									className="text-gray-400 hover:text-white transition-colors"
								>
									X
								</Link>
							</li>
							<li>
								<Link
									href="https://discord.gg/BXkY4Yt5TW"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Discord
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-500">
							© {new Date().getFullYear()} SecNex. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link
								href="#"
								className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
							>
								Privacy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
