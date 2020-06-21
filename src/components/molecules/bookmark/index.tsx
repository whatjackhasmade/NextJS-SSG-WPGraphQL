import React, { useEffect, useState } from "react"
import StyledBookmark from "./bookmark.styles"

const scraperURL = process.env.OPEN_GRAPH_SCRAPER

type BookmarkProps = {
  url: string
}

type BookmarkImageData = {
  ogDescription?: string
  ogImage?: any
  ogTitle?: string
}

const Bookmark = ({ url }: BookmarkProps) => {
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

  const multipleImages = Array.isArray(ogImage) && ogImage.length > 0
  const hasImage = ogImage || multipleImages

  return (
    <StyledBookmark className="bookmark" href={url}>
      <div className="bookmark__image">
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
  if (!image.length) return <img alt={alt} src={image.url} />
  return <img alt={alt} src={image[0].url} />
}

export default Bookmark
