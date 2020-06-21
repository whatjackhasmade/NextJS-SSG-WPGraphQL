import React, { useState } from "react"

import GridComponent from "./grid.styles"

import Button from "atoms/button"

type GridProps = {
  filter?: boolean
  items?: []
  rows: [
    {
      altText: string
      ext: string
      filter?: boolean
      key: string
      mediaItemUrl: string
      md?: string
      tags: {
        nodes: [{ slug?: string }]
      }
      title: string
    }
  ]
}

interface ItemFields {
  id: string
  media: MediaFields
  tags: {
    nodes: [{ slug?: string }]
  }
  title: string
}

interface MediaFields {
  altText: string
  md?: string
  mediaItemUrl: string
  tag?: string
}

const Grid = (props) => {
  const { filter, items, rows }: GridProps = props
  const [count, updateCount] = useState(100)
  if (!items) return null

  const addItems = () => updateCount(count + 9)

  for (var i = 0; i < count; i++) {
    const item = items[i]
    if (typeof item === "undefined") break

    const { id, media, tags, title }: ItemFields = item
    const { altText, md, mediaItemUrl }: MediaFields = media
    const ext = mediaItemUrl.substr(mediaItemUrl.lastIndexOf(".") + 1)

    rows.push({
      altText,
      ext,
      filter,
      key: `grid-item-${id}`,
      md,
      mediaItemUrl,
      tags,
      title,
    })
  }

  return (
    <>
      <GridItems rows={rows} />
      <Button disabled={count > items.length} onClick={addItems}>
        Load More
      </Button>
    </>
  )
}

const GridItems = (props) => {
  const { rows } = props

  return (
    <GridComponent>
      {rows.map((props) => (
        <GridItem key={props.key} {...props} />
      ))}
    </GridComponent>
  )
}

const GridItem = (props) => {
  const { altText, ext, filter, key, mediaItemUrl, md, tags, title } = props
  const tag = tags.nodes[0].slug

  const [fullScreen, changeFullScreen] = useState(false)

  const toggleFullscreen = (e) => {
    e.preventDefault()
    changeFullScreen(!fullScreen)
  }

  let classList = `grid__item`
  if (fullScreen) classList += ` grid__item--fullscreen`

  if (filter) {
    if (tag === filter) classList += ` grid__item--active`
    if (tag !== filter) classList += ` grid__item--inactive`
  }

  const isVideo = ext === `mp4`

  return (
    <div className={classList} key={key} onClick={toggleFullscreen}>
      {isVideo && (
        <video src={mediaItemUrl} autoPlay={true} loop={true} muted={true} />
      )}
      {!isVideo && <img alt={altText} src={md} />}
      <span className="grid__item__title">{title}</span>
    </div>
  )
}

export default Grid
