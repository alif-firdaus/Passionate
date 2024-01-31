import Marquee from "react-fast-marquee";

// Import Radix Icons //
import {
	FrameIcon,
	CursorArrowIcon,
	CubeIcon,
	CodeIcon,
} from "@radix-ui/react-icons";

export default function MarqueeEffectA() {
	return (
		<Marquee className="flex flex-shrink-0 h-fit whitespace-nowrap items-center py-8 lg:py-14">
			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<FrameIcon className="w-6 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Idea transformer
				</p>
			</div>
			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<CursorArrowIcon className="w-4 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Collaborative
				</p>
			</div>
			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<CubeIcon className="w-6 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Results junkie
				</p>
			</div>
			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<CodeIcon className="h-4 w-4 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Code whisperer
				</p>
			</div>

			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<FrameIcon className="w-6 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Idea transformer
				</p>
			</div>
			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<CursorArrowIcon className="w-4 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Collaborative
				</p>
			</div>
			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<CubeIcon className="w-6 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Results junkie
				</p>
			</div>
			<div className="flex justify-center items-center gap-6 mx-9">
				<div className="flex items-center justify-center w-[38px] h-[38px] bg-neutral-400 bg-opacity-20 rounded-md">
					<CodeIcon className="w-4 h-4 text-white" />
				</div>
				<p className="text-lightgrey text-base font-light">
					Code whisperer
				</p>
			</div>
		</Marquee>
	);
}
