import React, { useState } from "react"
import styled from "styled-components"
import he from "he"
import { randomID } from "helpers"

import { useInspiration } from "hooks"

import Base from "templates/base"

import Hero from "organisms/hero"
import Grid from "organisms/grid"

const InspiratioNavigation = styled.nav`
  margin: 56px 0 0;

  button {
    margin-right: 8px;
    margin-top: 8px;

    opacity: 0.5;
    text-transform: capitalize;

    &:active,
    &:focus,
    &:hover {
      opacity: 1;
    }
  }

  .focused {
    opacity: 1;
  }
`

const Inspiration = () => {
  const [currentTag, setTag] = useState(null)

  const allInspiration = useInspiration()
  const inspiration = allInspiration.map((item) => {
    return {
      ...item,
      ...item.acf,
      title: he.decode(item.title),
    }
  })

  let tags = inspiration.map((node) => node.tags.nodes[0].slug)
  tags = tags.reduce((x, y) => (x.includes(y) ? x : [...x, y]), [])
  tags = tags.sort()

  return (
    <Base>
      <Hero>
        <h1>Get Inspired</h1>
        <p>You are only limited by your imagination.</p>
        <p>
          Let all these little things happen. Don't fight them. Learn to use
          them. You can't make a mistake.
        </p>
        <p>
          Anything that happens you can learn to use - and make something
          beautiful out of it.
        </p>
        <p>This is your world, whatever makes you happy you can put in it.</p>
        <p>Go crazy.</p>
        {currentTag}
      </Hero>
      <InspiratioNavigation>
        {tags.map((tag) => (
          <TagButton currentTag={currentTag} setTag={setTag} tag={tag} />
        ))}
      </InspiratioNavigation>
      <Grid items={inspiration} type="images" filter={currentTag} />
    </Base>
  )
}

const TagButton = ({ currentTag, setTag, tag }) => {
  const onClick = (e) => {
    e.preventDefault()
    updateTag(tag)
  }

  const updateTag = (tag) => {
    tag === currentTag ? setTag(null) : setTag(tag)
  }

  return (
    <button
      key={`${tag}-${randomID()}`}
      className={currentTag && currentTag === tag ? `focused` : `focused`}
      onClick={onClick}
    >
      {tag}
    </button>
  )
}

export default Inspiration
