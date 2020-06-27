import React from "react"
import Parser from "html-react-parser"
import { TwitterTweetEmbed } from "react-twitter-embed"

import Link from "atoms/link"

const config = {
  replace: (data) => {
    const { attribs, parent } = data
    if (attribs && attribs.href) {
      const { children, href } = attribs

      if (
        href.startsWith("https://twitter.com") &&
        parent &&
        parent.attribs &&
        parent.attribs.class === "twitter-tweet"
      ) {
        let url = href.split("/")
        if (url.length < 6) return null
        url = url[5]
        url = url.split(`?`)
        if (url.length < 1) return null
        url = url[0]
        if (url) return <TwitterTweetEmbed tweetId={url} />
        return null
      }

      if (href && children) return <Link attribs={href}>{children}</Link>
    }
  },
}

const ParseHTML = (html) => {
  if (!html) return null
  const clean = Parser(html, config)
  return clean
}

export { ParseHTML }
export default ParseHTML
