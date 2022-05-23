import React from "react";
import { urlFor } from "../lib/client";

const SiteCard = ({ site }) => {
	return (
		<div className="site-detail-card">
			<div className="site-detail-card-top">
				<h3 className="site-detail-card-title">{site.name}</h3>
				<a href={site.link}>Itinéraire</a>
			</div>
			<p className="site-detail-card-directions">{site.directions}</p>
			<p className="site-detail-card-description">{site.desc}</p>
			<div className="site-detail-card-images">
				{site.images?.map((image, i) => (
					<img key={i} src={urlFor(image)} alt="" />
				))}
			</div>

			<div className="site-detail-card-bottom">
				{site.warning && (
					<div className="site-detail-card-right-bottom">
						<p>{site.warning}</p>
					</div>
				)}
				{site.fqme && (
					<div className="site-detail-card-left-bottom">
						<h4>À noter</h4>
						<p>
							Les sites suivants sont des sites fédérés. Il vous faut ainsi une
							adhésion annuelle ou journalière de la FQME pour y grimper.
						</p>
					</div>
				)}
			</div>
			<div className="site-link-contain">
				{site.links &&
					site.links.map((link) => (
						<div key={link.name} className="site-detail-card-links">
							<a href={link.address}>{link.name}</a>
						</div>
					))}
			</div>
		</div>
	);
};

export default SiteCard;
