import React from "react";

// styles
import "../styles/layout.scss";

// components
import Layout from "components/Layouts/Layout";
import SEO from "components/SEO/seo";
import Hero from "../components/Hero/Hero";
import BlogPostCard from "../components/BlogPostCard/BlogPostCard";

const IndexPage = () => {
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
