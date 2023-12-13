"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_action";

import { toast } from "sonner";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactFormSchema),
	});

	const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
		const result = await sendEmail(data);

		if (result?.success) {
			console.log({ data: result.data });
			toast.success("Email sent!");
			reset();
			return;
		}

		// Toast Error //
		console.log(result?.error);
		toast.error("Something went wrong!");
	};

	return (
		<section className="px-sectionpxsm pt-40 lg:pt-72 pb-14 lg:px-sectionpxlg lg:pb-32">
			<div className="flex flex-col lg:flex-row lg:justify-between lg:gap-32">
				<div className="flex flex-col lg:justify-center lg:w-full">
					<p className="text-sm text-lightgrey tracking-wide lg:text-xs">
						G E T I N T O U C H
					</p>
					<h1 className="text-4xl lg:text-[50px] mt-5 lg:mt-10 leading-none font-medium text-sand">
						Elevating products into perfection
					</h1>
					<p className="text-sand mt-7 text-[17px] lg:text-xl lg:leading-relaxed lg:mt-14 font-light">
						Connect with me and discuss what&apos;s you been up to,
						drop me some lines! 👋
					</p>
				</div>
				<div className="py-5 lg:py-8 mt-14 lg:mt-0 bg-white px-5 lg:px-8 rounded-xl lg:items-center lg:w-full">
					<form
						onSubmit={handleSubmit(processForm)}
						className="flex flex-col"
					>
						{/* Name Start */}
						<div>
							<input
								type="text"
								placeholder="Your name"
								required
								autoComplete="off"
								{...register("name")}
								className="rounded-md w-full px-4 pt-[11px] pb-[13px] placeholder-lightgrey text-black bg-[#F0F0F0] focus:outline-primary"
							/>
							{errors.name?.message && (
								<p className="ml-1 mt-1 text-sm text-red-400">
									{errors.name.message}
								</p>
							)}
						</div>
						{/* Name End */}

						{/* Email Start */}
						<div>
							<input
								type="email"
								placeholder="Your email"
								required
								autoComplete="off"
								{...register("email")}
								className="mt-4 lg:mt-6 w-full rounded-md px-4 pt-[11px] pb-[13px] placeholder-lightgrey text-black bg-[#f0f0f0] focus:outline-primary"
							/>
							{errors.email?.message && (
								<p className="ml-1 mt-1 text-sm text-red-400">
									{errors.email.message}
								</p>
							)}
						</div>
						{/* Email End */}

						{/* Message Start */}
						<div>
							<textarea
								placeholder="What can I help you?"
								required
								autoComplete="off"
								rows={5}
								{...register("message")}
								className="mt-4 lg:mt-6 w-full rounded-md px-4 pt-[11px] pb-[13px] placeholder-lightgrey text-black bg-[#f0f0f0] focus:outline-primary"
							/>
							{errors.message?.message && (
								<p className="ml-1 mt-1 text-sm text-red-400">
									{errors.message.message}
								</p>
							)}
						</div>
						{/* Message End */}

						<button
							disabled={isSubmitting}
							className="text-lg text-sand bg-primary pt-[11px] pb-[13px] mt-6 lg:mt-8 rounded-md"
						>
							{isSubmitting ? "Wait a sec..." : "Submit"}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
