export const gqlSnippet = /* GraphQL */ `
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
`

export default gqlSnippet
