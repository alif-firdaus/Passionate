"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import HeroIcons //
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Import Components //
import MainButtonLg from "./main-button-lg";

// Import Assets //
import logo from "@/assets/images/logowhite.svg";

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
			text: "Case Studies",
			path: "/case-studies",
		},
		{
			text: "Portfolio",
			path: "https://dribbble.com/aliffirdaus",
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
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav className="fixed flex lg:hidden top-0 z-50 w-full px-sectionpxsm">
				<div className="flex items-center w-full pr-3 pl-4 mt-6 justify-between py-[10px] bg-[#373737] bg-opacity-40 backdrop-blur-xl rounded-[10px]">
					{/* Navbar Logo */}
					<Link href="/">
						<Image
							src={logo}
							alt="Logo"
							priority={true}
							className="w-28"
						/>
					</Link>

					{/* Hamburger Menu */}
					<div
						onClick={toggleMenu}
						className="flex lg:hidden justify-center w-9 h-9 items-center cursor-pointer"
					>
						{isOpen ? (
							<XMarkIcon className="w-[26px] stroke-[1px] text-white" />
						) : (
							<Bars2Icon className="w-7 stroke-[1px] text-white" />
						)}
					</div>
				</div>
			</nav>

			<div
				className={`fixed px-sectionpxsm w-full z-50
            ${
				isOpen
					? "top-[108px] left-0 transition-all duration-700 ease-in-out"
					: "-top-full left-0 transition-all duration-700 ease-in-out"
			}`}
			>
				<div className="w-full flex-col h-full bg-[#373737] bg-opacity-40 backdrop-blur-xl px-5 pt-[10px] justify-between pb-5 z-50 rounded-xl">
					<div className="flex flex-col justify-between">
						{/* Navbar Links */}
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="w-full py-[14px] text-base font-light text-white"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
					</div>

					{/* Button */}
					<Link href="/connect">
						<div className="flex items-center mt-6 justify-center w-full pt-3 pb-[14px] font-medium bg-white rounded-md">
							<p className="text-darkgrey text-center text-base font-medium">
								Connect
							</p>
						</div>
					</Link>
				</div>
			</div>
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			<nav className="hidden lg:flex w-full px-sectionpxlg z-50 relative">
				<div className="flex items-center w-full mt-[34px] justify-between">
					{/* Navbar Title */}
					<Link href="/">
						<Image
							src={logo}
							alt="Logo"
							priority={true}
							className="w-32 cursor-pointer"
						/>
					</Link>

					<div className="fixed inset-x-0 z-50 max-w-max mx-auto items-center justify-between gap-10 py-[22px] px-10 flex bg-[#3d3d3d] bg-opacity-40 rounded-full backdrop-blur-2xl">
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="text-[15px] text-lightgrey hover:text-white duration-300 font-light"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
					</div>

					<Link href="/connect">
						<MainButtonLg text="Connect" />
					</Link>
				</div>
			</nav>
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
