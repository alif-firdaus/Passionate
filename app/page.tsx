import Link from "next/link";
import Image from "next/image";

// Import Components //
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import MarqueeExpertise from "@/components/marquee-expertise";
import Footer from "@/components/Footer";
import MainButton from "@/components/main-button";
import MainButtonLg from "@/components/main-button-lg";
import SecondaryButtonLg from "@/components/secondary-button-lg";
import SecondaryButton from "@/components/secondary-button";
import Divider from "@/components/Divider";
import MarqueeEffectA from "@/components/marquee-effect-a";
import MarqueeEffectB from "@/components/marquee-effect-b";
import PortfolioCard from "@/components/portfolio-card";

// Import Radix Icons //
import {
	CubeIcon,
	TransformIcon,
	LightningBoltIcon,
	Component1Icon,
	AvatarIcon,
	RocketIcon,
	FrameIcon,
	CursorArrowIcon,
	CodeIcon,
} from "@radix-ui/react-icons";

// Import Assets //
import hustler from "@/assets/images/hustler.webp";
import hispter from "@/assets/images/hipster.webp";
import hacker from "@/assets/images/hacker.webp";
import Bg1 from "@/assets/images/bg1.svg";
import Bg2 from "@/assets/images/bg2.svg";
import Bg3 from "@/assets/images/bg3.svg";
import Bg1lg from "@/assets/images/bg1lg.svg";
import Avatar from "@/assets/images/avatar.svg";
import fixitmockup from "@/assets/images/fixitmockup.png";
import reportifymockup from "@/assets/images/reportifymockup.png";

