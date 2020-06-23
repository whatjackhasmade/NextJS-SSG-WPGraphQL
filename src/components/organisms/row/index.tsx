import React from "react"
import { InView } from "react-intersection-observer"
import { AcfRowBlockFields } from "wjhm"
import ParseHTML from "particles/ParseHTML"

import RowComponent from "./row.styles"

import ImageLoader from "molecules/imageloader"

type AcfRowFields = AcfRowBlockFields & {
  index?: number
}

const Row = (props: AcfRowFields) => {
  const { content, index, link, media } = props
  const align = index % 2 === 0 ? `left` : `right`
  const ext = media.mediaItemUrl.substr(media.mediaItemUrl.lastIndexOf(".") + 1)

  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref }) => (
        <RowComponent
          align={align}
          className={inView ? `row row--show` : `row`}
          ref={ref}
        >
          <div className="row__column">
            {link !== "" ? (
              <a href={`${link}`}>
                <RowMedia media={media} ext={ext} />
              </a>
            ) : (
              <RowMedia media={media} ext={ext} />
            )}
          </div>
          <div className="row__column row__content">{ParseHTML(content)}</div>
        </RowComponent>
      )}
    </InView>
  )
}

const RowMedia = ({ ext, media }) => (
  <div className="row__media">
    {ext !== `mp4` ? (
      <ImageLoader src={media.mediaItemUrl} alt={media.altText} />
    ) : (
      <video
        src={media.mediaItemUrl}
        muted={true}
        autoPlay={true}
        loop={true}
      />
    )}
  </div>
)

export default Row
