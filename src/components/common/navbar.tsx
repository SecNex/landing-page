"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Shield, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-black/70 backdrop-blur-sm shadow-lg" : "bg-transparent"
			}`}
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-16">
					<div className="flex items-center justify-between w-full">
						<div className="flex-shrink-0">
							<Link
								href="/"
								className="flex items-center"
							>
								<Shield className="h-8 w-8 text-purple-500" />
								<span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
									SecNex
								</span>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-6">
							<Button
								variant="ghost"
								className="hover:bg-zinc-800/50"
								asChild
							>
								<Link
									href="/blog"
									className="text-zinc-300 hover:text-white transition-colors"
								>
									Blog
								</Link>
							</Button>
							<Button
								variant="ghost"
								className="hover:bg-zinc-800/50"
								asChild
							>
								<Link
									href="/contact"
									className="text-zinc-300 hover:text-white transition-colors"
								>
									Contact
								</Link>
							</Button>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										className="text-zinc-300 hover:text-white hover:bg-zinc-800/50"
									>
										Resources
										<ChevronDown className="ml-2 h-4 w-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="end"
									className="w-48 bg-black/70 border-zinc-800 backdrop-blur-sm mt-4"
								>
									<DropdownMenuItem asChild>
										<Link
											href="https://docs.secnex.io"
											className="text-zinc-300 hover:text-white cursor-pointer flex items-center"
										>
											Documentation
										</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>

							<Button
								size="lg"
								className="relative inline-flex items-center justify-center overflow-hidden font-medium group p-[1px] rounded-md bg-gradient-to-br from-purple-600 to-cyan-500 border-none focus:ring-4 focus:outline-none focus:ring-cyan-800 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/20"
								asChild
							>
								<Link href="https://discord.gg/BXkY4Yt5TW">
									<span className="flex items-center justify-center w-full h-full bg-zinc-900 text-white px-6 py-2 rounded-md group-hover:bg-zinc-800 transition-colors duration-300">
										Join Discord
									</span>
								</Link>
							</Button>
						</div>

						<Button
							className="md:hidden bg-transparent text-white rounded-lg md:w-auto sm:w-auto hover:bg-zinc-900 hover:text-white"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							variant="ghost"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden bg-black/95 backdrop-blur-sm border border-zinc-800 rounded-lg">
						<div className="px-2 pt-2 pb-3 space-y-2">
							<Link
								href="/blog"
								className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Blog
							</Link>
							<Link
								href="/contact"
								className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Contact
							</Link>
							<Link
								href="https://docs.secnex.io"
								className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Documentation
							</Link>
							<div className="px-3 py-2">
								<Button
									size="lg"
									className="w-full relative inline-flex items-center justify-center overflow-hidden font-medium group p-[1px] rounded-md bg-gradient-to-br from-purple-600 to-cyan-500 border-none focus:ring-4 focus:outline-none focus:ring-cyan-800 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/20"
									asChild
								>
									<Link
										href="https://discord.gg/BXkY4Yt5TW"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<span className="flex items-center justify-center w-full h-full bg-black text-white px-6 py-2 rounded-md group-hover:bg-zinc-900 transition-colors duration-300">
											Join Discord
										</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
