import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const githubBlock = gql`
   ... on AcfGithubBlock {
    githubFields: acf {
			content
    }
  }
`

export default print(githubBlock)
