import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const dribbbleBlock = gql`
   ... on AcfDribbbleBlock {
    dribbbleFields: acf {
			content
			count
    }
  }
`

export default print(dribbbleBlock)
