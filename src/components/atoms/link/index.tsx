import React from "react"
import Link from "next/link"
import { isInternal } from "helpers"

export const useRelative = (url) => {
  if (!url) return undefined
  if (url.startsWith(`/`)) return url

  let string = url

  const GRAPHQL_API = process.env.GRAPHQL_API
  const API = GRAPHQL_API.split("/")
  let API_ROOT = ``
  for (let i = 0; i < API.length - 1; i++) {
    if (i > 0) API_ROOT += "/"
    API_ROOT += API[i]
  }

  string = string.replace(API_ROOT, "")
  string = string.replace(/\/$/, "")

  return string
}

const DynamicLink = (props) => {
  const { as, children, className, href, to } = props
  const goto = href ? href : to ? to : `#`
  const url = useRelative(goto)

  const urlIndex = url.lastIndexOf("/")
  const routeAs = url.substr(urlIndex)

  if (isInternal(url)) {
    return (
      <Link href={url}>
        <a className={className}>{children}</a>
      </Link>
    )
  }

  return (
    <a className={className} href={url}>
      {children}
    </a>
  )
}

export default DynamicLink
