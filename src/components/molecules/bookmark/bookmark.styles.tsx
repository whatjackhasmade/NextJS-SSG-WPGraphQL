import styled from "styled-components"
import { device } from "particles/mediaQueries"

const StyledBookmark = styled.a`
  display: flex;
  margin: 32px 0;

  border: 1px solid var(--grey200);
  color: var(--black);
  text-decoration: none;
  transition: 0.2s border ease;

  &:active,
  &:focus,
  &:hover {
    border: 1px solid var(--grey400);
    text-decoration: none;

    .bookmark__description {
      color: var(--black);
    }
  }

  * {
    margin: 0;
  }

  .bookmark__content {
    padding: 16px;

    @media ${device.md} {
      padding: 32px;
    }
  }

  .bookmark__description {
    margin-top: 8px;
    max-width: 50ch;

    color: var(--grey600);
    font-size: 14px;
    transition: 0.2s color ease;
  }

  .bookmark__image {
    min-width: 100px;
    position: relative;
    width: 100px;

    img {
      height: 100% !important;
      left: 0;
      margin: 0;
      position: absolute;
      top: 0;
      width: 100% !important;

      object-fit: cover;
    }
  }

  .bookmark__image--fallback {
    height: 100px;
    min-height: 100px;
  }

  .bookmark__title {
    font-size: 20px;
  }
`

export default StyledBookmark
