import { css } from "styled-components"

import device from "particles/mediaQueries"

const exportedCSS = css`
  .wrapper {
    @supports (display: flex) {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }
`

export default exportedCSS
