import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Message from "../components/Message"
import Social from "../components/Social"

import "../styles/main.css"
import Patterns from "../styles/patterns.json"

const IndexPage = ({ data }) => {

  const { title, message, pattern, color, headingFont, textFont, social } = data.site.siteMetadata
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
        fontSize: "8vw",
        }}
      >{ title }</h1>
      <Message message={message} textFont={textFont} color={color} />
      <Social social={social} color={color} />
    </div>
    )
}

export default IndexPage

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      message
      pattern
      color
      headingFont
      textFont
      social
    }
  }
}
`
