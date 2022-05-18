import React from "react";
import { urlFor } from "../lib/client";

const ActivityCard = ({ activity }) => {
	return (
		<div className="activity-card">
			<div className="left-activity">
				<img src={urlFor(activity.image)} alt="" />
			</div>
			<div className="right-activity">
				<h2 className="activity-name">{activity.name}</h2>
				<br />
				<p className="activity-text">{activity.p1}</p>
				<br />
				<p className="activity-text">{activity.p2}</p>
				<br />

				<p className="activity-text">{activity.p3}</p>
				<br />
				<p className="activity-text">{activity.p4}</p>
				<br />
				{activity.time && (
					<p className="activity-time">Temps de déroulement: {activity.time}</p>
				)}
				<a href=""></a>
			</div>
		</div>
	);
};

export default ActivityCard;
