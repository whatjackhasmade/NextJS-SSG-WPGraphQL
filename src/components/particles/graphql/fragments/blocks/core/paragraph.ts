import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const coreParagraphBlock = gql`
... on CoreParagraphBlock {
	isValid
	originalContent
}
`

export default print(coreParagraphBlock)
