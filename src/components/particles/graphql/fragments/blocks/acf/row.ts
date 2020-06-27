import gql from "graphql-tag"
import { print } from "graphql/language/printer"

import MediaFragment from "fragments/media"

export const rowBlock = gql`
  ... on AcfRowBlock {
		rowFields: acf {
			media {
				${MediaFragment}
			}
			content
			link
		}
	}
`

export default print(rowBlock)
