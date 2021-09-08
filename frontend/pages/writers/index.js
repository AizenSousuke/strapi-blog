import React from "react";
import { fetchAPI, URL } from "../../lib/api";

export default function Writers({ writers }) {
	return (
		<>
			<h1>Writers</h1>
			<ol>
				{writers.map((writer) => (
					<li>
						<div style={{float: 'right'}}>
							<img
								src={
									process.env.NEXT_PUBLIC_STRAPI_API_URL ??
									URL + writer.picture.url
								}
								style={{ width: "10%", height: "10%" }}
							></img>
						</div>
						<div>{writer.name}</div>
					</li>
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
