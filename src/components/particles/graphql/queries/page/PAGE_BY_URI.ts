import AllBlocks from "fragments/blocks"

export const PAGE_BY_URI = /* GraphQL */ `
  query PAGE_BY_URI($uri: String!) {
    pageBy(uri: $uri) {
      id
      ${AllBlocks}
      uri
    }
  }
`

export default PAGE_BY_URI
