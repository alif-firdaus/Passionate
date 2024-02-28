interface MainButtonProps {
	text: string;
}

const MainButton = ({ text }: MainButtonProps) => {
	return (
		<button className="flex items-center justify-center bg-akarmula pt-3 pb-[14px] rounded-md w-full">
			<p className="text-lg text-black font-medium">{text}</p>
		</button>
	);
};

export default MainButton;
