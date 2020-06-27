import gql from "graphql-tag"
import { print } from "graphql/language/printer"

import MediaFragment from "fragments/media"

export const PAGE_BY_URI = gql`
  query PAGE_BY_URI($uri: String!) {
    pageBy(uri: $uri) {
      id
      blocks {
        ... on AcfCodeBlock {
          name
          codeFields: acf {
            code
            language
          }
        }
        ... on AcfDribbbleBlock {
          name
          dribbbleFields: acf {
            content
            count
          }
        }
        ... on AcfGithubBlock {
          name
          githubFields: acf {
            content
          }
        }
        ... on AcfHeroBlock {
          name
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
          name
          introFields: acf {
            content
            heading
            subheading
          }
        }
        ... on AcfLinkBlock {
          name
          linkFields: acf {
            url
          }
        }
        ... on AcfPresentationsBlock {
          name
          presentationsFields: acf {
            content
            count
          }
        }
        ... on AcfRowBlock {
          name
          rowFields: acf {
            media {
              ${MediaFragment}
            }
            content
            link
          }
        }
        ... on AcfTestimonialsBlock {
          name
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
          name
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
          isValid
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
      uri
    }
  }
`

export default print(PAGE_BY_URI)
