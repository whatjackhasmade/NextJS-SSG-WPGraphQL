import coreHeading from "./core/heading"

import embedTwitter from "./core/embedTwitter"
import embedYouTube from "./core/embedYouTube"

import code from "./acf/code"
import dribbble from "./acf/dribbble"
import github from "./acf/github"
import hero from "./acf/hero"
import intro from "./acf/intro"
import link from "./acf/link"
import presentations from "./acf/presentations"
import row from "./acf/row"
import testimonials from "./acf/testimonials"
import youtube from "./acf/youtube"
import youtubeChannel from "./acf/youtubeChannel"

export const graphqlBlocksQuery = /* GraphQL */ `
  blocks {
    ${coreHeading}
    ${embedTwitter}
    ${embedYouTube}
    ${code}
    ${dribbble}
    ${github}
    ${hero}
    ${intro}
    ${link}
    ${presentations}
    ${row}
    ${testimonials}
    ${youtube}
    ${youtubeChannel}
  }
`

export default graphqlBlocksQuery

export {
  /* Core Blocks */
  coreHeading,
  embedTwitter,
  embedYouTube,
  /* ACF Blocks */
  code,
  dribbble,
  github,
  hero,
  intro,
  link,
  presentations,
  row,
  testimonials,
  youtube,
  youtubeChannel,
}
