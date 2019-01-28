import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Title from "../components/Title"
import Message from "../components/Message"
import Social from "../components/Social"

import "../styles/main.css"
import Patterns from "../styles/patterns.json"

const IndexPage = ({ data }) => {

  const { title, message, pattern, color, titleFont, messageFont, social } = data.site.siteMetadata
  const patternStyles = Patterns.patterns.find((p) => p.name === pattern)
  return (
    <div id="background"
      style={{
      backgroundImage: patternStyles.backgroundImage,
      backgroundColor: patternStyles.backgroundColor,
      backgroundSize: patternStyles.backgroundSize,
      backgroundPosition: patternStyles.backgroundPosition,
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      }}
    >
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={ title + "&middot" + message } />
        <title>{ title }</title>
        <link rel="stylesheet" href={ "https://fonts.googleapis.com/css?family=" + titleFont + "|" + messageFont } />
      </Helmet>
      <Title title={title} titleFont={titleFont} color={color} />
      <Message message={message} messageFont={messageFont} color={color} />
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
      titleFont
      messageFont
      social
    }
  }
}
`
