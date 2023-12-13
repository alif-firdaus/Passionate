"use client";

import Link from "next/link";

import Lottie from "lottie-react";
import astronaut from "@/astronaut.json";

// Import Components //
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import HeroIcons //
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Aqua = () => {
	return (
		<section>
			<Navbar />
			<div className="pt-40 lg:pt-48 px-sectionpxsm pb-32 lg:pb-48 flex flex-col items-center">
				<Lottie animationData={astronaut} className="w-[300px] -z-10" />
				<h1 className="text-4xl mt-10 lg:text-[40px] leading-none text-center text-sand lg:px-80">
					This page is currently being cooked in the space, stay
					tuned!
				</h1>
				<p className="text-sand mt-8 text-[17px] text-center lg:text-xl lg:leading-relaxed lg:mt-10 lg:px-44 font-light">
					Wanna see my portfolio on Dribbble instead?
				</p>
				<div className="flex lg:justify-center items-center mt-12">
					<Link href="/">
						<div className="flex items-center mt-2 justify-center gap-4 w-fit px-6 pt-[11px] pb-[13px] font-medium bg-sand rounded-xl lg:rounded-full lg:gap-3 lg:px-8 lg:hover:gap-5 duration-300">
							<p className="text-black text-center text-lg font-normal">
								Portfolio
							</p>
							<ArrowUpRightIcon className="text-grey w-4" />
						</div>
					</Link>
				</div>
			</div>
			<div className="lg:px-7 px-0 lg:pb-7">
				<Footer />
			</div>
		</section>
	);
};

export default Aqua;
