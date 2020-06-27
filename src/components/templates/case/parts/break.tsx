import React from "react"
import { InView } from "react-intersection-observer"
import { MediaItem } from "wjhm"

import { BreakImage } from "../case.styles"

import ImageLoader from "molecules/imageloader"

const CaseBreak = (props) => {
  const { image } = props
  const { altText, mediaItemUrl }: MediaItem = image

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ inView, ref }) => (
        <BreakImage ref={ref}>
          <div className="break__image">
            <ImageLoader alt={altText} src={mediaItemUrl} />
          </div>
        </BreakImage>
      )}
    </InView>
  )
}

export default CaseBreak
