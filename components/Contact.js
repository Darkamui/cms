import React from "react";
import Link from "next/link";
const Contact = () => {
	return (
		<div className="contact-section">
			<h3 className="contact-title">contactez-nous</h3>
			<div className="contact-box">
				<h4>info@clubmontagnesaguenay.com</h4>
				<form action="" className="contact-form">
					<div className="form-left">
						<input type="text" placeholder="Nom.." />
						<input type="text" placeholder="Courriel.." />
						<input type="text" placeholder="Sujet.." />
					</div>

					<textarea
						name=""
						placeholder="Message.."
						id=""
						cols="30"
						rows="10"
					></textarea>
					<Link href="/" className="contact-btn">
						envoyer
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Contact;
