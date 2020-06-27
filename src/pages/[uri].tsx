import { GetStaticProps } from "next"
import client from "particles/apollo/client"

import PAGE_BY_URI from "queries/page/PAGE_BY_URI"
import PAGES from "queries/page/PAGES"

import PageTemplate from "templates/page"

interface PageItem {
  isFrontPage: boolean
  uri: string
}

interface PageCollection extends Array<PageItem> {}

// This function gets called at build time
export async function getStaticPaths() {
  let staticObject = { paths: [{ params: { uri: "" } }], fallback: false }

  try {
    // Call an external API endpoint to get pages
    const data = await client.request(PAGES)
    const nodes: PageCollection = data.pages.edges.map(({ node }) => node)

    const paths = nodes.map((node) => {
      const { isFrontPage } = node
      let { uri } = node

      if (isFrontPage) uri = ``

      return {
        params: { uri },
      }
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    staticObject = { paths, fallback: false }
  } catch (error) {
    console.error(error.message)
  }

  return staticObject
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  let postProps = { props: null }
  const { params } = context
  const { uri } = params

  try {
    // Call an external API endpoint to get pages
    const data = await client.request(PAGE_BY_URI, { uri })
    const pageData = data.pageBy

    // Pass page data to the page via props
    postProps = { props: { ...pageData } }
  } catch (error) {
    console.error(error.message)
  }

  return postProps
}

export default PageTemplate
