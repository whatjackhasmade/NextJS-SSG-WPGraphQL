import * as React from "react"
import { InView } from "react-intersection-observer"
import { decodeHTML } from "helpers"

import { StyledRelatedItem, RelatedWrapper } from "./related.styles"

import Link from "atoms/link"

import ImageLoader from "molecules/imageloader"

type RelatedProps = {
  data: any
  relatedRef?: any
  title?: string
}

const Related = (props: RelatedProps) => {
  const { data, relatedRef, title = "Continue Reading" } = props
  const items = data.filter((item) => item.featuredImage)
  const hasItems = items && items.length > 0
  if (!hasItems) return null

  return (
    <RelatedWrapper ref={relatedRef}>
      <h2>
        {title}{" "}
        <span aria-label="book pile emoji" role="img">
          📚
        </span>
      </h2>
      <div className="related__items">
        {items.map((item) => (
          <InView key={item.uri} threshold={0} triggerOnce={true}>
            {({ inView, ref }) => (
              <StyledRelatedItem ref={ref}>
                <RelatedItem {...item} inView={inView} />
              </StyledRelatedItem>
            )}
          </InView>
        ))}
      </div>
    </RelatedWrapper>
  )
}

const RelatedItem = (props) => {
  const { featuredImage, inView, title, seo, uri } = props
  const { altText, md } = featuredImage
  const { metaDesc } = seo

  return (
    <Link as={`/${uri}`} to={`/posts/${uri}`}>
      <div className="related__media related__media--fallback">
        <ImageLoader alt={altText ? altText : title} src={md} />
      </div>
      {title && <h3>{decodeHTML(title)}</h3>}
      {metaDesc && <p>{metaDesc}</p>}
    </Link>
  )
}

export default Related
