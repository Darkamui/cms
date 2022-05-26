import React from "react";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";
const TeamCard = ({ profile }) => {
	return (
		<div className="profile-card">
			<motion.img
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.75, ease: "easeIn" }}
				src={urlFor(profile.image)}
				alt=""
				className="profile-image"
			/>
			<div className="profile-content">
				<h3 className="profile-name">{profile.name}</h3>
				<p className="profile-job">{profile.job}</p>
			</div>
		</div>
	);
};

export default TeamCard;
