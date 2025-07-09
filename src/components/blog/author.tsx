import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Author = {
	id: string;
	name: string;
	avatar_url?: string;
};

export const BlogAuthor = ({ author }: { author: Author }) => {
	return (
		<div className="flex flex-row items-center gap-2">
			<Avatar>
				<AvatarImage src={author.avatar_url} />
				<AvatarFallback>{author.name}</AvatarFallback>
			</Avatar>
			<p className="text-zinc-500 text-sm">{author.name}</p>
		</div>
	);
};
