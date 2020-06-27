import gql from "graphql-tag"
import { print } from "graphql/language/printer"

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
`

export default print(POSTS)
