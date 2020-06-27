import React from "react"
import YouTube from "react-youtube"
import { YouTubeGetID } from "helpers"

import YouTubeComponent from "./youtube.styles"

// https://developers.google.com/youtube/player_parameters
const opts = {
  playerVars: {
    autoplay: 0,
  },
}

// access to player in all event handlers via event.target
const _onReady = (event) => {
  event.target.pauseVideo()
}

type YouTubeProps = {
  attributes: {
    url: string
  }
  children: any
}

const YouTubeBlock = (props: YouTubeProps) => {
  const { children } = props
  const url = props?.attributes?.url

  if (!url) {
    return (
      <YouTubeComponent>
        <div className="youtube__contents">{children}</div>
      </YouTubeComponent>
    )
  }

  return (
    <YouTubeComponent>
      <div className="youtube__wrapper">
        <YouTube videoId={YouTubeGetID(url)} onReady={_onReady} />
      </div>
    </YouTubeComponent>
  )
}

export default YouTubeBlock
