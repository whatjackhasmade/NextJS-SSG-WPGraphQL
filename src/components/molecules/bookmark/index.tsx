import React, { useEffect, useState } from "react"
import StyledBookmark from "./bookmark.styles"
import { AcfLinkBlockFields } from "wjhm"

const scraperURL = process.env.OPEN_GRAPH_SCRAPER

type BookmarkImageData = {
  ogDescription?: string
  ogImage?: any
  ogTitle?: string
}

const validArray = (arrayToCompare) => {
  if (!arrayToCompare) return false
  let valid = true
  valid = Array.isArray(arrayToCompare)
  if (!valid) return false
  valid = arrayToCompare.length > 0
  return valid
}

const Bookmark = (props: AcfLinkBlockFields) => {
  const { url } = props
  const fallback = `/images/placeholder.png`
  const [data, setData] = useState<BookmarkImageData>({})

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(scraperURL + url)
      const jsonPayload = await response.json()
      setData(jsonPayload.data)
      return jsonPayload
    }

    getData()
  }, [url])

  const ogDescription = data?.ogDescription
  const ogImage = data?.ogImage
  const ogTitle = data?.ogTitle
  if (!ogTitle) return null

  const hasMutiple = validArray(ogImage)
  const hasImage = ogImage?.url || hasMutiple

  let className = `bookmark__image`
  if (!hasImage) className += ` bookmark__image--fallback`

  return (
    <StyledBookmark className="bookmark" href={url}>
      <div className={className}>
        {hasImage && (
          <BookmarkImage alt={`Open Graph Image for ${url}`} image={ogImage} />
        )}
        {!hasImage && (
          <img alt={`Open Graph Fallback Image for ${url}`} src={fallback} />
        )}
      </div>
      <div className="bookmark__content">
        <h3 className="bookmark__title">{ogTitle}</h3>
        <p className="bookmark__description">{ogDescription}</p>
      </div>
    </StyledBookmark>
  )
}

const BookmarkImage = ({ alt, image }) => {
  const isSingle = !image.length
  if (isSingle) return <img alt={alt} src={image.url} />
  const [firstImage] = image
  return <img alt={alt} src={firstImage.url} />
}

export default Bookmark
