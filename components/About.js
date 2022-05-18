import React from "react";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";
const About = ({ homeData }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 3 }}
			whi
			className="about-section"
		>
			<h2 className="about-title">À Propos</h2>
			<div className="about-box">
				<div className="about-left">
					<div className="about-left-img">
						<img src={urlFor(homeData.about1)} alt="" />
					</div>
					<div className="about-left-text">
						<p className="about-text">{homeData.about1Text}</p>
					</div>
				</div>
				<div className="about-right">
					<div className="about-right-text">
						<p className="about-text">{homeData.about2Text}</p>
					</div>
					<div className="about-right-img">
						<img src={urlFor(homeData.about2)} alt="" />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
