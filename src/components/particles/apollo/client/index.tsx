import "cross-fetch/polyfill"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: "https://wjhm.noface.app/graphql",
})

export default client
