import { GetStaticProps } from "next"
import client from "particles/apollo/client"

import CASE_BY_URI from "queries/case-study/CASE_BY_URI"
import CASES from "queries/case-study/CASES"

import CaseTemplate from "templates/case"

interface CaseItem {
  id: string
  slug: string
}

interface CaseCollection extends Array<CaseItem> {}

// This function gets called at build time
export async function getStaticPaths() {
  try {
    // Call an external API endpoint to get cases
    const data = await client.request(CASES)
    const nodes: CaseCollection = data.caseStudies.nodes

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
  const { uri } = params

  try {
    // Call an external API endpoint to get pages
    const data = await client.request(CASE_BY_URI, { uri })
    const caseBy = data.caseStudyBy

    // Pass page data to the page via props
    return { props: { ...caseBy } }
  } catch (error) {
    console.error(error.message)
    return { props: null }
  }
}

export default CaseTemplate
