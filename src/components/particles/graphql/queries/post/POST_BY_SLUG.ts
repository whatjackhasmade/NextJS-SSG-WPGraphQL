import gql from "graphql-tag"
import { print } from "graphql/language/printer"

import MediaFragment from "fragments/media"
import SEOFragment from "fragments/seo"

export const POST_BY_SLUG = gql`
  query POST_BY_SLUG($slug: String!) {
    postBy(slug: $slug) {
      id
      blocks {
        isValid
        name
        ... on AcfCodeBlock {
          codeFields: acf {
            code
            language
          }
        }
        ... on AcfDribbbleBlock {
          dribbbleFields: acf {
            content
            count
          }
        }
        ... on AcfGithubBlock {
          githubFields: acf {
            content
          }
        }
        ... on AcfHeroBlock {
          heroFields: acf {
            background_colour
            content
            duotone
            overlay
            media {
              ${MediaFragment}
            }
          }
        }
        ... on AcfIntroBlock {
          introFields: acf {
            content
            heading
            subheading
          }
        }
        ... on AcfLinkBlock {
          linkFields: acf {
            url
          }
        }
        ... on AcfPresentationsBlock {
          presentationsFields: acf {
            content
            count
          }
        }
        ... on AcfRowBlock {
          rowFields: acf {
            media {
              ${MediaFragment}
            }
            content
            link
          }
        }
        ... on AcfTestimonialsBlock {
          testimonialsFields: acf {
            testimonials {
              author
              role
              testimonial
              logo {
                ${MediaFragment}
              }
              media {
                ${MediaFragment}
              }
            }
          }
        }
        ... on AcfYoutubeBlock {
          youtubeFields: acf {
            media
          }
        }
        ... on AcfYoutubechannelBlock {
          name
        }
        ... on CoreEmbedTwitterBlock {
          attributes {
            url
            type
            providerNameSlug
            className
            caption
            allowResponsive
            align
          }
        }
        ... on CoreEmbedYoutubeBlock {
          attributes {
            url
          }
        }
        ... on CoreHeadingBlock {
          attributes {
            align
            anchor
            className
            content
            level
            placeholder
          }
          originalContent
        }
        ... on CoreParagraphBlock {
          attributes {
            ... on CoreParagraphBlockAttributesV3 {
              align
              backgroundColor
              className
              content
              customBackgroundColor
              customFontSize
              customTextColor
              direction
              dropCap
              fontSize
              placeholder
              textColor
              width
            }
          }
          originalContent
        }
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

export default print(POST_BY_SLUG)
