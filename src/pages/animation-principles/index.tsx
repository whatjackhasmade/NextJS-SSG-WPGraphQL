import React from "react"

import Button from "atoms/button"

import Hero from "organisms/hero"

import Base from "templates/base"

import { VideoGrid } from "./animation-principles.styles"

let arrayVideos = []

for (let step = 1; step <= 12; step++) {
  arrayVideos = [...arrayVideos, `/videos/ux-motion/${step}.mp4`]
}

type AnimationPrinciplesProps = {}

const AnimationPrinciples = ({}: AnimationPrinciplesProps) => (
  <Base>
    <Hero>
      <h1>The 12 Principles of UX in Motion</h1>
      <p>
        As part of my undergraduate degree in Website design and Development, we
        looked at the 12 Principles of UX in Motion.
      </p>
      <p>
        After researching each principle, I recreated the examples in HTML, CSS
        and JS using Codepen.
      </p>
      <ul>
        <li>Easing and Offset &amp; Delay relate to timing.</li>
        <li>Parenting relates to object relationship.</li>
        <li>
          Transformation, Value Change, Masking, Overlay, and Cloning all relate
          to object continuity.
        </li>
        <li>Parallax relate to temporal hierarchy.</li>
        <li>
          Obscuration, Dimensionality and Dolly &amp; Zoom both relate to
          spatial continuity.
        </li>
      </ul>
      <Button
        href="https://codepen.io/collection/nVPpNK?grid_type=list"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Collection of Code Examples
      </Button>
    </Hero>
    <VideoGrid>
      {arrayVideos.map((video) => (
        <a
          href="https://codepen.io/collection/nVPpNK?grid_type=list"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video src={video} autoPlay loop muted />
        </a>
      ))}
    </VideoGrid>
  </Base>
)

export default AnimationPrinciples
