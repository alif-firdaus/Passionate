// Import Components //
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact-form";

export default function Connect() {
	return (
		<section>
			<Navbar />
			<ContactForm />
			<div className="lg:px-7 px-0 lg:pb-7">
				<Footer />
			</div>
		</section>
	);
}
