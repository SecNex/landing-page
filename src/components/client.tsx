"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type BlogPost = {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	author: string;
};

export default function BlogPostClient({ post }: { post: BlogPost }) {
	const router = useRouter();

	return (
		<div className="flex flex-col max-w-5xl mx-auto w-full space-y-6 px-4 sm:px-6 lg:px-8 pt-25">
			<div className="flex justify-between items-center mb-8">
				<Button
					onClick={() => router.back()}
					className="text-white hover:bg-zinc-900/90 hover:text-white transition-colors border border-zinc-800 bg-black hover:bg-black"
				>
					← Back to Blog
				</Button>
			</div>
			<article className="bg-zinc-900/90 rounded-lg p-4 sm:p-8 border border-zinc-800 text-white">
				<h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
				<div className="flex justify-between items-center text-sm text-zinc-400 mb-8">
					<span>{post.author}</span>
					<span>{new Date(post.date).toLocaleDateString("de-DE")}</span>
				</div>
				<div className="max-w-none text-white">
					{post.content.split("\n\n").map((paragraph, index) => (
						<p
							key={index}
							className="mb-4"
						>
							{paragraph}
						</p>
					))}
				</div>
			</article>
		</div>
	);
}
