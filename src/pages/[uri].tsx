import client from "particles/apollo/client"

import PAGE_BY_URI from "queries/page/PAGE_BY_URI"
import PAGES from "queries/page/PAGES"

import PageTemplate from "templates/page"

interface PageItem {
  data: {
    pageBy: any
  }
}

interface PageCollection extends Array<PageItem> {}

const Page = (props) => <PageTemplate {...props} />

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get pages
  const nodes: PageCollection = await new Promise((resolve, reject) => {
    return client
      .query({
        query: PAGES,
      })
      .then(({ data }) => resolve(data.pages.edges.map(({ node }) => node)))
      .catch((error) => reject(error.message))
  })

  const paths = nodes.map((node) => ({
    params: {
      ...node,
    },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { uri } = params

  // params contains the page `id`.
  // If the route is like /pages/1, then params.id is 1
  const page: PageItem = await new Promise((resolve, reject) => {
    return client
      .query({
        query: PAGE_BY_URI,
        variables: { uri },
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error.message))
  })

  const pageData = page.data.pageBy

  // Pass page data to the page via props
  return { props: { ...pageData } }
}

export default Page
