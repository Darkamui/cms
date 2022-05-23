import React from "react";
import NewsCard from "../components/NewsCard";
import { client } from "../lib/client";

function News({ news }) {
	return (
		<>
			<Head>
				<title>Nouvelles | CMS</title>
			</Head>
			<div className="news-page">
				<div className="news-container">
					{news?.map((id) => (
						<NewsCard key={id._id} news={id} />
					))}
				</div>
			</div>
		</>
	);
}
export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "news"]';
	const news = await client.fetch(bannerQuery);
	return {
		props: { news },
	};
};
export default News;
