interface SecondaryButtonProps {
	text: string;
}

const SecondaryButton = ({ text }: SecondaryButtonProps) => {
	return (
		<button className="flex items-center justify-center bg-[#191919] pt-3 pb-[14px] rounded-md w-full">
			<p className="text-lg text-akarmula font-light">{text}</p>
		</button>
	);
};

export default SecondaryButton;
