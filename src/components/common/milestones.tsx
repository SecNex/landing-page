import { IconCircle, IconCircleCheck, IconLoader3 } from "@tabler/icons-react";
import { getMilestonesFromNotion } from "@/lib/notion";

export type Milestone = {
	title: string;
	description: string;
	status: "In Progress" | "Done" | "Not Started";
};

export const Milestones = async () => {
	const milestones = await getMilestonesFromNotion();
	const completedMilestones = milestones.filter(
		(m: Milestone) => m.status.toLowerCase() === "done"
	);
	const lastCompleted = completedMilestones[completedMilestones.length - 1];
	const currentMilestone = milestones.find(
		(m: Milestone) => m.status.toLowerCase() === "in progress"
	);
	const upcomingMilestones = milestones
		.filter((m: Milestone) => m.status.toLowerCase() === "not started")
		.slice(0, 2);
	const nextUpcoming = milestones.filter(
		(m: Milestone) => m.status.toLowerCase() === "not started"
	)[2];

	return (
		<div className="flex flex-col gap-4">
			<h1 className="">
				<span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-4xl font-extrabold">
					Milestones
				</span>
			</h1>
			<div className="relative flex flex-col gap-10">
				<div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-pink-400 animate-pulse"></div>
				{lastCompleted && (
					<div className="flex items-center space-x-4 bg-black p-4 rounded-lg backdrop-blur-sm border border-zinc-800">
						<div className="flex items-center justify-center w-20 h-10">
							<IconCircleCheck
								size={32}
								className="text-green-700 opacity-50"
							/>
						</div>
						<div className="flex flex-col space-y-2">
							<div className="text-md font-medium opacity-50">
								{lastCompleted.title}
							</div>
							<div className="text-sm text-zinc-700 opacity-50">
								{lastCompleted.description}
							</div>
						</div>
					</div>
				)}

				{currentMilestone && (
					<div className="flex items-center space-x-4 bg-black p-4 rounded-lg backdrop-blur-sm border border-zinc-800">
						<div className="flex items-center justify-center w-20 h-10">
							<IconLoader3
								size={32}
								className="text-yellow-500 animate-spin"
							/>
						</div>
						<div className="flex flex-col space-y-2">
							<div className="text-md font-medium">
								{currentMilestone.title}
							</div>
							<div className="text-sm text-zinc-500">
								{currentMilestone.description}
							</div>
						</div>
					</div>
				)}

				{upcomingMilestones.map((milestone: Milestone) => (
					<div
						key={milestone.title}
						className="flex items-center space-x-4 bg-black p-4 rounded-lg backdrop-blur-sm border border-zinc-800"
					>
						<div className="flex items-center justify-center w-20 h-10">
							<IconCircle
								size={32}
								className="text-zinc-500"
							/>
						</div>
						<div className="flex flex-col space-y-2">
							<div className="text-md font-medium">{milestone.title}</div>
							<div className="text-sm text-zinc-500">
								{milestone.description}
							</div>
						</div>
					</div>
				))}

				{nextUpcoming && (
					<div className="flex items-center space-x-4 bg-black p-4 rounded-lg backdrop-blur-sm border border-zinc-800">
						<div className="flex items-center justify-center w-20 h-10">
							<IconCircle
								size={32}
								className="text-zinc-500 opacity-50"
							/>
						</div>
						<div className="flex flex-col space-y-2">
							<div className="text-md font-medium opacity-50">
								{nextUpcoming.title}
							</div>
							<div className="text-sm text-zinc-500 opacity-50">
								{nextUpcoming.description}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
