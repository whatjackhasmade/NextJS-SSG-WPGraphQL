import { css } from "styled-components"

import device from "particles/mediaQueries"

const exportedCSS = css`
  body {
    overflow-x: hidden;
    scroll-behavior: smooth;

    background-color: var(--white);
    color: var(--black);
    font-size: 1.6rem;
    line-height: 1.5;
  }
`

export default exportedCSS
