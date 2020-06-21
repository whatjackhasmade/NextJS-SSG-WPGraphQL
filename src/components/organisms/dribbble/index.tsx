import React, { useState } from "react"
import Slider from "react-slick"
import ParseHTML from "particles/ParseHTML"
import useAllDribbble from "hooks/useAllDribbble"

import DribbbleComponent from "./dribbble.styles"
import settings from "./settings.json"

import LogoDribbble from "assets/images/icons/brands/dribbble.svg"

import Intro from "organisms/intro"

type DribbbleProps = {
  content: string
}

type ShotProps = {
  id: string
  description: string
  images: {
    two_x: string
  }
  html_url: string
  title: string
}

const Dribbble = ({ content }: DribbbleProps) => {
  const shots = useAllDribbble()
  const hasShots = shots && shots.length > 0
  if (!hasShots) return null

  return (
    <DribbbleComponent>
      <Intro
        heading={`Interface Designs`}
        subheading={`My Dribbble Shots`}
        marginReduced
      >
        {ParseHTML(content)}
      </Intro>
      <Slider {...settings}>
        {shots.map(({ node }) => (
          <Shot key={node.id} {...node} />
        ))}
      </Slider>
    </DribbbleComponent>
  )
}

const Shot = (props: ShotProps) => {
  const { description, html_url, images, title } = props

  const [mouseOver, setMouseOver] = useState(false)
  const handleHover = (e) => setMouseOver(!mouseOver)

  let className = `dribbble__shot`
  if (mouseOver) className = `dribbble__shot dribbble__shot--animate`

  return (
    <div
      className={className}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a
        className="dribbble__shot__thumbnail"
        href={html_url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <LogoDribbble className="dribbble__shot__logo" />
        <img
          alt={title}
          className="presentations__event__thumbnail"
          src={images.two_x}
        />
      </a>
      <div className="dribbble__shot__meta">
        <a href={html_url} rel="noopener noreferrer" target="_blank">
          <h3>{title}</h3>
        </a>
        <div className="shot__description">{ParseHTML(description)}</div>
      </div>
    </div>
  )
}

export default Dribbble
