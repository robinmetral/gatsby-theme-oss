import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/main.css"
import Patterns from "../styles/patterns.json"

const IndexPage = ({ data }) => {

  const { title, description, pattern, message, color, typeface } = data.site.siteMetadata
  const patternStyles = Patterns.patterns.find((p) => p.name === pattern)
  return (
    <div id="background"
      style={{
      backgroundImage: patternStyles.backgroundImage,
      backgroundColor: patternStyles.backgroundColor,
      backgroundSize: patternStyles.backgroundSize,
      backgroundPosition: patternStyles.backgroundPosition,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title } &middot; { description }</title>
        <link rel="stylesheet" href={ "https://fonts.googleapis.com/css?family=" + typeface } />
      </Helmet>
      <h1
        style={{
        fontFamily: typeface,
        color: color,
        }}
      >{ message }</h1>
    </div>
    )
}

export default IndexPage

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      description
      pattern
      message
      color
      typeface
    }
  }
}
`
