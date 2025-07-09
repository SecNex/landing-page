"use client";

import * as React from "react";

import Link from "next/link";

import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

// import { ContactForm } from "@/components/common/contact-form";

import {
	IconBrandGithub,
	IconBrandDiscord,
	IconBrandInstagram,
	IconBrandX,
} from "@tabler/icons-react";

export default function ContactPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex flex-col max-w-5xl mx-auto w-full space-y-6 px-4 sm:px-6 lg:px-8 pt-30">
				<h1 className="text-white text-2xl sm:text-2xl md:text-4xl font-extrabold">
					Contact Us
				</h1>
				<p className="text-zinc-400 mb-8">
					Have you any questions or feedback? We are happy to hear from you.
				</p>
				<div className="border border-zinc-800 rounded-lg p-4 text-zinc-400 space-y-4">
					<p className="md:text-lg">
						We are not ready for contact form yet. Please use the email{" "}
						<Link
							href="mailto:support@secnex.io"
							className="text-white hover:text-purple-500 transition-colors"
						>
							support@secnex.io
						</Link>{" "}
						to contact us.
					</p>
					<div className="flex flex-col space-y-2">
						<p className="font-bold">You can also find us on:</p>
						<div className="flex flex-col space-y-2">
							<Link
								href="https://github.com/secnex"
								className="flex flex-row items-center hover:text-purple-500 transition-color space-x-2"
							>
								<IconBrandGithub className="w-4 h-4" />
								<span>GitHub</span>
							</Link>
							<Link
								href="https://instagram.com/secnex.io"
								className="flex flex-row items-center hover:text-purple-500 transition-color space-x-2"
							>
								<IconBrandInstagram className="w-4 h-4" />
								<span>Instagram</span>
							</Link>
							<Link
								href="https://x.com/secnex_io"
								className="flex flex-row items-center hover:text-purple-500 transition-color space-x-2"
							>
								<IconBrandX className="w-4 h-4" />
								<span>X</span>
							</Link>
							<Link
								href="https://discord.gg/BXkY4Yt5TW"
								className="flex flex-row items-center hover:text-purple-500 transition-color space-x-2"
							>
								<IconBrandDiscord className="w-4 h-4" />
								<span>Discord</span>
							</Link>
						</div>
					</div>
				</div>
				{/* <ContactForm /> */}
			</div>
			<Footer />
		</div>
	);
}
