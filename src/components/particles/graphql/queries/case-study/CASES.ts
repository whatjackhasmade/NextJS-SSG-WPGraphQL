export const CASES = /* GraphQL */ `
  query CASES {
    caseStudies(first: 500) {
      nodes {
        id
        uri
      }
    }
  }
`

export default CASES
