import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Join = ({ homeData }) => {
	return (
		<div className="join-section">
			<div className="join-box">
				<div className="join-box-top">
					<h3 className="join-title">Adhérer</h3>
					<img src={urlFor(homeData.fqmeLogo)} alt="" />
				</div>
				<div className="join-box-content">
					<p>
						Le Club de Montagne de Saguenay est affilié à la Fédération
						Québécoise de la Montagne et de l'Escalade (FQME). Cela signifie
						qu'il faut préalablement devenir membre de la FQME afin de joindre
						le club.
						<br />
						<br />
						L'option club coûte 5$. Celle-ci vous permet d'adhérer au CMS, de
						prendre part aux activités et supporter son existence.
						<br />
						<br />
						L'option accès montagne est requise pour obtenir l'accès aux sites
						couverts par l'assurance de la FQME [sites d'escalade extérieure
						comme La Croix de Sainte-Anne, les Monts-et-Merveilles, etc.].
					</p>
					<Link
						href="https://fqme.qc.ca/adherer/"
						target="_blank"
						className="join-btn"
					>
						Adhèrer en ligne
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Join;
