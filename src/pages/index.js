import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Bio from "../components/Bio"
import Social from "../components/Social"

import "../styles/main.css"
import Patterns from "../styles/patterns.json"

const IndexPage = ({ data }) => {

  const { title, bio, pattern, color, headingFont, textFont, social } = data.site.siteMetadata
  const patternStyles = Patterns.patterns.find((p) => p.name === pattern)
  return (
    <div id="background"
      style={{
      backgroundImage: patternStyles.backgroundImage,
      backgroundColor: patternStyles.backgroundColor,
      backgroundSize: patternStyles.backgroundSize,
      backgroundPosition: patternStyles.backgroundPosition,
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <link rel="stylesheet" href={ "https://fonts.googleapis.com/css?family=" + headingFont + "|" + textFont } />
      </Helmet>
      <h1
        style={{
        fontFamily: headingFont,
        color: color,
        fontSize: "10vw",
        }}
      >{ title }</h1>
      <Bio bio={bio} textFont={textFont} color={color} />
      <Social social={social} />
    </div>
    )
}

export default IndexPage

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      bio
      pattern
      color
      headingFont
      textFont
      social
    }
  }
}
`
