import gql from "graphql-tag";

export const POST_BY_SLUG = gql`
	query POST_BY_SLUG($slug: String!) {
		postBy(slug: $slug) {
			id
			slug
		}
	}
`;

export default POST_BY_SLUG;
