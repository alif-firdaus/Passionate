interface MainButtonProps {
	text: string;
}

const MainButton = ({ text }: MainButtonProps) => {
	return (
		<button className="flex items-center justify-center bg-white pt-3 pb-[14px] rounded-full w-fit px-11">
			<p className="text-lg text-darkgrey font-medium">{text}</p>
		</button>
	);
};

export default MainButton;
