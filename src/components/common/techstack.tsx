import React from "react";

import {
	IconBrandNextjs,
	IconBrandReact,
	IconBrandTailwind,
	IconBrandTypescript,
	IconBrandGolang,
	IconSql,
} from "@tabler/icons-react";

const cards = [
	{
		icon: <IconBrandNextjs className="w-6 h-6 text-white" />,
		label: "Next.js",
		className:
			"flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-violet-400 to-violet-900 backdrop-blur-sm border border-violet-800 rounded-lg p-4 w-24 h-24",
	},
	{
		icon: <IconBrandReact className="w-6 h-6 text-white" />,
		label: "React",
		className:
			"flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-blue-400 to-blue-900 backdrop-blur-sm border border-blue-800 rounded-lg p-4 w-24 h-24",
	},
	{
		icon: <IconBrandTailwind className="w-6 h-6 text-white" />,
		label: "Tailwind",
		className:
			"flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-900 backdrop-blur-sm border border-cyan-800 rounded-lg p-4 w-24 h-24",
	},
	{
		icon: <IconBrandTypescript className="w-6 h-6 text-white" />,
		label: "TypeScript",
		className:
			"flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-900 backdrop-blur-sm border border-blue-800 rounded-lg p-4 w-24 h-24",
	},
	{
		icon: <IconBrandGolang className="w-6 h-6 text-white" />,
		label: "Golang",
		className:
			"flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-blue-400 to-blue-800 backdrop-blur-sm border border-blue-700 rounded-lg p-4 w-24 h-24",
	},
	{
		icon: <IconSql className="w-6 h-6 text-white" />,
		label: "PostgreSQL",
		className:
			"flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-blue-300 to-blue-400 backdrop-blur-sm border border-blue-700 rounded-lg p-4 w-24 h-24",
	},
];

export const TechStack = () => {
	const __cards = [...cards, ...cards];

	return (
		<div className="flex flex-col gap-4">
			<h1 className="">
				<span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-4xl font-extrabold">
					Tech Stack
				</span>
			</h1>
			<div className="relative w-full overflow-hidden">
				<div className="marquee-track flex gap-5 md:gap-10">
					{__cards.map((card, i) => (
						<div
							key={i}
							className={card.className}
						>
							{card.icon}
							<p className="text-sm text-white">{card.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
