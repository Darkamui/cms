import React from "react";
import { urlFor } from "../lib/client";

const NewsCard = ({ news }) => {
	return (
		<div className="news-card">
			<h2 className="news-title">{news.name}</h2>
			{news.desc && <p className="news-text">{news.desc}</p>}
			<div className="news-links">
				{news.links &&
					news.links?.map((link, i) => (
						<div key={i}>
							<a href={link.address}>{link.name}</a>
						</div>
					))}
			</div>

			<div className="news-files">
				{news.files &&
					news.files.map((link, i) => (
						<div key={i}>
							<a href={link.file}>{link.name}</a>
						</div>
					))}
			</div>

			<div className="news-images">
				{news.images &&
					news.images.map((image, i) => (
						<img key={i} src={urlFor(image)} alt="" />
					))}
			</div>
		</div>
	);
};

export default NewsCard;
