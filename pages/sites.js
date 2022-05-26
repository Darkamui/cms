import Head from "next/head";
import React from "react";
import { client } from "../lib/client";
import SitesCard from "../components/SitesCard";
import SiteCard from "../components/SiteCard";
function Sites({ sites, siteDetail, homeData }) {
	return (
		<>
			<Head>
				<title>Parois | CMS</title>
			</Head>
			<div className="sites-page">
				<div className="sites-container">
					{sites?.map((id) => (
						<SitesCard key={id.sector} site={id} />
					))}
				</div>
			</div>
			<div className="siteDetails-container">
				{siteDetail?.map((id) => (
					<SiteCard
						key={id.name}
						site={id}
						homeData={homeData?.length && homeData[0]}
					/>
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
	const homeQuery = '*[_type == "home"]';
	const homeData = await client.fetch(homeQuery);
	return {
		props: { sites, siteDetail, homeData },
	};
};
export default Sites;
