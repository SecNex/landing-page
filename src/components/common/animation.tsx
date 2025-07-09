import React from "react";

export const AnimatedBlurBall = () => {
	return (
		<div className="absolute inset-0 z-0 overflow-hidden">
			<div className="absolute -inset-[10px] opacity-50">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] animate-pulse-slow"></div>
				<div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-[80px] animate-pulse-slow animation-delay-2000"></div>
				<div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[80px] animate-pulse-slow animation-delay-4000"></div>
			</div>
		</div>
	);
};
