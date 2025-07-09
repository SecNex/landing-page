import { cn } from "@/lib/utils";
import { IconTag } from "@tabler/icons-react";

export const getTagColor = (color: string) => {
	const colorMap: {
		[key: string]: { bg: string; border: string; text: string };
	} = {
		default: {
			bg: "bg-zinc-500/10",
			border: "border-zinc-500/20",
			text: "text-zinc-500",
		},
		gray: {
			bg: "bg-zinc-500/10",
			border: "border-zinc-500/20",
			text: "text-zinc-500",
		},
		brown: {
			bg: "bg-amber-500/10",
			border: "border-amber-500/20",
			text: "text-amber-500",
		},
		orange: {
			bg: "bg-orange-500/30",
			border: "border-orange-500/50",
			text: "text-orange-500",
		},
		yellow: {
			bg: "bg-yellow-500/10",
			border: "border-yellow-500/20",
			text: "text-yellow-500",
		},
		green: {
			bg: "bg-green-500/10",
			border: "border-green-500/20",
			text: "text-green-500",
		},
		blue: {
			bg: "bg-blue-500/10",
			border: "border-blue-500/20",
			text: "text-blue-500",
		},
		purple: {
			bg: "bg-purple-500/10",
			border: "border-purple-500/20",
			text: "text-purple-500",
		},
		pink: {
			bg: "bg-pink-500/10",
			border: "border-pink-500/20",
			text: "text-pink-500",
		},
		red: {
			bg: "bg-red-500/10",
			border: "border-red-500/20",
			text: "text-red-500",
		},
	};

	return colorMap[color] || colorMap.default;
};

export const BlogTags = ({
	tag,
	colors,
}: {
	tag: string;
	colors: { text: string; bg: string; border: string };
}) => {
	return (
		<div
			className={cn(
				"flex flex-row space-x-1 items-center",
				colors.text,
				"text-xs border rounded-lg px-2 py-1",
				colors.bg,
				colors.border
			)}
		>
			<IconTag className="w-3 h-3" />
			<span>{tag}</span>
		</div>
	);
};
