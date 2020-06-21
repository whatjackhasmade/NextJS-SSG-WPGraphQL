import gql from "graphql-tag"

export const MENUS = gql`
  query MENUS {
    menus {
      nodes {
        id
        menuId
        menuItems {
          nodes {
            id
            description
            label
            menuItemId
            target
            title
            url
          }
        }
      }
    }
  }
`

export default MENUS
