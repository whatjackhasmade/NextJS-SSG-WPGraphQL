const path = require("path")
const webpack = require("webpack")

const buildPath = (stringDirectory) =>
  path.resolve(__dirname + `/` + stringDirectory)

module.exports = {
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

    config.resolve.alias["queries"] = buildPath(
      "src/components/particles/graphql/queries"
    )

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
