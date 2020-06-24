import React from "react"
import { Page } from "wjhm"

import ComponentParser from "particles/ComponentParser"

import Base from "templates/base"

const PageTemplate = (props: Page) => {
  const { blocks } = props

  return (
    <Base context={props}>
      {blocks && <ComponentParser content={blocks} />}
    </Base>
  )
}

export default PageTemplate
