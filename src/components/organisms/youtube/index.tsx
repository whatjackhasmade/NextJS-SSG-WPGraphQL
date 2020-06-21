import React from "react"
import YouTube from "react-youtube"
import { useYouTubeVideos } from "particles/hooks"

import YouTubeComponent from "./youtube.styles"

import ImageLoader from "molecules/imageloader"

// https://developers.google.com/youtube/player_parameters
const opts = {
  playerVars: {
    autoplay: 0
  }
}

type YouTubeChannelProps = {}

const YouTubeChannel = ({}: YouTubeChannelProps) => {
  const channelVideos = useYouTubeVideos()
  if(!channelVideos) return null;
  const hasVideos = channelVideos && channelVideos.length > 0;
  if(!hasVideos) return null;


  // access to player in all event handlers via event.target
  const _onReady = (event) => event.target.pauseVideo()

  const firstVideo = channelVideos[0].node;

  return (
    <YouTubeComponent>
      <img
        alt=""
        className="youtube__background youtube__background--left"
        src="/images/youtube-left.png"
      />
      <img
        alt=""
        className="youtube__background youtube__background--right"
        src="/images/youtube-right.png"
      />
      <div className="youtube__content">
        <div className="youtube__intro">
          <h2>My YouTube Channel</h2>
          <p>
            Early on in my career I knew it was important to document what I was
            learning, so I started a blog. The next step on from that was to
            start my own YouTube channel. I did this not only for myself, but to
            also share my understanding of topics with others looking to develop
            their skills.
          </p>
          <p>
            Starting my own YouTube channel encouraged me to understand a topic
            deeply as to teach a topic, you must have a strong grasp on the
            concepts involved. I don't claim to be an expert on every subject I
            cover, but if I find it of interest, I will cover it and share my
            experience with others.
          </p>
          <a
            className="button"
            href="https://youtube.com/whatjackhasmade"
            rel="noopener noreferrer"
            target="_blank"
          >
            View My YouTube Channel
          </a>
          {firstVideo.snippet && (
              <div
                className="youtube__video"
                title={firstVideo.snippet.title}
              >
                <YouTube
                  videoId={firstVideo.snippet.resourceId.videoId}
                  onReady={_onReady}
                />
              </div>
            )}
        </div>
        <div className="youtube__videos">
          {channelVideos.map((video, index) => {
            const shouldShow = index > 0 && index < 19;
            if(!shouldShow) return null;
            const data = video.node
            return (
              <Video key={data.snippet.resourceId.videoId} video={data} />
            )
          })}
        </div>
      </div>
    </YouTubeComponent>
  )
}

const Video = ({ video }) => {
  const snippet = video.snippet;
  const {title, resourceId, thumbnails} = snippet;

  return (
    <div className="youtube__video" title={title}>
      <a
        href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="youtube__video__thumbnail">
          <ImageLoader
            alt={title}
            src={thumbnails.medium.url}
          />
        </div>
      </a>
    </div>
  )
}

export default YouTubeChannel
