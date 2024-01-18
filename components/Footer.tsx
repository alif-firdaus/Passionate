import Link from "next/link";
import Image from "next/image";

// Import HeroIcons //
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Import Assets //
import memoji from "@/assets/animations/memoji.gif";
import logowhite from "@/assets/images/logowhite.webp";

const Footer = () => {
	return (
		<div className="px-sectionpxsm pt-24 lg:pt-32 pb-10 bg-black lg:rounded-2xl lg:px-[112px]">
			{/* <-- === Get Started Start === --> */}
			<div className="flex flex-col">
				<div className="flex justify-center">
					<Image
						src={memoji}
						alt="Memoji"
						priority={true}
						className="w-24 h-auto rounded-full lg:w-32"
					/>
				</div>
				<h1 className="text-[40px] lg:text-7xl lg:mt-14 leading-none font-medium mt-10 text-sand text-center">
					Turning your ideas into real-life products is my calling
				</h1>
			</div>
			{/* <-- === Get Started End ====--> */}

			{/* <-- === Footer Top Container Start === --> */}
			<div className="flex flex-col mt-24 lg:flex-row lg:justify-between lg:mt-52">
				{/* <-- == Logo & Tagline Start == --> */}
				<div className="flex flex-col">
					<Link href="/">
						<Image
							src={logowhite}
							alt="Passionate Logo"
							priority={true}
							className="w-[150px] h-auto"
						/>
					</Link>
					<p className="text-lightgrey mt-3 lg:mt-5 text-base font-light">
						Crafting pixels to make dreams come true
					</p>
				</div>
				{/* <-- == Logo & Tagline End == --> */}

				{/* <-- == Navigate Start == --> */}
				<div className="flex flex-col mt-14 lg:mt-0">
					<h2 className="text-sand text-xl font-medium">Navigate</h2>
					<div className="flex flex-col mt-5 gap-3">
						<Link href="/">
							<p className="text-lightgrey text-base font-light lg:hover:text-sand duration-300">
								Home
							</p>
						</Link>
						<Link href="/expertise">
							<p className="text-lightgrey text-base font-light lg:hover:text-sand duration-300">
								Expertise
							</p>
						</Link>
						<Link href="/case-studies">
							<p className="text-lightgrey text-base font-light lg:hover:text-sand duration-300">
								Case Studies
							</p>
						</Link>
						<Link
							href="https://dribbble.com/aliffirdaus"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-lightgrey text-base font-light lg:hover:text-sand duration-300">
								Portfolio
							</p>
						</Link>
					</div>
				</div>
				{/* <-- == Navigate End == --> */}

				{/* <-- == Connect Start == --> */}
				<div className="flex flex-col mt-14 lg:mt-0">
					<h2 className="text-sand text-xl font-medium">Connect</h2>
					<div className="flex flex-col mt-5 gap-3">
						<p className="text-lightgrey text-base font-light">
							+62 813-3666-4586
						</p>
						<p className="text-lightgrey text-base font-light">
							www.aliffirdaus.com
						</p>
						<p className="text-lightgrey text-base font-light">
							aliffirdaus@petaniweb.com
						</p>
					</div>
				</div>
				{/* <-- == Connect End == --> */}
			</div>
			{/* <-- === Footer Top Container End === --> */}

			{/* <-- === Footer Bottom Container Start === --> */}
			<div className="flex flex-col mt-12 lg:mt-20 pt-10 border-t-[0.1px] items-center justify-center border-softgrey">
				{/* <-- == Social Links Start == --> */}
				<div className="flex gap-6 lg:gap-10">
					{/* <-- = Linkedin Start = --> */}
					<Link
						href="https://www.linkedin.com/in/aliffirdaus97/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-2 group">
							<p className="text-sand text-base font-light">
								Linkedin
							</p>
							<ArrowUpRightIcon className="w-[14px] text-lightgrey lg:group-hover:text-sand duration-300" />
						</div>
					</Link>
					{/* <-- = Linkedin End = --> */}

					{/* <-- = Dribbble Start = --> */}
					<Link
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-2 group">
							<p className="text-sand text-base font-light">
								Dribbble
							</p>
							<ArrowUpRightIcon className="w-[14px] text-lightgrey lg:group-hover:text-sand duration-300" />
						</div>
					</Link>
					{/* <-- = Dribbble End = --> */}

					{/* <-- = Github Start = --> */}
					<Link
						href="https://github.com/alif-firdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-2 group">
							<p className="text-sand text-base font-light">
								Github
							</p>
							<ArrowUpRightIcon className="w-[14px] text-lightgrey lg:group-hover:text-sand duration-300" />
						</div>
					</Link>
					{/* <-- = Github End = --> */}
				</div>
				{/* <-- == Social Links End == --> */}

				{/* <-- == Copyright Start == --> */}
				<p className="text-lightgrey text-base text-center font-light mt-7">
					&copy; Passionate 2023
				</p>
				{/* <-- == Copyright End == --> */}
			</div>
			{/* <-- === Footer Bottom Container End === --> */}
		</div>
	);
};

export default Footer;
