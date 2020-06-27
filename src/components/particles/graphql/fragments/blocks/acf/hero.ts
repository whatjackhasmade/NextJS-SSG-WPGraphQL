import MediaFragment from "fragments/media"

export const gqlSnippet = /* GraphQL */ `
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

export default gqlSnippet
