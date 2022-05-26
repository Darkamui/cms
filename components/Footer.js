import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
	return (
		<div className="footer-section">
			<div className="footer-links">
				<Link href="/sites">Liste Des Parois</Link>
				<div className="fb-logo">
					<Image src="/fb.webp" width="50px" height="50" />
				</div>
				<Link
					href="https://fqme.qc.ca/adherer/"
					target="_blank"
					rel="noreferrer noopener"
				>
					Adhérer FQME
				</Link>
			</div>
			<p>
				© 2022 Club de Montagne du Saguenay. Conception originale Catherine
				Picard 2016. Refonte visuelle JeruMedia 2022.
			</p>
		</div>
	);
};

export default Footer;
