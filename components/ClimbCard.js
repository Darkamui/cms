import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";
const ClimbCard = ({ climb }) => {
	return (
		<div className="climb-card">
			<div className="climb-card-image">
				<img src={urlFor(climb.image)} alt="" />
			</div>
			<div className="climb-card-content">
				<h3 className="climb-card-title">{climb.name}</h3>
				<p className="climb-card-text">{climb.desc}</p>
				<Link href={climb.link}>{climb.linkName}</Link>
			</div>
		</div>
	);
};

export default ClimbCard;
