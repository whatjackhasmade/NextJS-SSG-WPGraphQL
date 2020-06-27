import { GraphQLClient } from "graphql-request"

const client = new GraphQLClient(process.env.GRAPHQL_API)

export default client
