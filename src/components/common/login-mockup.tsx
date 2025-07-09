import React from "react";

import { IconLock, IconKey } from "@tabler/icons-react";
import { Shield } from "lucide-react";

export const LoginMockup = () => {
	return (
		<div className="relative w-50 lg:w-full h-72">
			{/* Leuchtender Hintergrund-Schatten */}
			<div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-3xl rounded-2xl animate-pulse-slow" />

			{/* Hauptkomponente */}
			<div className="relative w-full h-full rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 shadow-xl overflow-hidden animate-float-slow p-2">
				<div className="flex flex-col w-full h-full p-4 space-y-4 justify-center items-center">
					<div className="flex flex-row items-center justify-between">
						<div className="p-3 rounded-full bg-zinc-800 flex items-center justify-center">
							<Shield className="w-5 h-5 text-zinc-400" />
						</div>
					</div>
					<div className="flex flex-col space-y-2 items-center">
						<h2 className="text-sm text-white font-bold">Welcome back!</h2>
						<p className="text-xs text-zinc-400">Please enter your details.</p>
					</div>
					<div className="flex flex-col w-full h-full space-y-4">
						<div className="flex flex-row w-full items-center justify-between bg-zinc-800 rounded-md p-2 space-x-3">
							<IconLock className="w-4 h-4 text-zinc-400" />
							<div className="w-full">
								<p className="text-[10px] text-zinc-400">••••••@example.com</p>
							</div>
						</div>
						<div className="flex flex-row w-full items-center justify-between bg-zinc-800 rounded-md p-2 space-x-3">
							<IconKey className="w-4 h-4 text-zinc-400" />
							<div className="w-full">
								<p className="text-[10px] text-zinc-400">••••••••••••</p>
							</div>
						</div>
						<div className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg p-2 text-center text-white text-xs font-medium">
							Sign In
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
