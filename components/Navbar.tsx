"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import HeroIcons //
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Import Components //
import MainButtonLg from "./main-button-lg";

// Import Assets //
import logo from "@/assets/images/logonew.png";
import logotype from "@/assets/images/logotypenew.png";

function Navbar() {
	// Navbar Links //
	const navLinks = [
		{
			text: "About",
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
		{
			text: "Connect",
			path: "/connect",
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
			<nav className="fixed flex lg:hidden bottom-[26px] z-50 w-full px-sectionpxsm">
				<div className="flex items-center w-full pr-3 pl-5 justify-between py-4 bg-[#323232] bg-opacity-40 backdrop-blur-xl rounded-[10px]">
					{/* Navbar Logo */}
					<Link href="/">
						<Image
							src={logo}
							alt="Logo"
							priority={true}
							className="w-7"
						/>
					</Link>

					{/* Hamburger Menu */}
					<div
						onClick={toggleMenu}
						className="flex lg:hidden justify-center w-9 h-9 items-center cursor-pointer"
					>
						{isOpen ? (
							<XMarkIcon className="w-[26px] stroke-[1px] text-akarmula" />
						) : (
							<Bars2Icon className="w-7 stroke-[1px] text-akarmula" />
						)}
					</div>
				</div>
			</nav>

			<div
				className={`fixed w-full px-sectionpxsm z-40
            ${
				isOpen
					? "bottom-[110px] left-0 transition-all duration-700 ease-in-out"
					: "-bottom-full left-0 transition-all duration-700 ease-in-out"
			}`}
			>
				<div className="w-full flex flex-col h-full bg-[#323232] bg-opacity-40 px-5 backdrop-blur-xl py-4 justify-center items-center rounded-[10px]">
					<div className="flex flex-col w-full">
						{/* Navbar Links */}
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="w-full py-2 text-2xl text-akarmula font-light"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
					</div>
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
