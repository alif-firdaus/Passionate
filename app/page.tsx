import Link from "next/link";
import Image from "next/image";

// Import Components //
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainButton from "@/components/main-button";
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
} from "@radix-ui/react-icons";

// Import Assets //
import Bg1 from "@/assets/images/bg1.svg";
import Bg2 from "@/assets/images/bg2.svg";
import Bg3 from "@/assets/images/bg3.svg";
import Avatar from "@/assets/images/avatar.svg";
import fixitmockup from "@/assets/images/fixitmockup.png";
import reportifymockup from "@/assets/images/reportifymockup.png";

export default function Home() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Background Start ==== --> */}
			<Image
				src={Bg1}
				alt="Background"
				priority={true}
				className="absolute top-52 block w-screen opacity-80 lg:hidden"
			/>
			{/* <-- ==== Background End ==== --> */}

			{/* <-- ==== Hero Section Start ==== --> */}
			<section className="flex relative flex-col px-sectionpxsm lg:px-sectionpxlg pt-44 lg:pt-52">
				<h6 className="text-lightgrey text-xs tracking-wide pl-[2px]">
					AVAILABLE FOR WORK
				</h6>
				<h1 className="text-transparent text-[44px] mt-7 leading-none bg-clip-text bg-textgradient">
					Delivering results that go beyond expectations
				</h1>
				<p className="text-lightgrey text-[17px] mt-7 font-extralight lg:font-extralight lg:text-center lg:text-xl lg:mt-14 lg:px-64 lg:leading-relaxed">
					I am Alif Firdaus -{" "}
					<span className="text-white">
						not your typical Designer.
					</span>{" "}
					Think of me more like your Tech-savvy pal who&apos;s been
					crafting pixels for over 3 years and a bit of coding mojo.
					I&apos;m all about turning your ideas and vision to life!
				</p>

				{/* <-- === Connect Button Start === -->  */}
				<div className="lg:justify-center flex items-center mt-14 lg:mt-16">
					<Link href="/connect">
						<MainButton text="Let's talk" />
					</Link>
				</div>
				{/* <-- === Connect Button End === --> */}
			</section>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== Marquee A Section Start ==== --> */}
			<section className="mt-36 lg:mt-52">
				<MarqueeEffectA />
			</section>
			{/* <-- ==== Marquee A Section End ==== --> */}

			{/* <-- ==== Divider Start ==== --> */}
			<div className="mt-4">
				<Divider />
			</div>
			{/* <-- ==== Divider End ==== --> */}

			{/* <-- ==== About Section Start ==== --> */}
			<section className="px-sectionpxsm pt-40 lg:px-sectionpxlg lg:pt-36">
				<h6 className="text-lightgrey text-xs tracking-wide pl-[2px]">
					GET TO KNOW ABOUT ME
				</h6>
				<h1 className="text-transparent text-[44px] mt-7 leading-none bg-clip-text bg-textgradient">
					Elevating products into perfection
				</h1>
				<p className="text-lightgrey text-[17px] mt-7 font-extralight lg:font-extralight lg:text-center lg:text-xl lg:mt-14 lg:px-64 lg:leading-relaxed">
					I specialize in creating visually stunning and intuitive
					user interfaces that not only look good{" "}
					<span className="text-white">
						but also enhance the user experience.
					</span>{" "}
					From wireframes to prototypes, I love transforming ideas.
					into engaging digital solutions. My coding skills add an
					extra layer of understanding to my design process,{" "}
					<span className="text-white">
						allowing for smoother collaboration with developers.
					</span>
				</p>
				<div className="w-full bg-white flex justify-between items-center flex-col rounded-3xl py-7 mt-16">
					<div className="flex flex-col justify-center items-center">
						<Image
							src={Avatar}
							alt="Avatar"
							priority={true}
							className="w-28"
						/>
						<div className="mt-6">
							<h2 className="text-darkgrey text-xl text-center">
								Alif Firdaus
							</h2>
							<p className="text-center text-base text-[#a1a1a1] mt-1 font-light">
								A Product Designer who can code
							</p>
						</div>
					</div>
					<div className="block mt-9">
						<SecondaryButton text="Case studies" />
					</div>
				</div>
			</section>
			{/* <-- ==== About Section End ==== --> */}

			{/* <-- ==== Marquee A Section Start ==== --> */}
			<section className="mt-40 lg:mt-52">
				<MarqueeEffectB />
			</section>
			{/* <-- ==== Marquee A Section End ==== --> */}

			{/* <-- ==== Divider Start ==== --> */}
			<div className="mt-5">
				<Divider />
			</div>
			{/* <-- ==== Divider End ==== --> */}

			{/* <-- ==== About Section Start ==== --> */}
			<section className="pt-40 pb-60 px-sectionpxsm lg:px-sectionpxlg">
				<h2 className="text-[#828282] text-[28px] leading-tight font-light">
					Ever seen a product and thought,{" "}
					<span className="text-white">
						&quot;Wow, that&apos;s slick!&quot;?
					</span>{" "}
					I&apos;m the Picasso of pixels, turning your visions into
					eye candy that{" "}
					<span className="text-white">
						users will love to click around.
					</span>{" "}
					I&apos;m also fluent in making websites come to life.
					Responsive, snappy, and visually pleasing.{" "}
					<span className="text-white">
						Let&apos;s make your product pop!
					</span>
				</h2>
				{/* <-- === Portfolio Button Start === --> */}
				<div className="lg:justify-center flex items-center mt-16 lg:mt-16">
					<Link
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<MainButton text="Works quality" />
					</Link>
				</div>
				{/* <-- === Portfolio Button End === --> */}
			</section>
			{/* <-- ==== About Section End ==== --> */}

			{/* <-- ==== Expertise Section Start ==== --> */}
			<section className="relative px-sectionpxsm lg:px-sectionpxlg">
				<Image
					src={Bg2}
					alt="Background"
					priority={true}
					className="absolute top-10 opacity-80 block inset-0 w-screen lg:hidden"
				/>
				<div className="relative">
					<h6 className="text-lightgrey text-xs tracking-wide pl-[2px]">
						MY EXPERTISE
					</h6>
					<h1 className="text-transparent text-[44px] mt-7 leading-none bg-clip-text bg-textgradient">
						My playground as Tech-savvy artist
					</h1>
					<p className="text-lightgrey text-[17px] mt-7 font-extralight lg:font-extralight lg:text-center lg:text-xl lg:mt-14 lg:px-64 lg:leading-relaxed">
						Here are some snapshots of my the projects I&apos;ve had
						the pleasure of working on
					</p>
				</div>
			</section>
			<section className="relative px-sectionpxsm lg:px-sectionpxlg mt-14">
				<Image
					src={Bg3}
					alt="Background"
					priority={true}
					className="absolute top-96 opacity-80 block inset-0 w-screen lg:hidden"
				/>
				<div className="relative grid grid-cols-1 w-full gap-6 lg:grid-cols-3">
					<div className="flex flex-col px-7 py-7 max-h-fit min-h-[22rem] gap-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
						<div className="flex items-start justify-start w-full">
							<div className="bg-white bg-opacity-10 rounded-lg py-[22px] px-[22px]">
								<CubeIcon className="text-white w-7 h-7" />
							</div>
						</div>
						<div className="flex flex-col w-full justify-end h-full">
							<h4 className="text-white text-2xl font-medium">
								UI/UX Design
							</h4>
							<p className="text-lightgrey mt-4 text-[17px] font-extralight">
								From wireframe to prototype for Website and
								Mobile App, I am able to deliver high-quality
								results.
							</p>
						</div>
					</div>

					<div className="flex flex-col px-7 py-7 max-h-fit min-h-[22rem] gap-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
						<div className="flex items-start justify-start w-full">
							<div className="bg-white bg-opacity-10 rounded-lg py-[22px] px-[22px]">
								<CubeIcon className="text-white w-7 h-7" />
							</div>
						</div>
						<div className="flex flex-col w-full justify-end h-full">
							<h4 className="text-white text-2xl font-medium">
								Project Planning
							</h4>
							<p className="text-lightgrey mt-4 text-[17px] font-extralight">
								From creating sitemap, user-flow, and wireframe
								- I am the architect of design and project
								preparations.
							</p>
						</div>
					</div>

					<div className="flex flex-col px-7 py-7 max-h-fit min-h-[22rem] gap-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
						<div className="flex items-start justify-start w-full">
							<div className="bg-white bg-opacity-10 rounded-lg py-[22px] px-[22px]">
								<CubeIcon className="text-white w-7 h-7" />
							</div>
						</div>
						<div className="flex flex-col w-full justify-end h-full">
							<h4 className="text-white text-2xl font-medium">
								Front-end Dev
							</h4>
							<p className="text-lightgrey mt-4 text-[17px] font-extralight">
								Translating designs into living web magic. I
								take the pretty pixels and make them dance on
								the screen.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col px-7 py-7 bg-[#1a1a1a] mt-7 gap-16 rounded-xl">
					<div className="flex items-start justify-start w-full">
						<h4 className="text-white text-3xl">
							Ready to create cool stuffs?
						</h4>
					</div>
					<div className="flex items-end w-full justify-start h-full">
						<Link
							href="/aliffirdaus-resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							download="ALIF FIRDAUS - RESUME"
						>
							<button className="w-fit flex justify-center items-center bg-white rounded-full text-base text-darkgrey font-medium px-8 pt-3 pb-[14px]">
								Download Resume
							</button>
						</Link>
					</div>
				</div>
			</section>
			{/* <-- ==== Expertise Section End ==== --> */}

			{/* <-- ==== Divider Start ==== --> */}
			<div className="mt-40">
				<Divider />
			</div>
			{/* <-- ==== Divider End ==== --> */}

			{/* <-- ==== Portfolio Section Start ==== --> */}
			<section className="pt-40 px-sectionpxsm lg:px-sectionpxlg">
				<h6 className="text-lightgrey text-xs tracking-wide pl-[2px]">
					FEATURED PROJECTS
				</h6>
				<h1 className="text-transparent text-[44px] mt-7 leading-none bg-clip-text bg-textgradient">
					Showcase time
				</h1>
				<p className="text-lightgrey text-[17px] mt-7 font-extralight lg:font-extralight lg:text-center lg:text-xl lg:mt-14 lg:px-64 lg:leading-relaxed">
					Here are some snapshots of my the projects I&apos;ve had the
					pleasure of working on
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-14">
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
			<div className="mt-40">
				<Divider />
			</div>
			{/* <-- ==== Divider End ==== --> */}

			{/* <-- ==== Why hire me Section Start ==== --> */}
			<section className="pt-40 pb-64 px-sectionpxsm lg:px-sectionpxlg">
				<h6 className="text-lightgrey text-xs tracking-wide pl-[2px]">
					WHY HIRE ME
				</h6>
				<h1 className="text-transparent text-[44px] mt-7 leading-none bg-clip-text bg-textgradient">
					Why I become your best bet
				</h1>

				<div className="grid grid-cols-1 lg:grid-cols-3 mt-[70px] gap-14">
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] items-center align-middle">
							<TransformIcon className="text-white w-5 h-5" />
							<p className="text-[17px] text-white">
								Interface magician
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light mt-4">
							With an eye for aesthetics, I&apos;ll turn your
							ideas into visually enchanting and user-friendly
							interfaces.
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] items-center align-middle">
							<CubeIcon className="text-white w-5 h-5" />
							<p className="text-[17px] text-white">
								Practical code artisan
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light mt-4">
							I am a perpetual code enthusiast, always eager to
							expand my coding horizons in every chance.
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] items-center align-middle">
							<LightningBoltIcon className="text-white w-5 h-5" />
							<p className="text-[17px] text-white">
								Design trend enthusiast
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light mt-4">
							In the tech-landscape, I ride the wave of the latest
							trends, ensuring an engaging digital presence.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-14">
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] items-center align-middle">
							<Component1Icon className="text-white w-5 h-5" />
							<p className="text-[17px] text-white">
								Pixel perfectionist
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light mt-4">
							I am not just detail-oriented; I am a pixel
							perfectionist. Every pixel counts, perfection is
							never wrong!
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] items-center align-middle">
							<AvatarIcon className="text-white w-5 h-5" />
							<p className="text-[17px] text-white">
								User-centric approach
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light mt-4">
							I don&apos;t just make things pretty; I make them
							intuitive. The ease of navigating digital product is
							the key.
						</p>
					</div>
					<div className="w-full flex flex-col items-start justify-between">
						<div className="flex gap-[17px] items-center align-middle">
							<RocketIcon className="text-white w-5 h-5" />
							<p className="text-[17px] text-white">
								Adaptive team player
							</p>
						</div>
						<p className="text-lightgrey text-[15px] font-light mt-4">
							As a flexible teammate, I thrive in collaborative
							environments, seeing each project as a team effort.
						</p>
					</div>
				</div>
			</section>
			{/* <-- ==== Why hire me Section End ==== --> */}

			{/* <-- ==== Get in touch Section Start ==== --> */}
			<section className="relative px-sectionpxsm lg:px-sectionpxlg">
				<Image
					src={Bg1}
					alt="Background"
					priority={true}
					className="absolute block top-0 inset-0 w-screen opacity-80"
				/>
				<h1 className="text-[42px] relative lg:text-[84px] leading-none font-medium text-center lg:px-32 text-transparent bg-clip-text bg-textgradient">
					Turning your ideas into real-life products is my calling
				</h1>

				<div className="items-center justify-center relative flex mt-16">
					<Link href="/connect">
						<button className="bg-white w-fit px-12 pt-5 pb-6 rounded-full text-darkgrey font-medium text-xl">
							Let&apos;s connect
						</button>
					</Link>
				</div>
			</section>
			{/* <-- ==== Get in touch Section End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<section className="mt-64">
				<Footer />
			</section>
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
