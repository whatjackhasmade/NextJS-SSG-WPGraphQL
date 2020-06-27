import React from "react"
import { isEmptyObject, randomID } from "helpers"

import ParseHTML from "particles/ParseHTML"

import Code from "atoms/code"
import Heading from "atoms/heading"

import Bookmark from "molecules/bookmark"
import YouTube from "molecules/embed/youtube"

import Dribbble from "organisms/dribbble"
import Github from "organisms/github"
import Hero from "organisms/hero"
import Intro from "organisms/intro"
import Presentations from "organisms/presentations"
import Row from "organisms/row"
import TestimonialsComponent from "organisms/testimonials"
import YouTubeChannel from "organisms/youtube"

const components = {
  "acf/code": Code,
  "acf/dribbble": Dribbble,
  "acf/github": Github,
  "acf/hero": Hero,
  "acf/intro": Intro,
  "acf/link": Bookmark,
  "acf/presentations": Presentations,
  "acf/row": Row,
  "acf/testimonials": TestimonialsComponent,
  "acf/youtube": YouTube,
  "acf/youtubechannel": YouTubeChannel,
  "core/heading": Heading,
  "core-embed/youtube": YouTube,
}

const convertACFProps = (component) => {
  // get all object keys and iterate over them
  Object.keys(component).forEach((key) => {
    if (key.includes("Fields")) {
      component.data = component[key]
      delete component[key]
    }
  })

  return component
}

const ComponentParser = (props) => {
  let { content } = props
  if (!content) return null

  const validComponents = content.filter(
    (c) => !c || !isEmptyObject(c) || c.name !== null
  )
  const hasComponents = validComponents && validComponents.length > 0
  if (!hasComponents) return null

  const pageComponents = validComponents.map((component, index) => {
    const { name, originalContent } = component
    const Component = components[name]

    if (!Component) return ParseHTML(originalContent)

    component = convertACFProps(component)

    return (
      <Component
        index={index}
        key={`component-${randomID()}`}
        {...component}
        {...component.attributes}
        {...component.data}
      />
    )
  })

  if (!pageComponents) return null
  return pageComponents
}

export default ComponentParser
