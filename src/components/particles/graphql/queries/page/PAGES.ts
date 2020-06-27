import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const PAGES = gql`
  query PAGES {
    pages {
      edges {
        node {
          isFrontPage
          uri
        }
      }
    }
  }
`

export default print(PAGES)
