import gql from "graphql-tag";

export const POSTS = gql`
	query POSTS {
		posts {
			edges {
				node {
					id
					slug
				}
			}
		}
	}
`;

export default POSTS;
