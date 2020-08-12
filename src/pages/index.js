import React from "react";
import { graphql } from "gatsby";
// styles
import "../styles/layout.scss";

// components
import Layout from "components/Layouts/Layout";
import SEO from "components/SEO/seo";
import Hero from "../components/Hero/Hero";
import BlogPostCard from "../components/BlogPostCard/BlogPostCard";

const IndexPage = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<SEO title="Home" />
			<Hero />
			<main>
				<BlogPostCard />
			</main>
		</Layout>
	);
};

export default IndexPage;

export const indexQuery = graphql`
	query blogListQuery {
		allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "post" } } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					frontmatter {
						date
						title
					}
					excerpt
				}
			}
		}
	}
`;
