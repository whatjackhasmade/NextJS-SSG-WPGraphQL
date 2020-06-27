import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const SERIESES = gql`
  query SERIESES {
    serieses(first: 500) {
      nodes {
        id
        slug
      }
    }
  }
`

export default print(SERIESES)
