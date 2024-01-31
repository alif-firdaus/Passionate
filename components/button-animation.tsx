"use client";

import { useRef, useEffect } from "react";

interface ButtonAnimationProps {
	text: string;
}

const ButtonAnimation: React.FC<ButtonAnimationProps> = ({ text }) => {
	const btnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const btn = btnRef.current;

		if (btn) {
			btn.addEventListener("mousemove", handleMouseMove);

			return () => {
				btn.removeEventListener("mousemove", handleMouseMove);
			};
		}
	}, []);

	const handleMouseMove = (e: MouseEvent) => {
		const btn = btnRef.current;

		if (btn) {
			const x = e.pageX - btn.offsetLeft;
			const y = e.pageY - btn.offsetTop;

			btn.style.setProperty("--x", x + "px");
			btn.style.setProperty("--y", y + "px");
		}
	};

	return (
		<div className="flex group items-center justify-center p-[1px] bg-primarygradient rounded-lg">
			<button
				ref={btnRef}
				className="btn flex relative overflow-hidden items-center justify-center bg-[#0a0a0a] pt-3 pb-[14px] rounded-lg w-fit px-12 before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full before:bg-primarygradient group-hover:before:w-[350px] group-hover:before:h-[350px] before:content-[''] text-lg text-sand group-hover:text-darkgrey duration-100"
			>
				<p className="z-10">{text}</p>
			</button>
		</div>
	);
};

export default ButtonAnimation;
