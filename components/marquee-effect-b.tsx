import Image from "next/image";
import Marquee from "react-fast-marquee";

// Import Assets //
import Figma from "@/assets/icons/figma.svg";
import Next from "@/assets/icons/next.svg";
import Adobexd from "@/assets/icons/adobexd.svg";
import Studio from "@/assets/icons/studio.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import Miro from "@/assets/icons/miro.svg";

export default function MarqueeEffectB() {
	return (
		<Marquee className="flex flex-shrink-0 h-fit whitespace-nowrap items-center py-8 lg:py-14">
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Figma}
					alt="Figma"
					priority={true}
					className="h-6 lg:h-[22px]"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Next}
					alt="NextJS"
					priority={true}
					className="h-[18px] lg:h-4"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Adobexd}
					alt="Adobe XD"
					priority={true}
					className="h-6 lg:h-[22px]"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Studio}
					alt="Invision Studio"
					priority={true}
					className="h-5 lg:h-[18px]"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Tailwind}
					alt="Tailwind"
					priority={true}
					className="h-[18px] lg:h-4"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Miro}
					alt="Miro"
					priority={true}
					className="h-6 lg:h-[22px]"
				/>
			</div>

			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Figma}
					alt="Figma"
					priority={true}
					className="h-6 lg:h-[22px]"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Next}
					alt="NextJS"
					priority={true}
					className="h-[18px] lg:h-4"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Adobexd}
					alt="Adobe XD"
					priority={true}
					className="h-6 lg:h-[22px]"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Studio}
					alt="Invision Studio"
					priority={true}
					className="h-5 lg:h-[18px]"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Tailwind}
					alt="Tailwind"
					priority={true}
					className="h-[18px] lg:h-4"
				/>
			</div>
			<div className="flex items-center justify-center mx-7 lg:mx-8">
				<Image
					src={Miro}
					alt="Miro"
					priority={true}
					className="h-6 lg:h-[22px]"
				/>
			</div>
		</Marquee>
	);
}
