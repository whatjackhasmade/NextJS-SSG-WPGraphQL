import gql from "graphql-tag"
import { print } from "graphql/language/printer"

import MediaFragment from "fragments/media"

export const heroBlock = gql`
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
`

export default print(heroBlock)
