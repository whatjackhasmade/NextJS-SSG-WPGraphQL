import AllBlocks from "fragments/blocks"

import MediaFragment from "fragments/media"
import SEOFragment from "fragments/seo"

export const POST_BY_SLUG = /* GraphQL */ `
  query POST_BY_SLUG($slug: String!) {
    postBy(slug: $slug) {
      id
      ${AllBlocks}
      categories {
        nodes {
          name
          slug
          termTaxonomyId
        }
      }
      content
      date
      featuredImage {
        ${MediaFragment}
      }
      ${SEOFragment}
      status
      uri
      title
      PostFields {
        learn {
          items {
            id
            value
          }
          title
        }
        relatedPosts {
          ... on Post {
            id
            date
            featuredImage {
              ${MediaFragment}
            }
            ${SEOFragment}
            status
            uri
            title
          }
        }
      }
    }
  }
`

export default POST_BY_SLUG
