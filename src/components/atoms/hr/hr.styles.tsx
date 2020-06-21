import styled from "styled-components"
import { device } from "particles/mediaQueries"

const HRComponent = styled.hr`
  height: 0;
  margin: 24px auto;
  width: 100%;

  background: none;
  border: none;
  border-top: 1px solid ${(props) => props.theme.grey200};

  @media ${device.sm} {
    margin: 36px auto;
  }

  @media ${device.xl} {
    margin: 48px auto;
  }
`

export default HRComponent
