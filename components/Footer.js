import React from "react";
import Image from "next/image";
const Footer = () => {
	return (
		<div className="footer-section">
			<div className="fb-logo">
				<Image src="/fb.png" width="50px" height="50" />
			</div>
			<p>
				© 2022 Club de Montagne du Saguenay. Conception originale Catherine
				Picard 2016. Refonte visuelle JeruMedia 2022.
			</p>
		</div>
	);
};

export default Footer;
