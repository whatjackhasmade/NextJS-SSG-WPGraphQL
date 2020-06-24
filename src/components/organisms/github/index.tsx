import React from "react"
import { AcfGithubBlockFields } from "wjhm"
import ParseHTML from "particles/ParseHTML"

import GithubComponent from "./github.styles"

import Intro from "organisms/intro"

const Github = (props: AcfGithubBlockFields) => {
  const { content } = props
  return (
    <GithubComponent>
      <Intro
        heading={`Development Activity`}
        subheading={`I love GitHub and open source projects`}
        marginReduced
      />
      <a
        className="github__calendar"
        href="https://github.com/whatjackhasmade"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://ghchart.rshah.org/whatjackhasmade"
          alt="2016rshah's Github chart"
        />
      </a>
      <div>{ParseHTML(content)}</div>
    </GithubComponent>
  )
}

export default Github
