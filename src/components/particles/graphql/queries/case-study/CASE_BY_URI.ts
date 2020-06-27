import MediaFragment from "fragments/media"
import SEOFragment from "fragments/seo"

export const CASE_BY_URI = /* GraphQL */ `
	query CASE_BY_URI($uri: String!) {
  	caseStudyBy(uri: $uri) {
			id
			date
			featuredImage {
				${MediaFragment}
			}
			${SEOFragment}
			status
			uri
			title
			CaseStudyFields {
				devicePreviews
				devices {
					desktop
					fieldGroupName
					mobile
				}
				gallery {
					${MediaFragment}
				}
				intro {
					description
					illustration {
						${MediaFragment}
					}
					title
					subtitle
				}
				related {
					...on CaseStudy {
						id
						date
						featuredImage {
							${MediaFragment}
						}
						${SEOFragment}
						status
						uri
						title
					}
				}
				siteUrl
				testimonials {
					testimonial {
						author
						fieldGroupName
						logo {
							${MediaFragment}
						}
						media {
							${MediaFragment}
						}
						role
						testimonial
					}
				}
				blocks {
					fields {
						columnOne
						columnTwo
						title
					}
				}
			}
		}
	}
`

export default CASE_BY_URI
