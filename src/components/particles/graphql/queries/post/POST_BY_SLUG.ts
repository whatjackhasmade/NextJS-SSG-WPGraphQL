import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const POST_BY_SLUG = gql`
  query POST_BY_SLUG($slug: String!) {
    postBy(slug: $slug) {
      id
      slug
    }
  }
`

export default print(POST_BY_SLUG)
