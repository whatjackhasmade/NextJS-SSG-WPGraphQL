import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import Base from "templates/base"

import Hero from "organisms/hero"

const AssetsContainer = styled.section`
  margin: 64px 0;

  .typography {
    p {
      margin: 4px 0;
    }
    p:nth-child(2) {
      font-style: italic;
    }
    p:nth-child(3) {
      font-weight: 700;
    }
    p:nth-child(4) {
      text-transform: uppercase;
    }

    p:nth-child(4) {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`

const Colour = styled.div`
  padding: 24px;

  background-color: ${(props) => props.hex};
  color: ${(props) => props.theme.white};
  text-align: center;

  h4 {
    font-weight: 400;
    text-transform: uppercase;
  }
`

const BrandColours = [
  {
    name: "Primary",
    hex: "#0652DD",
  },
]

const Assets = () => {
  return (
    <Base>
      <Hero>
        <h1>Assets</h1>
      </Hero>
      <AssetsContainer>
        <Container fluid>
          <Row>
            <Col lg={5}>
              <h2>Typography</h2>
              <h3>SuisseIntl</h3>
              <div className="typography">
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
              </div>
            </Col>
            <Col lg={6}>
              <h2>Colours</h2>
              <div className="colours">
                {BrandColours.map(({ hex, name }) => (
                  <Colour key={`colour-${hex}`} hex={hex}>
                    <h4>{name}</h4>
                    <h5>{hex}</h5>
                  </Colour>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </AssetsContainer>
    </Base>
  )
}

export default Assets
