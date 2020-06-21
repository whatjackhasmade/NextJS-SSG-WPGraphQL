import React, { useEffect, useState } from "react"

import Hero from "organisms/hero"

import Base from "templates/base"

import TweetsContainer from "./twitter.styles"

type TwitterPageProps = {}
type TweetProps = {
  favorite_count: number
  id: string
  text: string
}

const Twitter = ({}: TwitterPageProps) => {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch("https://wjhm-node-twitter-feed.herokuapp.com/")
      .then((res) => res.json())
      .then((tweets) => setTweets(tweets))
  }, [])

  const heartGenerator = (count) => {
    let hearts = []
    for (var i = 0; i < count; i++) {
      hearts.push("❤")
    }
    return hearts
  }

  return (
    <Base cta={false}>
      <Hero>
        <h1>Tweets</h1>
        <h3>Some of my social media ramblings</h3>
      </Hero>
      <TweetsContainer>
        {tweets.map(({ favorite_count, id, text }: TweetProps) => (
          <div className="tweet" key={id}>
            {text}
            <div className="tweet__favourites">
              {heartGenerator(favorite_count)}
            </div>
          </div>
        ))}
      </TweetsContainer>
    </Base>
  )
}

export default Twitter
