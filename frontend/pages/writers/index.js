import React from "react";
import { fetchAPI } from "../../lib/api";

export default function Writers({ writers }) {
	return (
		<>
			<h1>Writers</h1>
			<ol>
				{writers.map((writer) => (
					<li>{writer.name}</li>
				))}
			</ol>
		</>
	);
}

export const getStaticProps = async () => {
	const data = await fetchAPI("/writers");

	return {
		props: { writers: data },
	};
};
