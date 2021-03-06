import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { client } from "../lib/client";

export default function Layout({ homeData, children }) {
	return (
		<div className="layout">
			<Navbar homeData={homeData?.length && homeData[0]} />

			<main className="main-container">{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "home"]';
	const homeData = await client.fetch(bannerQuery);

	return {
		props: { homeData },
	};
};
