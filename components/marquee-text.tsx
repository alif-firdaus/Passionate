import Marquee from "react-fast-marquee";

export default function MarqueeText() {
	return (
		<Marquee className="flex flex-shrink-0 h-fit whitespace-nowrap items-center">
			<h1 className="text-9xl lg:text-[180px] text-darkgrey align-middle mx-4 lg:mx-7 font-semibold lg:font-medium">
				PASSIONATE
			</h1>
			<h1 className="text-9xl lg:text-[180px] text-darkgrey align-middle mx-4 lg:mx-7 font-semibold lg:font-medium">
				SIMPLICITY
			</h1>
			<h1 className="text-9xl lg:text-[180px] text-darkgrey align-middle mx-4 lg:mx-7 font-semibold lg:font-medium">
				PASSIONATE
			</h1>
			<h1 className="text-9xl lg:text-[180px] text-darkgrey align-middle mx-4 lg:mx-7 font-semibold lg:font-medium">
				SIMPLICITY
			</h1>
		</Marquee>
	);
}
