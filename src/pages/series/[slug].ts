import { GetStaticProps } from "next"
import client from "particles/apollo/client"
import { Series } from "wjhm"

import SERIES_BY_SLUG from "queries/series/SERIES_BY_SLUG"
import SERIESES from "queries/series/SERIESES"

import SeriesTemplate from "templates/series"

interface SeriesItem {
  id: string
  slug: string
}

interface SeriesCollection extends Array<SeriesItem> {}

// This function gets called at build time
export async function getStaticPaths() {
  try {
    // Call an external API endpoint to get serieses
    const data = await client.request(SERIESES)
    const nodes: SeriesCollection = data.serieses.nodes

    const paths = nodes.map((node) => ({
      params: {
        ...node,
      },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  } catch (error) {
    console.error(error.message)
    return { paths: null, fallback: false }
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const { slug } = params

  try {
    // Call an external API endpoint to get pages
    const data = await client.request(SERIES_BY_SLUG, { slug })
    const [series] = data.serieses.nodes

    // Pass page data to the page via props
    return { props: { ...series } }
  } catch (error) {
    console.error(error.message)
    return { props: null }
  }
}

export default SeriesTemplate
