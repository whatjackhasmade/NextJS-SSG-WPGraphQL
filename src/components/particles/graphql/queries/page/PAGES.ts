import gql from "graphql-tag"

export const PAGES = gql`
  query PAGES {
    pages {
      edges {
        node {
          id
          blocks {
            isValid
            name
          }
          uri
        }
      }
    }
  }
`

export default PAGES
