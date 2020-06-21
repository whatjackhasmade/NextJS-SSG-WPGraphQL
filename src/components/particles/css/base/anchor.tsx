import { css } from "styled-components"

import device from "particles/mediaQueries"

const exportedCSS = css`
  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`

export default exportedCSS
