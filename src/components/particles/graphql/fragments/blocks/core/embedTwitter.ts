import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const embedTwitterBlock = gql`
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
`

export default print(embedTwitterBlock)
