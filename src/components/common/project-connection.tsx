"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { AnimatedBeam } from "@/components/common/connection.motion";

import {
	IconUsersGroup,
	IconLock,
	IconBinaryTree2,
	IconChartHistogram,
	IconKey,
	IconCategory,
} from "@tabler/icons-react";
import { Shield } from "lucide-react";

const Circle = React.forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black p-3 border-zinc-800/50 text-zinc-200 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className
			)}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";

export const ProjectConnection = () => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const div1Ref = React.useRef<HTMLDivElement>(null);
	const div2Ref = React.useRef<HTMLDivElement>(null);
	const div3Ref = React.useRef<HTMLDivElement>(null);
	const div4Ref = React.useRef<HTMLDivElement>(null);
	const div5Ref = React.useRef<HTMLDivElement>(null);
	const div6Ref = React.useRef<HTMLDivElement>(null);
	const div7Ref = React.useRef<HTMLDivElement>(null);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
			<div className="flex flex-col space-y-5 justify-center">
				<h1 className="">
					<span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-4xl font-extrabold">
						All-in-One solution
					</span>
				</h1>
				<div className="flex flex-col gap-4">
					<p className="text-white text-lg">
						SecNex provides a comprehensive suite of tools for managing your
						security and compliance needs. It is a one-stop-shop for all your
						security needs.
					</p>
				</div>
			</div>
			<div
				className="relative flex h-[500px] items-center justify-center overflow-hidden bg-transparent md:shadow-xl"
				ref={containerRef}
			>
				<div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
					<div className="flex flex-row items-center justify-between">
						<Circle ref={div1Ref}>
							<IconUsersGroup />
						</Circle>
						<Circle ref={div5Ref}>
							<IconLock />
						</Circle>
					</div>
					<div className="flex flex-row items-center justify-between">
						<Circle ref={div2Ref}>
							<IconBinaryTree2 />
						</Circle>
						<Circle
							ref={div4Ref}
							className="size-16"
						>
							<Shield />
						</Circle>
						<Circle ref={div6Ref}>
							<IconChartHistogram />
						</Circle>
					</div>
					<div className="flex flex-row items-center justify-between">
						<Circle ref={div3Ref}>
							<IconKey />
						</Circle>
						<Circle ref={div7Ref}>
							<IconCategory />
						</Circle>
					</div>
				</div>

				<AnimatedBeam
					containerRef={containerRef}
					fromRef={div1Ref}
					toRef={div4Ref}
					curvature={-75}
					endYOffset={-10}
				/>
				<AnimatedBeam
					containerRef={containerRef}
					fromRef={div2Ref}
					toRef={div4Ref}
				/>
				<AnimatedBeam
					containerRef={containerRef}
					fromRef={div3Ref}
					toRef={div4Ref}
					curvature={75}
					endYOffset={10}
				/>
				<AnimatedBeam
					containerRef={containerRef}
					fromRef={div5Ref}
					toRef={div4Ref}
					curvature={-75}
					endYOffset={-10}
					reverse
				/>
				<AnimatedBeam
					containerRef={containerRef}
					fromRef={div6Ref}
					toRef={div4Ref}
					reverse
				/>
				<AnimatedBeam
					containerRef={containerRef}
					fromRef={div7Ref}
					toRef={div4Ref}
					curvature={75}
					endYOffset={10}
					reverse
				/>
			</div>
		</div>
	);
};
