import React from "react"
import {Page} from "src/generated/graphql"
import Base from "templates/base"

import ComponentParser from "particles/ComponentParser"

const PageTemplate = (props: Page) => {
  const { blocks } = props

  return (
    <Base context={props}>
      {blocks && <ComponentParser content={blocks} />}
    </Base>
  )
}

export default PageTemplate
