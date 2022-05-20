import React from "react";
import Link from "next/link";
import { client, urlFor } from "../lib/client";
import Head from "next/head";

function Ski({ climb }) {
	return (
		<>
			<Head>
				<title>Ski hors piste | CMS</title>
			</Head>
			<div className="ski-section">
				<div className="ski-box">
					<div className="ski-content">
						<h1 className="ski-title">ski hors piste</h1>

						<p className="ski-text">
							En 2021, le CMS a accueilli au sein de son club le ski hors piste.
							Le premier secteur offert officiellement sur notre territoire est
							le Mont Jacob à Jonquière. Vous pouvez suivre les développements
							sur le groupe Facebook  
							<Link href="https://www.facebook.com/groups/1219535635079385">
								Ski de montagne Mont Jacob
							</Link>
						</p>
					</div>
					{climb?.length && (
						<img
							src={urlFor(climb[0].image)}
							style={{ borderRadius: "50px" }}
							alt=""
						/>
					)}
				</div>
			</div>
		</>
	);
}
export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "ski"]';
	const climb = await client.fetch(bannerQuery);

	return {
		props: { climb },
	};
};

export default Ski;
