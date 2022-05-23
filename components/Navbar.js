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
					<Link href={"/"}>
						<a>
							<Image src="/logo.webp" width="150px" height="70px" />
						</a>
					</Link>
				</div>
				<div className="navbar-links__container">
					<Link href="/">Accueil</Link>
					<Link href="/activities">Activités</Link>
					<Link href="/climb">Où Grimper ?</Link>
					<Link href="/ski">Ski Hors Piste</Link>
					<Link href="/news">Nouvelles</Link>
				</div>
				<div className="navbar-mobile">
					{!toggleMenu && (
						<div
							className="navbar-menuopen"
							onClick={() => setToggleMenu(!toggleMenu)}
						>
							<Image src="/menu.webp" width="50px" height="45px" />
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
							<div onClick={() => setToggleMenu(false)}>
								<Link href="/">Accueil</Link>
							</div>
							<div onClick={() => setToggleMenu(false)}>
								<Link href="/activities" onClick={() => setToggleMenu(false)}>
									Activités
								</Link>
							</div>

							<div onClick={() => setToggleMenu(false)}>
								<Link href="/climb" onClick={() => setToggleMenu(false)}>
									Où Grimper ?
								</Link>
							</div>

							<div onClick={() => setToggleMenu(false)}>
								<Link href="/ski" onClick={() => setToggleMenu(false)}>
									Ski Hors Piste
								</Link>
							</div>

							<div onClick={() => setToggleMenu(false)}>
								<Link href="/ski" onClick={() => setToggleMenu(false)}>
									Nouvelles
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
