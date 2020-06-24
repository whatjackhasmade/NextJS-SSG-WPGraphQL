import React from "react"
import Link from "next/link"
import { isInternal } from "helpers"

export const useRelative = (url) => {
  if (!url) return undefined

  const GRAPHQL_API = process.env.GRAPHQL_API
  let string = url

  if (url.startsWith(`/`)) return url
  string = string.replace(GRAPHQL_API, "")
  return string
}

const DynamicLink = (props) => {
  const { children, className, href, to } = props
  const goto = href ? href : to ? to : `#`
  const url = useRelative(goto)

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
