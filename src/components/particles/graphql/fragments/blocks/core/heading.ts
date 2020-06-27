import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const coreHeadingBlock = gql`
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
`

export default print(coreHeadingBlock)
