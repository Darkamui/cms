import React from "react";
import Head from "next/head";
import ActivityCard from "../components/ActivityCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { client } from "../lib/client";

const activities = ({ homeData, activities }) => {
	return (
		<>
			<Head>
				<title>Activités | CMS</title>
			</Head>

			<div className="activity-container">
				<div className="activity-box">
					{activities?.map((activity) => (
						<ActivityCard key={activity._id} activity={activity} />
					))}
				</div>
			</div>
		</>
	);
};
export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "home"]';
	const homeData = await client.fetch(bannerQuery);
	const query = '*[_type == "activities"]';
	const activities = await client.fetch(query);
	return {
		props: { homeData, activities },
	};
};

export default activities;
