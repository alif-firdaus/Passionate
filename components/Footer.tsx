import Link from "next/link";
import Image from "next/image";

// Import Components //
import MarqueeText from "./marquee-text";

// Import Assets //
import logoblack from "@/assets/images/logoblack.svg";

const Footer = () => {
	return (
		<>
			<footer className="relative px-sectionpxsm lg:px-sectionpxlg pb-10 rounded-t-[36px] lg:rounded-t-[70px] pt-10 lg:pt-20 bg-white">
				{/* <-- === Footer Top Container Start === --> */}
				<div className="flex flex-col lg:flex-row lg:justify-between">
					{/* <-- == Logo & Tagline Start == --> */}
					<div className="flex flex-col">
						<Link href="/">
							<Image
								src={logoblack}
								alt="Passionate Logo"
								priority={true}
								className="w-32"
							/>
						</Link>
						<p className="text-darkgrey mt-3 lg:mt-5 text-base font-light lg:text-[#707070]">
							Crafting pixels to make dreams come true
						</p>
					</div>
					{/* <-- == Logo & Tagline End == --> */}

					<div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-12 lg:mt-0">
						{/* <-- == Navigate Start == --> */}
						<div className="flex flex-col">
							<h2 className="text-darkgrey text-base font-medium">
								Navigate
							</h2>
							<div className="flex flex-col mt-5 gap-3 lg:gap-4">
								<Link href="/">
									<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
										Home
									</p>
								</Link>
								<Link href="/expertise">
									<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
										Expertise
									</p>
								</Link>
								<Link href="/case-studies">
									<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
										Case Studies
									</p>
								</Link>
								<Link
									href="https://dribbble.com/aliffirdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
										Portfolio
									</p>
								</Link>
							</div>
						</div>
						{/* <-- == Navigate End == --> */}

						{/* <-- == Find me Start == --> */}
						<div className="flex flex-col">
							<h2 className="text-darkgrey text-base font-medium">
								Find me
							</h2>
							<div className="flex flex-col mt-5 gap-3 lg:gap-4">
								<Link
									href="https://www.linkedin.com/in/aliffirdaus97/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
										Linkedin
									</p>
								</Link>
								<Link
									href="https://dribbble.com/aliffirdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
										Dribbble
									</p>
								</Link>
								<Link
									href="https://github.com/alif-firdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
										Github
									</p>
								</Link>
							</div>
						</div>
						{/* <-- == Find me End == --> */}

						{/* <-- == Connect Start == --> */}
						<div className="flex flex-col">
							<h2 className="text-darkgrey text-base font-medium">
								Connect
							</h2>
							<div className="flex flex-col mt-5 gap-3 lg:gap-4">
								<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
									aliffirdaus.com
								</p>
								<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
									aliffirdaus@petaniweb.com
								</p>
								<p className="text-darkgrey lg:text-[#707070] text-base font-light lg:hover:text-darkgrey duration-300">
									+62 8133-666-4586
								</p>
							</div>
						</div>
						{/* <-- == Connect End == --> */}
					</div>
				</div>
				{/* <-- === Footer Top Container End === --> */}
			</footer>

			{/* <-- === Marquee Text Start === --> */}
			<div className="relative pt-14 lg:pt-40 pb-7 bg-white">
				<MarqueeText />
			</div>
			{/* <-- === Marquee Text End === --> */}
		</>
	);
};

export default Footer;
