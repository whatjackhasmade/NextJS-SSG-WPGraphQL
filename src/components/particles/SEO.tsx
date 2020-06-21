import React from "react"
import Head from "next/head"
import { decodeHTML } from "helpers"

const SEO = ({ data }) => {
  if (!data || !data.seo) return null

  const {
    isBlog,
    metaDesc,
    opengraphImage,
    opengraphTitle,
    slug,
    title,
    twitterDescription,
    twitterImage,
    twitterTitle,
  } = data.seo

  const postURL = `/`

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: process.env.DOMAIN,
      name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      alternateName: "WhatJackHasMade",
    },
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: opengraphTitle
              ? decodeHTML(opengraphTitle)
              : decodeHTML(title),
            image: opengraphImage ? opengraphImage : null,
          },
        },
      ],
    },
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url: process.env.DOMAIN,
      name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      alternateName: "WhatJackHasMade",
      headline: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      image: {
        "@type": "ImageObject",
        url: opengraphImage ? opengraphImage : null,
      },
      description: metaDesc,
    },
  ]

  return (
    <Head>
      {/* General tags */}
      <title>
        {opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title)}
      </title>
      <meta name="description" content={metaDesc} />
      <meta name="image" content={opengraphImage ? opengraphImage : null} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={`${process.env.DOMAIN}/${slug}`} />
      {isBlog ? <meta property="og:type" content="article" /> : null}
      <meta
        property="og:title"
        content={
          opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title)
        }
      />
      <meta property="og:description" content={metaDesc ? metaDesc : ""} />
      <meta
        property="og:image"
        content={opengraphImage ? opengraphImage : null}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${process.env.DOMAIN}/${slug}`} />
      <meta name="twitter:creator" content={"whatjackhasmade"} />
      <meta
        name="twitter:title"
        content={
          twitterTitle
            ? twitterTitle
            : opengraphTitle
            ? decodeHTML(opengraphTitle)
            : decodeHTML(title)
        }
      />
      <meta
        name="twitter:description"
        content={
          twitterDescription ? twitterDescription : metaDesc ? metaDesc : ""
        }
      />
      <meta
        name="twitter:image"
        content={
          twitterImage ? twitterImage : opengraphImage ? opengraphImage : null
        }
      />
    </Head>
  )
}

export default SEO