export default function Home() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Header Start ==== --> */}
			<Header />
			{/* <-- ==== Header End ==== --> */}

			{/* <-- ==== Hero Section Start ==== --> */}
			<section className="block pt-[146px] justify-center items-center px-sectionpxsm lg:px-sectionpxlg">
				{/* <h6 className="text-akarmula text-[40px] text-center leading-none">
					STAND OUT
					<br />
					<span className="text-transparent bg-clip-text bg-primarygradient">
						AS YOUR GO-TO
					</span>
					<br />
					PIXEL CRAFTER
				</h6> */}
				<h6 className="text-akarmula text-6xl leading-none">
					STAND OUT{" "}
					<span className="text-transparent bg-clip-text bg-primarygradient">
						AS YOUR GO-TO
					</span>{" "}
					PIXEL CRAFTER
				</h6>
			</section>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== About Section Start ==== --> */}
			<section className="px-sectionpxsm flex flex-col pt-72 lg:px-sectionpxlg lg:pt-56">
				<h3 className="text-[32px] text-akarmula leading-none font-medium">
					My expertise.
					<br />
					Your ideas and vision.
					<br />
					<span className="text-transparent bg-clip-text bg-primarygradient">
						Endless possibilities.
					</span>
				</h3>
			</section>

			<section className="w-full mt-16 h-auto">
				<video
					loop={true}
					autoPlay={true}
					muted={true}
					controls={false}
					playsInline
				>
					<source src="./cube.mp4" type="video/mp4" />
				</video>
			</section>

			<section className="flex px-sectionpxsm flex-col mt-16">
				<p className="text-lg text-grey">
					<span className="text-akarmula">
						With a passion for pushing boundaries
					</span>{" "}
					and turning idea into captivating digital products. Your
					idea is my muse, and together, we&apos;ll create something
					bold and outstanding that resonates deeply with you and your
					audience.
				</p>
				<div className="flex flex-col mt-12 gap-6">
					<MainButton text="Schedule a Call" />
					<SecondaryButton text="Download my Resume" />
				</div>
			</section>
			{/* <-- ==== About Section End ==== --> */}

			{/* <-- ==== Expertise Section Start ==== --> */}
			<section className="flex flex-col pt-[76px] mt-52 lg:pt-52 pb-48 lg:pb-96 bg-[#FDFDFB]">
				<MarqueeExpertise />
				<div className="w-full flex gap-6 flex-col px-sectionpxsm mt-20">
					{/* <-- === Hustler Start === --> */}
					<div className="bg-bgbase flex flex-col px-8 py-8 rounded-3xl h-auto">
						<div className="flex flex-col">
							<p className="text-base text-akarmula font-light">
								Hustler
							</p>
							<div className="flex flex-col mt-20">
								<h3 className="text-akarmula text-3xl">
									Strategy
								</h3>
								<p className="text-base mt-4 font-extralight text-grey leading-snug">
									Your satisfaction is highly valuable, good
									is not enough,{" "}
									<span className="text-akarmula">
										surpassing your expectations is my true
										objective.
									</span>
								</p>
								<div className="w-auto h-auto flex-wrap flex gap-3 mt-9">
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										Brand Strategy
									</div>
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										Sitemap
									</div>
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										User-flow
									</div>
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										User Persona
									</div>
								</div>
								<div className="w-full mt-12 h-full flex justify-center items-center bg-[#1e1e1e] rounded-2xl py-6 px-4">
									<Image
										src={hustler}
										alt="Hustler Illustration"
										priority={true}
										className="w-56 h-56"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* <-- === Hustler End === --> */}

					{/* <-- === Hipster Start === --> */}
					<div className="bg-[#F1F1F1] flex flex-col px-8 py-8 rounded-3xl h-auto">
						<div className="flex flex-col">
							<p className="text-base text-black font-normal">
								Hipster
							</p>
							<div className="flex flex-col mt-20">
								<h3 className="text-black font-medium text-3xl">
									Creative
								</h3>
								<p className="text-base mt-4 font-light text-black leading-snug">
									Your satisfaction is highly valuable, good
									is not enough, surpassing your expectations
									is my true objective.
								</p>
								<div className="w-auto h-auto flex-wrap flex gap-3 mt-9">
									<div className="w-fit text-base text-black font-medium h-fit px-4 py-2 bg-[#E5E5E5] rounded-md flex items-center justify-center">
										UI/UX Design
									</div>
									<div className="w-fit text-base text-black font-medium h-fit px-4 py-2 bg-[#E5E5E5] rounded-md flex items-center justify-center">
										Design Systems
									</div>
									<div className="w-fit text-base text-black font-medium h-fit px-4 py-2 bg-[#E5E5E5] rounded-md flex items-center justify-center">
										Brand Guidelines
									</div>
									<div className="w-fit text-base text-black font-medium h-fit px-4 py-2 bg-[#E5E5E5] rounded-md flex items-center justify-center">
										Wireframe
									</div>
									<div className="w-fit text-base text-black font-medium h-fit px-4 py-2 bg-[#E5E5E5] rounded-md flex items-center justify-center">
										Framer Development
									</div>
									<div className="w-fit text-base text-black font-medium h-fit px-4 py-2 bg-[#E5E5E5] rounded-md flex items-center justify-center">
										Webflow Development
									</div>
								</div>
								<div className="w-full mt-12 h-full flex justify-center items-center bg-[#E5E5E5] rounded-2xl py-6 px-4">
									<Image
										src={hispter}
										alt="Hipster Illustration"
										priority={true}
										className="w-56 h-56"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* <-- === Hipster End === --> */}

					{/* <-- === Hacker Start === --> */}
					<div className="bg-bgbase flex flex-col px-8 py-8 rounded-3xl h-auto">
						<div className="flex flex-col">
							<p className="text-base text-akarmula font-light">
								Hacker
							</p>
							<div className="flex flex-col mt-20">
								<h3 className="text-akarmula text-3xl">
									Development
								</h3>
								<p className="text-base mt-4 font-extralight text-grey leading-snug">
									Your satisfaction is highly valuable, good
									is not enough,{" "}
									<span className="text-akarmula">
										surpassing your expectations is my true
										objective.
									</span>
								</p>
								<div className="w-auto h-auto flex-wrap flex gap-3 mt-9">
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										HTML5
									</div>
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										CSS3
									</div>
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										React Js
									</div>
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										Next Js
									</div>
									<div className="w-fit text-base text-akarmula font-light h-fit px-4 py-2 bg-[#1e1e1e] rounded-md flex items-center justify-center">
										TailwindCSS
									</div>
								</div>
								<div className="w-full mt-12 h-full flex justify-center items-center bg-[#1e1e1e] rounded-2xl py-6 px-4">
									<Image
										src={hacker}
										alt="Hacker Illustration"
										priority={true}
										className="w-56 h-56"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* <-- === Hacker End === --> */}
				</div>
			</section>
			{/* <-- ==== Expertise Section End ==== --> */}

			{/* <-- ==== Bento Grid Section Start ==== --> */}
			{/* <-- ==== Bento Grid Section End ==== --> */}

			{/* <-- ==== Quote Section Start ==== --> */}
			<section className="w-full px-sectionpxsm py-44 flex justify-center items-center">
				<h6 className="text-7xl text-center text-akarmula leading-none">
					LESS IS
					<br />
					<span className="text-transparent bg-clip-text bg-primarygradient">
						MOOORE
					</span>
				</h6>
			</section>
			{/* <-- ==== Quote Section End ==== --> */}

			{/* <-- ==== Portfolio Section Start ==== --> */}
			<section className="relative pt-40 lg:pt-[450px] px-sectionpxsm lg:px-sectionpxlg">
				<h6 className="text-lightgrey text-xs lg:text-[10px] tracking-wide lg:tracking-widest pl-[2px] lg:pl-1">
					FEATURED PROJECTS
				</h6>
				<h1 className="text-transparent text-[44px] lg:text-[74px] mt-7 lg:mt-9 leading-none lg:font-medium bg-clip-text bg-textgradient">
					Showcase time
				</h1>

				<p className="text-lightgrey text-[17px] mt-7 font-extralight lg:text-lg lg:mt-10">
					Here are some snapshots of my the projects I&apos;ve had the
					pleasure of working on
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-14 lg:mt-24">
					<PortfolioCard imageSrc={fixitmockup}>
						<h3 className="text-white text-lg">Fixit Mobile App</h3>
						<div className="flex justify-start items-center gap-[10px] mt-[6px]">
							<p className="text-base text-lightgrey font-extralight">
								UI/UX
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								Research
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								Mobile App
							</p>
						</div>
					</PortfolioCard>

					<PortfolioCard imageSrc={reportifymockup}>
						<h3 className="text-white text-lg">Reportify</h3>
						<div className="flex justify-start items-center gap-[10px] mt-[6px]">
							<p className="text-base text-lightgrey font-extralight">
								UI/UX
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								Development
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								SAAS
							</p>
						</div>
					</PortfolioCard>

					<PortfolioCard imageSrc={fixitmockup}>
						<h3 className="text-white text-lg">Petaniweb</h3>
						<div className="flex justify-start items-center gap-[10px] mt-[6px]">
							<p className="text-base text-lightgrey font-extralight">
								UI/UX
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								Development
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								Website
							</p>
						</div>
					</PortfolioCard>

					<PortfolioCard imageSrc={reportifymockup}>
						<h3 className="text-white text-lg">AQUA Wallet</h3>
						<div className="flex justify-start items-center gap-[10px] mt-[6px]">
							<p className="text-base text-lightgrey font-extralight">
								UI/UX
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								Prototyping
							</p>
							<div className="w-[2px] h-[2px] bg-lightgrey rounded-full"></div>
							<p className="text-base text-lightgrey font-extralight">
								Mobile App
							</p>
						</div>
					</PortfolioCard>
				</div>
			</section>
			{/* <-- ==== Portfolio Section End ==== --> */}

			{/* <-- ==== Divider Start ==== --> */}
			<div className="relative mt-40 lg:mt-64">
				<Divider />
			</div>
			{/* <-- ==== Divider End ==== --> */}

			{/* <-- ==== Why hire me Section Start ==== --> */}
			<section className="relative pt-40 lg:pt-64 pb-64 lg:pb-40 px-sectionpxsm lg:px-sectionpxlg">
				<h6 className="text-lightgrey text-xs lg:text-[10px] tracking-wide lg:tracking-widest pl-[2px] lg:pl-1">
					WHY HIRE ME
				</h6>

				<h1 className="block lg:hidden text-transparent text-[44px] mt-7 leading-none bg-clip-text bg-textgradient">
					Why I become your best bet
				</h1>
				<h1 className="hidden lg:block text-transparent text-[74px] font-medium mt-9 leading-[1.1] bg-clip-text bg-textgradient">
					Reasons why I
					<br />
					become your best bet
				</h1>

				<div className="grid grid-cols-1 lg:grid-cols-3 mt-[70px] lg:mt-28 gap-14">
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] lg:gap-5 items-center align-middle">
							<TransformIcon className="text-white w-5 h-5 lg:w-[18px] lg:h-[18px]" />
							<p className="text-[17px] lg:text-base text-white lg:font-light">
								Interface magician
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light lg:font-extralight mt-4">
							With an eye for aesthetics, I&apos;ll turn your
							ideas into visually enchanting and user-friendly
							interfaces.
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] lg:gap-5 items-center align-middle">
							<CubeIcon className="text-white w-5 h-5 lg:w-[18px] lg:h-[18px]" />
							<p className="text-[17px] lg:text-base text-white lg:font-light">
								Practical code artisan
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light lg:font-extralight mt-4">
							I am a perpetual code enthusiast, always eager to
							expand my coding horizons in every chance.
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] lg:gap-5 items-center align-middle">
							<LightningBoltIcon className="text-white w-5 h-5 lg:w-[18px] lg:h-[18px]" />
							<p className="text-[17px] lg:text-base text-white lg:font-light">
								Design trend enthusiast
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light lg:font-extralight mt-4">
							In the tech-landscape, I ride the wave of the latest
							trends, ensuring an engaging digital presence.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 mt-14 lg:mt-[70px] gap-14">
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] lg:gap-5 items-center align-middle">
							<Component1Icon className="text-white w-5 h-5 lg:w-[18px] lg:h-[18px]" />
							<p className="text-[17px] lg:text-base text-white lg:font-light">
								Pixel perfectionist
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light lg:font-extralight mt-4">
							I am not just detail-oriented; I am a pixel
							perfectionist. Every pixel counts, perfection is
							never wrong!
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] lg:gap-5 items-center align-middle">
							<AvatarIcon className="text-white w-5 h-5 lg:w-[18px] lg:h-[18px]" />
							<p className="text-[17px] lg:text-base text-white lg:font-light">
								User-centric approach
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light lg:font-extralight mt-4">
							I don&apos;t just make things pretty; I make them
							intuitive. The ease of navigating digital product is
							the key.
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] lg:gap-5 items-center align-middle">
							<RocketIcon className="text-white w-5 h-5 lg:w-[18px] lg:h-[18px]" />
							<p className="text-[17px] lg:text-base text-white lg:font-light">
								Adaptive team player
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light lg:font-extralight mt-4">
							As a flexible teammate, I thrive in collaborative
							environments, seeing each project as a team effort.
						</p>
					</div>
				</div>
			</section>
			{/* <-- ==== Why hire me Section End ==== --> */}

			{/* <-- ==== Get in touch Section Start ==== --> */}
			<section className="relative px-sectionpxsm lg:pt-[350px] lg:px-sectionpxlg">
				<Image
					src={Bg1}
					alt="Background"
					priority={true}
					className="absolute block top-0 lg:top-10 inset-0 w-screen opacity-70"
				/>

				<h1 className="block lg:hidden text-[42px] relative leading-none font-medium text-center text-transparent bg-clip-text bg-textgradient">
					Turning your ideas into real-life products is my calling
				</h1>
				<h1 className="lg:block hidden text-[100px] relative leading-none font-medium text-center text-transparent bg-clip-text bg-textgradient">
					Turning your ideas
					<br />
					into real-life products
					<br />
					is my calling
				</h1>

				<div className="items-center justify-center relative flex mt-16 lg:mt-28">
					<Link href="/connect">
						<button className="bg-white w-fit px-12 lg:px-14 pt-5 pb-6 rounded-full text-darkgrey text-xl lg:hover:bg-softgrey duration-300">
							Let&apos;s connect
						</button>
					</Link>
				</div>
			</section>
			{/* <-- ==== Get in touch Section End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<section className="relative mt-64 lg:mt-[400px]">
				<Footer />
			</section>
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
