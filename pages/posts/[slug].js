import "cross-fetch/polyfill";
import ApolloClient from "apollo-boost";

import POST_BY_SLUG from "../../queries/POST_BY_SLUG";
import POSTS from "../../queries/POSTS";

const client = new ApolloClient({
	uri: "https://wjhm.noface.app/graphql",
});

const Post = ({ id, slug }) => (
	<article>
		<h1>{slug}</h1>
		<p>{id}</p>
	</article>
);

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const nodes = await new Promise((resolve, reject) => {
		return client
			.query({
				query: POSTS,
			})
			.then(({ data }) => resolve(data.posts.edges.map(({ node }) => node)))
			.catch((error) => reject(error.message));
	});

	const paths = nodes.map((node) => ({
		params: {
			...node,
		},
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	const { slug } = params;

	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const post = await new Promise((resolve, reject) => {
		return client
			.query({
				query: POST_BY_SLUG,
				variables: { slug },
			})
			.then((data) => resolve(data))
			.catch((error) => reject(error.message));
	});

	const postData = post.data.postBy;

	// Pass post data to the page via props
	return { props: { ...postData } };
}

export default Post;
