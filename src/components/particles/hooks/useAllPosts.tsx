import useSWR from "swr"
import { request } from "graphql-request"

import POSTS from "queries/post/POSTS"

const API = process.env.GRAPHQL_API
const fetcher = (query) => request(API, query)

const useAllPosts = () => {
  const state = useSWR(POSTS, fetcher)
  const { data } = state
  if (!data) return state
  const posts = data && data?.posts?.nodes
  return posts
}

export default useAllPosts
