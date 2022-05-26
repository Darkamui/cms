import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
import {
	useSpring,
	useTransform,
	motion,
	useViewportScroll,
} from "framer-motion";
const Navbar = ({ homeData }) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [currentPrecent, setCurrentPercent] = useState(null);
	const [currentProgressColor, setCurrentProgressColor] = useState(null);
	const { scrollYProgress } = useViewportScroll();
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const pathLength = useSpring(scrollYProgress, {
		stiffness: 400,
		damping: 90,
	});

	useEffect(
		() =>
			yRange.onChange((v) => {
				setCurrentPercent(Math.trunc(yRange.current));
			}),
		[yRange]
	);

	useEffect(() => {
		setCurrentProgressColor(
			currentPrecent >= 90
				? "#7c990a"
				: currentPrecent >= 45
				? "#0d80aa"
				: currentPrecent >= 20
				? "#a37d0a"
				: "#ad1040"
		);
	}, [currentPrecent]);
	useEffect(
		() =>
			yRange.onChange((v) => {
				setCurrentPercent(Math.trunc(yRange.current));
			}),
		[yRange]
	);

	return (
		<div className="container-nav">
			<div className="navbar">
				<div className="navbar-logo__container">
					<Link href={"/"}>
						<a>
							<Image src="/logo.webp" width="150px" height="70px" />
						</a>
					</Link>
					<div className="progressy">
						<svg className="progress-icon" viewBox="0 0 60 60">
							<motion.path
								fill={currentPrecent === 100 ? "#7c990a" : "none"}
								strokeWidth="8"
								stroke={currentProgressColor}
								strokeDasharray="0 1"
								d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
								style={{
									pathLength,
									rotate: 90,
									translateX: 10,
									translateY: 15,
									opacity: pathLength,
									scaleX: -1,
								}}
							/>
						</svg>
						<motion.div
							style={{
								position: "-webkit-sticky",
								position: "absolute",
								top: "40px",
								left: "40px",
								width: "50px",
								height: "50px",
								opacity: pathLength,
							}}
						></motion.div>
					</div>
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
								<Link href="/news" onClick={() => setToggleMenu(false)}>
									Nouvelles
								</Link>
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
								<Link href="/sites" onClick={() => setToggleMenu(false)}>
									Liste des parois
								</Link>
							</div>
							<div onClick={() => setToggleMenu(false)}>
								<Link href="/ski" onClick={() => setToggleMenu(false)}>
									Ski Hors Piste
								</Link>
							</div>
							<div className="fb-logo">
								<Image src="/fb.webp" width="50px" height="50" />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
