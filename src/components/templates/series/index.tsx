import React from "react"
import he from "he"
import { autoParagraph } from "helpers"
import { Series } from "wjhm"

import { SeriesIntro, SeriesWrapper } from "./series.styles"
import SeriesPost from "./parts/post"

import ParseHTML from "particles/ParseHTML"

import Button from "atoms/button"
import HR from "atoms/hr"

import Base from "templates/base"

const SeriesTemplate = (props: Series) => {
  const { description, name, posts, SeriesFields } = props
  const { seriesImage, youtubePlaylist } = SeriesFields
  const hasItems = posts.nodes && posts.nodes.length > 0

  return (
    <Base context={props}>
      <SeriesWrapper>
        {SeriesFields && (
          <SeriesIntro>
            <div>
              <a
                href={youtubePlaylist}
                rel="noopener noreferrer"
                target="_blank"
              >
                <h1>{he.decode(name)}</h1>
              </a>
              {ParseHTML(autoParagraph(description))}
              {youtubePlaylist && (
                <Button
                  href={youtubePlaylist}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View YouTube Playlist
                </Button>
              )}
            </div>
            <a
              className="intro__image"
              href={youtubePlaylist}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt={seriesImage.altText} src={seriesImage.mediaItemUrl} />
            </a>
          </SeriesIntro>
        )}
        <HR />
        {hasItems && (
          <section className="series__grid">
            {posts.nodes.reverse().map((post) => (
              <SeriesPost key={post.id} {...post} />
            ))}
          </section>
        )}
      </SeriesWrapper>
    </Base>
  )
}

export default SeriesTemplate
