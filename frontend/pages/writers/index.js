import React from "react";
import Layout from "../../components/layout";
import { fetchAPI, URL } from "../../lib/api";

export default function Writers({ writers, categories }) {
	return (
		<Layout categories={categories}>
			<h1>Writers</h1>
			<ol>
				{writers.map((writer) => (
					<li style={{ float: "right", listStyleType: "none" }}>
						<div>
							<img
								src={
									process.env.NEXT_PUBLIC_STRAPI_API_URL ??
									URL + writer.picture.url
								}
								style={{ width: "10%", height: "10%" }}
							></img>
							<div>{writer.name}</div>
						</div>
					</li>
				))}
			</ol>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const data = await fetchAPI("/writers");
	const categories = await fetchAPI("/categories");

	return {
		props: { writers: data, categories: categories },
	};
};
