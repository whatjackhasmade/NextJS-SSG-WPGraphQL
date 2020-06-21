import gql from "graphql-tag"

export const PAGE_BY_URI = gql`
  query PAGE_BY_URI($uri: String!) {
    pageBy(uri: $uri) {
      id
      uri
    }
  }
`

export default PAGE_BY_URI
