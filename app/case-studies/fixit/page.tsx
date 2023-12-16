import Image from "next/image";

// Import Components //
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import Assets //
import logo from "@/assets/fixit/logo.png";
import mockup from "@/assets/fixit/mockup.png";
import navigation from "@/assets/fixit/navigation.png";
import homepage from "@/assets/fixit/homepage.png";
import jobposting1 from "@/assets/fixit/jobposting1.png";
import jobposting2 from "@/assets/fixit/jobposting2.png";
import contract1 from "@/assets/fixit/kontrak1.png";
import contract2 from "@/assets/fixit/kontrak2.png";
import payment1 from "@/assets/fixit/pembayaran1.png";
import payment2 from "@/assets/fixit/pembayaran2.png";

const Fixit = () => {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Hero Section Start ==== --> */}
			<section className="flex flex-col px-sectionpxsm lg:px-sectionpxlg pt-40 lg:pt-60 pb-20 lg:flex-row items-center justify-center lg:gap-16">
				<div className="flex flex-col lg:w-full">
					<Image
						src={logo}
						alt="Fixit Logo"
						priority={true}
						className="w-16 h-auto lg:w-20"
					/>
					<h1 className="text-[40px] lg:text-6xl mt-8 lg:mt-12 leading-none font-medium text-sand">
						Connecting people with the best local service providers
					</h1>
					<div className="flex gap-4 mt-14 lg:mt-20">
						<div className="flex text-lightgrey text-sm bg-grey py-2 px-5 justify-center items-center rounded-lg">
							UI / UX
						</div>
						<div className="flex text-lightgrey text-sm bg-grey py-2 px-5 justify-center items-center rounded-lg">
							Research
						</div>
						<div className="flex text-lightgrey text-sm bg-grey py-2 px-5 justify-center items-center rounded-lg">
							Mobile App
						</div>
					</div>
				</div>
				<div className="flex w-full mt-24 lg:mt-0 px-2">
					<Image
						src={mockup}
						alt="Fixit Mockup"
						priority={true}
						className="w-full h-auto"
					/>
				</div>
			</section>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== About Section Start ==== --> */}
			<section className="pt-20 lg:pt-40 pb-10 px-sectionpxsm lg:px-sectionpxlg">
				<p className="text-xs text-lightgrey tracking-wide lg:text-xs">
					O V E R V I E W
				</p>
				<h1 className="text-[28px] lg:text-5xl mt-8 leading-tight text-sand">
					Fixit aims to revolutionize the way people interact with
					local service providers - by providing a safe and reliable
					marketplace platform, Fixit empowers clients to find and
					hire the best professionals for their needs.
				</h1>
			</section>
			{/* <-- ==== About Section End ==== --> */}

			{/* <-- ==== Navigation Section Start ==== --> */}
			<section className="pt-24 lg:pt-64 pb-20 px-sectionpxsm">
				<p className="text-xs text-lightgrey tracking-wide lg:text-xs lg:text-center">
					F E A T U R E
				</p>
				<h1 className="text-[40px] lg:text-7xl mt-8 leading-none font-medium lg:text-center text-sand lg:px-32">
					Navigation
				</h1>
				<div className="flex items-center justify-center mt-16 lg:mt-20">
					<div className="bg-grey justify-center w-full lg:w-96 items-center py-7 flex px-7 rounded-xl">
						<Image
							src={navigation}
							alt="Navigation Bar"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
				</div>
				<p className="text-gray-500 mt-16 lg:mt-24 text-xl lg:text-center lg:text-xl lg:leading-relaxed lg:px-80">
					<span className="text-sand">
						There are 4 main features in this navigation.
					</span>{" "}
					Home where the user can find any relevant contents,
					Pekerjaan where the user can manage their jobs, Kontrak
					where the user can see their contracts, and Transaksi where
					the user can see their transaction history.
				</p>
			</section>
			{/* <-- ==== Navigation Section End ==== --> */}

			{/* <-- ==== Homepage Section Start ==== --> */}
			<section className="flex flex-col pt-24 lg:pt-40 pb-20 px-sectionpxsm lg:px-sectionpxlg">
				<div className="w-full flex items-center justify-center px-10">
					<Image
						src={homepage}
						alt="Homepage"
						priority={true}
						className="w-full lg:w-96 h-auto"
					/>
				</div>
				<div className="w-full flex flex-col mt-16 lg:mt-24">
					<p className="text-xs text-lightgrey tracking-wide lg:text-center">
						F / 0 1
					</p>
					<h1 className="text-[40px] lg:text-7xl mt-8 leading-none font-medium lg:text-center text-sand lg:px-32">
						Homepage
					</h1>
					<p className="text-gray-500 mt-9 text-xl lg:text-center lg:text-xl lg:leading-relaxed lg:mt-14 lg:px-52">
						<span className="text-sand">
							Homepage contains any information
						</span>{" "}
						that is potentially needed by the user. This platform
						has 8 main categories with relevant sub-categories
						within. One of the core features is Job Posting
						highlighted in the center of the page.
					</p>
				</div>
			</section>
			{/* <-- ==== Homepage Section End ==== --> */}

			{/* <-- ==== Job Posting Section Start ==== --> */}
			<section className="flex flex-col pt-24 pb-10 lg:pt-48 px-sectionpxsm lg:flex-row lg:px-sectionpxlg lg:items-center lg:gap-24 lg:justify-center">
				<div className="flex w-full px-10 lg:px-0 flex-col gap-14 lg:gap-8 lg:flex-row">
					<div className="w-full">
						<Image
							src={jobposting1}
							alt="Job Posting"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
					<div className="w-full">
						<Image
							src={jobposting2}
							alt="Job Posting"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col mt-16 lg:mt-0">
					<p className="text-xs text-lightgrey tracking-wide">
						F / 0 2
					</p>
					<h1 className="text-[40px] lg:text-7xl mt-8 leading-none font-medium text-sand">
						Job Posting
					</h1>
					<p className="text-gray-500 mt-9 text-xl lg:leading-relaxed lg:mt-10">
						<span className="text-sand">
							The user can create job
						</span>{" "}
						based on their specific needs, budget, and also desired
						working-duration. After posting their job, the job
						becomes visible on Partners' platform.
					</p>
				</div>
			</section>
			{/* <-- ==== Job Posting Section End ==== --> */}

			{/* <-- ==== Contract Section Start ==== --> */}
			<section className="flex flex-col pt-24 pb-10 px-sectionpxsm lg:pt-48 lg:px-sectionpxlg lg:flex-row-reverse lg:gap-24 lg:justify-center lg:items-center">
				<div className="flex w-full px-10 lg:px-0 flex-col gap-14 lg:gap-8 lg:flex-row">
					<div className="w-full">
						<Image
							src={contract1}
							alt="Contract"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
					<div className="w-full">
						<Image
							src={contract2}
							alt="Contract"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col mt-16 lg:mt-0">
					<p className="text-xs text-lightgrey tracking-wide">
						F / 0 3
					</p>
					<h1 className="text-[40px] lg:text-7xl mt-8 leading-none font-medium text-sand">
						Contract
					</h1>
					<p className="text-gray-500 mt-9 text-xl lg:text-xl lg:leading-relaxed lg:mt-14">
						<span className="text-sand">
							In this feature, the user is able
						</span>{" "}
						to see all contracts in any status. Those are Waiting
						for Approval, Active, Completed, and Canceled.
					</p>
				</div>
			</section>
			{/* <-- ==== Contract Section End ==== --> */}

			{/* <-- ==== Divider Start ==== --> */}
			<section className="pt-24 pb-24 lg:pt-52 px-sectionpxsm lg:px-sectionpxlg">
				<h1 className="lg:text-[84px] text-7xl py-2 leading-none text-transparent bg-clip-text bg-gradient-to-r font-medium from-[#3CB9FF] to-primary lg:pr-96">
					Any need you can get it done.
				</h1>
			</section>
			{/* <-- ==== Divider End ==== --> */}

			{/* <-- ==== Payment Section Start ==== --> */}
			<section className="flex flex-col pt-24 lg:pt-48 pb-20 lg:pb-40 px-sectionpxsm lg:px-sectionpxlg lg:flex-row lg:items-center lg:gap-32 lg:justify-center">
				<div className="flex w-full px-10 lg:px-0 flex-col gap-14 lg:gap-8 lg:flex-row">
					<div className="w-full">
						<Image
							src={payment1}
							alt="Payment"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
					<div className="w-full">
						<Image
							src={payment2}
							alt="Payment"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col mt-16 lg:mt-0">
					<p className="text-xs text-lightgrey tracking-wide">
						F / 0 4
					</p>
					<h1 className="text-[40px] lg:text-7xl mt-8 leading-none font-medium text-sand">
						Payment Methods
					</h1>
					<p className="text-gray-500 mt-9 text-xl lg:text-xl lg:leading-relaxed lg:mt-14">
						<span className="text-sand">
							There are 3 kinds of payment method
						</span>{" "}
						used in this platform, but we decided to only use QRIS
						for the MVP purpose. Those are QRIS, Virtual Account,
						and Retail Outlets.
					</p>
				</div>
			</section>
			{/* <-- ==== Payment Section End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<div className="lg:px-7 px-0 lg:pb-7">
				<Footer />
			</div>
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
};

export default Fixit;
