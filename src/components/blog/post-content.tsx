import {
	BlockObjectResponse,
	PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type PostContentProps = {
	blocks: (BlockObjectResponse | PartialBlockObjectResponse)[];
};

const renderListItem = (
	block: BlockObjectResponse,
	blocks: (BlockObjectResponse | PartialBlockObjectResponse)[],
	index: number
) => {
	// Finde alle nachfolgenden Blöcke bis zum nächsten Block, der nicht zur Liste gehört
	const nextBlockIndex = blocks.findIndex((b, i) => {
		if (i <= index) return false;
		if (!("type" in b)) return true;
		return !["bulleted_list_item", "numbered_list_item", "to_do"].includes(
			b.type
		);
	});

	// Finde alle direkten Kinder (nächste Ebene)
	const children = blocks
		.slice(index + 1, nextBlockIndex === -1 ? undefined : nextBlockIndex)
		.filter((b): b is BlockObjectResponse => {
			if (!("type" in b)) return false;
			return ["bulleted_list_item", "numbered_list_item", "to_do"].includes(
				b.type
			);
		});

	return (
		<li
			key={block.id}
			className="mb-2"
		>
			{block.type === "bulleted_list_item" && (
				<>
					{block.bulleted_list_item.rich_text
						.map((text) => text.plain_text)
						.join("")}
					{children.length > 0 && (
						<ul className="list-disc list-inside ml-6 mt-2">
							{children.map((child, i) =>
								renderListItem(child, blocks, index + i + 1)
							)}
						</ul>
					)}
				</>
			)}
			{block.type === "numbered_list_item" && (
				<>
					{block.numbered_list_item.rich_text
						.map((text) => text.plain_text)
						.join("")}
					{children.length > 0 && (
						<ol className="list-decimal list-inside ml-6 mt-2">
							{children.map((child, i) =>
								renderListItem(child, blocks, index + i + 1)
							)}
						</ol>
					)}
				</>
			)}
			{block.type === "to_do" && (
				<>
					<div className="flex items-start gap-2">
						<input
							type="checkbox"
							checked={block.to_do.checked}
							readOnly
							className="mt-1"
						/>
						<span>
							{block.to_do.rich_text.map((text) => text.plain_text).join("")}
						</span>
					</div>
					{children.length > 0 && (
						<ul className="list-none ml-6 mt-2">
							{children.map((child, i) =>
								renderListItem(child, blocks, index + i + 1)
							)}
						</ul>
					)}
				</>
			)}
		</li>
	);
};

export const PostContent = ({ blocks }: PostContentProps) => {
	// Gruppiere die Blöcke nach Listen
	const groupedBlocks: (BlockObjectResponse | PartialBlockObjectResponse)[] =
		[];
	let currentList: (BlockObjectResponse | PartialBlockObjectResponse)[] = [];

	blocks.forEach((block) => {
		if (!("type" in block)) {
			if (currentList.length > 0) {
				groupedBlocks.push(...currentList);
				currentList = [];
			}
			groupedBlocks.push(block);
			return;
		}

		if (
			["bulleted_list_item", "numbered_list_item", "to_do"].includes(block.type)
		) {
			currentList.push(block);
		} else {
			if (currentList.length > 0) {
				groupedBlocks.push(...currentList);
				currentList = [];
			}
			groupedBlocks.push(block);
		}
	});

	if (currentList.length > 0) {
		groupedBlocks.push(...currentList);
	}

	return (
		<div className="flex flex-col space-y-4">
			{groupedBlocks.map((block, index) => {
				if (!("type" in block)) return null;

				switch (block.type) {
					case "paragraph":
						return (
							<p
								key={block.id}
								className={cn(
									"text-zinc-300",
									block.paragraph.rich_text.length === 0 && "h-4"
								)}
							>
								{block.paragraph.rich_text.map((text) => (
									<span
										key={text.plain_text}
										className={cn(
											text.annotations.bold && "font-bold",
											text.annotations.italic && "italic",
											text.annotations.strikethrough && "line-through",
											text.annotations.underline && "underline",
											text.annotations.code &&
												"bg-zinc-800 px-1 rounded font-mono"
										)}
									>
										{text.href ? (
											<Link
												href={text.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-500 hover:text-blue-400"
											>
												{text.plain_text}
											</Link>
										) : (
											text.plain_text
										)}
									</span>
								))}
							</p>
						);

					case "heading_1":
						return (
							<h1
								key={block.id}
								className="text-3xl font-bold text-white mt-8 mb-4"
							>
								{block.heading_1.rich_text
									.map((text) => text.plain_text)
									.join("")}
							</h1>
						);

					case "heading_2":
						return (
							<h2
								key={block.id}
								className="text-2xl font-bold text-white mt-6 mb-3"
							>
								{block.heading_2.rich_text
									.map((text) => text.plain_text)
									.join("")}
							</h2>
						);

					case "heading_3":
						return (
							<h3
								key={block.id}
								className="text-xl font-bold text-white mt-4 mb-2"
							>
								{block.heading_3.rich_text
									.map((text) => text.plain_text)
									.join("")}
							</h3>
						);

					case "bulleted_list_item":
						return (
							<ul
								key={block.id}
								className="list-disc list-inside text-zinc-300"
							>
								{renderListItem(block, groupedBlocks, index)}
							</ul>
						);

					case "numbered_list_item":
						return (
							<ol
								key={block.id}
								className="list-decimal list-inside text-zinc-300"
							>
								{renderListItem(block, groupedBlocks, index)}
							</ol>
						);

					case "to_do":
						return (
							<ul
								key={block.id}
								className="list-none text-zinc-300"
							>
								{renderListItem(block, groupedBlocks, index)}
							</ul>
						);

					case "code":
						return (
							<pre
								key={block.id}
								className="bg-zinc-800 p-4 rounded-lg overflow-x-auto"
							>
								<code className="text-zinc-300">
									{block.code.rich_text.map((text) => text.plain_text).join("")}
								</code>
							</pre>
						);

					case "image":
						const imageUrl =
							block.image.type === "external"
								? block.image.external.url
								: block.image.file.url;
						return (
							<div
								key={block.id}
								className="my-4"
							>
								<Image
									src={imageUrl}
									alt={block.image.caption?.[0]?.plain_text || "Blog image"}
									className="rounded-lg max-w-full h-auto"
									width={1000}
									height={1000}
								/>
								{block.image.caption && (
									<p className="text-zinc-500 text-sm mt-2">
										{block.image.caption
											.map((text) => text.plain_text)
											.join("")}
									</p>
								)}
							</div>
						);

					case "quote":
						return (
							<blockquote
								key={block.id}
								className="border-l-4 border-zinc-700 pl-4 italic text-zinc-400"
							>
								{block.quote.rich_text.map((text) => text.plain_text).join("")}
							</blockquote>
						);

					case "callout":
						return (
							<div
								key={block.id}
								className="bg-zinc-800/50 p-4 rounded-lg flex gap-4"
							>
								<div className="text-zinc-500">
									{block.callout.icon?.type === "emoji" &&
										block.callout.icon.emoji}
								</div>
								<div className="text-zinc-300">
									{block.callout.rich_text
										.map((text) => text.plain_text)
										.join("")}
								</div>
							</div>
						);

					default:
						return null;
				}
			})}
		</div>
	);
};
