import Image from "next/image";

interface PortfolioCardProps {
	children: any;
	imageSrc: any;
}

export default function PortfolioCard({
	children,
	imageSrc,
}: PortfolioCardProps) {
	return (
		<div className="relative w-full group overflow-hidden cursor-pointer">
			<Image
				src={imageSrc}
				alt=""
				priority={true}
				className="transition-transform group-hover:scale-[1.07] duration-500"
			/>
			<div className="absolute inset-0 flex items-end">
				<div className="bg-white bg-opacity-10 lg:bg-opacity-[0.08] px-6 py-5 lg:px-8 lg:py-[26px] backdrop-blur-md w-full">
					{children}
				</div>
			</div>
		</div>
	);
}
