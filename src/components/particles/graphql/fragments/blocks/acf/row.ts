import MediaFragment from "fragments/media"

export const gqlSnippet = /* GraphQL */ `
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

export default gqlSnippet
