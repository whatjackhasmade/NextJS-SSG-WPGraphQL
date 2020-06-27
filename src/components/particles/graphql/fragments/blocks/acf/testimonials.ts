import gql from "graphql-tag"
import { print } from "graphql/language/printer"

import MediaFragment from "fragments/media"

export const testimonialsBlock = gql`
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
`

export default print(testimonialsBlock)
