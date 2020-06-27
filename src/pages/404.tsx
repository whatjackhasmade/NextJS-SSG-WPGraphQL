import React from "react"
import { Container, Row, Col } from "react-grid-system"
import { useAllPosts } from "hooks"

import Link from "atoms/link"

import Hero from "organisms/hero"
import Related from "organisms/related"

import Base from "templates/base"

type Four0FourProps = {}

const Four0Four = ({}: Four0FourProps) => {
  const allPosts = []
  const latestPosts = allPosts.filter((post, i) => i < 3)
  const hasPosts = latestPosts && latestPosts.length > 0

  return (
    <Base>
      <Hero align="center" maxWidth="890px">
        <Container fluid>
          <Row>
            <Col lg={7}>
              <h1>
                <span aria-label="hushed face emoji" role="img">
                  😯
                </span>{" "}
                Sorry, we couldn't find that
              </h1>
              <p>
                Your dog is cute but honestly a menace. Where are my shoes?
                Where is my graduation certificate? Where is the chocolate cake
                I baked for my Aunt’s birthday? And why did you take your dog to
                the vet on that same Thursday?!
              </p>
              <Link to="/">Return to the homepage</Link>
            </Col>
            <Col lg={4} offset={{ lg: 1 }}>
              <img src="/images/404-dog.png" />
            </Col>
          </Row>
        </Container>
      </Hero>
      {hasPosts && (
        <Related data={latestPosts} title="Find something that... works!" />
      )}
    </Base>
  )
}

export default Four0Four
