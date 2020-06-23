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
  const {
    acf: { learn, relatedPosts },
    blocks,
    content,
    date,
    title,
  } = props;
  // useEffect(() => {
  //   // call the highlightAll() function to style our code blocks
  //   Prism.highlightAll()
  // })

  const lessons = learn.items

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
      {blocks.length > 0 ? (
        <Article>
          {lessons && lessons.length && (
            <OverviewList
              items={lessons}
              title={learn.title ? learn.title : "What you will learn"}
            />
          )}
          <ComponentParser content={blocks} />
        </Article>
      ) : (
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
      {relatedPosts && relatedPosts.length > 0 && (
        <Related data={relatedPosts} />
      )}
    </Base>
  )
}

export default PostTemplate
