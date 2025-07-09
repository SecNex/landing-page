import Link from "next/link";
import { AnimatedBlurBall } from "@/components/common/animation";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

import {
	IconBrandInstagram,
	IconBrandX,
	IconBrandDiscord,
} from "@tabler/icons-react";

export const HeroSection = () => {
	return (
		<div className="relative overflow-hidden bg-black min-h-screen flex items-center w-full">
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-90 z-0"></div>
			<div className="absolute inset-0 z-10 pointer-events-none">
				<AnimatedBlurBall />
			</div>
			<div className="relative z-20 flex justify-center items-center w-full min-h-screen px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
				<div className="flex flex-col max-w-full w-full space-y-6">
					<div className="flex">
						<div className="flex items-center px-3 pr-4 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700">
							<span className="animate-pulse bg-green-500 rounded-full h-2 w-2 mr-2"></span>
							Coming Soon
						</div>
					</div>
					<h1 className="font-bold tracking-tight space-y-2 md:space-y-0 md:space-x-3">
						<span className="block text-white text-4xl sm:text-5xl md:text-6xl font-bold">
							Something
						</span>
						<span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-extrabold pb-1">
							Revolutionary
						</span>
					</h1>
					<p className="text-white">
						Get ready for a groundbreaking innovation that will transform the
						future. Please follow us on Instagram, X or join our Discord server
						to stay updated.
					</p>
					{/* <div className="flex flex-col md:flex-row items-center space-x-0 w-full space-y-3 md:space-y-0 md:space-x-4">
						<Input
							placeholder="Enter your email"
							className="bg-zinc-900/50 text-white placeholder:text-white/50 border-none rounded-lg h-12 px-5"
						/>
						<Button className="bg-zinc-900/50 text-white rounded-lg h-12 w-full md:w-auto sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
							Join Waitlist
						</Button>
					</div> */}
					<div className="flex flex-col md:flex-row items-center space-x-0 w-full space-y-3 md:space-y-0 md:space-x-4">
						<Button
							asChild
							className="bg-zinc-900/50 text-white rounded-lg h-12 w-full md:w-auto sm:w-auto"
							size="lg"
						>
							<Link href="https://www.instagram.com/secnex.io">
								<IconBrandInstagram />
								<span>Follow us on Instagram</span>
							</Link>
						</Button>
						<Button
							asChild
							className="bg-zinc-900/50 text-white rounded-lg h-12 w-full md:w-auto sm:w-auto"
							size="lg"
						>
							<Link href="https://x.com/secnex_io">
								<IconBrandX />
								<span>Follow us on X</span>
							</Link>
						</Button>
						<Button
							asChild
							className="bg-zinc-900/50 text-white rounded-lg h-12 w-full md:w-auto sm:w-auto"
							size="lg"
						>
							<Link href="https://discord.gg/BXkY4Yt5TW">
								<IconBrandDiscord />
								<span>Join our Discord</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
