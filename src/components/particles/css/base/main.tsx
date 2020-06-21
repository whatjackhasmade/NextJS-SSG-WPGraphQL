import { css } from "styled-components"

import device from "particles/mediaQueries"

const exportedCSS = css`
  main {
    flex: 1;
    margin: 0 auto;
    max-width: 1506px;
    padding: 0 15px;
    width: 100%;

    @media ${device.xs} {
      padding: 0 30px;
    }

    /* Fix anchor scroll positioning */
    [id]::before {
      display: block;
      content: "";
      margin-top: -4rem;
      height: 4rem;
    }
  }
`

export default exportedCSS
