import MediaFragment from "fragments/media"
import SEOFragment from "fragments/seo"

export const SERIES_BY_SLUG = /* GraphQL */ `
	query SERIES_BY_SLUG($slug: [String]) {
		serieses( where: {slug: $slug}) {
			nodes {
				id
				count
				description
				name
				SeriesFields {
					seriesImage {
						${MediaFragment}
					}
					youtubePlaylist
				}
				slug
				posts(first: 500) {
					nodes {
						featuredImage {
							${MediaFragment}
						}
						${SEOFragment}
						slug
						title
					}
				}
			}
		}
  }
`

export default SERIES_BY_SLUG
