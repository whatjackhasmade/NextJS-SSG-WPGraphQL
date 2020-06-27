import React from "react"
import { Post_Postfields_Learn } from "wjhm"

import StyledOverviewList from "./overview.list.styles"

const OverviewList = (props: Post_Postfields_Learn) => {
  const { items, title = "What you will learn" } = props
  if (!items) return null
  const validItems = items.filter(({ value }) => {
    if (value) return true
  })
  const hasValid = validItems && validItems.length > 0
  if (!hasValid) return null

  return (
    <StyledOverviewList className="overview-list">
      <div className="overview-list__title">
        <h2 className="h3">{title}</h2>
      </div>
      <ul className="overview-list__list">
        {validItems.map(({ id, value }) => {
          if (!id) return <li>{value}</li>
          return (
            <li>
              <a href={`#${id}`}>{value}</a>
            </li>
          )
        })}
      </ul>
    </StyledOverviewList>
  )
}

export default OverviewList
