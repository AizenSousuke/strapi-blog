import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";


const Home = ({ articles, categories, homepage }) => {
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.seo} />
			<div className="uk-section">
				<div className="uk-container uk-container-large">
					<h1>{homepage.hero.title}</h1>
					<ReactMarkdown>{homepage.hero.welcomeMessage}</ReactMarkdown>
					<Articles articles={articles} />
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	// Run API calls in parallel
	const [articles, categories, homepage] = await Promise.all([
		fetchAPI("/articles?status=published"),
		fetchAPI("/categories"),
		fetchAPI("/homepage"),
	]);

	return {
		props: { articles, categories, homepage },
		revalidate: 1,
	};
}

export default Home;
