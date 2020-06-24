import React from "react"
import Slider from "react-slick"
import { AcfPresentationsBlockFields } from "wjhm"
import ParseHTML from "particles/ParseHTML"

import { usePresentations } from "particles/hooks"

import PresentationsComponent from "./presentations.styles"
import settings from "./settings.json"

import Intro from "organisms/intro"

type PresentationProps = {
  date: string
  featuredImage: {
    altText: string
    xs: string
    sm: string
    md: string
    mediaItemUrl: string
    lg: string
    xl: string
    uri: string
  }
  id: string
  title: string
  url: string
  venue: string
}

const Presentations = (props: AcfPresentationsBlockFields) => {
  const { content } = props
  const presentations = usePresentations()
  if (!presentations) return null
  const hasPresentations = presentations && presentations.length > 0
  if (!hasPresentations) return null

  return (
    <PresentationsComponent>
      <Intro
        heading="Event Presentations"
        marginReduced={true}
        subheading="Touring the south coast"
      >
        <div>{ParseHTML(content)}</div>
      </Intro>
      <Slider {...settings}>
        {presentations.length > 0 &&
          presentations.map((event) => <Presentation {...event} />)}
      </Slider>
    </PresentationsComponent>
  )
}

const Presentation = ({ featuredImage, title, venue }: PresentationProps) => (
  <div className="presentations__event" key={`${title}-${venue}`}>
    <img
      alt={title}
      className="presentations__event__thumbnail"
      src={featuredImage.sm}
    />
    <div className="presentations__event__meta">
      <h5 className="subheading">{venue}</h5>
      <h3>{title}</h3>
    </div>
  </div>
)

export default Presentations
