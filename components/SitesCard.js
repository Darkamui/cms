import React from "react";

const Sites = ({ site }) => {
	return (
		<div className="sites-box">
			<h3 className="sites-title">{site.sector}</h3>
			{site.links?.map((id) => (
				<a href={id.address} key={id.name} target="_blank" rel="noreferrer">
					<p className="sites-name">
						{id.name}
						{id.status && "- FERMÉ"}
					</p>
				</a>
			))}
		</div>
	);
};

export default Sites;
