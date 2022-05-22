import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { client } from "../lib/client";
import Join from "../components/Join";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
export default function Home({ homeData, team }) {
	return (
		<>
			<Head>
				<title>Accueil | CMS</title>
			</Head>
			<motion.div
				transition={{
					staggerChildren: 0.5,
				}}
			>
				<Header />
				<About homeData={homeData?.length && homeData[0]} />
				<Join homeData={homeData?.length && homeData[0]} />
				<Team team={team?.length && team} />
				<Contact />
			</motion.div>
		</>
	);
}

export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "home"]';
	const homeData = await client.fetch(bannerQuery);
	const query = '*[_type == "team"]';
	const team = await client.fetch(query);
	return {
		props: { homeData, team },
	};
};
