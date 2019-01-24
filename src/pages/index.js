import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/main.css"
import Patterns from "../styles/patterns.json"

const IndexPage = ({ data }) => (
  <div id="background"
    style={{
      background: Patterns.patterns[0].background,
      backgroundColor: Patterns.patterns[0].backgroundColor,
      backgroundSize: Patterns.patterns[0].backgroundSize,
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ data.site.siteMetadata.title } | { data.site.siteMetadata.description }</title>
      <link rel="stylesheet" href={ "https://fonts.googleapis.com/css?family=" + data.site.siteMetadata.typeface } />
    </Helmet>
    <h1
      style={{
        fontFamily: data.site.siteMetadata.typeface,
        color: data.site.siteMetadata.color,
      }}
    >{ data.site.siteMetadata.message }</h1>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        message
        color
        typeface
      }
    }
  }
`
