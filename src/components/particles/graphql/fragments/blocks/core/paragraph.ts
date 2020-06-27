import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const coreParagraphBlock = gql`
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
	isValid
	originalContent
}
`

export default print(coreParagraphBlock)
