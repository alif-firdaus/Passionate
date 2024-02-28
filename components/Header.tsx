import Link from "next/link";
import Image from "next/image";

// Import Assets //
import logotype from "@/assets/images/logotypenew.png";

const Header = () => {
	return (
		<section className="flex justify-between items-center mt-[26px] w-full px-sectionpxsm">
			<Link href="/">
				<Image
					src={logotype}
					alt="Alchemist Logotype"
					priority={true}
					className="h-5 w-auto cursor-pointer"
				/>
			</Link>
			<p className="text-base text-akarmula font-light">
				<span className="text-grey">Personal</span>Website
			</p>
		</section>
	);
};

export default Header;
