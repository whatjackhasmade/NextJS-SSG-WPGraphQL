import React, { useEffect } from "react"
import moment from "moment"
import Prism from "prismjs"
import { Post } from "wjhm"
import { decodeHTML } from "helpers"
import ParseHTML from "particles/ParseHTML"

import { Article, ArticleIntro } from "./post.styles"

import ComponentParser from "particles/ComponentParser"

import Link from "atoms/link"

import OverviewList from "molecules/overview-list"

import Related from "organisms/related"

import Base from "templates/base"

const PostTemplate = (props: Post) => {
  const { blocks, content, date, title } = props
  const { PostFields } = props
  const { learn, relatedPosts } = PostFields

  const lessons = learn.items
  const hasLessons = lessons && lessons.length > 0
  const overviewTitle = learn.title ? learn.title : "What you will learn"
  const hasBlocks = blocks && blocks.length > 0
  const hasRelated = relatedPosts && relatedPosts.length > 0

  return (
    <Base context={props}>
      <ArticleIntro>
        <nav className="article__meta">
          <Link to="/posts">Insights</Link>
          <h4 className="article__meta__date">
            {moment(new Date(date)).format("DD/MM/YYYY")} by Jack Pritchard
          </h4>
        </nav>
        <h1>{decodeHTML(title)}</h1>
      </ArticleIntro>
      {hasBlocks && (
        <Article>
          {hasLessons && <OverviewList items={lessons} title={overviewTitle} />}
          <ComponentParser content={blocks} />
        </Article>
      )}
      {!hasBlocks && (
        <Article>
          {lessons && lessons.length && (
            <OverviewList
              items={lessons}
              title={learn.title ? learn.title : "What you will learn"}
            />
          )}
          {ParseHTML(content)}
        </Article>
      )}
      {hasRelated && <Related data={relatedPosts} />}
    </Base>
  )
}

export default PostTemplate
