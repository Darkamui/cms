import React from "react";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";
const About = ({ homeData }) => {
	return (
		<motion.div className="about-section">
			<div className="about-mainbox">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, ease: "easeIn" }}
					className="about-title"
				>
					À Propos
				</motion.h2>
				<motion.div
					className="about-box"
					initial={{ opacity: 0, y: 200 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, ease: "easeIn" }}
				>
					<motion.div className="about-left">
						<motion.div className="about-left-img">
							<img src={urlFor(homeData.about1)} alt="" />
						</motion.div>
						<motion.div className="about-left-text">
							<p className="about-text">{homeData.about1Text}</p>
						</motion.div>
					</motion.div>
					<div className="about-right">
						<motion.div className="about-right-text">
							<p className="about-text">{homeData.about2Text}</p>
						</motion.div>
						<motion.div className="about-right-img">
							<img src={urlFor(homeData.about2)} alt="" />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default About;
