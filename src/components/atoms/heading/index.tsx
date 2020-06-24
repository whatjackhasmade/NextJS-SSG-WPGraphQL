import React, { FunctionComponent, ReactNode } from "react"
import slugify from "slugify"
import { CoreHeadingBlockAttributes } from "wjhm"

type HeadingProps = CoreHeadingBlockAttributes & {
  children?: string
  style: 1 | 2 | 3 | 4 | 5 | 6
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const Heading = (props: HeadingProps) => {
  const { children, className, content, level, style } = props
  const HeadingComponent = `h${level}` as HeadingTag

  let headingClass = ``
  if (style) headingClass += ` h${style}`
  if (className) headingClass += ` ${className}`

  const innerContent = content ? content : children ? children : ``
  const id = slugify(innerContent.toLowerCase())

  return (
    <HeadingComponent className={headingClass} id={id}>
      {innerContent}
    </HeadingComponent>
  )
}

export default Heading
