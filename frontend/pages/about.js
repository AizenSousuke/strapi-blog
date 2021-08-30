import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

function About({ categories, homepage, about }) {
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.seo} />
		</Layout>
	);
}

export async function getStaticProps() {
	// Run API calls in parallel
	const [categories, homepage, about] = await Promise.all([
		fetchAPI("/categories"),
		fetchAPI("/homepage"),
		fetchAPI("/about"),
	]);

	return {
		props: { categories, homepage, about },
		revalidate: 1,
	};
}

export default About;
