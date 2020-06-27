const path = require("path")
const webpack = require("webpack")

const buildPath = (stringDirectory) =>
  path.resolve(__dirname + `/` + stringDirectory)

module.exports = {
  env: {
    DOMAIN: "https://whatjackhasmade.co.uk",
    DRIBBBLE_TOKEN:
      "9422ed733294915d402ad516d509f33f618c1ddde539c9fddd94415530e127e3",
    GOOGLE_API: "AIzaSyArCR7gVx2-HT0wXvjLl3GHOPqolqVINoA",
    GRAPHQL_API: "https://wjhm.noface.app/graphql",
    OPEN_GRAPH_SCRAPER: "https://wjhm-opengraphscraper.herokuapp.com/?url=",
  },
  webpack: (config) => {
    config.resolve.alias["assets"] = buildPath("src/assets")
    config.resolve.alias["pages"] = buildPath("src/pages")

    config.resolve.alias["components"] = buildPath("src/components")
    config.resolve.alias["atoms"] = buildPath("src/components/atoms")
    config.resolve.alias["molecules"] = buildPath("src/components/molecules")
    config.resolve.alias["organisms"] = buildPath("src/components/organisms")
    config.resolve.alias["templates"] = buildPath("src/components/templates")
    config.resolve.alias["particles"] = buildPath("src/components/particles")

    config.resolve.alias["css"] = buildPath("src/components/particles/css")
    config.resolve.alias["helpers"] = buildPath(
      "src/components/particles/helpers"
    )
    config.resolve.alias["hooks"] = buildPath("src/components/particles/hooks")

    config.resolve.alias["fragments"] = buildPath(
      "src/components/particles/graphql/fragments"
    )
    config.resolve.alias["queries"] = buildPath(
      "src/components/particles/graphql/queries"
    )
    config.resolve.alias["wjhm"] = buildPath("src/generated/graphql/wjhm")

    // Support SVG loading https://stackoverflow.com/a/55180310
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    })

    return config
  },
}
