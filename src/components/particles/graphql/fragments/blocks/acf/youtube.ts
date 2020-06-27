import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const youtubeBlock = gql`
	... on AcfYoutubeBlock {
		youtubeFields: acf {
			media
		}
	}
`

export default print(youtubeBlock)
