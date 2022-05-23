import Head from "next/head";
import React from "react";
import { client } from "../lib/client";
import SitesCard from "../components/SitesCard";
import SiteCard from "../components/SiteCard";
function Sites({ sites, siteDetail }) {
	return (
		<>
			<Head>
				<title>Parois | CMS</title>
			</Head>
			<div className="sites-page">
				<div className="sites-container">
					{sites?.map((id) => (
						<SitesCard site={id} />
					))}
				</div>
			</div>
			<div className="siteDetails-container">
				{siteDetail?.map((id) => (
					<SiteCard key={id.name} site={id} />
				))}
			</div>
		</>
	);
}
export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "sites"]';
	const sites = await client.fetch(bannerQuery);
	const siteDetails = '*[_type == "siteDetails"]';
	const siteDetail = await client.fetch(siteDetails);
	return {
		props: { sites, siteDetail },
	};
};
export default Sites;
