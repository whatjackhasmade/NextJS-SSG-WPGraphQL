import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const SERIESES = gql`
  query SERIESES {
    serieses {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

export default print(SERIESES)
