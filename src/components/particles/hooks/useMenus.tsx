import React from "react"
import client from "particles/apollo/client"

import MENUS from "queries/menu/MENUS"

const data ={
    menus: {
      nodes: [
        {
          id: "TWVudTo1MDY=",
          menuId: 506,
          slug: "footer-menu",
          menuItems: {
            nodes: [
              {
                id: "bmF2X21lbnVfaXRlbToxMTgw",
                description: null,
                label: "Behance",
                menuItemId: 1180,
                target: "_blank",
                title: null,
                url: "https://www.behance.net/JLDavies",
              },
              {
                id: "bmF2X21lbnVfaXRlbToxMTgy",
                description: null,
                label: "YouTube",
                menuItemId: 1182,
                target: "_blank",
                title: null,
                url: "https://www.youtube.com/channel/UCIOm-HME4V_STS9yWM5aXIg",
              },
              {
                id: "bmF2X21lbnVfaXRlbToxMTgx",
                description: null,
                label: "Twitter",
                menuItemId: 1181,
                target: "_blank",
                title: null,
                url: "https://twitter.com/whatjackhasmade",
              },
              {
                id: "bmF2X21lbnVfaXRlbToxMTgz",
                description: null,
                label: "Facebook",
                menuItemId: 1183,
                target: "_blank",
                title: null,
                url: "https://www.facebook.com/whatjackhasmade",
              },
            ],
          },
        },
        {
          id: "TWVudTo1MDQ=",
          menuId: 504,
          slug: "header-menu",
          menuItems: {
            nodes: [
              {
                id: "bmF2X21lbnVfaXRlbTozNjc5",
                description: null,
                label: "Homepage",
                menuItemId: 3679,
                target: null,
                title: null,
                url: "/",
              },
              {
                id: "bmF2X21lbnVfaXRlbTozNjY0",
                description: null,
                label: "About",
                menuItemId: 3664,
                target: null,
                title: null,
                url: "https://wjhm.noface.app/about/",
              },
              {
                id: "bmF2X21lbnVfaXRlbTozNjY1",
                description: null,
                label: "Insights",
                menuItemId: 3665,
                target: null,
                title: null,
                url: "/posts",
              },
              {
                id: "bmF2X21lbnVfaXRlbTozOTEx",
                description:
                  "We’ll be specifically looking at how we can use WordPress as a headless CMS (Content Management System) with a GraphQL schema to interface with. After setting up our WordPress site and theme, we’ll move onto Gatsby and how we can use our new schema to generate content for our Gatsby site, programmatically generating pages, converting Gutenberg blocks to React components and finishing off the chapter with a focus on SEO in Gatsby. Finally, we’ll cap off the series with a focus on deployment and how you can deploy your Gatsby website for free to Netlify.",
                label: "Gatsby & WordPress",
                menuItemId: 3911,
                target: null,
                title: null,
                url: "https://wjhm.noface.app/gatsby-wordpress-2019/",
              },
              {
                id: "bmF2X21lbnVfaXRlbTozNjY2",
                description: null,
                label: "Latest Work",
                menuItemId: 3666,
                target: null,
                title: null,
                url: "https://wjhm.noface.app/leomik/",
              },
              {
                id: "bmF2X21lbnVfaXRlbTozNjY3",
                description: null,
                label: "Hire Me",
                menuItemId: 3667,
                target: null,
                title: null,
                url: "mailto:jack@noface.co.uk",
              },
            ],
          },
        },
      ],
    },
  };

export const useMenus =  () => {
  return data.menus.nodes
  // return  new Promise((resolve, reject) => {
  //   return client
  //     .query({
  //       query: MENUS,
  //     })
  //     .then(({ data }) => resolve(data.menus.nodes))
  //     .catch((error) => reject(error.message))
  // })
}

export default useMenus
