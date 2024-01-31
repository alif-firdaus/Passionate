import Marquee from "react-fast-marquee";

export default function MarqueeText() {
	return (
		<Marquee className="flex flex-shrink-0 h-fit whitespace-nowrap items-center">
			<h1 className="text-9xl text-darkgrey align-middle mx-4 font-semibold">
				PASSIONATE
			</h1>
			<h1 className="text-9xl text-darkgrey align-middle mx-4 font-semibold">
				SIMPLICITY
			</h1>
			<h1 className="text-9xl text-darkgrey align-middle mx-4 font-semibold">
				PASSIONATE
			</h1>
			<h1 className="text-9xl text-darkgrey align-middle mx-4 font-semibold">
				SIMPLICITY
			</h1>
		</Marquee>
	);
}
