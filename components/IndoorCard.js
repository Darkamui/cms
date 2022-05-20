import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const IndoorCard = ({ indoor }) => {
	return (
		<div className="indoor-card">
			<div className="indoor-left">
				<div className="indoor-header">
					<a href={indoor.link} className="indoor-title" target="_blank">
						<h3 className="indoor-title">{indoor.name}</h3>
					</a>
					<p className="indoor-headtext">
						{indoor.type} | <span className="city">{indoor.city}</span>
					</p>
				</div>
				<p className="indoor-summary">{indoor.desc}</p>
				<div className="indoor-details">
					<p className="indoor-adress">Adresse: {indoor.adresse}</p>
					<p className="indoor-tel">Téléphone: {indoor.tel}</p>
					<a
						href={indoor.link}
						className="indoor-tel"
						target="_blank"
						style={{ fontWeight: 600 }}
					>
						Site Officiel
					</a>
				</div>
				<div className="indoor-logo">
					{indoor.logo && <img src={urlFor(indoor.logo)} alt="" />}
				</div>
			</div>
			<div className="indoor-right">
				<div className="indoor-right-details">
					<div className="">
						<p className="indoor-details-title">Horaire:</p>
						{indoor.times.map((id) => (
							<p className="indoor-times">{id}</p>
						))}
					</div>
					<div className="">
						<p className="indoor-details-title">Tarifs:</p>
						{indoor.cost.map((id) => (
							<p className="indoor-cost">{id}</p>
						))}
					</div>
				</div>

				<img src={urlFor(indoor.image)} alt="" />
			</div>
		</div>
	);
};

export default IndoorCard;
