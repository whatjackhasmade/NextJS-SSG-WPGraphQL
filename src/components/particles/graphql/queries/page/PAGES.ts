export const PAGES = /* GraphQL */ `
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

export default PAGES
