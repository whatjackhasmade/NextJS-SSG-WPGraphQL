import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const linkBlock = gql`
   ... on AcfLinkBlock {
    linkFields: acf {
			url
    }
  }
`

export default print(linkBlock)
