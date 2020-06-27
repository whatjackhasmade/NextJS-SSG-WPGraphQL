import React from "react"
import YouTube, { Options } from "react-youtube"
import { YouTubeGetID } from "helpers"

type CaseYouTubeProps = {
  url: string
}

const onReady = (e) => {
  e.target.mute()
  e.target.playVideo()
}

const onEnd = (e) => {
  e.target.mute()
  e.target.playVideo()
}

const CaseYouTube = ({ url }: CaseYouTubeProps) => {
  if (!url) return null
  const ID = YouTubeGetID(url)

  const opts: Options = {
    height: "780",
    width: "1280",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      playlist: ID,
      rel: 0,
    },
  }

  return <YouTube videoId={ID} opts={opts} onReady={onReady} onEnd={onEnd} />
}

export default CaseYouTube
