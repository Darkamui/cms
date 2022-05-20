import React from "react";
import Head from "next/head";
import ClimbCard from "../components/ClimbCard";
import { client, urlFor } from "../lib/client";
import IndoorCard from "../components/IndoorCard";

export default function Climb({ climb, homeData, indoorData }) {
	return (
		<>
			<Head>
				<title>Où Grimper | CMS</title>
			</Head>
			<div className="climb-section">
				<div className="climb-box">
					{climb?.map((id) => (
						<ClimbCard key={id._id} climb={id} />
					))}
				</div>
			</div>
			<div className="ice-section">
				<h3 className="ice-title">glace</h3>
				<div className="ice-content">
					<p className="ice-text">
						Au Saguenay, l'escalade de glace compte de plus en plus d'adeptes.
						Dès les années soixante-dix, les pionniers de la glace au Québec ont
						démontré le potentiel de cette région pour l'activité. On n'a qu'à
						penser aux classiques que sont devenues Sangsue à Petit-Saguenay,
						les Jumelles et les Piliers du temple à Rivière Éternité, ou bien à
						la Dent de Dracula dans le canyon de la rivière Sainte-Marguerite.
						<br />
						<br />
						Depuis quelques années, les grimpeurs de la région explorent un
						nouveau terrain de jeu, soit la section de la vallée de la rivière
						Sainte-Marguerite située entre Sainte-Rose-du-Nord et Sacré-Cœur, à
						mi-chemin entre Chicoutimi et Tadoussac. Ce secteur est parcouru par
						la route 172. Il offre actuellement sur près de 35 kilomètres, une
						dizaine de cascades de glace facilement accessibles de la route,
						d'un degré de difficulté variant de G3 à G5, ne demandant qu'une
						seule journée pour être réalisée.
					</p>
					<div className="cascade-box">
						<div className="cascade-left">
							{homeData?.length && (
								<img src={urlFor(homeData[0].cascadeImg)} alt="" />
							)}
						</div>
						<div className="cascade-right">
							<h3 className="cascade-title">guide des cascades</h3>
							<p>
								Nous vous suggérons fortement de vous procurer le Guide des
								cascades de glace et voies mixtes du Québec au coût de 40$. Ce
								guide offre l'information sur toutes les parois de la région,
								mais également sur celles que l'on retrouve ailleurs dans la
								province. C'est un indispensable pour tout grimpeur de glace ou
								de mixte assidu.
								<br />
								<br />
								Consultez ici la page des mises à jour sur le site de la FQME.{" "}
								<br />
								<br />
								Lien pour acheter chez MEC ici.
							</p>
						</div>
					</div>
					<div className="cap-box">
						<div className="cap-left">
							{homeData?.length && (
								<img src={urlFor(homeData[0].capImg)} alt="" />
							)}
						</div>
						<div className="cap-right">
							<h3 className="cap-title">Cap St-François</h3>
							<p className="cap-text">
								Le cap St-François est une cascade urbaine située 10 minutes du
								pont Dubuc, à Chicoutimi Nord. Par sa proximité de la ville et
								la facilité à installer des moulinettes, c'est l'endroit idéal
								pour initier les débutants ou pour aller grimper lorsque l'on a
								peu de temps.
								<br />
								Nous vous demandons de respecter la quiétude des propriétaires :
								<span className="red">
									 il est très important de ne pas se stationner dans la courbe,
									ni devant le 200 de la rue Richmond sous peine de remorquage à
									vos frais.
								</span>
							</p>
							<h3 className="cap-title">Secteur de Sainte-Marguerite</h3>
							<p className="cap-text">
								Le secteur de la Dent de Dracula se trouve à l'intérieur des
								limites du Parc National des Monts-Valin.
								<br />
								<span className="red">
									Toute personne qui accède, circule ou pratique une activité
									doit être titulaire d'une autorisation d'accès quotidienne
									disponible au parc ou sur Internet.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="indoor-section">
				<h3 className="indoor-maintitle">Intérieur</h3>
				<div className="indoor-box">
					{indoorData?.map((id) => (
						<IndoorCard key={id._id} indoor={id} />
					))}
				</div>
			</div>
		</>
	);
}

export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "climb"]';
	const climb = await client.fetch(bannerQuery);
	const query = '*[_type == "home"]';
	const homeData = await client.fetch(query);
	const indoorQuery = '*[_type == "indoor"]';
	const indoorData = await client.fetch(indoorQuery);
	return {
		props: { climb, homeData, indoorData },
	};
};
