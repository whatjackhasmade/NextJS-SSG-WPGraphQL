import { css } from "styled-components"

import device from "particles/mediaQueries"

const exportedCSS = css`
  * {
    scroll-margin-top: 5rem;
    /* TODO: Create header height value */
    scroll-margin-top: var(--header-height);
  }
`

export default exportedCSS
