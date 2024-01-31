"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalTextB = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [1, 0], ["10%", "-50%"]);

	return (
		<section ref={targetRef} className="relative">
			<div className="sticky top-0 flex h-full items-center overflow-hidden">
				<motion.div style={{ x }} className="flex">
					<div className="font-bold text-9xl bg-clip-text text-transparent bg-primarygradient">
						PERFECTION
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HorizontalTextB;
