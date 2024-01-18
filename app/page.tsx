import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Import Components //
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import HeroIcons //
import {
	ArrowUpRightIcon,
	ArrowDownRightIcon,
} from "@heroicons/react/24/outline";

// Import Assets //
import hero from "@/assets/images/hero.webp";
import herolg from "@/assets/images/herolg.webp";
import figma from "@/assets/images/figma.webp";
import adobexd from "@/assets/images/adobexd.webp";
import react from "@/assets/images/react.webp";
import studio from "@/assets/images/studio.webp";
import tailwind from "@/assets/images/tailwind.webp";
import miro from "@/assets/images/miro.webp";
import pic from "@/assets/images/pic.webp";
import uiux from "@/assets/animations/uiux.gif";
import planning from "@/assets/animations/planning.gif";
import front from "@/assets/animations/front.gif";
import shape from "@/assets/images/shape.webp";
import fixitapp from "@/assets/images/fixitapp.jpg";
import reportify from "@/assets/images/reportify.jpg";

export default function Home() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Hero Section Start ==== --> */}
			<section className="flex flex-col px-sectionpxsm lg:px-sectionpxlg pt-44 lg:pt-52">
				<div className="self-start block lg:hidden">
					<Image
						src={hero}
						alt="Hero Mobile View"
						priority={true}
						className="w-full"
					/>
				</div>
				<div className="items-center justify-center hidden lg:flex lg:px-32">
					<Image
						src={herolg}
						alt="Hero Desktop View"
						priority={true}
						className="w-full"
					/>
				</div>

				<p className="text-sand text-[17px] mt-8 font-light lg:font-extralight lg:text-center lg:text-xl lg:mt-14 lg:px-64 lg:leading-relaxed">
					A tech-savvy artist crafting interfaces for over 4 years,
					blending the art of Product Design with Front-end
					Development.
				</p>

				{/* <-- === Connect Button Start  */}
				<div className="lg:justify-center flex items-center mt-12 lg:mt-16">
					<Link href="/connect">
						<div className="flex items-center mt-2 justify-center w-fit px-8 lg:px-10 gap-4 lg:gap-3 pt-[11px] pb-[13px] font-medium bg-primary rounded-xl lg:rounded-full lg:hover:bg-primaryhover lg:hover:gap-5 duration-300">
							<p className="text-sand text-center text-lg font-normal lg:font-light">
								Let&apos;s talk
							</p>
							<ArrowUpRightIcon className="text-sand w-4" />
						</div>
					</Link>
				</div>
				{/* <-- === Connect Button End  */}
			</section>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== Marquee Section Start ==== --> */}
			<section className="mt-28 pb-32 lg:mt-52">
				<Marquee className="flex items-center flex-shrink-0 h-fit whitespace-nowrap">
					<Image
						src={figma}
						alt="Figma"
						priority={true}
						className="h-6 w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={adobexd}
						alt="Adobe XD"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={react}
						alt="React"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={studio}
						alt="Invision Studio"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={tailwind}
						alt="Tailwind"
						priority={true}
						className="h-[18px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={miro}
						alt="Miro"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={figma}
						alt="Figma"
						priority={true}
						className="h-6 w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={adobexd}
						alt="Adobe XD"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={react}
						alt="React"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={studio}
						alt="Invision Studio"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={tailwind}
						alt="Tailwind"
						priority={true}
						className="h-[18px] w-auto mx-7 lg:mx-12"
					/>
					<Image
						src={miro}
						alt="Miro"
						priority={true}
						className="h-[22px] w-auto mx-7 lg:mx-12"
					/>
				</Marquee>
			</section>
			{/* <-- ==== Marquee Section End ==== --> */}

			{/* <-- ==== About Section Start ==== --> */}
			<section className="px-sectionpxsm pt-20 bg-primary lg:px-sectionpxlg lg:pt-36">
				<h1 className="text-[40px] lg:text-[84px] leading-none font-medium lg:text-center text-sand lg:px-32">
					Elevating products into perfection
				</h1>
				<p className="text-sand mt-8 text-[17px] lg:text-center lg:text-xl lg:leading-relaxed lg:mt-14 lg:px-44 font-light">
					Hi, I am Alif Firdaus, a Product Designer and Front-end
					Developer known for having attention to detail and depth
					understanding of the harmony between Product Interface and
					also User Experience.
				</p>
				{/* <-- === Case Study Button Start === --> */}
				<div className="flex lg:justify-center lg:mt-16 items-center mt-12">
					<Link href="/case-studies">
						<div className="flex items-center mt-2 justify-center gap-4 w-fit px-6 pt-[11px] pb-[13px] font-medium bg-sand rounded-xl lg:rounded-full lg:gap-3 lg:px-8 lg:hover:gap-5 duration-300">
							<p className="text-black text-center text-lg font-normal">
								Case Studies
							</p>
							<ArrowUpRightIcon className="text-grey w-4" />
						</div>
					</Link>
				</div>
				{/* <-- === Case Study Button End === --> */}

				<div className="flex items-center justify-center lg:px-72 mt-14 lg:mt-24">
					<Image
						src={pic}
						alt="Picture Decoration"
						priority={true}
						className="w-full h-auto"
					/>
				</div>
			</section>
			{/* <-- ==== About Section End ==== --> */}

			{/* <-- ==== Expertise Section Start ==== --> */}
			<section className="px-sectionpxsm pt-20 pb-28 lg:pb-52 lg:px-sectionpxlg lg:pt-36">
				<div className="flex flex-col lg:flex-row lg:justify-between">
					<div className="flex flex-col lg:justify-start lg:w-full">
						<p className="text-lightgrey tracking-wide text-xs">
							E X P E R T I S E
						</p>
						<h1 className="text-[28px] lg:text-4xl mt-6 leading-none font-medium text-sand">
							As a Tech-savvy Artist, I dive into the realm of
							perfection
						</h1>
					</div>
					{/* <-- === Portfolio Button Start === --> */}
					<div className="justify-start flex items-center mt-12 lg:mt-0 lg:self-end lg:justify-end lg:w-full">
						<Link href="/case-studies">
							<div className="flex items-center justify-center gap-4 w-fit px-6 pt-[11px] lg:gap-3 lg:px-8 lg:hover:gap-5 duration-300 lg:rounded-full pb-[13px] font-medium bg-darkgrey rounded-xl">
								<p className="text-sand text-center text-lg font-light">
									Works quality
								</p>
								<ArrowUpRightIcon className="text-lightgrey w-4" />
							</div>
						</Link>
					</div>
				</div>
				{/* <-- === Portfolio Button End === --> */}

				{/* <-- === Expertise Container Start === --> */}
				<div className="flex flex-col gap-[22px] mt-20 lg:mt-24 lg:flex-row">
					{/* <-- === Expertise UI/UX Design Start === --> */}
					<div className="flex flex-col rounded-xl gap-28 bg-darkgrey px-7 pt-10 pb-8">
						<Image
							src={uiux}
							alt="UI/UX Design"
							priority={true}
							className="w-[82px] h-auto"
						/>
						<div className="flex-flex-col">
							<h2 className="text-[28px] text-sand">
								UI/UX Design
							</h2>
							<p className="text-sand mt-6 text-lg font-light">
								I am highly-skilled at architecting User
								Interface and User Experience for mobile apps
								and websites.
							</p>
						</div>
					</div>
					{/* <-- === Expertise UI/UX Design End === --> */}

					{/* <-- === Expertise Project Planning Start === --> */}
					<div className="flex flex-col rounded-xl gap-28 bg-darkgrey px-7 pt-10 pb-8">
						<Image
							src={planning}
							alt="Project Planning"
							priority={true}
							className="w-20 h-auto"
						/>
						<div className="flex-flex-col">
							<h2 className="text-[28px] text-sand">
								Project Planning
							</h2>
							<p className="text-sand mt-6 text-lg font-light">
								I tend to create wireframe, user-flow, etc to
								determine intended features and functionalities.
							</p>
						</div>
					</div>
					{/* <-- === Expertise Project Planning End === --> */}

					{/* <-- === Expertise Front-end Dev Start === --> */}
					<div className="flex flex-col rounded-xl gap-28 bg-darkgrey px-7 pt-10 pb-8">
						<Image
							src={front}
							alt="Front-end Dev"
							priority={true}
							className="w-20 h-auto"
						/>
						<div className="flex-flex-col">
							<h2 className="text-[28px] text-sand">
								Front-end Dev
							</h2>
							<p className="text-sand mt-6 text-lg font-light">
								I am skilled in building web-app using React,
								Next JS, Tailwind and other relevant Frameworks.
							</p>
						</div>
					</div>
					{/* <-- === Expertise Front-end Dev End === --> */}
				</div>
				{/* <-- === Expertise Container End === --> */}
			</section>
			{/* <-- ==== Expertise Section End ==== --> */}

			{/* <-- ==== Portfolio Showcase Section Start ==== --> */}
			<section className="px-sectionpxsm pt-24 pb-10 bg-sand lg:px-sectionpxlg lg:pt-40">
				<div className="flex flex-col lg:flex-row lg:gap-7">
					<div className="flex flex-col">
						<Image
							src={reportify}
							alt="Reportify Mockup"
							priority={true}
							className="w-full"
						/>
						<div className="w-full flex flex-col px-7 pt-6 pb-8 bg-primary lg:hover:bg-black duration-300 cursor-pointer">
							<h2 className="text-2xl text-sand">Reportify</h2>
							<p className="text-sand font-light mt-4 text-lg">
								API-Powered report generator
							</p>
							<div className="text-[#C7C5C3] text-lg mt-[2px] font-light flex gap-3 items-center">
								<p>UI/UX</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>Research</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>SAAS</p>
							</div>
							<div className="items-center justify-start mt-6">
								<Link href="/case-studies/reportify">
									<div className="flex items-center mt-2 justify-center gap-3 w-fit pb-1 border-b-[0.5px] border-sand font-medium lg:hover:gap-5 duration-300">
										<p className="text-sand text-center text-lg font-medium">
											Case Study
										</p>
										<ArrowUpRightIcon className="text-sand w-4" />
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div className="flex flex-col mt-6 lg:mt-0">
						<Image
							src={fixitapp}
							alt="Fixit Mobile App Mockup"
							priority={true}
							className="w-full"
						/>
						<div className="w-full flex flex-col px-7 pt-6 pb-8 bg-primary lg:hover:bg-black duration-300 cursor-pointer">
							<h2 className="text-2xl text-sand">Fixit App</h2>
							<p className="text-sand font-light mt-4 text-lg">
								Connecting people with service providers
							</p>
							<div className="text-[#C7C5C3] text-lg mt-[2px] font-light flex gap-3 items-center">
								<p>UI/UX</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>Research</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>Mobile App</p>
							</div>
							<div className="items-center justify-start mt-6">
								<Link href="/case-studies/fixit">
									<div className="flex items-center mt-2 justify-center gap-3 w-fit pb-1 border-b-[0.5px] border-sand font-medium lg:hover:gap-5 duration-300">
										<p className="text-sand text-center text-lg font-medium">
											Case Study
										</p>
										<ArrowUpRightIcon className="text-sand w-4" />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row lg:gap-7 lg:mt-16">
					<div className="flex flex-col mt-6 lg:mt-0">
						<Image
							src={reportify}
							alt="Reportify Mockup"
							priority={true}
							className="w-full"
						/>
						<div className="w-full flex flex-col px-7 pt-6 pb-8 bg-primary lg:hover:bg-black duration-300 cursor-pointer">
							<h2 className="text-2xl text-sand">AQUA Wallet</h2>
							<p className="text-sand font-light mt-4 text-lg">
								E-wallet to transfer and receive crypto
							</p>
							<div className="text-[#C7C5C3] text-lg mt-[2px] font-light flex gap-3 items-center">
								<p>UI/UX</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>Research</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>Mobile App</p>
							</div>
							<div className="items-center justify-start mt-6">
								<Link href="/case-studies/aqua-wallet">
									<div className="flex items-center mt-2 justify-center gap-3 w-fit pb-1 border-b-[0.5px] border-sand font-medium lg:hover:gap-5 duration-300">
										<p className="text-sand text-center text-lg font-medium">
											Case Study
										</p>
										<ArrowUpRightIcon className="text-sand w-4" />
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div className="flex flex-col mt-6 lg:mt-0">
						<Image
							src={reportify}
							alt="Reportify Mockup"
							priority={true}
							className="w-full"
						/>
						<div className="w-full flex flex-col px-7 pt-6 pb-8 bg-primary lg:hover:bg-black duration-300 cursor-pointer">
							<h2 className="text-2xl text-sand">
								Ecommerce Builder
							</h2>
							<p className="text-sand font-light mt-4 text-lg">
								Enabling businesses to build online store
							</p>
							<div className="text-[#C7C5C3] text-lg mt-[2px] font-light flex gap-3 items-center">
								<p>Planning</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>UI/UX</p>
								<div className="h-1 w-1 rounded-full bg-lightgrey"></div>
								<p>Website</p>
							</div>
							<div className="items-center justify-start mt-6">
								<Link href="/case-studies/ecommerce-builder">
									<div className="flex items-center mt-2 justify-center gap-3 w-fit pb-1 border-b-[0.5px] border-sand font-medium lg:hover:gap-5 duration-300">
										<p className="text-sand text-center text-lg font-medium">
											Case Study
										</p>
										<ArrowUpRightIcon className="text-sand w-4" />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <-- ==== Portfolio Showcase Section End ==== --> */}

			{/* <-- ==== Why Hire Me Section Start ==== --> */}
			<section className="px-sectionpxsm bg-sand pt-20 pb-28 lg:px-sectionpxlg lg:pt-48 lg:pb-52">
				<div className="flex flex-col lg:flex-row lg:justify-between">
					<div className="flex flex-col lg:justify-start lg:w-full">
						<p className="text-lightgrey tracking-wide text-xs">
							W H Y H I R E M E
						</p>
						<h1 className="text-[28px] lg:text-4xl mt-6 leading-none font-medium text-black">
							Why I am your best best to bring your vision to life
						</h1>
					</div>
					{/* <-- === Download CV Button Start === --> */}
					<div className="justify-start flex items-center mt-12 lg:mt-0 lg:self-end lg:justify-end lg:w-full">
						<Link
							href="/aliffirdaus-resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							download="ALIF FIRDAUS - RESUME"
						>
							<button className="flex items-center justify-center gap-4 w-fit px-6 pt-[11px] lg:gap-3 lg:px-8 lg:hover:gap-5 duration-300 lg:rounded-full pb-[13px] font-medium bg-darkgrey rounded-xl">
								<p className="text-sand text-center text-lg font-light">
									Download my CV
								</p>
								<ArrowDownRightIcon className="text-lightgrey w-4" />
							</button>
						</Link>
					</div>
					{/* <-- === Download CV Button End === --> */}
				</div>

				{/* <-- === Why Hire Me Container Start === --> */}
				<div className="flex flex-col gap-[22px] mt-20 lg:mt-24 lg:flex-row">
					{/* <-- === Why Hire Me Detail-oriented Start === --> */}
					<div className="flex flex-col rounded-xl gap-28 bg-darkgrey px-7 pt-10 pb-8">
						<Image
							src={shape}
							alt="UI/UX Design Icon"
							priority={true}
							className="w-20 h-auto"
						/>
						<div className="flex-flex-col">
							<h2 className="text-[28px] text-sand">
								Detail-oriented
							</h2>
							<p className="text-sand mt-6 text-lg font-light">
								I am highly-skilled at architecting User
								Interface and User Experience for mobile apps
								and websites.
							</p>
						</div>
					</div>
					{/* <-- === Why Hire Me Detail-oriented End === --> */}

					{/* <-- === Why Hire Me Collaborative Start === --> */}
					<div className="flex flex-col rounded-xl gap-28 bg-darkgrey px-7 pt-10 pb-8">
						<Image
							src={shape}
							alt="Project Planning Icon"
							priority={true}
							className="w-20 h-auto"
						/>
						<div className="flex-flex-col">
							<h2 className="text-[28px] text-sand">
								Collaborative
							</h2>
							<p className="text-sand mt-6 text-lg font-light">
								I tend to create wireframe, user-flow, etc to
								determine intended features and functionalities.
							</p>
						</div>
					</div>
					{/* <-- === Why Hire Me Collaborative End === --> */}

					{/* <-- === Why Hire Me Creative Thinker Start === --> */}
					<div className="flex flex-col rounded-xl gap-28 bg-darkgrey px-7 pt-10 pb-8">
						<Image
							src={shape}
							alt="Front-end Dev Icon"
							priority={true}
							className="w-20 h-auto"
						/>
						<div className="flex-flex-col">
							<h2 className="text-[28px] text-sand">
								Creative thinker
							</h2>
							<p className="text-sand mt-6 text-lg font-light">
								I am skilled in building web-app using React,
								Next JS, Tailwind and other relevant Frameworks.
							</p>
						</div>
					</div>
					{/* <-- === Why Hire Me Creative Thinker End === --> */}
				</div>
				{/* <-- === Why Hire Me Container End === --> */}
			</section>
			{/* <-- ==== Why Hire Me Section End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<section className="lg:px-7 px-0 lg:pb-7 bg-sand">
				<Footer />
			</section>
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
