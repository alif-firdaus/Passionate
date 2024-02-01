interface MainButtonLgProps {
	text: string;
}

const MainButtonLg = ({ text }: MainButtonLgProps) => {
	return (
		<button className="flex items-center justify-center bg-white pt-[11px] pb-[13px] rounded-full w-fit px-9 hover:bg-softgrey duration-300">
			<p className="text-[15px] text-darkgrey font-medium">{text}</p>
		</button>
	);
};

export default MainButtonLg;
