import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
const Navbar = ({ homeData }) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="container-nav">
			<div className="navbar">
				<div className="navbar-logo__container">
					<Link href="/">
						<Image src="/logo.webp" width="150px" height="70px" />
					</Link>
				</div>
				<div className="navbar-links__container">
					<Link href="/">Accueil</Link>
					<Link href="/activities">Activités</Link>
					<Link href="/climb">Où Grimper ?</Link>
					<Link href="/ski">Ski Hors Piste</Link>
					<Link href="/ski">Nouvelles</Link>
				</div>
				<div className="navbar-mobile">
					{!toggleMenu && (
						<div
							className="navbar-menuopen"
							onClick={() => setToggleMenu(!toggleMenu)}
						>
							<Image src="/menu.png" width="50px" height="45px" />
						</div>
					)}
					{toggleMenu && (
						<div className="navbar-menu">
							<div
								className="navbar-menuopen"
								onClick={() => setToggleMenu(!toggleMenu)}
							>
								<Image src="/closemenu.webp" width="50px" height="45px" />
							</div>

							<Image src="/logo.webp" width="150px" height="75px" />
							<Link href="/">Accueil</Link>
							<Link href="/activities">Activités</Link>
							<Link href="/climb">Où Grimper ?</Link>
							<Link href="/ski">Ski Hors Piste</Link>
							<Link href="/ski">Nouvelles</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
