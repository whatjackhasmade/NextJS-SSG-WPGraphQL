import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const presentationsBlock = gql`
   ... on AcfPresentationsBlock {
    presentationsFields: acf {
			content
			count
    }
  }
`

export default print(presentationsBlock)
