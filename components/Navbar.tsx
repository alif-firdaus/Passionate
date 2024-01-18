"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import HeroIcons //
import {
	Bars2Icon,
	XMarkIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";

// Import Assets //
import logoblack from "@/assets/images/logoblack.webp";

function Navbar() {
	// Navbar Links //
	const navLinks = [
		{
			text: "Home",
			path: "/",
		},
		{
			text: "Expertise",
			path: "/expertise",
		},
		{
			text: "Portfolio",
			path: "https://dribbble.com/aliffirdaus",
		},
		{
			text: "Case Studies",
			path: "/case-studies",
		},
	];

	// Navbar Mobile View //
	const [isOpen, setOpen] = useState(false);

	// Navbar Toggle //
	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	// External Link Path //
	interface NavItemProps {
		text: string;
		path: string;
	}

	const NavItem = ({ text, path }: NavItemProps) => {
		const isExternalLink = path.startsWith("http");

		if (isExternalLink) {
			return (
				<Link href={path} target="_blank" rel="noopener noreferrer">
					{text}
				</Link>
			);
		} else {
			return <Link href={path}>{text}</Link>;
		}
	};

	return (
		<>
			<nav className="fixed hidden lg:flex top-0 z-50 lg:w-full w-screen px-sectionpxsm lg:px-sectionpxlg">
				<div className="flex items-center w-full pr-3 pl-4 lg:pl-8 mt-6 lg:mt-8 justify-between py-3 bg-[#676767] rounded-xl lg:rounded-full">
					{/* Navbar Title */}
					<Link href="/">
						<Image
							src={logoblack}
							alt="logoblack"
							className="w-[134px] lg:w-36 pb-[1px]"
						/>
					</Link>

					<div className="items-center justify-between hidden gap-10 lg:flex">
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="text-base text-black lg:hover:text-primaryhover duration-300 pb-[2px]"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
						<Link href="/connect">
							<div className="flex items-center py-3 px-8 font-medium duration-300 bg-primary rounded-full w-fit lg:hover:bg-primaryhover">
								<p className="text-base font-light text-white pb-[2px]">
									Connect
								</p>
							</div>
						</Link>
					</div>

					{/* Hamburger Menu */}
					<div
						onClick={toggleMenu}
						className="flex lg:hidden justify-center w-9 h-9 rounded-lg bg-darkgrey items-center cursor-pointer"
					>
						{isOpen ? (
							<XMarkIcon className="w-6 stroke-[1px] text-sand" />
						) : (
							<Bars2Icon className="w-6 stroke-[1px] text-sand" />
						)}
					</div>
				</div>
			</nav>

			<nav className="fixed flex lg:hidden top-0 z-50 w-screen px-sectionpxsm">
				<div className="flex items-center w-full pr-3 pl-4 mt-6 justify-between py-3 bg-[#676767] bg-opacity-30 backdrop-blur-xl rounded-lg">
					{/* Navbar Title */}
					<Link href="/">
						<Image
							src={logoblack}
							alt="logoblack"
							className="w-[134px] lg:w-36 pb-[1px]"
						/>
					</Link>

					<div className="items-center justify-between hidden gap-10 lg:flex">
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="text-base text-black lg:hover:text-primaryhover duration-300 pb-[2px]"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
						<Link href="/connect">
							<div className="flex items-center py-3 px-8 font-medium duration-300 bg-primary rounded-full w-fit lg:hover:bg-primaryhover">
								<p className="text-base font-light text-white pb-[2px]">
									Connect
								</p>
							</div>
						</Link>
					</div>

					{/* Hamburger Menu */}
					<div
						onClick={toggleMenu}
						className="flex lg:hidden justify-center w-9 h-9 rounded-lg bg-darkgrey items-center cursor-pointer"
					>
						{isOpen ? (
							<XMarkIcon className="w-6 stroke-[1px] text-sand" />
						) : (
							<Bars2Icon className="w-6 stroke-[1px] text-sand" />
						)}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
