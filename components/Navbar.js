import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
const Navbar = ({ homeData }) => {
	return (
		<div className="container-nav">
			<div className="navbar">
				<div className="navbar-logo__container">
					<Link href="/">
						<Image src="/logo.png" width="150px" height="75px" />
					</Link>
				</div>
				<div className="navbar-links__container">
					<Link href="/">Accueil</Link>
					<Link href="/activities">Activités</Link>
					<Link href="/climb">Où Grimper ?</Link>
					<Link href="/ski">Ski Hors Piste</Link>
					<Link href="/ski">Nouvelles</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
