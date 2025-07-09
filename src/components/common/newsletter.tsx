"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

export const NewsletterSection = () => {
	const [email, setEmail] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
	};
	return (
		<section className="relative bg-black">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="w-[600px] h-[600px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-50 animate-pulse-slow"></div>
				</div>
			</div>

			<div className="relative z-10 max-w-5xl mx-auto">
				<div className="relative overflow-hidden rounded-2xl">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 rounded-2xl opacity-50 blur-sm"></div>

					<div className="relative bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 md:p-12">
						<div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mx-auto mb-8">
							<Mail className="w-8 h-8 text-purple-400" />
						</div>

						<div className="text-center mb-8">
							<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
								Stay Updated
							</h2>
							<p className="text-lg text-gray-300 max-w-2xl mx-auto">
								Subscribe to our newsletter for the latest updates on identity
								management, security best practices, and product announcements.
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="max-w-md mx-auto"
						>
							<div className="relative">
								<Input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email address"
									required
									className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white pr-12"
								/>
								<Button
									type="submit"
									disabled={isLoading}
									className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									<Send className="w-5 h-5" />
								</Button>
							</div>
						</form>

						<div className="mt-6 text-center text-sm text-gray-400">
							By subscribing, you agree to our Privacy Policy and Terms of
							Service.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
