import React from "react";
import { client } from "../lib/client";
import TeamCard from "./TeamCard";

const Team = ({ team }) => {
	return (
		<div className="team-section">
			<h1 className="team-title">L'équipe</h1>
			<div className="team-box">
				{team?.map((id) => (
					<TeamCard key={id._id} profile={id} />
				))}
			</div>
		</div>
	);
};

export default Team;
