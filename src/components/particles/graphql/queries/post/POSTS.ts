import gql from "graphql-tag"
import { print } from "graphql/language/printer"

import MediaFragment from "fragments/media"
import SEOFragment from "fragments/seo"

export const POSTS = gql`
  query POSTS {
    posts(first: 500) {
      nodes {
        id
        slug
        blocks {
          isValid
          name
          originalContent
        }
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
        acf: PostFields {
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
  }
`

export default print(POSTS)
