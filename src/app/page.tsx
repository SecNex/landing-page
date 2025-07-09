import Link from "next/link";
import Image from "next/image";

import { Footer } from "@/components/common/footer";
import { HeroSection } from "@/components/common/hero";
import { Navbar } from "@/components/common/navbar";
import { Milestones } from "@/components/common/milestones";
import { TechStack } from "@/components/common/techstack";
import { LoginMockup } from "@/components/common/login-mockup";
import { ProjectConnection } from "@/components/common/project-connection";
// import { NewsletterSection } from "@/components/common/newsletter";

export default async function Home() {
	return (
		<div className="bg-black text-white min-h-screen w-full">
			<Navbar />
			<main className="w-full">
				<HeroSection />
				<div className="flex flex-col p-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center py-10">
						<div className="flex flex-col md:col-span-2 lg:col-span-3 space-y-5 justify-center">
							<h1 className="">
								<span className="block text-white text-xl sm:text-2xl md:text-3xl font-bold">
									Secure Identidy
								</span>
								<span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold pb-1">
									Made Simple
								</span>
							</h1>
							<div className="flex flex-col gap-4">
								<p className="text-white text-lg">
									A modern identity provider solution with seamless
									authentication, enterprise-grade security, and a delightful
									user experience.
								</p>
								{/* <div className="">
									<Button
										className="bg-zinc-900/50 text-white rounded-lg h-12 backdrop-blur-sm"
										size="lg"
									>
										Get Started
									</Button>
								</div> */}
							</div>
						</div>
						<div className="flex flex-col items-center justify-center w-full col-span-2 lg:col-span-1">
							<LoginMockup />
						</div>
					</div>
					<ProjectConnection />
					<TechStack />
					<Milestones />
					<div className="flex flex-col gap-4">
						<h1 className="">
							<span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-4xl font-extrabold">
								Solutions
							</span>
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<Link
								href="https://github.com/secnex/notion-backup"
								className="flex flex-col space-y-4"
							>
								<div className="flex flex-col space-y-2">
									<div className="flex flex-col w-full items-center">
										<div className="relative w-full flex items-center justify-center">
											<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-90 z-0 rounded-lg" />
											<Image
												src="/notion_backup.png"
												alt="Notion Backup Solution"
												className="rounded-lg border-2 border-zinc-900 relative z-10"
												width={1000}
												height={300}
												style={{ width: "auto", height: "auto" }}
											/>
										</div>
									</div>
									<h2 className="text-lg font-bold">Notion Backup Solution</h2>
									<div className="text-sm">
										<p>Backup and restore your Notion workspace</p>
									</div>
								</div>
							</Link>
							<Link
								href="https://github.com/secnex/teams-webhook-finder"
								className="flex flex-col space-y-4"
							>
								<div className="flex flex-col space-y-2">
									<div className="flex flex-col w-full items-center">
										<div className="relative w-full flex items-center justify-center">
											<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-90 z-0 rounded-lg" />
											<Image
												src="/teams_webhook_finder.png"
												alt="Teams Webhook Finder"
												className="rounded-lg border-2 border-zinc-900 relative z-10"
												width={1000}
												height={300}
												style={{ width: "auto", height: "auto" }}
											/>
										</div>
									</div>
									<h2 className="text-lg font-bold">Teams Webhook Finder</h2>
									<div className="text-sm">
										<p>Identify teams which use the webhook feature</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
					{/* <NewsletterSection /> */}
				</div>
			</main>
			<Footer />
		</div>
	);
}
