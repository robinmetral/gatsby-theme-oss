import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/main.css"

const IndexPage = ({ data }) => (
  <div
    id="background"
    style={{
      backgroundColor: "#e1ebbd",
      backgroundSize: "128px 128px",
      background: "linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px, linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px), linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px)",
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
