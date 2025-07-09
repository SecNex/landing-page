import { getBlogPostBySlug, getBlogPosts } from "@/lib/notion";
import type { BlogPost } from "@/lib/notion";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { BlogTags, getTagColor } from "@/components/blog/tags";
import { BlogAuthor } from "@/components/blog/author";
import { PostContent } from "@/components/blog/post-content";
import { Skeleton } from "@/components/ui/skeleton";

import {
	IconArrowLeft,
	IconCalendarEvent,
	IconClock,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
	const posts = await getBlogPosts();
	return posts.results.map((post) => ({
		slug: post.id,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = await getBlogPostBySlug(slug);

	if (!post) {
		return {
			title: "Post not found | SecNex",
			description: "The post you are looking for does not exist.",
		};
	}

	return {
		title: `${post.properties.Name.title[0]?.plain_text} | SecNex Blog`,
		description: post.properties.Description.rich_text[0]?.plain_text,
	};
}

export default async function BlogPost({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = await getBlogPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const authors = post.properties.Author;
	const tags = post.properties.Tags.multi_select;
	const cover = post.cover?.file?.url;
	const createdTime = new Date(post.created_time).toLocaleDateString("en-US", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
	const readingTime = post.properties["Reading Time"].number;

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex flex-col max-w-5xl mx-auto w-full space-y-6 px-4 sm:px-6 lg:px-8 pt-30">
				<div className="flex flex-row justify-between items-center">
					<Link
						href="/blog"
						className="flex flex-row items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors"
					>
						<IconArrowLeft className="w-4 h-4" />
						<span>Back to Blog</span>
					</Link>
				</div>
				<article className="flex flex-col space-y-6 border border-zinc-800 rounded-lg">
					<div className="bg-zinc-900 rounded-t-lg overflow-hidden">
						{cover ? (
							<Image
								src={cover}
								alt={post.properties.Name.title[0]?.plain_text}
								width={890}
								height={500}
								className="object-cover"
							/>
						) : (
							<Skeleton className="w-full h-48" />
						)}
					</div>
					<div className="flex flex-col space-y-6 px-6 py-3">
						<div className="flex flex-row gap-2">
							{tags.map((tag) => (
								<BlogTags
									key={tag.id}
									tag={tag.name}
									colors={getTagColor(tag.color)}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col space-y-6 px-6">
						<h1 className="text-white text-2xl sm:text-2xl md:text-4xl font-extrabold">
							{post.properties.Name.title[0]?.plain_text}
						</h1>
						<div className="flex flex-row gap-4 items-center">
							<div className="flex flex-row text-zinc-500 items-center space-x-1">
								<IconCalendarEvent className="w-4 h-4" />
								<span className="text-sm">{createdTime}</span>
							</div>
							<div className="flex flex-row text-zinc-500 items-center space-x-1">
								<IconClock className="w-4 h-4" />
								<span className="text-sm">{readingTime} min</span>
							</div>
						</div>

						{authors.people.map((author) => (
							<BlogAuthor
								key={author.id}
								author={author}
							/>
						))}
					</div>

					<div className="prose prose-lg max-w-none prose-invert px-6 pb-6">
						<PostContent blocks={post.blocks} />
					</div>
				</article>
			</div>
			<Footer />
		</div>
	);
}
