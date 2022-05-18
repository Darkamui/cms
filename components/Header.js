import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Header = () => {
	return (
		<div className="header-section">
			<motion.div transition={{ staggerChildren: 1.5 }} className="header-box">
				<motion.h1
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							opacity: 0,
						},
						visible: {
							opacity: 1,
							transition: {
								ease: "easeIn",
								duration: 1,
							},
						},
					}}
					className="header-title"
				>
					Club de Montagne du Saguenay
				</motion.h1>
				<motion.p
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							opacity: 0,
						},
						visible: {
							opacity: 1,
							transition: {
								duration: 1,
								ease: "easeIn",
								delay: 0.4,
							},
						},
					}}
					className="header-text"
				>
					Le Club de Montagne du Saguenay (CMS), créé en 1971, a pour principal
					objectif de regrouper tous les adeptes de l'escalade et de la
					montagne, afin que ceux-ci puissent profiter au maximum des richesses
					que nous offre le milieu naturel de la région du
					Saguenay-Lac-Saint-Jean.
				</motion.p>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							opacity: 0,
						},
						visible: {
							opacity: 1,
							transition: {
								duration: 1,
								ease: "easeIn",
								delay: 0.7,
							},
						},
					}}
					className="header-buttons"
				>
					<Link href="/">connaître nos activités</Link>
					<Link href="/">où grimper ?</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Header;
