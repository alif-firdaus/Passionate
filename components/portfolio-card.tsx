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
		<div className="relative w-full group overflow-hidden">
			<Image
				src={imageSrc}
				alt=""
				priority={true}
				className="transition-transform group-hover:scale-105 duration-300"
			/>
			<div className="absolute inset-0 flex items-end">
				<div className="bg-[#dfdfdf] bg-opacity-10 px-6 py-5 backdrop-blur-md w-full">
					{children}
				</div>
			</div>
		</div>
	);
}
