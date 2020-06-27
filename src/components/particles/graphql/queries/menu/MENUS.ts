export const MENUS = /* GraphQL */ `
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
