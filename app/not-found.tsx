"use client";

import Lottie from "lottie-react";
import ufo from "@/ufo.json";

export default function NotFound() {
	return (
		<section className="px-sectionpxsm pt-8 lg:pt-20 justify-center flex flex-col items-center">
			<Lottie animationData={ufo} className="w-96" />
			<h1 className="text-8xl font-semibold mt-4 leading-none text-center text-sand">
				404
			</h1>
			<p className="text-sand mt-8 text-[17px] text-center lg:text-xl lg:leading-relaxed lg:mt-10 lg:px-44 font-light">
				Ooops, you&apos;ve lost in space!
			</p>
		</section>
	);
}
