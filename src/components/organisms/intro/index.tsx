import React from "react"
import { AcfIntroBlockFields } from "wjhm"
import ParseHTML from "particles/ParseHTML"

import IntroComponent from "./intro.styles"

type AcfIntroFields = AcfIntroBlockFields & {
  children?: React.ReactNode
  illustration?: {
    mediaItemUrl: string
  }
  index?: number
  maxWidth?: string
  marginReduced?: boolean
}

const Intro = (props: AcfIntroFields) => {
  const {
    children,
    content,
    heading,
    illustration,
    index,
    maxWidth,
    marginReduced,
    subheading,
  } = props
  const Subheading = index === 0 ? `h1` : `h2`
  const Heading = index === 0 ? `h2` : `h3`

  if (content) {
    return (
      <IntroComponent
        className="intro"
        marginReduced={marginReduced ? false : true}
        maxWidth={maxWidth}
      >
        <div className="intro__wrapper">
          <Subheading className="h4 intro__subheading">{subheading}</Subheading>
          <Heading className="h1 intro__heading">{heading}</Heading>
          {content && (
            <div className="intro__contents">{ParseHTML(content)}</div>
          )}
        </div>
        {illustration && (
          <img
            alt={heading}
            className="intro__illustration"
            src={illustration.mediaItemUrl}
          />
        )}
      </IntroComponent>
    )
  } else {
    return (
      <IntroComponent
        className="intro"
        marginReduced={marginReduced ? false : true}
        maxWidth={maxWidth}
      >
        <div className="intro__wrapper">
          <Subheading className="h4 intro__subheading">{subheading}</Subheading>
          <Heading className="h1 intro__heading">{heading}</Heading>
          <div className="intro__contents">{children}</div>
        </div>
      </IntroComponent>
    )
  }
}

export default Intro
