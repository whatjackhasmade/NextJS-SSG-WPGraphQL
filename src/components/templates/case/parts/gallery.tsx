import React from "react"
import { InView } from "react-intersection-observer"
import { MediaItem } from "wjhm"

import { GalleryContainer } from "../case.styles"

import ImageLoader from "molecules/imageloader"

type CaseGalleryProps = {
  images?: [MediaItem]
  small?: boolean
}

const CaseGallery = (props) => {
  const { images, small }: CaseGalleryProps = props
  if (!images[0]) return null

  let classList = `gallery`
  if (small) classList += ` gallery--small`

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ inView, ref }) => (
        <GalleryContainer
          className={inView ? `${classList} gallery--show` : `${classList}`}
          ref={ref}
        >
          {images.map((image: MediaItem) => (
            <div className="gallery__image__wrapper">
              <div className="gallery__image">
                <ImageLoader
                  alt={image.altText}
                  key={image.mediaItemUrl}
                  src={image.mediaItemUrl}
                />
              </div>
            </div>
          ))}
        </GalleryContainer>
      )}
    </InView>
  )
}

export default CaseGallery
