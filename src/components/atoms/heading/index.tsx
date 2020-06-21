import React, { FunctionComponent, ReactNode } from "react"
import slugify from "slugify"

type HeadingProps = {
  attributes?: {
    align: string
    anchor: string
    className: string
    content: string
    level: 1 | 2 | 3 | 4 | 5 | 6
    placeholder: string
  }
  children?: string
  className?: string
  content: string
  isValid?: boolean
  level: 1 | 2 | 3 | 4 | 5 | 6
  originalContent?: string
  style?: string
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const Heading = ({
  children,
  className,
  content,
  level,
  style,
}: HeadingProps) => {
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
