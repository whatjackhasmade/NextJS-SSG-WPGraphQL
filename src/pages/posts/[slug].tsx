import { GetStaticProps } from "next"
import client from "particles/apollo/client"
import { Post } from "wjhm"

import POST_BY_SLUG from "queries/post/POST_BY_SLUG"
import POSTS from "queries/post/POSTS"

import PostTemplate from "templates/post"

interface PostCollection extends Array<Post> {}

// This function gets called at build time
export async function getStaticPaths() {
  try {
    // Call an external API endpoint to get posts
    const data = await client.request(POSTS)
    const nodes: PostCollection = data.posts.nodes

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
    const data = await client.request(POST_BY_SLUG, { slug })
    const postBy = data.postBy

    // Pass page data to the page via props
    return { props: { ...postBy } }
  } catch (error) {
    console.error(error.message)
    return { props: null }
  }
}

export default PostTemplate
