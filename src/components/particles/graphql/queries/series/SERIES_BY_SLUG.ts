import gql from "graphql-tag"
import { print } from "graphql/language/printer"

import MediaFragment from "fragments/media"
import SEOFragment from "fragments/seo"

export const SERIES_BY_SLUG = gql`
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

export default print(SERIES_BY_SLUG)
