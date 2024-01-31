interface ButtonProps {
	text: string;
}

const Button = ({ text }: ButtonProps) => {
	return (
		<button className="flex group items-center justify-center pt-3 pb-[14px] transition-all duration-300 rounded-md w-fit px-12 bg-primary lg:shadow-[6px_6px_0px_#3e3e3e] shadow-[9px_9px_0px_#3e3e3e] hover:shadow-[9px_9px_0px_#3e3e3e] hover:-translate-x-[3px] hover:-translate-y-[3px]">
			<p className="text-lg text-darkgrey">{text}</p>
		</button>
	);
};

export default Button;
