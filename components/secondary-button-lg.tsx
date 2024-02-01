interface SecondaryButtonLgProps {
	text: string;
}

const SecondaryButtonLg = ({ text }: SecondaryButtonLgProps) => {
	return (
		<button className="flex items-center justify-center bg-darkgrey pt-[11px] pb-[13px] rounded-full w-fit px-9 hover:bg-[#3b3b3b] duration-300">
			<p className="text-[15px] text-white">{text}</p>
		</button>
	);
};

export default SecondaryButtonLg;
