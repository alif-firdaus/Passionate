interface SecondaryButtonProps {
	text: string;
}

const SecondaryButton = ({ text }: SecondaryButtonProps) => {
	return (
		<button className="flex items-center justify-center bg-darkgrey pt-3 pb-[14px] rounded-full w-fit px-11">
			<p className="text-lg text-white">{text}</p>
		</button>
	);
};

export default SecondaryButton;
