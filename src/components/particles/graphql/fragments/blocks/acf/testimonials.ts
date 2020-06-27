import MediaFragment from "fragments/media"

export const gqlSnippet = /* GraphQL */ `
... on AcfTestimonialsBlock {
	testimonialsFields: acf {
		testimonials {
			author
			role
			testimonial
			logo {
				${MediaFragment}
			}
			media {
				${MediaFragment}
			}
		}
	}
}
`

export default gqlSnippet
