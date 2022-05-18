import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Navbar = ({ homeData }) => {
	return (
		<div className="container-nav">
			<div className="navbar">
				<div className="navbar-logo__container">
					<img src={urlFor(homeData.logo)} alt="" />
				</div>
				<div className="navbar-links__container">
					<Link href="/">Accueil</Link>
					<Link href="/activities">Activités</Link>
					<Link href="/">Où Grimper ?</Link>
					<Link href="/">Ski Hors Piste</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
