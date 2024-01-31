"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalTextA = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

	return (
		<section ref={targetRef} className="relative">
			<div className="sticky top-0 flex h-full items-center overflow-hidden">
				<motion.div style={{ x }} className="flex">
					<div className="text-sand font-bold text-9xl">
						PERFECTION
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HorizontalTextA;
