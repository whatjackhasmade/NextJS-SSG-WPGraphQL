import React from "react"
import StyledOverviewList from "./overview.list.styles"

type OverviewListProps = {
  items: [
    {
      id?: string
      value: string
    }
  ]
  title?: string
}

const OverviewList = ({
  items,
  title = "What you will learn",
}: OverviewListProps) => {
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
