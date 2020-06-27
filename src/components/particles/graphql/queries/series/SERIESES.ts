export const SERIESES = /* GraphQL */ `
  query SERIESES {
    serieses(first: 500) {
      nodes {
        id
        slug
      }
    }
  }
`

export default SERIESES
