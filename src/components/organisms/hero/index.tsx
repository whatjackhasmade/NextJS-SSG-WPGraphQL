import React from "react"
import { AcfHeroBlockFields } from "wjhm"
import ParseHTML from "particles/ParseHTML"

import Duotone from "./hero.duotone.styles"
import StyledHero from "./hero.styles"
import StyledHeroMedia from "./hero.media.styles"

type AcfHeroFields = AcfHeroBlockFields & {
  align?: string
  children?: React.ReactNode
  illustration?: {
    mediaItemUrl: string
  }
  index?: number
  marginReduced?: boolean
  maxWidth?: string
}

const Hero = (props: AcfHeroFields) => {
  const {
    align = "left",
    background_colour,
    children,
    content,
    duotone = false,
    maxWidth,
    media,
    overlay = true,
  } = props

   if (!content) {
     return (
       <StyledHero align={align} maxWidth={maxWidth}>
         <div className="hero__wrapper">
           <div className="hero__contents">{children}</div>
         </div>
       </StyledHero>
     )
   }

  return (
    <StyledHero background={background_colour} overlay={overlay}>
      <div className="hero__wrapper">
        <div className="hero__contents">{ParseHTML(content)}</div>
        {media && (
          <HeroMedia
            alt={media.altText}
            background={background_colour}
            duotone={duotone}
            media={media}
            overlay={overlay}
          />
        )}
      </div>
    </StyledHero>
  )
}

const HeroImage = ({ alt, src }) => (
  <div className="hero__media">
    <img src={src.mediaItemUrl} alt={alt} />
  </div>
)

const HeroMedia = ({
  alt,
  background,
  duotone,
  media,
  overlay,
}) => (
  <StyledHeroMedia background={background} overlay={overlay}>
    {duotone && (
      <Duotone className="hero__media">
        <HeroImage alt={alt} src={media} />
      </Duotone>
    )}
    {!duotone && (
      <HeroImage alt={alt} src={media} />
    )}
  </StyledHeroMedia>
)

export default Hero
