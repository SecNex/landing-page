"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { IconMail, IconUser, IconMessage } from "@tabler/icons-react";

export function ContactForm() {
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement form submission
		console.log("Form submitted:", formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6"
		>
			<div className="space-y-4">
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<IconUser className="h-5 w-5 text-zinc-400" />
					</div>
					<Input
						type="text"
						placeholder="Your Name"
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						className="w-full pl-10 pr-4 py-3 h-12 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
						required
					/>
				</div>

				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<IconMail className="h-5 w-5 text-zinc-400" />
					</div>
					<Input
						type="email"
						placeholder="Your Email"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						className="w-full pl-10 pr-4 py-3 h-12 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
						required
					/>
				</div>

				<div className="relative">
					<div className="absolute top-3 left-3 flex items-start pointer-events-none">
						<IconMessage className="h-5 w-5 text-zinc-400" />
					</div>
					<Textarea
						placeholder="Your Message"
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
						className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[150px] resize-y text-white"
						required
					/>
				</div>
			</div>

			<Button
				type="submit"
				size="lg"
				className="w-full bg-gradient-to-r h-12 from-purple-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-500 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-purple-500/20"
			>
				Nachricht senden
			</Button>
		</form>
	);
}
