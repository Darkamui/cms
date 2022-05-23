import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "../lib/client";
const Header = ({ news }) => {
	return (
		<div className="header-section">
			<motion.div className="header-box">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="header-title"
				>
					Club de Montagne du Saguenay
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.75 }}
					className="header-text"
				>
					Le Club de Montagne du Saguenay (CMS), créé en 1971, a pour principal
					objectif de regrouper tous les adeptes de l'escalade et de la
					montagne, afin que ceux-ci puissent profiter au maximum des richesses
					que nous offre le milieu naturel de la région du
					Saguenay-Lac-Saint-Jean.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1 }}
					className="header-buttons"
				>
					<Link href="/activities">connaître nos activités</Link>
					<Link href="/climb">où grimper ?</Link>
				</motion.div>
			</motion.div>
			{/* <h2 className="news-section-title">NOUVELLES</h2>
			<div className="news-section-card-box">
				{news &&
					news?.map((link) => (
						<div className="news-section-card">
							<h3 className="news-section-card-title">{link.name}</h3>
							<div className="news-section-card-img">
								<img src={urlFor(link.images[0])} alt="" />
							</div>
						</div>
					))}
			</div> */}
		</div>
	);
};

export default Header;
