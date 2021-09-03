import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import "react-quill/dist/quill.snow.css";

function About({ categories, homepage, about }) {
	// To avoid errors because QuillJS doesn't support React
	const ReactQuill =
		typeof window === "object" ? require("react-quill") : () => false;
	const modules = {
		toolbar: [],
	};
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.seo} />
			<ReactQuill
				theme="snow"
				readOnly={true}
				value={about.profile}
				modules={modules}
			/>
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
