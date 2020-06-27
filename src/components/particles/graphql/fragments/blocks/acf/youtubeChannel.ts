import gql from "graphql-tag"
import { print } from "graphql/language/printer"

export const youtubechannelBlock = gql`
... on AcfYoutubechannelBlock {
    name
}
`

export default print(youtubechannelBlock)
