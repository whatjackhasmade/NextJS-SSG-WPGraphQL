import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const CASES = gql`
  query CASES {
    caseStudies(first: 500) {
      nodes {
        id
        uri
      }
    }
  }
`

export default print(CASES)
