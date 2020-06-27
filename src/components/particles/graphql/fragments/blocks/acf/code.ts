import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const codeBlock = gql`
  ... on AcfCodeBlock {
    codeFields: acf {
			code
			language
    }
  }
`

export default print(codeBlock)
