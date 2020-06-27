import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const embedYouTubeBlock = gql`
 ... on CoreEmbedYoutubeBlock {
	attributes {
		url
	}
}
`

export default print(embedYouTubeBlock)
