import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const introBlock = gql`
  ... on AcfIntroBlock {
    introFields: acf {
			content
			heading
			subheading
    }
  }
`

export default print(introBlock)
