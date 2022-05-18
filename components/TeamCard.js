import React from "react";
import { urlFor } from "../lib/client";

const TeamCard = ({ profile }) => {
	return (
		<div className="profile-card">
			<img src={urlFor(profile.image)} alt="" className="profile-image" />
			<div className="profile-content">
				<h3 className="profile-name">{profile.name}</h3>
				<p className="profile-job">{profile.job}</p>
			</div>
		</div>
	);
};

export default TeamCard;
